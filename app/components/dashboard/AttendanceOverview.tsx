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

import { CalendarCheck2 } from "lucide-react";

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

<div className="px-2">
  <div
    className="
      w-full rounded-md p-3 shadow-md
      bg-white text-gray-900
      dark:!bg-slate-500 dark:!text-gray-100
    "
  >
    {/* Header */}
    <div className="mb-5 flex items-center justify-between gap-3">
      <h2
        className="
          flex items-center gap-2
          text-lg font-bold
          text-gray-900 dark:!text-gray-100
        "
      >
        <CalendarCheck2
          size={24}
          className="text-primary dark:!text-green-400"
        />
        Attendance Overview
      </h2>

      {/* Month Dropdown */}
      <select
        className="
          rounded-lg border p-2 text-sm
          bg-white text-gray-900 border-gray-300
          dark:!bg-slate-700
          dark:!text-gray-100
          dark:!border-slate-600
        "
      >
        <option>This Month</option>
        <option>Last Month</option>
        <option>This Year</option>
      </select>
    </div>

    <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)]">

      {/* Donut Chart + Legend */}
      <div className="flex min-w-0 flex-col items-center gap-3 sm:flex-row">

        {/* Donut Chart */}
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

          {/* Center Percentage */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-900 dark:!text-gray-100">
              92%
            </span>
          </div>
        </div>

        {/* Legend */}
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

                <span className="text-sm text-gray-700 dark:!text-gray-300">
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

      {/* Vertical Divider */}
      <div className="hidden h-52 w-px bg-gray-300 dark:!bg-slate-600 lg:block" />

      {/* Bar Chart */}
      <div className="h-64 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData}>
            <CartesianGrid
              stroke="var(--attendance-grid)"
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
  </div>
</div>

  ) }