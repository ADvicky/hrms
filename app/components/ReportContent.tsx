"use client";

import React, { useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ReportContentProps {
  category: string;
}

const reportData = [
  { month: "Jan", employees: 30, payroll: 45, attendance: 80, projects: 10, leave: 12 },
  { month: "Feb", employees: 38, payroll: 50, attendance: 85, projects: 15, leave: 18 },
  { month: "Mar", employees: 42, payroll: 55, attendance: 78, projects: 18, leave: 10 },
  { month: "Apr", employees: 50, payroll: 60, attendance: 90, projects: 20, leave: 15 },
  { month: "May", employees: 65, payroll: 70, attendance: 92, projects: 25, leave: 20 },
  { month: "Jun", employees: 80, payroll: 85, attendance: 95, projects: 30, leave: 14 },
];

const reportConfig: Record<
  string,
  { title: string; dataKey: string; unit: string }
> = {
  hr_reports: {
    title: "Employee Growth",
    dataKey: "employees",
    unit: "",
  },

  payroll_reports: {
    title: "Payroll Overview",
    dataKey: "payroll",
    unit: "k",
  },

  attendance_reports: {
    title: "Attendance Overview",
    dataKey: "attendance",
    unit: "%",
  },

  project_reports: {
    title: "Project Overview",
    dataKey: "projects",
    unit: "",
  },

  leave_reports: {
    title: "Leave Reports",
    dataKey: "leave",
    unit: "",
  },

  custom_reports: {
    title: "Custom Reports",
    dataKey: "employees",
    unit: "",
  },
};

function ReportContent({ category }: ReportContentProps) {

  const [period, setPeriod] = useState("6");

  const report =
    reportConfig[category] ?? reportConfig.hr_reports;

  const filteredData = reportData.slice(-Number(period));

  return (
  <div className="w-full h-full min-w-0 flex flex-col gap-6">
  <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 dark:!text-white">

    <h2 className="text-lg font-semibold">
      {report.title}
    </h2>

    <select
      value={period}
      onChange={(e) => setPeriod(e.target.value)}
      className="
        border border-gray-200 rounded-lg
        px-3 py-2 text-sm outline-none cursor-pointer
        dark:bg-gray-800 dark:border-white/15
      "
    >
      <option value="6">Last 6 Months</option>
      <option value="3">Last 3 Months</option>
      <option value="1">Last Month</option>
    </select>

  </div>

 
  <div className="w-full flex-1 min-h-0 flex items-center justify-center">

    <div className="w-full max-w-full h-[280px] min-w-0">

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={filteredData}>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            unit={report.unit}
            width={40}
          />

          <Tooltip cursor={false} />

          <Bar
            dataKey={report.dataKey}
            fill="#22a35a"
            radius={[5, 5, 0, 0]}
            maxBarSize={40}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>

  </div>

</div>
  );
}

export default ReportContent;