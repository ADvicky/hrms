
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
    w-full max-w-sm rounded-md p-3  hover:shadow-md
    bg-white text-gray-900
    dark:!border dark:!border-white/15 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] dark:!bg-slate-700/20
  "
>
  {/* <DayPicker
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
      root: "w-full ",

      month: "w-full",
          caption_label: `
      text-lg font-semibold
      text-gray-900
      dark:!text-white 
    `,

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
  /> */}

{/* <DayPicker
  mode="single"
  selected={selected}
  onSelect={(date) => {
    if (date) setSelected(date);
  }}
  month={month}
  onMonthChange={setMonth}
  showOutsideDays={false}
  today={today || new Date()}
  classNames={{
    root: "w-full",

    month: "w-full",

    caption_label: `
      text-lg font-semibold
      text-gray-900
      dark:!text-white
    `,

    month_grid: "w-full border-collapse",

    // Weekday names
    // weekday: `
    //   text-sm font-medium
    //   text-gray-600
    //   dark:!text-gray-300
    // `,
    // month_grid: "w-full table-fixed border-collapse",

weekday: `

  text-center
  text-sm font-medium
  text-gray-600
  dark:!text-gray-300
`,

day: `
  text-center align-middle p-2 
`,

day_button: `
  mx-auto flex size-4 w-[25px]
  items-center justify-center
  rounded-full
  text-gray-900
  hover:bg-green-100
  dark:!text-gray-100
  dark:hover:!bg-slate-600
`,

    // Navigation arrow icons
    chevron: `
      !fill-gray-700
      dark:!fill-white
    `,

    // Previous month button
    button_previous: `
      rounded-md
      hover:bg-gray-100
      dark:hover:!bg-slate-600
    `,

    // Next month button
    button_next: `
      rounded-md
      hover:bg-gray-100
      dark:hover:!bg-slate-600
    `,

    // day_button: `
    //    mx-auto flex size-7
    //   items-center justify-center
    //   rounded-full
    //   text-gray-900
    //   hover:bg-green-100
    //   dark:!text-gray-100
    //   dark:hover:!bg-slate-600
      
    // `,

    selected: `
      [&>button]:!bg-green-700
      [&>button]:!text-white
      dark:[&>button]:!bg-green-600
      dark:[&>button]:!text-white
    `,

    today: `
      [&>button]:font-bold
      [&>button]:!text-green-700
      dark:[&>button]:!text-green-400
    `,
  }}
/> */}
  <div
    className="
    rounded-xl p-6
      bg-green-50
      dark:!bg-gray-800 dark:!text-white 
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
            dark:!bg-gray-800 dark:!text-white 

            "
          >
            {meeting.title}
          </p>

          <p
            className="
              text-sm text-gray-600
            dark:!bg-gray-800 dark:!text-white 

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
          dark:!bg-gray-800 dark:!text-white 
        "
      >
        No meetings scheduled.
      </p>
    )}
  </div>
</div>
  );
}
