"use client"

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Check, X } from "lucide-react";

type LeaveStatus = "Pending" | "Approved" | "Rejected";

type LeaveRequest = {
  id: number;
  name: string;
  initials: string;
  leaveType: string;
  dates: string;
  status: LeaveStatus;
};

const initialRequests: LeaveRequest[] = [
  {
    id: 1,
    name: "Priya Sharma",
    initials: "PS",
    leaveType: "Casual Leave",
    dates: "Jul 10 – Jul 11, 2025",
    status: "Pending",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    initials: "RK",
    leaveType: "Sick Leave",
    dates: "Jul 14 – Jul 15, 2025",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sneha Patel",
    initials: "SP",
    leaveType: "Annual Leave",
    dates: "Jul 18 – Jul 25, 2025",
    status: "Pending",
  },
];

function LeaveApprovel() {
      const [requests, setRequests] =
    useState<LeaveRequest[]>(initialRequests);

  function updateStatus(id: number, status: LeaveStatus) {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id
          ? { ...request, status }
          : request
      )
    );
  }
    return ( 
         <div className="w-full min-w-0 rounded-xl bg-white p-3 shadow-md mt-5  ">

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
         <Image src={"/briefcase.png"} alt="briefcase" height={100} width={100} className="w-6 h-6"/>

          <h2 className="text-lg font-bold text-gray-900">
            Leave Approvals
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
        <div className="w-full sidebar-scroll overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <thead className="bg-light">
            <tr>
              {[
                "Employee",
                "Leave Type",
                "Dates",
                "Status",
                "Action",
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
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-b border-gray-100 last:border-0"
              >
                {/* Employee */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-light text-sm font-semibold text-primary">
                      {request.initials}
                    </div>

                    <span className="whitespace-nowrap text-sm font-medium text-gray-900">
                      {request.name}
                    </span>
                  </div>
                </td>

                {/* Leave Type */}
                <td className="px-4 py-3 text-sm text-gray-700">
                  {request.leaveType}
                </td>

                {/* Dates */}
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                  {request.dates}
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      request.status === "Pending"
                        ? "bg-orange-100 text-orange-600"
                        : request.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  {request.status === "Pending" ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        title="Approve"
                        aria-label={`Approve leave for ${request.name}`}
                        onClick={() =>
                          updateStatus(request.id, "Approved")
                        }
                        className="rounded-md bg-primary p-2 text-white hover:bg-accent"
                      >
                        <Check size={18} />
                      </button>

                      <button
                        type="button"
                        title="Reject"
                        aria-label={`Reject leave for ${request.name}`}
                        onClick={() =>
                          updateStatus(request.id, "Rejected")
                        }
                        className="rounded-md border border-red-300 p-2 text-red-500 hover:bg-red-50"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400">
                      Completed
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
     );
}

export default LeaveApprovel;