
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import NavBar from "@/app/components/layout/NavBar";
// import Sidebar from "@/app/components/layout/Sidebar";

// type DashboardShellProps = {
//   children: React.ReactNode;
//   role: string;
//   email: string;
//   name:string;
// };

// export default function DashboardShell({
//   children,
//   role,
//   email,
//   name,
// }: DashboardShellProps) {
//   const [sidebarHide, setSidebarHide] = useState(false);

//   return (
//     <div className="flex h-dvh min-h-0 max-w-full flex-col overflow-hidden ">

  
     

    
//       <div className="relative flex min-h-0 flex-1 overflow-x-auto  ">

       
       

    
//         <button
//           type="button"
//           onClick={() => setSidebarHide((prev) => !prev)}
//           aria-label={sidebarHide ? "Show sidebar" : "Hide sidebar"}
//           aria-expanded={!sidebarHide}
//           title="expand and collaps sidebar"
//           className={`
//             absolute top-25 z-50
//             rounded bg-slate-200 px-3 py-2 text-black
//             transition-[left] duration-600 ease-[cubic-bezier(0.65,1,0.85,1,0.45,1)]
//             ${sidebarHide ? "left-0 " : "left-[236px]  "}
//           `}
//         >
//           <Image
//             src="/menu.png"
//             alt=""
//             width={20}
//             height={20}
//             className={sidebarHide ? "" : "-scale-x-100"}
//           />
//         </button>

     
//         <main
//           className="
//             min-h-0 min-w-0 w-full
//             overflow-y-auto
//            bg-background dark:bg-black text-gray-300 text-slate-900
            
//           "
//         >
//              <div className="shrink-0">
//         <NavBar
//         role={role}
//           name={name}
//           email={email}
//         />
//       </div>
//       <div className="flex relative">
//         <div className="absolute left-2 z-10">
//    <div
//           className={`
//             min-h-0 shrink-0 overflow-hidden
//             transition-[width] p-2  duration-600 ease-[cubic-bezier(0.65,1,0.85,1,0.45,1)]
//             ${sidebarHide ? "w-0" : "w-64"}
//           `}
//         >
//           <div className="h-full w-64 rounded-md z-50 ">
//             <Sidebar role={role} email={email} />
//           </div>
//         </div>
//         </div>
        
//           {children}
         
//           </div>
//         </main>

//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import Image from "next/image";
import NavBar from "@/app/components/layout/NavBar";
import Sidebar from "@/app/components/layout/Sidebar";

type DashboardShellProps = {
  children: React.ReactNode;
  role: string;
  email: string;
  name: string;
};

export default function DashboardShell({
  children,
  role,
  email,
  name,
}: DashboardShellProps) {

  const [sidebarHide, setSidebarHide] = useState(false);

  return (
    <div
      className="
        flex flex-col
        h-dvh w-full
        min-h-0 min-w-0
        overflow-hidden
        bg-background dark:bg-black
        text-slate-900 dark:text-gray-300
      "
    >

  
      <header className="shrink-0">
        <NavBar
          role={role}
          name={name}
          email={email}
        />
      </header>

      
      <div className="relative flex flex-1 min-h-0 min-w-0">

       
        {/* <aside
          className={`
            shrink-0
            min-h-0
            overflow-hidden
            transition-[width]
            duration-600
            ease-[cubic-bezier(0.65,0,0.35,1)]

            ${sidebarHide ? "w-20" : "w-74"}
          `}
        >

          
          <div className="w-74 h-full  p-2">

            <div className="w-full h-full rounded-xl overflow-y-auto overflow-x-hidden">
              <Sidebar
                role={role}
                email={email}
                sidebarHide={sidebarHide}
              />
            </div>

          </div>

        </aside> */}
        <aside
  className={`
    shrink-0
    min-h-0
    overflow-hidden
    transition-[width]
    duration-500
    ease-[cubic-bezier(0.65,0,0.35,1)]

    ${sidebarHide ? "w-[72px]" : "w-64"}
  `}
>
  <div className="w-full h-full p-2">

    <Sidebar
      role={role}
      email={email}
      sidebarHide={sidebarHide}
    />

  </div>
</aside>

       
        <button
          type="button"
          onClick={() => setSidebarHide((prev) => !prev)}
          aria-label={
            sidebarHide ? "Show sidebar" : "Hide sidebar"
          }
          aria-expanded={!sidebarHide}
          title={
            sidebarHide ? "Expand sidebar" : "Collapse sidebar"
          }
          className={`
            absolute top-10  z-50
            rounded
            bg-slate-200
            dark:bg-slate-700
            px-3 py-2
            text-black dark:text-white
            cursor-pointer
            transition-[left]
            duration-600
            overflow-x-hidden
            ease-[cubic-bezier(0.65,0,0.35,1)]

            ${sidebarHide ? "left-14" : "left-[230px]"}
          `}
        >
          <Image
            src="/menu.png"
            alt=""
            width={20}
            height={20}
            className={`
              transition-transform duration-300
              dark:invert
              ${sidebarHide ? "" : "-scale-x-100"}
            `}
          />
        </button>

        
        <main
          className="
            flex-1
            min-h-0 min-w-0
            overflow-y-auto
            overflow-x-hidden
          "
        >
          <div className="w-full min-w-0">
            {children}
          </div>
        </main>

      </div>

    </div>
  );
}