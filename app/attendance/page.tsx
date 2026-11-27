"use client";


import React from 'react'


import { useEffect, useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const initialDate = new Date();


const attendanceData = [
  { name: "Present", value: 92, color: "#23834D" },
  { name: "Absent", value: 5, color: "#FF0000" },
  { name: "Late", value: 3, color: "#D1D5DB" },
];


const meetings = [
  {
    date: "2026-11-23",
    title: "Team Review Meeting",
    time: "10:00 AM - 11:00 AM",
  },
  {
    date: "2026-11-20",
    title: "HR Planning Meeting",
    time: "02:00 PM - 03:00 PM",
  },
];

const payrollData = [
  {
    id: 1,
    employee: "Arun",
    month: "July 2026",
  },
  {
    id: 2,
    employee: "Priya",
    month: "August 2026",
  },
  {
    id: 3,
    employee: "Kumar",
    month: "September 2026",
  },
  {
    id: 4,
    employee: "Divya",
    month: "October 2026",
  },
  {
    id: 5,
    employee: "Rahul",
    month: "November 2026",
  },
];


export default function Attendence() {
    const defaultClassNames = getDefaultClassNames();
       const [today, setToday] = useState<Date | null>(null);
  const [selected, setSelected] = useState<Date >(initialDate);
  const [month, setMonth] = useState<Date | undefined>();

  useEffect(() => {
    const currentDate = new Date();

    setToday(currentDate);
    setSelected(currentDate);
    setMonth(currentDate);
  }, []);

  console.log("initial",initialDate);



  const dateKey = [
    selected.getFullYear(),
    String(selected.getMonth() + 1).padStart(2, "0"),
    String(selected.getDate()).padStart(2, "0"),
  ].join("-");

  const selectedMeetings = meetings.filter(
    (meeting) => meeting.date === dateKey
  );
  return (
    <div className='w-full'>
        <div className='flex justify-between px-8 py-5'>
          
            <h1 className='text-black dark:!text-white text-3xl flex justify-start'>Attendence</h1>
          
            <button className='px-2 py-2 text-white text-xs pointer-events-auto hover:bg-secondary/80 rounded-md bg-secondary'>Attendence</button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[400px_minmax(0,1fr)] p-8 gap-6'>
       <div
  className="
    w-full h-full max-h-[290px]
    min-w-0 self-start
    rounded-md bg-white p-2
    text-gray-900 hover:shadow-md
    dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)]
  "
>
  <DayPicker
    animate
    mode="single"
    selected={selected}
    navLayout="around"
    onSelect={(date) => {
      if (date) setSelected(date);
    }}
    month={month}
    onMonthChange={setMonth}
    showOutsideDays={false}
    today={today || new Date()}
    classNames={{
      root: `
        ${defaultClassNames.root}
        w-full
        ![--rdp-day-height:37px]
        ![--rdp-day-width:400px]
        ![--rdp-day_button-height:28px]
        ![--rdp-day_button-width:28px]
      `,

      month: "w-full",

      month_grid: "w-full border-collapse",

      month_caption: "flex items-center justify-center h-8",

      caption_label: "text-sm font-semibold dark:!text-white",

      chevron: `
        ${defaultClassNames.chevron}
        !size-6 fill-amber-500 dark:!fill-secondary
      `,

      weekday: "text-xs font-medium pt-3 dark:!text-white",

      day_button: `
        mx-auto flex size-8
        items-center justify-center
        rounded-full text-xs
        text-gray-900
        hover:bg-green-100
        dark:!text-white
        dark:hover:!bg-slate-600
      `,

      selected: `
        [&>button]:!bg-green-700
        [&>button]:!text-white
        dark:[&>button]:!bg-green-600
        dark:[&>button]:!text-white
      `,

      today: `
        font-bold text-green-700
        dark:!text-green-400
      `,
    }}
  />
</div>
            <div className='flex min-w-0 flex-col gap-6'>
<div className="flex min-w-0  gap-4 rounded-md bg-white dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] p-4 xl:flex-col dark:bg-slate-800 hover:shadow-md">
    <h1 className='text-2xl font-bold dark:text-white'>Attendence Summary</h1>
<div className='flex justify-center items-center gap-12'>
        <div className="relative h-52 w-52 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={attendanceData}
                dataKey="value"
                innerRadius={65}
                outerRadius={90}
                stroke="none"
              >
                {attendanceData.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={entry.color}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--attendance-tooltip-bg)",
                  color: "var(--attendance-tooltip-text)",
                  border: "1px solid var(--attendance-tooltip-border)",
                  borderRadius: "8px",
                }}
                labelStyle={{
                  color: "var(--attendance-tooltip-text)",
                }}
                itemStyle={{
                  color: "var(--attendance-tooltip-text)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

        
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-900 dark:!text-gray-100">
              92%
            </span>
          </div>
        </div>

        
        <div className="w-fit space-y-3">
          {attendanceData.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3"
            >
              <div className="flex w-24 items-center gap-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <span className="text-xl font-bold text-gray-700 dark:!text-gray-300">
                  {item.name}
                </span>
              </div>

              <span className="w-10 text-right text-sm font-semibold text-gray-900 dark:!text-gray-100">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
        </div>
      </div>





      
            </div>




            </div>
            <div className='w-full px-8 '>
<div className="w-full overflow-x-auto rounded-md border bg-white border-gray-200 dark:!border dark:!border-white/15  dark:!text-white dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] ">
        <h1 className='text-xl font-bold py-5 px-4'>Recent Attendence</h1>
        <table className="w-full border-collapse text-left ">
            
            <thead className="bg-gray-300 dark:bg-gray-800">
                <tr>
                    <th className="px-8 py-3 text-sm font-semibold">Employee</th>
                    <th className="px-8 py-3 text-sm font-semibold">Month</th>
                    <th className="px-8 py-3 text-sm font-semibold">Download</th>
                </tr>
            </thead>
            <tbody>
                
                   {payrollData && payrollData.map( (pay) => {
return(
    <tr key={pay.id} className="border-t text-left border-gray-200  dark:border-gray-700 hover:bg-gray-300/30">
    <td  className="px-8 py-3">
        {pay.employee}

                    </td>
    <td  className="px-8 py-3 ">
        {pay.month}

                    </td>
                     <td className="px-8 py-3">
        <button className="rounded-md text-xs bg-secondary px-2 py-1.5 text-white  cursor-pointer">
          Download
        </button>
      </td>
            </tr>        
   
) 
                   }) 
}
               
            </tbody>
        </table>
        </div>
        </div>
            
        </div>
  )
}
