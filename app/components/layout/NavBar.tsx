"use client";

import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import ThemeToggle from "@/app/components/ThemeToggle";
import Image from "next/image";
import {  Search ,ChevronDown, Bell, CircleQuestionMark}  from "lucide-react";
import { useRouter } from "next/navigation";
 

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

  const [popup,setPopup]= useState(false)
 const pop = useRef<HTMLDivElement>(null);

const router = useRouter();

    // const session = await auth()

  useEffect(() => {

  const handleClickOutside = (event: MouseEvent) => {

    if (
      pop.current &&
      !pop.current.contains(event.target as Node)
    ) {
      setPopup(false);
    }

  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

}, []);


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
    <header className="h-16 bg-background text-black dark:bg-slate-700 relative z-30 dark:text-white
                       flex items-center justify-between
                       px-6 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
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
    <Bell className="text-black dark:text-white w-7 h-7 cursor-pointer" onClick={() =>{{setPopup(false),router.replace("/notification");}}}/>
  </div>

  <CircleQuestionMark className="text-black dark:text-white w-6 h-6" />

  {/* <div className="flex items-center gap-2" onClick={() => setPopup((prev) => !prev)} >
    <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center font-medium">
      {navname?.toUpperCase()}
    </div>
    
    <div className="flex flex-col">
      <span className="text-black text-sm dark:text-gray-300 leading-none">{emailName}</span>
      <span className="text-gray-600 dark:text-gray-300 text-[12px] leading-tight capitalize">
        {role}
      </span>
    </div>
<div className="relative" ref={pop}>

  <button onClick={() => setPopup((prev) => !prev)} className="cursor-pointer transition-transform duration-1000 ease-[cubic-bezier(0.65,1,0.85,1,0.45,1)]">
    <ChevronDown
    className={`text-black dark:text-white w-4 h-4
      transition-transform duration-500
      ease-[cubic-bezier(0.65,1,0.85,1)]
      ${popup ? "rotate-180" : "rotate-0"}
    `}
  />
  </button>

  {popup && (
    <div className="absolute z-50 flex flex-col
      bg-white dark:bg-gray-800
      w-[180px] right-0 top-full mt-4
      gap-1 p-2 rounded-lg shadow-lg border border-gray-200">

      <button
        className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={() => {setPopup(false),router.replace("/employee-profile");}}
      >
        My profile
      </button>

      <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => {setPopup(false)}}>
        My preference
      </button>

      <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"onClick={() => {setPopup(false)}}>
        Logout
      </button>

    </div>
  )}

</div>
  </div> */}
  <div className="relative bg-gray-200 dark:!bg-gray-800 px-2 py-1.5 rounded-full" ref={pop}>

 
  <button
    type="button"
    onClick={() => setPopup((prev) => !prev)}
    aria-expanded={popup}
    className="flex items-center gap-2 cursor-pointer text-left"
  >
   
    <span className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center font-medium">
      {navname?.toUpperCase()}
    </span>

    
    <span className="flex flex-col">
      <span className="text-black text-sm dark:text-gray-300 leading-none">
        {emailName}
      </span>

      <span className="text-gray-600 dark:text-gray-300 text-[12px] leading-tight capitalize">
        {role}
      </span>
    </span>

   
    <ChevronDown
      className={`text-black dark:text-white w-4 h-4
        transition-transform duration-500
        ease-[cubic-bezier(0.65,1,0.85,1)]
        ${popup ? "rotate-180" : "rotate-0"}
      `}
    />
  </button>

 
  {popup && (
    <div
      className="absolute z-50 flex flex-col
        bg-white dark:bg-gray-800
        w-[180px] right-0 top-full mt-4
        gap-1 p-2 rounded-lg shadow-lg border border-gray-200"
    >
      <button
        type="button"
        className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={() => {
          setPopup(false);
          router.replace("/employee-profile");
        }}
      >
        My profile
      </button>

      <button
        type="button"
        className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={() => setPopup(false)}
      >
        My preference
      </button>

      <button
        type="button"
        className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={() => setPopup(false)}
      >
        Logout
      </button>
    </div>
  )}
</div>
 
</div>

      </div>
    </header>
  );
}