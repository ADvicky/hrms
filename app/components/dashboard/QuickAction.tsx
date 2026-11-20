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
    <div className="w-full min-w-0 rounded-xl bg-white dark:!text-gray-300 dark:!bg-slate-500 p-3 shadow-md  ">

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <Zap size={24} className="text-primary" />

          <h2 className="text-lg font-bold text-gray-900 dark:!text-gray-300">
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

      {/* Quick Action Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 ">

        {quickActions.map((quick) => {
          const Icon = quick.icon;

          return (
            <Link
              key={quick.id}
              href={quick.href}
              className="
                flex min-h-15 h-25 flex-col
                items-center justify-center
                gap-2 rounded-xl
                bg-light dark:!bg-slate-200 p-3 text-center
                transition-colors duration-200
                hover:bg-accent dark:hover:!bg-slate-300
              "
            >
              <Icon
                size={28}
                className="shrink-0 text-primary"
              />

              <span className="text-sm font-medium leading-tight text-gray-900">
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