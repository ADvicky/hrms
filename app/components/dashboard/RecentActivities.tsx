
import Link from "next/link";
import { Bell, ArrowRight } from "lucide-react";

// Dummy activities
const activities = [
  {
    id: 1,
    message: "You approved leave request from Priya Sharma",
    time: "2 mins ago",
  },
  {
    id: 2,
    message: "New project assigned: Mobile App Development",
    time: "15 mins ago",
  },
  {
    id: 3,
    message: "Payroll processed for July 2025",
    time: "1 hour ago",
  },
  {
    id: 4,
    message: "New employee joined: Arjun Mehta",
    time: "2 hours ago",
  },
];

export default function RecentActivities() {
  return (
    <div className="w-full rounded-xl bg-white dark:!bg-slate-500
    dark:!text-gray-300 p-5 shadow-md ">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 
    dark:!text-gray-300">
          <Bell size={22} className="fill-primary text-primary" />
          Recent Activities
        </h2>

        <Link
          href="/activities"
          className="flex items-center gap-1 text-sm font-semibold text-primary dark:!text-gray-300"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Timeline */}
      <div className="relative ml-2">

        {/* Vertical connecting line */}
        <div className="absolute bottom-5 left-[7px] top-2 w-0.5 bg-green-200" />

        <div className="space-y-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative flex items-start gap-4"
            >
              {/* Green dot */}
              <span className="relative z-10 mt-1 h-4 w-4 shrink-0 rounded-full bg-primary" />

              {/* Activity and time */}
              <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
                <p className="text-sm text-gray-900 dark:!text-gray-300">
                  {activity.message}
                </p>

                <span className="shrink-0 whitespace-nowrap text-xs text-accent dark:!text-gray-300">
                  {activity.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
