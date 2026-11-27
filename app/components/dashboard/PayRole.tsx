"use client"

import { ArrowRight, CircleCheck, Wallet } from "lucide-react";
import Link from "next/link";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";




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
  { day: "31", amount: 625000 },
];

function PayRole() {
    return ( 
//         <div className="w-full flex flex-col min-w-0 max-h-[200px] rounded-md bg-white dark:!border dark:!border-white/15 dark:!bg-slate-700/20 p-3 hover:shadow-md  ">

//       <div className="flex flex-col h-full">
//       <div className="mb-4 flex items-center justify-between">

//         <div className="flex items-center gap-2">
//           <Wallet size={30} className="text-secondary dark:!text-gray-300 " />

//           <h2 className="text-xl font-bold text-gray-900 dark:!text-gray-300 ">
//             Payroll Overview
//           </h2>
//         </div>

//         <Link
//           href="/quick-actions"
//           className="flex items-center gap-1 text-xl font-medium text-secondary dark:!text-gray-300 "
//         >
//           View Details
//           <ArrowRight size={18} />
//         </Link>
//       </div>
//       <div className="flex flex-col gap-6 p-4">
// <div className="dark:!text-gray-300 flex flex-col gap-4">
//     <h1 className="text-5xl font-bold ">12,50,000</h1>
//     <p>October 2026 Payroll</p>


// {/* <div className="p-5">
//     <div className="bg-light min-w-0 text-nowrap rounded-full py-1 flex justify-center max-w-30 relative ">
//         <CircleCheck className="absolute left-2 top-2 w-4 h-4 text-green-800 "/>
//    <span className="ml-3 text-secondary font-bold">Processed</span>
//     </div>
// </div> */}
//      <div className=" flex w-fit items-center gap-2 rounded-full bg-light px-3 py-1 text-primary">
//         <CircleCheck size={18} fill="#23834D" className="text-white" />
//         <span className="text-sm font-semibold">
//           Processed
//         </span>
//       </div>
//       </div>
// </div>
//    <div
//         className="
//            w-full flex flex-col min-w-0 rounded-lg
//           bg-white   dark:!bg-slate-700/20
//         "
//       >
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart
//             data={payrollData}
//             margin={{
//               top: 8,
//               right: 5,
//               left: 5,
//               bottom: 0,
//             }}
//           >
//             <defs>
//               <linearGradient
//                 id="payrollGradient"
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="1"
//               >
//                 <stop
//                   offset="0%"
//                   stopColor="var(--payroll-chart-color)"
//                   stopOpacity={0.5}
//                 />

//                 <stop
//                   offset="100%"
//                   stopColor="var(--payroll-chart-color)"
//                   stopOpacity={0}
//                 />
//               </linearGradient>
//             </defs>
//             <CartesianGrid
//   strokeDasharray="3 3"
//   vertical={false}
//   stroke="var(--payroll-grid)"
// />

// <XAxis
//   dataKey="day"
//   tick={{
//     fontSize: 12,
//     className: "fill-gray-600 dark:!fill-white",
//   }}
//   tickFormatter={(value) => `${value} Oct`}
//   axisLine={false}
//   tickLine={false}
// />

// <YAxis
//   tick={{
//     fontSize: 12,
//     className: "fill-gray-600 dark:!fill-white",
//   }}
//   tickFormatter={(value) => `₹${value / 1000}k`}
//   axisLine={false}
//   tickLine={false}
//   width={60}
// />

//             <Tooltip
//               contentStyle={{
//                 backgroundColor:
//                   "var(--payroll-tooltip-bg)",
//                 color:
//                   "var(--payroll-tooltip-text)",
//                 border:
//                   "1px solid var(--payroll-tooltip-border)",
//                 borderRadius: "8px",
//               }}
//               labelStyle={{
//                 color: "var(--payroll-tooltip-text)",
//               }}
//               itemStyle={{
//                 color: "var(--payroll-tooltip-text)",
//               }}
//               formatter={(value) => [
//                 `₹${Number(value).toLocaleString("en-IN")}`,
//                 "Payroll",
//               ]}
//               labelFormatter={(label) =>
//                 `October ${label}, 2026`
//               }
//             />

//             <Area
//               type="linear"
//               dataKey="amount"
//               stroke="var(--payroll-chart-color)"
//               strokeWidth={2.5}
//               fill="url(#payrollGradient)"
//               dot={{
//                 r: 4,
//                 fill: "var(--payroll-chart-color)",
//                 strokeWidth: 0,
//               }}
//               activeDot={{
//                 r: 6,
//                 fill: "var(--payroll-chart-color)",
//               }}
//             />
            
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
      
//     </div>
//     </div>
<div
  className="
    w-full flex flex-col min-w-0 h-auto
    rounded-md 
    
    
    p-3 
  "
>
  <div className="flex flex-col gap-4">

   
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-2">
        <Wallet
          size={30}
          className="text-secondary dark:text-secondary"
        />

        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-300">
          Payroll Overview
        </h2>
      </div>

      <Link
        href="/quick-actions"
        className="flex items-center gap-1 text-md font-medium text-secondary dark:text-gray-300"
      >
        View Details
        <ArrowRight size={18} />
      </Link>
    </div>

   
    <div className="flex flex-col gap-3 p-2 dark:text-gray-300">

      <h1 className="text-5xl font-bold">
        12,50,000
      </h1>

      <p>October 2026 Payroll</p>

      <div className="flex w-fit items-center   gap-2 rounded-full bg-light px-3 py-1 text-primary">

        <CircleCheck
          size={18}
          fill="#23834D"
          className="text-white"
        />

        <span className="text-sm  font-semibold">
          Processed
        </span>

      </div>
    </div>

   
    <div className="h-[250px] w-full min-w-0 shrink-0">

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
                stopColor="var(--payroll-chart-color)"
                stopOpacity={0.5}
              />

              <stop
                offset="100%"
                stopColor="var(--payroll-chart-color)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--payroll-grid)"
          />

          <XAxis
            dataKey="day"
            tick={{
              fontSize: 12,
              className: "fill-gray-600 dark:!fill-white",
            }}
            tickFormatter={(value) => `${value} Oct`}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fontSize: 12,
              className: "fill-gray-600 dark:!fill-white",
            }}
            tickFormatter={(value) => `₹${value / 1000}k`}
            axisLine={false}
            tickLine={false}
            width={60}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "var(--payroll-tooltip-bg)",
              color: "var(--payroll-tooltip-text)",
              border: "1px solid var(--payroll-tooltip-border)",
              borderRadius: "8px",
            }}
            labelStyle={{
              color: "var(--payroll-tooltip-text)",
            }}
            itemStyle={{
              color: "var(--payroll-tooltip-text)",
            }}
            formatter={(value) => [
              `₹${Number(value).toLocaleString("en-IN")}`,
              "Payroll",
            ]}
            labelFormatter={(label) =>
              `October ${label}, 2026`
            }
          />

          <Area
            type="linear"
            dataKey="amount"
            stroke="var(--payroll-chart-color)"
            strokeWidth={2.5}
            fill="url(#payrollGradient)"
            dot={{
              r: 4,
              fill: "var(--payroll-chart-color)",
              strokeWidth: 0,
            }}
            activeDot={{
              r: 6,
              fill: "var(--payroll-chart-color)",
            }}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  </div>
</div>
     );
}

export default PayRole;