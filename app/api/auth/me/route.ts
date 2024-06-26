import { NextResponse, } from "next/server";
import { headers } from 'next/headers'
// import * as jose from 'jose'
import jwt from 'jsonwebtoken'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request){
    // To GET data from Headers "df"
    const bearerToken = headers().get("authorization") as string;
    const token = bearerToken.split(" ")[1]; // middleware check if is true or false
 
    const payload = jwt.decode(token) as {email: string}; //necessary to return string

    if(!payload){
        return NextResponse.json({errorMessage: "Unauthorized request"}, {status: 401})
    }

    const user = await prisma.user.findUnique({
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            city: true,
            phone: true
        },
        where: {
            email: payload.email,
        }
    })
    if(!user){
        return NextResponse.json({errorMessage: "User Not Found"}, {status: 401})
    }

    const userObj = {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
        city: user.city,
      }

    // return NextResponse.json({ user } )

    return NextResponse.json(userObj, { status: 200 })
}