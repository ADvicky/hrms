
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

export default function Sidebar({
  role,
  email,
}: SidebarProps) {
  const pathname = usePathname();

  const panel =
    role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <aside className="flex h-full w-64  flex-col border-r dark:text-white dark:bg-gray-900 bg-primary overflow-y-auto sidebar-scroll overflow-x-hidden shrink-0">

      <div className="mb-2 flex items-center justify-center shrink-0 pt-5">
        {/* <SideProfilePicture /> */}

        <Image src={"/iprotects_logo_1.png"} alt="company logo" width={100} loading="eager" height={100} className="w-40 h-10"/>
      </div>

      <nav className="flex flex-col shrink-0 gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
            
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`
                 rounded-lg w-[96%]  mx-auto flex py-2.5 
                transition-all duration-200 justify-center
                hover:bg-accent shrink-0
                ${
                  isActive
                    ? "  bg-accent text-light py-2.5 "
                    : "text-white"
                }
              `}
            >
                   <span className="flex w-50 gap-4">
    <Icon size={20} className="shrink-0" />
    <span className="text-nowrap">{link.name}</span>
  </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto  pl-3 pt-10 pb-10 shrink-0">
          {/* <div className="border-green-200 border-r-none border-t border-b border-l rounded-md"> */}
          <Image src={"/side_bar_pic_hd.png"} alt="side bar pic" width={100} height={100} className="w-100 h-35  border-green-200 border-r-none border-t border-b border-l shadow-2xl rounded-xl" />
         {/* </div> */}
          {/* <LogoutButton /> */}
        
      </div>

    </aside>
  );
}
