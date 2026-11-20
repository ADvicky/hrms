"use client";

import type { Dispatch, SetStateAction } from "react";
import ThemeToggle from "@/app/components/ThemeToggle";
import Image from "next/image";
import {  Search ,ChevronDown, Bell, CircleQuestionMark}  from "lucide-react";
 

type NavBarProps = {
  role:string,
  name:string;
  email:string;
};
export default function Navbar({
  role,
  name,
  email
}: NavBarProps) {

    // const session = await auth()


const navname = 
name?.[0] ??
email?.[0] ??
  "U"
  

    console.log("name",email);

   const displayName = name || email?.split("@")[0] || "";

const emailName = displayName
  ? displayName.charAt(0).toUpperCase() + displayName.slice(1)
  : "User";
    
  return (
    <header className="h-16 bg-background text-black dark:bg-slate-700 dark:text-white
                       flex items-center justify-between
                       px-6 shadow-xl">
                        <div className="flex justify-center items-center  relative">


      <input type="text"
          className="max-w-full w-[500px] border-gray-300 border-2 px-13 py-2 bg-gray-300/20 dark:bg-gray-100 dark:text-black rounded-xl"
          placeholder="Search employees, projects, or anything..." />
          <Search className="absolute left-4 dark:text-gray-800"/>

      </div>

      <div className="flex text-black  dark:text-white items-center gap-8">
        <ThemeToggle />
        
{/* <div className="flex justify-center items-center gap-5">
    <div className="relative">
        <div className="w-4.5 h-4.5 rounded-full
                        bg-red-600  text-white
                        flex items-center justify-center text-[12px] absolute -right-1 -top-2">3</div>
    <Bell className="text-black w-8 h-8"/>
    </div>
    <CircleQuestionMark className="text-black"/>
    <div className="flex gap-2">
        <div className="w-9 h-9 rounded-full
                        bg-blue-600  text-white
                        flex items-center justify-center">
          {(navname).toUpperCase()}
        </div>
        <div className="flex flex-col ">
        <span className="text-black">{emailName}</span>
        <span className="text-black text-[12px] leading-tighter capitalize">{role }</span>
        </div>
        <ChevronDown className="text-black flex justify-center items-center mt-2"/>
        </div>
      </div> */}
      <div className="flex justify-center items-center gap-5">
  <div className="relative">
    <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] absolute -right-1 -top-1">
      3
    </div>
    <Bell className="text-black dark:text-white w-7 h-7" />
  </div>

  <CircleQuestionMark className="text-black dark:text-white w-6 h-6" />

  <div className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
      {navname?.toUpperCase()}
    </div>
    
    <div className="flex flex-col">
      <span className="text-black text-sm dark:text-gray-300 leading-none">{emailName}</span>
      <span className="text-gray-600 dark:text-gray-300 text-[12px] leading-tight capitalize">
        {role}
      </span>
    </div>

    <ChevronDown className="text-black dark:text-white w-4 h-4" />
  </div>
</div>

      </div>
    </header>
  );
}