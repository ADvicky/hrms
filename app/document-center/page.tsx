"use client";

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ArrowRight, Search } from "lucide-react";
import DocumentCentersidemenu from "@/app/components/DocumentCentersidemenu";

function DocumentCenter() {
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState("");

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <div className="w-full rounded-2xl bg-[#f5f9f7]
      dark:bg-gray-900 p-8 flex flex-col gap-4">
        <div className="self-end p-2">
            <button className="flex gap-2">All <ArrowRight /></button>
        </div>

      
      <div className="relative w-full">

        <Search
          size={22}
          className="absolute left-4 top-1/2
          -translate-y-1/2 text-emerald-800"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search documents..."
          className="w-full rounded-xl bg-white
          dark:bg-gray-800 dark:text-white
          pl-12 pr-4 py-3 shadow-sm
          outline-none border border-gray-100
          focus:border-emerald-400"
        />

      </div>

   
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Document center tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          minHeight: 42,

          "& .MuiTabs-indicator": {
            display: "none",
          },

          "& .MuiTabs-flexContainer": {
            gap: "8px",
          },

          "& .MuiTab-root": {
            textTransform: "none",
            minHeight: 42,
            fontSize: "14px",
            fontWeight: 600,
            borderRadius: "20px",
            color: "#64748b",
            padding: "8px 20px",
            
          },

          "& .MuiTab-root.Mui-selected": {
  backgroundColor: "#d1fae5",
  color: "#166534",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "15%",
    width: "70%",
    height: "3px",
    backgroundColor: "#166534",
    borderRadius: "4px",
  },
},
        }}
      >
        <Tab label="Categories" />
        <Tab label="My Documents" />
        <Tab label="Shared" />
      </Tabs>

    
      {value === 0 && (
        <DocumentCentersidemenu search={search} />
      )}

      {value === 1 && (
        <div className="p-4">My Documents</div>
      )}

      {value === 2 && (
        <div className="p-4">Shared Documents</div>
      )}

    </div>
  );
}

export default DocumentCenter;