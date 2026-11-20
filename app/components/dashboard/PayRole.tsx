"use client"

import { ArrowRight, CircleCheck, Wallet } from "lucide-react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";



// Dummy payroll data
const payrollData = [
  { day: "01", amount: 120000 },
  { day: "03", amount: 245000 },
  { day: "05", amount: 365000 },
  { day: "08", amount: 458000 },
  { day: "11", amount: 185000 },
  { day: "14", amount: 210000 },
  { day: "17", amount: 218000 },
  { day: "20", amount: 245000 },
  { day: "23", amount: 270000 },
  { day: "26", amount: 262000 },
  { day: "31", amount: 225000 },
];

function PayRole() {
    return ( 
        <div className="w-full min-w-0 rounded-md bg-white p-3 shadow-md  ">

      
      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <Wallet size={34} className="text-secondary" />

          <h2 className="text-lg font-bold text-gray-900">
            Payroll Overview
          </h2>
        </div>

        <Link
          href="/quick-actions"
          className="flex items-center gap-1 text-xl font-medium text-secondary"
        >
          View Details
          <ArrowRight size={18} />
        </Link>
      </div>
      <div className="flex flex-col gap-6 p-4">
<div>
    <h1 className="text-5xl font-bold">12,50,000</h1>
    <p>October 2026 Payroll</p>
</div>

{/* <div className="p-5">
    <div className="bg-light min-w-0 text-nowrap rounded-full py-1 flex justify-center max-w-30 relative ">
        <CircleCheck className="absolute left-2 top-2 w-4 h-4 text-green-800 "/>
   <span className="ml-3 text-secondary font-bold">Processed</span>
    </div>
</div> */}
     <div className=" flex w-fit items-center gap-2 rounded-full bg-light px-3 py-1 text-primary">
        <CircleCheck size={18} fill="#23834D" className="text-white" />
        <span className="text-sm font-semibold">
          Processed
        </span>
      </div>
</div>
      <div className=" h-20 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={payrollData}
            margin={{
              top: 8,
              right: 5,
              left: 5,
              bottom: 0,
            }}
          >
            
            <defs>
              <linearGradient
                id="payrollGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#65A879"
                  stopOpacity={0.5}
                />
                <stop
                  offset="100%"
                  stopColor="#65A879"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <Tooltip
              formatter={(value) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                "Payroll",
              ]}
              labelFormatter={(label) => `July ${label}, 2025`}
            />

            <Area
              type="linear"
              dataKey="amount"
              stroke="#23834D"
              strokeWidth={2.5}
              fill="url(#payrollGradient)"
              dot={{
                r: 4,
                fill: "#23834D",
                strokeWidth: 0,
              }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
    </div>
     );
}

export default PayRole;