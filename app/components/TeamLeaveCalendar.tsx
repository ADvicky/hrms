
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
    <div className="w-full min-w-0 space-y-6 rounded-xl bg-white p-4 shadow-sm dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] sm:p-6">

      
      <div>
        <h2 className="text-xl font-bold text-gray-900  dark:!text-white ">
          Team Leave Calendar
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Track employee leave and team availability
        </p>
      </div>

     
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

  {/* Team Members */}
  <div className="rounded-lg bg-gray-100 p-4 dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] dark:!text-white">

    <div className="mb-2 flex size-8 items-center justify-center rounded-md bg-blue-100 dark:!bg-gray-800">
      <Users
        className="text-blue-600 dark:!text-white"
        size={22}
      />
    </div>

    <p className="text-sm text-gray-500 dark:text-gray-300">
      Team Members
    </p>

    <h3 className="text-2xl font-bold">
      {totalEmployees}
    </h3>
  </div>


  <div className="rounded-md bg-gray-100 p-4 dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] dark:!text-white">

    <div className="mb-2 flex size-8 items-center justify-center rounded-md bg-orange-100 dark:!bg-gray-800">
      <CalendarDays
        className="text-orange-500 dark:!text-white"
        size={22}
      />
    </div>

    <p className="text-sm text-gray-500 dark:text-gray-300">
      On Leave
    </p>

    <h3 className="text-2xl font-bold">
      {employeesOnLeave}
    </h3>
  </div>

  
  <div className="rounded-lg bg-gray-100 p-4 dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] dark:!text-white">

    <div className="mb-2 flex size-8 items-center justify-center rounded-md bg-green-100 dark:!bg-gray-800">
      <UserCheck
        className="text-green-600 dark:!text-white"
        size={22}
      />
    </div>

    <p className="text-sm text-gray-500 dark:text-gray-300">
      Available
    </p>

    <h3 className="text-2xl font-bold">
      {availableEmployees}
    </h3>
  </div>

</div>

  
      
<div className="w-full min-w-0 rounded-lg border border-gray-200 bg-white p-3 dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)]">

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

  
  months: `
    ${defaultClassNames.months}
    !w-full !max-w-none
  `,

  month: "w-full min-w-0",

  month_grid: "w-full table-fixed border-collapse",

  month_caption: `
    flex items-center justify-center
  `,

  caption_label: `
    text-sm font-semibold
    dark:!text-white
  `,

  chevron: `
    ${defaultClassNames.chevron}
    !size-8
    fill-amber-500
    dark:!fill-secondary
  `,

  weekday: `
    text-xs font-medium pt-3
    dark:!text-white h-10
  `,

  day: "text-center ",

  day_button: `
    mx-auto flex size-10
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

    modifiersClassNames={{
      approvedLeave:
        "[&>button]:!bg-green-100 [&>button]:!text-green-800",

      pendingLeave:
        "[&>button]:!bg-yellow-100 [&>button]:!text-yellow-800",
    }}
  />

  <div className="mt-4 flex flex-wrap gap-4 text-sm dark:!text-white">
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-green-500  dark:!text-white " />
      Approved
    </div>

    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-yellow-500 dark:!bg-yellow-500/80 dark:!text-white " />
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
          <p className="rounded-lg bg-gray-100 p-4 text-sm text-gray-500 dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] dark:!text-white">
            No leave requests on this date.
          </p>
        ) : (
          selectedLeaves.map((leave) => (
            <div
              key={leave.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-gray-100 p-4 dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] dark:!text-white"
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
