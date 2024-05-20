import { times } from '@/data';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

type SlugParam = {
    params: {
        slug: string
    }
}

export async function GET(request: NextRequest, {params}: SlugParam ){
    const slug = params.slug;
    const day = request.nextUrl.searchParams.get("day");
    const time = request.nextUrl.searchParams.get("time");
    const partySize = request.nextUrl.searchParams.get("partySize");
 
    if(!day || !time || !partySize){
        return NextResponse.json({ errorMessage: "Invalid data provided" }, {status: 400})
    }

    const searchTimes = times.find(t => {
        return t.time === time;
    })?.searchTimes;

    if(!searchTimes){
        return NextResponse.json({ errorMessage: "Invalid data provided" }, {status: 400})
    }
        
    const bookings = await prisma.booking.findMany({
        where: {
            booking_time: {
                gte: new Date(`${day}T${searchTimes[0]}`),
                lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`)
            }
        },
        select: {
            number_of_people: true,
            booking_time: true,
            tables: true
        }
    });

    const bookingTableObj: {[key: string]: {[key: string]: true}} = {}

    bookings.forEach(booking => {
        bookingTableObj[booking.booking_time.toISOString()] = booking.tables.reduce((obj, table) => {
            return {
                ...obj,
                [table.table_id]: true
            }
        }, {})
    })

    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            tables: true,
            open_time: true,
            close_time: true
        }
    });

    if(!restaurant){
        return NextResponse.json({ errorMessage: "Invalid data provided" }, {status: 400})
    }

    const tables = restaurant.tables;

    const searchTimesWithTable = searchTimes.map(searchTime =>{
        return  {
            date: new Date(`${day}T${searchTime}`),
            time: searchTime,
            tables
        }
    })
    searchTimesWithTable.forEach(t =>{
        //filter the table
        t.tables = t.tables.filter(table =>{
            // if bookingTableObj is true
            if(bookingTableObj[t.date.toISOString()]){
                //return bookingTableObj DOT table.id to false
                if(bookingTableObj[t.date.toISOString()][table.id]) 
                    return false
            }
            return true;
        })
    });

    const availabilities = searchTimesWithTable.map(t => {
        const sumSeats = t.tables.reduce((sum, table) => {
            return sum + table.seats
        }, 0);

        return {
            time: t.time,
            available: sumSeats >= parseInt(partySize)
        }
    }).filter(availability => {
        const timeAfterOpeningHour = new Date(`${day}T${availability.time}`) >= new Date(`${day}T${restaurant.open_time}`);
        const timeBeforeClosingHour = new Date(`${day}T${availability.time}`) <= new Date(`${day}T${restaurant.close_time}`);
    
        return timeAfterOpeningHour && timeBeforeClosingHour;
    })


    return NextResponse.json(availabilities, {status: 200})
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2024-05-18&time=20:00:00.000Z&partySize=10