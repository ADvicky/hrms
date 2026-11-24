"use client"

import { useEffect, useState } from "react";

type WelcomeSectionProps = {
  name: string;
};

export default function WelcomeSection({
  name,
}: WelcomeSectionProps) {

  const [formattedDate,setFormattedDate] = useState("")


  useEffect(() => {
    const today = new Date();

    const date = today.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    setFormattedDate(date);
  }, []);

  return (
    // <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between h-30 bg-cover bg-center max-w-full w-full bg-no-repeat " style={{backgroundImage:"url('/welcome_banner.png')"}}>
    <section
  className="flex flex-col gap-3 sm:flex-row
  sm:items-center sm:justify-between
  h-30 w-full
  bg-size-[100%_100%]
  bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/welcome_banner.png')",
  }}
>
      <div className="p-4">
        <h1 className="text-2xl text-primary font-bold">
          Welcome back, {name}!
        </h1>

        <p className="mt-1 text-sm  text-primary">
          Here's what's happening in your
          organization today.
        </p>
      </div>

      {/* <p className="text-sm text-gray-500 text-primary">
        {formattedDate}
      </p> */}
    </section>
  );
}
