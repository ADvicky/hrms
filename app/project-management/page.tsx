"use client"

import React from 'react'
import {
  UsersRound,
  CircleCheck,
  Plane,
  ClipboardCheck,
  TrendingUp,
  TrendingDown,
  Plus,
  Edit,
  Pencil,
  Check,
  FileSearch,
} from "lucide-react";


const kpiData = [
  {
    id: 1,
    title: "Total Employees",
    value: 8,
    percentage: 5,
    status:"Active Projects",
    icon: UsersRound,
    trend: "up",
    graph: [10, 25, 17, 22, 20, 26, 24, 30],
  },
  {
    id: 2,
    title: "Present Today",
    value: 3,
    percentage: 2,
    status:"Completed",
    icon: Check,
    trend: "up",
    graph: [12, 28, 17, 24, 19, 23, 26, 34],
  },
  {
    id: 3,
    title: "On Leave",
    value: 1,
    percentage: 1,
    status:"Overdue",
    icon: Plane,
    trend: "up",
    graph: [15, 30, 19, 27, 16, 24, 18, 32],
  },
  {
    id: 4,
    title: "Pending Approvals",
    value: "75%",
    percentage: 1,
    status:"On Track",
    icon: ClipboardCheck,
    trend: "down",
    graph: [12, 24, 17, 27, 16, 22, 15, 29],
  },
];

const payrollData = [
  {
    id: 1,
    projectname: "Dforce",
    startdate: "July 2026",
    enddate: "July 2026",
    status:"On Track",
    progress:80,
  },
  {
   id: 2,
    projectname: "AI Interview",
    startdate: "July 2026",
    enddate: "July 2026",
    status:"In Progress",
    progress:70,
  },
  {
      id: 3,
    projectname: "DHire",
    startdate: "July 2026",
    enddate: "July 2026",
    status:"On Track",
    progress:90,
  },
  {
      id: 4,
    projectname: "Eagel Vue",
    startdate: "July 2026",
    enddate: "July 2026",
    status:"In Progress",
    progress:92,
  },
  {
     id: 5,
    projectname: "Collector Studio",
    startdate: "July 2026",
    enddate: "July 2026",
    status:"At Risk",
    progress:40,
  },
];

export default function ProjectManagement() {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-end p-4'>
        <button className='px-2 py-1.5 bg-secondary text-sm pointer-coarse:pointer flex gap-1 rounded-md text-white'><Plus className='w-5 h-5'/> New Project</button>
        </div>
     <div className='flex flex-col'>

    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4 p-4 ">
      {kpiData.map((card) => {
          const Icon = card.icon;
          
          
          return (
              <div
              key={card.id}
              className="flex items-start min-h-25 min-w-0 w-full max-w-full p-4 gap-2 dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] dark:!text-white flex-col justify-center  rounded-md bg-white dark:!bg-slate-500  hover:shadow-md"
              >
         
            
            <div className="rounded-md bg-light p-2  dark:!bg-gray-800 dark:!text-white ">
              <Icon size={18} className="text-primary dark:!text-white" />
            </div>
            {/* <p className="text-md font-medium text-gray-700 dark:text-gray-300">
      {card.title}
      </p> */}
            

 <h1 className='text-xl font-semibold'>
             {card.status}
           </h1>

    <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:!text-white pl-4">
      {card.value}
    </h2>

          
 
    




          </div>
        );
    })}
    </div>
      <div className=" p-1 sm:p-2 lg:p-4 ">
        <div className="bg-white w-full rounded-md dark:!border dark:!border-white/15 dark:!bg-slate-700/20 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] dark:!text-white">
        <h1 className="text-xl font-bold p-6">Recent Payslips</h1>
        <div className="w-full overflow-x-auto border border-gray-200 dark:border-gray-700 ">
        <table className="w-full border-collapse text-left ">
            
            <thead className="bg-gray-300 dark:bg-gray-800">
                <tr>
                    <th className="px-8 py-3 text-sm font-semibold">Project Name</th>
                    <th className="px-8 py-3 text-sm font-semibold">Start Date</th>
                    <th className="px-8 py-3 text-sm font-semibold">End Date</th>
                    <th className="px-8 py-3 text-sm font-semibold">Progress</th>
                    <th className="px-8 py-3 text-sm font-semibold">Status</th>
                    <th className="px-8 py-3 text-sm font-semibold">Action</th>
                </tr>
            </thead>
            <tbody>
                
                   {payrollData && payrollData.map( (pay) => {
return(
    <tr key={pay.id} className="border-t text-left border-gray-200  dark:border-gray-700 hover:bg-gray-300/30">
    <td  className="px-8 py-3">
        {pay.projectname}

                    </td>
    <td  className="px-8 py-3 ">
        {pay.startdate}

                    </td>
    <td  className="px-8 py-3 ">
        {pay.enddate}

                    </td>
       <td className="px-4 py-3 text-sm text-gray-700 dark:!text-gray-300">
                  {/* <progress value={request.progress} /> <span>{request.progress}%</span> */}
                   <div  className="flex gap-5">
      
      {/* <progress id="file-progress" value={request.progress} max={100} className="rounded-md"/> */}
      <progress
  id="file-progress"
  value={pay.progress}
  max={100}

  className={`
    w-full h-3 appearance-none
    rounded-md overflow-hidden

    [&::-webkit-progress-bar]:bg-gray-200
    dark:[&::-webkit-progress-bar]:bg-gray-400

    [&::-webkit-progress-bar]:rounded-md
    [&::-webkit-progress-value]:rounded-md
    [&::-moz-progress-bar]:rounded-md

    ${
      pay.status === "At Risk"
        ? `
          [&::-webkit-progress-value]:bg-destructive
          dark:[&::-webkit-progress-value]:bg-destructive/90
          [&::-moz-progress-bar]:bg-destructive
          dark:[&::-moz-progress-bar]:bg-destructive/90
        `
        : pay.status === "In Progress"
          ? `
            [&::-webkit-progress-value]:bg-warning
            dark:[&::-webkit-progress-value]:bg-warning/70
            [&::-moz-progress-bar]:bg-warning
            dark:[&::-moz-progress-bar]:bg-warning/70
          `
          : `
            [&::-webkit-progress-value]:bg-secondary
            dark:[&::-webkit-progress-value]:bg-secondary/70
            [&::-moz-progress-bar]:bg-secondary
            dark:[&::-moz-progress-bar]:bg-secondary/70
          `
    }
  `}
/>
      <span>{pay.progress}%</span>
    </div>
                </td>
         <td className="px-0.5 py-1 w-30 text-center">
  <span
   className={`
  inline-flex items-center justify-center
  rounded-full px-3 py-1
  text-xs font-medium whitespace-nowrap

  ${
    pay.status === "At Risk"
      ? "bg-red-100 text-red-700 dark:bg-red-100/95 dark:text-red-800"
      : pay.status === "In Progress"
        ? "bg-warning-100 text-warning-700 dark:bg-warning/35 dark:text-warning"
        : "bg-green-100 text-green-700 dark:bg-green-200/85 dark:text-secondary"
  }
`}
  >
    {pay.status}
  </span>
</td>
                     <td className="px-8 py-3 ">
                        <div className='flex gap-1'>
        <button className="rounded-md bg-secondary px-1.5 py-1.5 text-white hover:bg-green-700 cursor-pointer">
          
          <Pencil className='w-4 h-4'/>
        </button>
        <button className="rounded-md bg-secondary px-2 py-1  text-white hover:bg-green-700 cursor-pointer">
          <FileSearch className='w-4 h-4'/>
        </button>
        </div>
      </td>
            </tr>        
   
) 
                   }) 
}
               
            </tbody>
        </table>
        </div>
    </div>
    </div>
        </div>
        </div>
  )
}
