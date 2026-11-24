
"use client";

import { useState } from "react";
import {
  DayPicker,
  getDefaultClassNames,
} from "react-day-picker";
import "react-day-picker/style.css";

import {
  Users,
  CalendarDays,
  UserCheck,
} from "lucide-react";

type LeaveStatus = "Approved" | "Pending";

type TeamLeave = {
  id: number;
  employee: string;
  department: string;
  date: string;
  leaveType: string;
  status: LeaveStatus;
};

const teamLeaves: TeamLeave[] = [
  {
    id: 1,
    employee: "Arun",
    department: "IT",
    date: "2026-11-03",
    leaveType: "Casual Leave",
    status: "Approved",
  },
  {
    id: 2,
    employee: "Priya",
    department: "HR",
    date: "2026-11-09",
    leaveType: "Sick Leave",
    status: "Approved",
  },
  {
    id: 3,
    employee: "Divya",
    department: "Finance",
    date: "2026-11-12",
    leaveType: "Earned Leave",
    status: "Pending",
  },
  {
    id: 4,
    employee: "Kumar",
    department: "IT",
    date: "2026-11-20",
    leaveType: "Casual Leave",
    status: "Approved",
  },
  {
    id: 5,
    employee: "Rahul",
    department: "HR",
    date: "2026-11-23",
    leaveType: "Sick Leave",
    status: "Approved",
  },
  {
    id: 6,
    employee: "Arun",
    department: "IT",
    date: "2026-11-23",
    leaveType: "Earned Leave",
    status: "Pending",
  },
  {
    id: 7,
    employee: "Priya",
    department: "HR",
    date: "2026-11-26",
    leaveType: "Casual Leave",
    status: "Approved",
  },
];

const initialDate = new Date(2026, 10, 23);
const defaultClassNames = getDefaultClassNames();

function formatDate(date: Date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

export default function TeamLeaveCalendar() {
  const [selected, setSelected] = useState<Date>(initialDate);
  const [month, setMonth] = useState<Date>(initialDate);

  const selectedDate = formatDate(selected);

  const selectedLeaves = teamLeaves.filter(
    (leave) => leave.date === selectedDate
  );

  const approvedDates = teamLeaves
    .filter((leave) => leave.status === "Approved")
    .map((leave) => new Date(`${leave.date}T00:00:00`));

  const pendingDates = teamLeaves
    .filter((leave) => leave.status === "Pending")
    .map((leave) => new Date(`${leave.date}T00:00:00`));

  const totalEmployees = 25;

  const employeesOnLeave = new Set(
    selectedLeaves
      .filter((leave) => leave.status === "Approved")
      .map((leave) => leave.employee)
  ).size;

  const availableEmployees = totalEmployees - employeesOnLeave;

  return (
    <div className="w-full min-w-0 space-y-6 rounded-xl bg-white p-4 shadow-sm dark:bg-slate-800 sm:p-6">

      {/* Heading */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Team Leave Calendar
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Track employee leave and team availability
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-gray-100 p-4 dark:bg-slate-700">
          <Users className="mb-2 text-blue-600" size={22} />
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Team Members
          </p>
          <h3 className="text-2xl font-bold">{totalEmployees}</h3>
        </div>

        <div className="rounded-lg bg-gray-100 p-4 dark:bg-slate-700">
          <CalendarDays className="mb-2 text-orange-500" size={22} />
          <p className="text-sm text-gray-500 dark:text-gray-300">
            On Leave
          </p>
          <h3 className="text-2xl font-bold">{employeesOnLeave}</h3>
        </div>

        <div className="rounded-lg bg-gray-100 p-4 dark:bg-slate-700">
          <UserCheck className="mb-2 text-green-600" size={22} />
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Available
          </p>
          <h3 className="text-2xl font-bold">{availableEmployees}</h3>
        </div>
      </div>

  
      
<div className="w-full min-w-0 rounded-lg border border-gray-200 bg-white p-3 dark:border-slate-600 dark:bg-slate-800">

  <DayPicker
    mode="single"
    selected={selected}
    onSelect={(date) => {
      if (date) setSelected(date);
    }}
    month={month}
    onMonthChange={setMonth}
    navLayout="around"
    showOutsideDays={false}

    modifiers={{
      approvedLeave: approvedDates,
      pendingLeave: pendingDates,
    }}

    classNames={{
      root: `${defaultClassNames.root} !w-full`,

      months: "w-full",

      month: "w-full",

      month_grid: "w-full table-fixed border-collapse",

      weekdays: "w-full",

      weekday: "w-[14.285%] text-center",

      day: "w-[14.285%] p-1 text-center",

      day_button: `
        mx-auto flex
        h-9 w-9
        items-center justify-center
        rounded-full
        text-gray-900
        hover:bg-green-100
        dark:text-gray-100
        dark:hover:bg-slate-600
        sm:h-12 sm:w-12
      `,

      chevron: `${defaultClassNames.chevron} fill-amber-500`,

      selected: `
        [&>button]:!bg-green-700
        [&>button]:!text-white
        dark:[&>button]:!bg-green-600
      `,

      today: `
        font-bold text-green-700
        dark:text-green-400
      `,
    }}

    modifiersClassNames={{
      approvedLeave:
        "[&>button]:!bg-green-100 [&>button]:!text-green-800",

      pendingLeave:
        "[&>button]:!bg-yellow-100 [&>button]:!text-yellow-800",
    }}
  />

  <div className="mt-4 flex flex-wrap gap-4 text-sm">
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-green-500" />
      Approved
    </div>

    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-yellow-500" />
      Pending
    </div>
  </div>
</div>


    
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {selected.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h3>

        {selectedLeaves.length === 0 ? (
          <p className="rounded-lg bg-gray-100 p-4 text-sm text-gray-500 dark:bg-slate-700 dark:text-gray-300">
            No leave requests on this date.
          </p>
        ) : (
          selectedLeaves.map((leave) => (
            <div
              key={leave.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-gray-100 p-4 dark:bg-slate-700"
            >
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {leave.employee}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {leave.department} · {leave.leaveType}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  leave.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {leave.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
