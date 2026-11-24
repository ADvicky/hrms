"use client";

import React from "react";
import {
  FileText,
  FileSpreadsheet,
  FileType,
} from "lucide-react";

const documents = [
  {
    id: 1,
    name: "Employee Offer Letter",
    category: "hr",
    type: "word",
    icon: FileType,
    color: "text-blue-600",
  },
  {
    id: 2,
    name: "Payslip Template",
    category: "finance",
    type: "pdf",
    icon: FileText,
    color: "text-red-600",
  },
  {
    id: 3,
    name: "Leave Policy",
    category: "policies",
    type: "excel",
    icon: FileSpreadsheet,
    color: "text-green-600",
  },
  {
    id: 4,
    name: "Project Report Template",
    category: "project",
    type: "word",
    icon: FileType,
    color: "text-cyan-600",
  },
];

interface SampleDocumentsProps {
  category: string;
  search: string;
}

function SampleDocuments({
  category,
  search,
}: SampleDocumentsProps) {

  const filteredDocuments = documents.filter((doc) => {

    const matchesCategory =
      category === "all" || doc.category === category;

    const matchesSearch = doc.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">

      {filteredDocuments.length === 0 ? (

        <div className="flex justify-center items-center
          min-h-[200px] text-gray-500">

          No documents found.

        </div>

      ) : (

        <div className="grid grid-cols-2
          sm:grid-cols-3 xl:grid-cols-4 gap-4">

          {filteredDocuments.map((doc) => {

            const Icon = doc.icon;

            return (
              <button
                key={doc.id}
                type="button"
                className="flex flex-col items-center
                  justify-start gap-3 p-3 rounded-xl
                  hover:bg-gray-100 dark:hover:bg-gray-700
                  cursor-pointer transition-colors"
              >

                {/* Document icon */}
                <Icon
                  size={48}
                  strokeWidth={1.8}
                  className={doc.color}
                />

                {/* Document name */}
                <span className="text-sm font-medium
                  text-gray-700 dark:text-gray-300
                  text-center max-w-[130px] break-words">

                  {doc.name}

                </span>

              </button>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default SampleDocuments;