import { ArrowRight, Zap } from "lucide-react";


import {
  CalendarDays,
  BriefcaseBusiness,
  UserRoundPlus,
  FileText,
  Check,
  FilePlus2,
} from "lucide-react";
import Link from "next/link";



const quickActions = [
  {
    id: 1,
    name: "Apply Leave",
    icon: CalendarDays,
    href: "/leave-management/apply",
  },
  {
    id: 2,
    name: "Create Project",
    icon: BriefcaseBusiness,
    href: "/project-management/create",
  },
  {
    id: 3,
    name: "Add Employee",
    icon: UserRoundPlus,
    href: "/employee-management/add",
  },
  {
    id: 4,
    name: "Generate Payslip",
    icon: FileText,
    href: "/payroll/payslip",
  },
  {
    id: 5,
    name: "Create Task",
    icon: Check,
    href: "/tasks-timesheets/create",
  },
  {
    id: 6,
    name: "Generate Document",
    icon: FilePlus2,
    href: "/document-center/generate",
  },
];


function QuickActions() {

    return ( 
    <div className="w-full min-w-0 rounded-md bg-white dark:!border dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] dark:!border-white/15 dark:!bg-slate-700/20 p-3 ">

      
      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <Zap size={24} className="text-primary dark:text-white" />

          <h2 className="text-lg font-bold text-gray-900 dark:!text-white">
            Quick Actions
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

      
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 ">

        {quickActions.map((quick) => {
          const Icon = quick.icon;

          return (
            <Link
              key={quick.id}
              href={quick.href}
              className="
             group
          flex min-h-15 h-25 flex-col
          items-center justify-center
          gap-2 rounded-xl
          bg-secondary/30 dark:!bg-slate-200/10
          p-3 text-center
          transition-colors duration-200
          hover:bg-accent hover:shadow-md
          dark:hover:!bg-accent
              "
            >
              <Icon
                size={28}
                className="shrink-0 text-primary group-hover:text-white dark:text-secondary"
              />

              <span className="text-sm font-medium leading-tight text-gray-900 group-hover:text-white dark:text-gray-300">
                {quick.name}
              </span>
            </Link>
          );
        })}

      </div>
    </div>
     );
}

export default QuickActions;