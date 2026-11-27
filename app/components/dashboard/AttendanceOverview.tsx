"use client";

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

import { CalendarCheck2, ChevronDown } from "lucide-react";
import Payroll from "@/app/payroll/page";
import PayRole from "./PayRole";
import { useState } from "react";

const attendanceData = [
  { name: "Present", value: 92, color: "#23834D" },
  { name: "Absent", value: 5, color: "#FF0000" },
  { name: "Late", value: 3, color: "#D1D5DB" },
];

const weeklyData = [
  { day: "Mon", attendance: 90 },
  { day: "Tue", attendance: 88 },
  { day: "Wed", attendance: 92 },
  { day: "Thu", attendance: 83 },
  { day: "Fri", attendance: 92 },
  { day: "Sat", attendance: 92 },
  { day: "Sun", attendance: 80 },
];

const barColors = [
  "var(--bar-1)",
  "var(--bar-2)",
  "var(--bar-3)",
  "var(--bar-4)",
  "var(--bar-5)",
  "var(--bar-6)",
  "var(--bar-7)",
];

export default function AttendanceOverview() {
  const [isOpen, setIsOpen] = useState(false);
const [selectedPeriod, setSelectedPeriod] = useState("This Month");

const options = ["This Month", "Last Month", "This Year"];
  return (
//     <div className="pr-2 pl-2">
//     <div className="w-full bg-white dark:!bg-slate-500 p-3  shadow-md rounded-md ">
//            <div className="mb-5 flex items-center justify-between">
//         <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
//           <CalendarCheck2
//             size={24}
//             className="text-primary"
//           />
//           Attendance Overview
//         </h2>

//         <select className="rounded-lg border p-2 text-sm text-gray-900">
//           <option>This Month</option>
//           <option>Last Month</option>
//           <option>This Year</option>
//         </select>
//       </div>

//  <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)]">

//   {/* Donut Chart + Legend */}
//   <div className="flex min-w-0 flex-col items-center gap-3 sm:flex-row">

//     {/* Your existing PieChart */}
//     <div className="relative h-52 w-52 shrink-0">
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart>
//           <Pie
//             data={attendanceData}
//             dataKey="value"
//             innerRadius={65}
//             outerRadius={90}
//             stroke="none"
//           >
//             {attendanceData.map((entry) => (
//               <Cell key={entry.name} fill={entry.color} />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>

//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//         <span className="text-3xl font-bold text-gray-900 dark:!text-gray-300">
//           92%
//         </span>
//       </div>
//     </div>

    
//     <div className="w-fit space-y-3">
//       {attendanceData.map((item) => (
//         <div key={item.name} className="flex items-center gap-3">
//           <div className="flex w-24 items-center gap-2">
//             <span
//               className="h-3 w-3 shrink-0 rounded-full"
//               style={{ backgroundColor: item.color }}
//             />
//             <span className="text-sm text-gray-700">
//               {item.name}
//             </span>
//           </div>

//           <span className="w-10 text-right text-sm font-semibold text-gray-900">
//             {item.value}%
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>

  
//   <div className="hidden h-52 w-px bg-gray-300 lg:block" />

//   {/* Bar Chart */}
//   <div className="h-64 min-w-0 dark:!text-gray-300">
//     <ResponsiveContainer width="100%" height="100%" className={"dark:text-gray-300"}>
//       <BarChart data={weeklyData}>
//         <CartesianGrid
//           strokeDasharray="3 3"
//           vertical={false}
//         />

//         <XAxis dataKey="day" />

//         <YAxis
//           domain={[0, 100]}
//           tickFormatter={(value) => `${value}%`}
//         />

//         <Tooltip
//           formatter={(value) => [`${value}%`, "Attendance"]}
//         />

//         <Bar
//           dataKey="attendance"
//           fill="#23834D"
//           radius={[5, 5, 0, 0]}
//           maxBarSize={36}
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   </div>
// </div>



//  </div>
//  </div>

<div className="w-full min-w-0 px-2">
  <div className="w-full rounded-md p-3 hover:shadow-md dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] pt-3 pb-3 bg-white hover:shadow-md dark:!border dark:!border-white/15 dark:!bg-slate-700/20">

   
    <div
      className="
        grid grid-cols-1
        items-stretch gap-4
        xl:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)]
      "
    >

  
      <div className="flex min-w-0 flex-col gap-4">

      
        <div
          className="
            flex flex-wrap items-center
            justify-between gap-3
          "
        >
          <h2
            className="
              flex items-center gap-2
              text-lg font-bold
              text-gray-900
              dark:!text-gray-100
            "
          >
            <CalendarCheck2
              size={24}
              className="shrink-0 text-primary dark:!text-green-400"
            />

            Attendance Overview
          </h2>
{/* 
          <select
            className="
              shrink-0 rounded-lg border
              px-2 py-2 text-sm
              bg-white text-gray-900
              border-gray-300
              dark:!bg-slate-700
              dark:!text-gray-100
              dark:!border-slate-600
            "
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select> */}
          {/* <div className="relative w-fit shrink-0">

  <select
    className="
      appearance-none
      rounded-lg border
      pl-3 pr-9 py-2 text-sm
      bg-white text-gray-900
      border-gray-300
      dark:!bg-slate-700
      dark:!text-gray-100
      dark:!border-slate-600
      cursor-pointer
    "
  >
    <option>This Month</option>
    <option>Last Month</option>
    <option>This Year</option>
  </select>

  <ChevronDown
    size={16}
    className="
      pointer-events-none
      absolute right-3 top-1/2
      -translate-y-1/2
      text-gray-600
      dark:!text-gray-100
    "
  />

</div> */}

<div className="relative w-fit shrink-0">

  {/* Dropdown Button */}
  <button
    type="button"
    onClick={() => setIsOpen(!isOpen)}
    aria-expanded={isOpen}
    className="
      relative w-[130px]
      rounded-lg border
      pl-3 pr-9 py-2 text-sm text-left
      bg-white text-gray-900
      border-gray-300
      dark:!bg-slate-700
      dark:!text-gray-100
      dark:!border-slate-600
      cursor-pointer
    "
  >
    {selectedPeriod}

    <ChevronDown
      size={16}
      className={`
        absolute right-3 top-1/2
        -translate-y-1/2
        text-gray-600
        dark:!text-gray-100
        transition-transform duration-200
        ${isOpen ? "rotate-180" : ""}
      `}
    />
  </button>

 
  {isOpen && (
    <div
      className="
        absolute right-0 top-full mt-1
        w-[160px] z-50
        rounded-lg border
        bg-white shadow-lg
        border-gray-200
        dark:!bg-slate-700
        dark:!border-slate-600
        overflow-hidden
      "
    >
      {options.map((option) => (
        <button
          type="button"
          key={option}
          onClick={() => {
            setSelectedPeriod(option);
            setIsOpen(false);
          }}
          className={`
            block w-full px-3 py-2
            text-left text-sm cursor-pointer
            text-gray-900 dark:!text-white
            hover:bg-green-100
            dark:hover:!bg-slate-900
            ${
              selectedPeriod === option
                ? "bg-green-100 dark:!bg-slate-600 "
                : ""
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  )}
</div>
        </div>

      
        <div
          className="
            flex flex-col items-center
            justify-center gap-4
            sm:flex-row my-auto
          "
        >

        
          <div
            className="
              relative h-52 w-full
              max-w-52 shrink-0 
            "
          >
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={attendanceData}
                  dataKey="value"
                  innerRadius="65%"
                  outerRadius="90%"
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
                  formatter={(value) => [
                    `${value}%`,
                    "Attendance",
                  ]}
                  cursor={false}
                  contentStyle={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                    color: "var(--attendance-axis)",
                  }}
                  labelStyle={{
                    color: "var(--attendance-axis)",
                  }}
                  itemStyle={{
                    color: "var(--attendance-axis)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

         
            <div
              className="
                pointer-events-none
                absolute inset-0
                flex items-center justify-center
              "
            >
              <span
                className="
                  text-3xl font-bold
                  text-gray-900
                  dark:!text-gray-100
                "
              >
                92%
              </span>
            </div>
          </div>

   
          <div
            className="
              flex w-full min-w-0 max-w-52
              flex-col justify-center gap-3
              sm:flex-1
            "
          >
            {attendanceData.map((item) => (
              <div
                key={item.name}
                className="
                  flex items-center
                  justify-between gap-3
                "
              >
                <div className="flex min-w-0 items-center gap-2">

                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  <span
                    className="
                      text-sm text-gray-700
                      dark:!text-white
                    "
                  >
                    {item.name}
                  </span>
                </div>

                <span
                  className="
                    shrink-0 text-right
                    text-sm font-semibold
                    text-gray-900
                    dark:!text-gray-100
                  "
                >
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div
        className="
          h-px w-full bg-gray-300
          dark:!bg-slate-600
          xl:h-auto xl:w-px
        "
      />

    
      <div className="w-full min-w-0">
        <PayRole />
      </div>

    </div>
  </div>
</div>

  ) }