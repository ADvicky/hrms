"use client"

import { CircleCheck } from "lucide-react";
import {
 
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


   const barColors = [
  "var(--bar-1)",
  "var(--bar-2)",
  "var(--bar-3)",
  "var(--bar-4)",
  "var(--bar-5)",
  "var(--bar-6)",
  "var(--bar-7)",
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

export default function Payroll() {

 

  return (
    <div>
    <div className="w-full  p-4 sm:p-6 lg:p-8 gap-2 flex flex-col gap-6 lg:flex-row">
        
      <div
        className="
          flex
          w-full
          min-w-0
          min-h-[200px]
          flex-col
          justify-between
          rounded-lg
          bg-white
          p-5
          shadow-sm
          transition-shadow
          hover:shadow-md
          dark:bg-slate-800
          sm:max-w-[400px]
          sm:p-6
        "
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 sm:text-base">
            JULY 2025 Payroll
          </p>

          <h2 className="break-words text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            ₹12,50,000
          </h2>

          <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
            <CircleCheck
              size={20}
              className="shrink-0 text-green-600"
            />

            <span>Processed on July 25, 2026</span>
          </div>
        </div>
      </div>
       <div className="h-64 w-full min-w-0 flex-1 bg-white rounded-md hover:shadow-md">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid
                    // stroke="var(--attendance-grid)"
                    stroke="#d1d5db"
 
                    horizontal={true}
  
                    strokeDasharray="3 3"
                    vertical={false}
                  />
      
                  <XAxis
                    dataKey="day"
                    tick={{
                      fill: "var(--attendance-axis)",
                      fontSize: 12,
                    }}
                    axisLine={{
                      stroke: "var(--attendance-grid)",
                    }}
                    tickLine={false}
                  />
      
                  <YAxis
                    domain={[0, 100]}
                    tickFormatter={(value) => `${value}%`}
                    tick={{
                      fill: "var(--attendance-axis)",
                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
      
                  <Tooltip
                    formatter={(value) => [
                      `${value}%`,
                      "Attendance",
                    ]}
                    // contentStyle={{
                    //   backgroundColor: "var(--attendance-tooltip-bg)",
                    //   color: "var(--attendance-tooltip-text)",
                    //   border: "1px solid var(--attendance-tooltip-border)",
                    //   borderRadius: "8px",
                    // }}
                    // labelStyle={{
                    //   color: "var(--attendance-tooltip-text)",
                    // }}
                    // itemStyle={{
                    //   color: "var(--attendance-tooltip-text)",
                    // }}
                    // cursor={{
                    //   fill: "var(--attendance-cursor)",
                    // }}
                  />
      
                  {/* <Bar
                    dataKey="attendance"
                    fill="var(--attendance-bar)"
                    radius={[5, 5, 0, 0]}
                    maxBarSize={36}
                  /> */}
      
                  <Bar
        dataKey="attendance"
        radius={[5, 5, 0, 0]}
        maxBarSize={36}
      >
        {weeklyData.map((entry, index) => (
          <Cell
            key={entry.day}
           fill={barColors[index % barColors.length]}
          />
        ))}
      </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
    </div>
    <div className=" p-4 sm:p-6 lg:p-8">
        <div className="bg-white w-full rounded-md">
        <h1 className="text-xl font-bold p-6">Recent Payslips</h1>
        <div className="w-full overflow-x-auto border border-gray-200 dark:border-gray-700 ">
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
        <button className="rounded-md text-xs px-2 py-1 bg-green-600  text-white hover:bg-green-700">
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
    </div>
  );
}
