"use client";

import React from "react";

import {
  UsersRound,
  Building2,
  Bell,
  ShieldCheck,
} from "lucide-react";

const settings = [
  {
    id: "users_roles",
    name: "Users & Roles",
    icon: UsersRound,
  },
  {
    id: "company_settings",
    name: "Company Settings",
    icon: Building2,
  },
  {
    id: "notifications",
    name: "Notifications",
    icon: Bell,
  },
  {
    id: "security",
    name: "Security",
    icon: ShieldCheck,
  },
];

interface SystemSettingsProps {
  onSelect?: (id: string) => void;
}

function SystemSettings({ onSelect }: SystemSettingsProps) {

  return (
    <div className="w-full flex flex-col gap-4">

      <h2 className="text-xl font-semibold">
        System Settings
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        {settings.map((setting) => {

          const Icon = setting.icon;

          return (
            <button
              key={setting.id}
              type="button"
              onClick={() => onSelect?.(setting.id)}
              className="bg-white dark:bg-gray-800
              rounded-xl p-5 min-h-[120px]
              flex flex-col items-center justify-center
              gap-3 cursor-pointer
              shadow-[0_0_10px_rgba(0,0,0,0.08)]
              hover:bg-emerald-50 dark:hover:bg-gray-700
              transition-colors"
            >

              <Icon
                size={32}
                className="text-emerald-700"
              />

              <span className="text-sm font-semibold text-center">
                {setting.name}
              </span>

            </button>
          );
        })}

      </div>
    </div>
  );
}

export default SystemSettings;