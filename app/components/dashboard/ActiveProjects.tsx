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
         <div className="w-full min-w-0 rounded-xl bg-white p-3 shadow-md mt-5 ">

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
         <Image src={"/briefcase.png"} alt="briefcase" height={100} width={100} className="w-6 h-6"/>

          <h2 className="text-lg font-bold text-gray-900">
            Active Projects
          </h2>
        </div>

        <Link
          href="/quick-actions"
          className="flex items-center gap-1 text-sm font-medium text-primary"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>
        <div className="w-full overflow-x-auto sidebar-scroll">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <thead className="bg-light">
            <tr>
              {[
                "Project Name",
                "Progress",
                "Deadline",
                
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-sm font-semibold text-gray-900"
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
                className="border-b border-gray-100 last:border-0"
              >
                {/* Employee */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-light text-sm font-semibold text-primary">
                      {request.projectname.charAt(0)}
                    </div>

                    <span className="whitespace-nowrap text-sm font-medium text-gray-900">
                      {request.projectname}
                    </span>
                  </div>
                </td>

                {/* Leave Type */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  <progress value={request.progress} /> <span>{request.progress}%</span>
                </td>

                {/* Dates */}
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                  {request.dates}
                </td>

                {/* Status */}
            

                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
     );
}

export default ActiveProjects;