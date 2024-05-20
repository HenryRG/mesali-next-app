"use client"

import { partySize as partySizes, times } from "@/data";
import useAvailabilities from "@/hooks/useAvailabilities";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";

const Reservation = ({openTime, closeTime, slug}:
    {openTime: string; closeTime: string, slug: string}
) => {
    const {loading, error, data, fetchAvailabilities} = useAvailabilities();
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [time, setTime] = useState(openTime);
    const [partySize, setPartySize] = useState("1");
    const [day, setDay] = useState(new Date().toISOString().split("T")[0]);
  
    const handleChangeDate = (date: Date | null) => {
        if(date){
            setDay(date.toISOString().split("T")[0])
            return setSelectedDate(date)
        }
         return setSelectedDate(null)
    };

    const handleClick = () => {
        fetchAvailabilities({
            slug,
            day,
            time,
            partySize
        })
    }

    const filterTimeByRestaurantOpenWindow = () => {
        //openTime = 14:30:00.000Z
        //closeTime = 21:30:00.000Z
        const timesWithinWindow: typeof times = [];

        let isWithinTheWindow = false;

        times.forEach(time => {
            if(time.time === openTime){
                isWithinTheWindow = true;
            }
            if(isWithinTheWindow){
                timesWithinWindow.push(time)
            }
            if(time.time === closeTime){
                isWithinTheWindow = false
            }
        });
        return timesWithinWindow;
    }

  return (
        // Card Position
    <div className="w-[27%] relative">
        {/* Reservation Card */}
        <div className="bg-white rounded p-3 drop-shadow-lg mb-5">
            <div className="text-center text-reg border-b p-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
            </div>
            {/* options */}
            <div className="my-3 flex flex-col">
                <label htmlFor="#person">Party Size</label>
                <select name="" key="#person" id="#person" className="my-3 font-light border-b" value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                >
                    {partySizes.map(size => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                    ))}
                </select>
            </div> 
            <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                <label htmlFor="#date">Date</label>
                    <DatePicker 
                        selected={selectedDate}
                        onChange={handleChangeDate}
                        className="py-3 border-b font-light text-reg w-28"
                        wrapperClassName="w-48%"
                        dateFormat="d MMMM"
                    />
                </div>
                <div className="flex flex-col w-[48%]">
                    <label htmlFor="#time">Time</label>
                    <select name="" id="#time" className="py-3 font-light border-b" value={time} onChange={(e)=>{setTime(e.target.value)}}>
                        {filterTimeByRestaurantOpenWindow().map(time => (
                             <option key={time.time} value={time.time}>{time.displayTime}</option>
                        ))}                     
                    </select>
                </div>
            </div>
            {/* Reservation Button */}
            <div className="mt-5">
                <button className="bg-orange-500 rounded w-full text-white px-4 font-bold h-16" 
                    onClick={handleClick}
                    disabled={loading}
                >
                    {loading? <CircularProgress color="inherit"/> : "Find Your Time"}
                </button>
            </div>
                    
            {(data && data.length) ? (
                <div className="mt-4">
                    <p className="text-reg font-bold">Select a Time</p>
                    <div className="flex flex-wrap mt-2">
                        {data.map(time => {
                            return time.available ? 
                                <Link href={`/r/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                                    className="bg-red-600 cursor-pointer p-2 w-24 text-center text-white mb-3 mr-3 rounded"
                                >
                                    {}
                                </Link> : <div></div>
                        })}
                    </div>
                </div>
            ) : null}
            
        </div>
    </div>
  )
}

export default Reservation