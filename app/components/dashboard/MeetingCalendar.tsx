
"use client";

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
const initialDate = new Date();



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

export default function MeetingCalendar() {
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
    <div
  className="
    w-full max-w-sm rounded-2xl p-5 hover:shadow-md
    bg-white text-gray-900
    dark:!bg-slate-500 dark:!text-gray-100
  "
>
  <DayPicker
    mode="single"
    selected={selected}
    onSelect={(date) => {
      if (date) setSelected(date);
    }}
    month={month}
    onMonthChange={setMonth}
    showOutsideDays={false}
    today={today || new Date(2026)}
    classNames={{
      root: "w-full",

      month: "w-full",

      month_grid: "w-full border-collapse",

      day_button: `
        mx-auto flex size-10
        items-center justify-center
        rounded-full
        text-gray-900
        hover:bg-green-100
        dark:!text-gray-100
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


  <div
    className="
      mt-5 rounded-xl p-4
      bg-green-50
      dark:!bg-slate-700
    "
  >
    {selectedMeetings.length > 0 ? (
      selectedMeetings.map((meeting) => (
        <div
          key={meeting.title}
          className="mb-2 last:mb-0"
        >
          <p
            className="
              font-semibold text-gray-900
              dark:!text-gray-100
            "
          >
            {meeting.title}
          </p>

          <p
            className="
              text-sm text-gray-600
              dark:!text-gray-300
            "
          >
            {meeting.time}
          </p>
        </div>
      ))
    ) : (
      <p
        className="
          text-sm text-gray-600
          dark:!text-gray-300
        "
      >
        No meetings scheduled.
      </p>
    )}
  </div>
</div>
  );
}
