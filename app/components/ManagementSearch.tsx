"use client";

import { Search } from "lucide-react";

interface ManagementSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function ManagementSearch({
  value,
  onChange,
  placeholder = "Search...",
}: ManagementSearchProps) {

  return (
    <div className="relative w-full md:max-w-[400px]">

      <Search
        size={20}
        className="absolute left-4 top-1/2
        -translate-y-1/2 text-emerald-700"
      />

      <input
        type="text"
        value={value}
        aria-label={placeholder}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white
        dark:bg-gray-800 dark:text-white
        pl-12 pr-4 py-3 outline-none
        border border-gray-200
        focus:border-emerald-500"
      />

    </div>
  );
}

export default ManagementSearch;