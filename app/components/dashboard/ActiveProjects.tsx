"use client"

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";





type LeaveRequest = {
  id: number;
  projectname: string;
  progress: number;
  
  dates: string;
 
};

const initialRequests: LeaveRequest[] = [
  {
    id: 1,
    projectname: "DForce",
    progress: 80,
    
    dates: "Jul 10 – Jul 11, 2025",
   
  },
  {
    id: 2,
    projectname: "DHire",
    progress: 60,
    
    dates: "Jul 14 – Jul 15, 2025",
   
  },
  {
    id: 3,
    projectname: "EagleVue",
    progress: 40,
    
    dates: "Jul 18 – Jul 25, 2025",
   
  },
];

function ActiveProjects() {
    return ( 
         <div className="w-full min-w-0 rounded-md dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] bg-white dark:!border dark:!border-white/15 dark:!bg-slate-700/20 p-3 hover:shadow-md mt-2 ">

  
      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
         {/* <Image src={"/briefcase.png"} alt="briefcase" height={100} width={100} className="w-6 h-6"/> */}

          <h2 className="text-lg font-bold text-gray-900 dark:!text-gray-300">
            Active Projects
          </h2>
        </div>

        <Link
          href="/quick-actions"
          className="flex items-center gap-1 text-sm font-medium text-primary dark:!text-gray-300"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>
        <div className="w-full overflow-x-auto sidebar-scroll">
        <table className="w-full min-w-full border-collapse text-left dark:!border dark:!border-white/15">
          <thead className="bg-light  ">
            <tr>
              {[
                "Project Name",
                "Progress",
                "Deadline",
                
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3  text-sm font-semibold text-gray-900 dark:!bg-gray-800 dark:!text-white  "
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {initialRequests.map((request) => (
              <tr
                key={request.id}
                className="border-b border-gray-100 dark:!border dark:!border-white/15 last:border-0"
              >
               
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-light dark:!bg-slate-200 dark:!text-gray-800 text-sm font-semibold text-primary">
                      {request.projectname.charAt(0)}
                    </div>

                    <span className="whitespace-nowrap text-sm font-medium text-gray-900 dark:!text-gray-300">
                      {request.projectname}
                    </span>
                  </div>
                </td>

              
                <td className="px-4 py-3 text-sm text-gray-700 dark:!text-gray-300">
                  {/* <progress value={request.progress} /> <span>{request.progress}%</span> */}
                   <div  className="flex gap-5">
      
      {/* <progress id="file-progress" value={request.progress} max={100} className="rounded-md"/> */}
      <progress
  id="file-progress"
  value={request.progress}
  max={100}
  className="w-full h-3 rounded-md overflow-hidden [&::-webkit-progress-bar]:bg-gray-200 dark:[&::-webkit-progress-bar]:bg-green-200/10 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:bg-blue-600 dark:[&::-webkit-progress-value]:bg-secondary [&::-webkit-progress-value]:rounded-md [&::-moz-progress-bar]:bg-blue-600 [&::-moz-progress-bar]:rounded-md"
/>
      <span>{request.progress}%</span>
    </div>
                </td>

              
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700 dark:!text-gray-300">
                  {request.dates}
                </td>

            
            

                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
     );
}

export default ActiveProjects;