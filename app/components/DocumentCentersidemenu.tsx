"use client";

import React, { useState } from "react";
import SampleDocuments from "@/app/sample-document/page";

const links = [
  { id: "all", name: "All" },
  { id: "hr", name: "HR Documents" },
  { id: "finance", name: "Finance" },
  { id: "project", name: "Projects" },
  { id: "policies", name: "Policies" },
  { id: "others", name: "Others" },
];

interface DocumentCentersidemenuProps {
  search: string;
}

function DocumentCentersidemenu({
  search,
}: DocumentCentersidemenuProps) {

  const [activeMenu, setActiveMenu] = useState("all");

  return (
    <div className="grid w-full grid-cols-1
      md:grid-cols-[180px_minmax(0,1fr)] gap-2">

      
      <aside className="w-full min-h-0 md:min-h-[500px]
        bg-background dark:bg-gray-800
        rounded-xl p-3">

        <nav className="flex flex-col gap-2">

          {links.map((link) => {

            const isActive = activeMenu === link.id;

            return (
              <button
                key={link.id}
                onClick={() => setActiveMenu(link.id)}
                className={`
                  w-full rounded-xl px-4 py-2.5
                  text-left text-sm font-semibold
                  cursor-pointer transition-colors
                  hover:bg-emerald-100
                  dark:hover:text-emerald-900
                  ${
                    isActive
                      ? "bg-emerald-100 text-emerald-800"
                      : "text-gray-700 dark:text-gray-300"
                  }
                `}
              >
                {link.name}
              </button>
            );
          })}

        </nav>

      </aside>

      
      <div className="w-full min-w-0 min-h-[340px]
        bg-white dark:bg-gray-800
        rounded-xl p-4 shadow-sm">

        <SampleDocuments
          category={activeMenu}
          search={search}
        />

      </div>

    </div>
  );
}

export default DocumentCentersidemenu;