
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  UsersRound,
  Wallet,
  CalendarCheck,
  CalendarDays,
  FolderKanban,
  ClipboardList,
  FolderOpen,
  UserRoundSearch,
  Receipt,
  Package,
  ChartNoAxesCombined,
  Bell,
  LayoutDashboard,
} from "lucide-react";




type SidebarProps = {
  role: string;
  email: string;
  sidebarHide:boolean;
};

const links = [
      {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Employee Management",
    href: "/employee-management",
    icon: UsersRound,
  },
  {
    name: "Payroll",
    href: "/payroll",
    icon: Wallet,
  },
  {
    name: "Attendance",
    href: "/attendance",
    icon: CalendarCheck,
  },
  {
    name: "Leave Management",
    href: "/leave-management",
    icon: CalendarDays,
  },
  {
    name: "Project Management",
    href: "/project-management",
    icon: FolderKanban,
  },
  {
    name: "Tasks & Timesheets",
    href: "/tasks-timesheets",
    icon: ClipboardList,
  },
  {
    name: "Document Center",
    href: "/document-center",
    icon: FolderOpen,
  },
  {
    name: "Recruitment",
    href: "/recruitment",
    icon: UserRoundSearch,
  },
  {
    name: "Expense Management",
    href: "/expense-management",
    icon: Receipt,
  },
  {
    name: "Asset Management",
    href: "/asset-management",
    icon: Package,
  },
  {
    name: "Reports & Analytics",
    href: "/reports-analytics",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
];

// export default function Sidebar({
//   role,
//   email,
//   sidebarHide
// }: SidebarProps) {
//   const pathname = usePathname();

//   const panel =
//     role.charAt(0).toUpperCase() + role.slice(1);

//   return (
//     <aside className="flex h-full w-64 rounded-xl flex-col border-r  dark:text-white dark:bg-gray-900 bg-primary overflow-y-auto sidebar-scroll overflow-x-hidden shrink-0">

//       <div className="mb-2 flex items-center justify-center shrink-0 pt-5">
//         {/* <SideProfilePicture /> */}

//         <Image src={"/i-protecs-logo 1 1.png"} alt="company logo" width={100} loading="eager" height={100} className="w-40 h-11"/>
//       </div>

//       <nav className="flex flex-col shrink-0 gap-2 pt-5">
//         {links.map((link) => {
//           const isActive = pathname === link.href;
//           const Icon = link.icon;

//           return (
//             <Link
            
//               key={link.href}
//               href={link.href}
//               aria-current={isActive ? "page" : undefined}
//               className={`
//                  rounded-lg w-[100%]  mx-auto flex py-2.5 
//                 transition-all duration-200 justify-center
//                 hover:bg-accent/20 shrink-0 dark:hover:bg-black dark:hover:text-white
//                 ${
//                   isActive
//                     ? "  bg-white text-primary py-2.5 "
//                     : "text-white"
//                 }
//               `}
//             >
//                    <span className="flex w-50 gap-4">
//     <Icon size={20} className="shrink-0" />
//     <span className="text-nowrap">{link.name}</span>
//   </span>
//             </Link>
//           );
//         })}
//       </nav>

//       <div className="mt-auto  pl-3 pt-10 pb-10 shrink-0">
//           {/* <div className="border-green-200 border-r-none border-t border-b border-l rounded-md"> */}
//           <Image src={"/side_bar_pic_hd.png"} alt="side bar pic" width={100} height={100} className="w-100 h-35  border-green-200 border-r-none border-t border-b border-l shadow-2xl rounded-xl" />
//          {/* </div> */}
//           {/* <LogoutButton /> */}
        
//       </div>

//     </aside>
//   );
// }



export default function Sidebar({
  role,
  email,
  sidebarHide,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className="
        flex h-full w-full
        min-w-0 shrink-0
        flex-col rounded-xl
        border-l
        bg-primary
        dark:bg-gray-900
        dark:text-white
        overflow-y-auto
        overflow-x-hidden
        sidebar-scroll
      "
    >

   
      <div className="flex h-20 shrink-0 items-center justify-center">

        {!sidebarHide ? (
          <Image
            src="/i-protecs-logo 1 1.png"
            alt="Company logo"
            width={160}
            height={44}
            loading="eager"
            className="w-40 h-11 object-contain"
          />
        ) : (
          // <LayoutDashboard
          //   size={26}
          //   className="text-white"
          // />
          <Image
            src="/logo_icon.png"
            alt="Company logo"
            width={160}
            height={44}
            loading="eager"
            className="w-30 h-9 object-contain"
          />
        )}

      </div>

 
      <nav className="flex flex-col shrink-0 gap-2 px-2 pt-2">

        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              title={sidebarHide ? link.name : undefined}
              aria-label={link.name}
              aria-current={isActive ? "page" : undefined}
              className={`
                flex w-full items-center
                rounded-lg py-2.5
                shrink-0
                transition-colors duration-200
                hover:bg-accent/20
                dark:hover:bg-black
                dark:hover:text-white

                ${
                  sidebarHide
                    ? "justify-center px-2"
                    : "justify-start px-4"
                }

                ${
                  isActive
                    ? "bg-white text-primary"
                    : "text-white"
                }
              `}
            >

              <Icon
                size={20}
                className="shrink-0"
              />

              
              {!sidebarHide && (
                <span className="ml-4 whitespace-nowrap text-sm">
                  {link.name}
                </span>
              )}

            </Link>
          );
        })}

      </nav>

      {!sidebarHide && (
        <div className="mt-auto pl-3 pt-10 pb-10 shrink-0">

          <Image
            src="/side_bar_pic_hd.png"
            alt="Sidebar illustration"
            width={100}
            height={100}
            className="
              w-full h-35
              border-green-200
              border-t border-b border-l
              shadow-2xl rounded-xl
            "
          />

        </div>
      )}

    </aside>
  );
}