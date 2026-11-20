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
  { name: "Absent", value: 5, color: "#65A879" },
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

export default function AttendanceOverview() {
  return (
    <div className="pr-2 pl-2">
    <div className="w-full bg-white p-3  shadow-md rounded-md ">
           <div className="mb-5 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <CalendarCheck2
            size={24}
            className="text-primary"
          />
          Attendance Overview
        </h2>

        <select className="rounded-lg border p-2 text-sm text-gray-900">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

 <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)]">

  {/* Donut Chart + Legend */}
  <div className="flex min-w-0 flex-col items-center gap-3 sm:flex-row">

    {/* Your existing PieChart */}
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
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold text-gray-900">
          92%
        </span>
      </div>
    </div>

    {/* Legend */}
    <div className="w-fit space-y-3">
      {attendanceData.map((item) => (
        <div key={item.name} className="flex items-center gap-3">
          <div className="flex w-24 items-center gap-2">
            <span
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-700">
              {item.name}
            </span>
          </div>

          <span className="w-10 text-right text-sm font-semibold text-gray-900">
            {item.value}%
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Vertical Divider */}
  <div className="hidden h-52 w-px bg-gray-300 lg:block" />

  {/* Bar Chart */}
  <div className="h-64 min-w-0">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={weeklyData}>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
        />

        <XAxis dataKey="day" />

        <YAxis
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />

        <Tooltip
          formatter={(value) => [`${value}%`, "Attendance"]}
        />

        <Bar
          dataKey="attendance"
          fill="#23834D"
          radius={[5, 5, 0, 0]}
          maxBarSize={36}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>



 </div>
 </div>

  ) }