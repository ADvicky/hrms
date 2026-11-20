
"use client";

import { useState } from "react";
import Image from "next/image";
import NavBar from "@/app/components/layout/NavBar";
import Sidebar from "@/app/components/layout/Sidebar";

type DashboardShellProps = {
  children: React.ReactNode;
  role: string;
  email: string;
  name:string;
};

export default function DashboardShell({
  children,
  role,
  email,
  name,
}: DashboardShellProps) {
  const [sidebarHide, setSidebarHide] = useState(false);

  return (
    <div className="flex h-dvh min-h-0 max-w-full flex-col overflow-hidden">

      {/* Navbar */}
     

      {/* Sidebar + Main Content */}
      <div className="relative flex min-h-0 flex-1 overflow-hidden">

        {/* Animated Sidebar */}
        <div
          className={`
            min-h-0 shrink-0 overflow-hidden
            transition-[width] duration-600 ease-[cubic-bezier(0.65,1,0.85,1,0.45,1)]
            ${sidebarHide ? "w-0" : "w-64"}
          `}
        >
          <div className="h-full w-64">
            <Sidebar role={role} email={email} />
          </div>
        </div>

        {/* Sidebar Toggle Button */}
        <button
          type="button"
          onClick={() => setSidebarHide((prev) => !prev)}
          aria-label={sidebarHide ? "Show sidebar" : "Hide sidebar"}
          aria-expanded={!sidebarHide}
          title="expand and collaps sidebar"
          className={`
            absolute top-15 z-50
            rounded bg-slate-200 px-3 py-2 text-black
            transition-[left] duration-600 ease-[cubic-bezier(0.65,1,0.85,1,0.45,1)]
            ${sidebarHide ? "left-0 " : "left-[236px] "}
          `}
        >
          <Image
            src="/menu.png"
            alt=""
            width={20}
            height={20}
            className={sidebarHide ? "" : "-scale-x-100"}
          />
        </button>

        {/* Main Content */}
        <main
          className="
            min-h-0 min-w-0 flex-1
            overflow-y-auto
           bg-background text-slate-900
            
          "
        >
             <div className="shrink-0">
        <NavBar
        role={role}
          name={name}
          email={email}
        />
      </div>
          {children}
        </main>

      </div>
    </div>
  );
}