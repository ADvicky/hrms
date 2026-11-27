"use client"

import { useState, useEffect } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  
  
const hours = time.getHours() 
const minutes = time.getMinutes()
const fin = hours % 12 || 12;
const formattedMinutes = String(minutes).padStart(2, '0');
const formattedHours= String(fin).padStart(2, '0');
const ampms = hours >= 12 ? 'PM' : 'AM';

const ampm = time.toLocaleTimeString().split(":")[2]


console.log("li",hours,minutes,ampm,fin,formattedMinutes);

  const today = new Date()
  const date = today.getDate()
  const day = today.getDay()
  const month = today.getMonth()
  const year = today.getFullYear()


  const dayName = today.toLocaleDateString('en-IN', { weekday: 'long' }).slice(0,3)

  const monthName = today.toLocaleString('en-IN', { month: 'long' }); // "November"
const shortDate = today.toLocaleDateString('en-IN'); // "26/11/2026"

const finalmonth = monthName.slice(0,3)
  
  
  // console.log("time",day,date,month,year,monthName,shortDate,finalmonth);

  const finalDate = `${date} ${finalmonth} ${year}`
  

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return () => clearInterval(timer);
  }, []);

  return (
  <div className="font-sans text-lg bg-secondary/60 w-full hover:shadow-md dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] h-auto flex rounded-md justify-center hover:shadow-[0px_0px_1px_1px_rgba(0,0,0,0.2)] items-center flex-col">
  <div className="flex gap-2 py-4 text-white self-start px-2">
    <h4 className="text-md">Time Today</h4>
    <span>-</span>
    <span className="text-md text-white">{dayName},</span>
    <span className="text-md">{finalDate}</span>
  </div>

 

  <div className="flex items-baseline gap-1 text-white self-start px-4 pb-6 tabular-nums mx-auto">
    <p className="text-4xl font-medium tracking-tight">{`${formattedHours}:${formattedMinutes}`}</p>
    <span className="text-base  font-normal">:{ampm}</span><p className='text-clip'>{ampms}</p>
  </div>
</div>

  );
}
