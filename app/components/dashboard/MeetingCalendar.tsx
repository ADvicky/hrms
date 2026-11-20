
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
    <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-md ">
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
          day_button:
            "mx-auto flex size-10 items-center justify-center rounded-full hover:bg-light",
          selected:
            "[&>button]:!bg-primary [&>button]:!text-white",
          today: "font-bold text-primary",
        }}
      />

      <div className="mt-5 rounded-xl bg-light p-4">
        {selectedMeetings.length > 0 ? (
          selectedMeetings.map((meeting) => (
            <div key={meeting.title} className="mb-2 last:mb-0">
              <p className="font-semibold text-gray-900">
                {meeting.title}
              </p>
              <p className="text-sm text-gray-600">
                {meeting.time}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-600">
            No meetings scheduled.
          </p>
        )}
      </div>
    </div>
  );
}
