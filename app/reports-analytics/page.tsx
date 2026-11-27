"use client";

import React, { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import DocumentCentersidemenu from "@/app/components/DocumentCentersidemenu";
import ReportContent from "@/app/components/ReportContent";
import SystemSettings from "@/app/components/SystemSettings";

const reportLinks = [
  { id: "hr_reports", name: "HR Reports" },
  { id: "payroll_reports", name: "Payroll Reports" },
  { id: "attendance_reports", name: "Attendance Reports" },
  { id: "project_reports", name: "Project Reports" },
  { id: "leave_reports", name: "Leave Reports" },
  { id: "custom_reports", name: "Custom Reports" },
];

function ReportAnalytics() {

  const [value, setValue] = useState(0);

  const [selectedSetting, setSelectedSetting] =
    useState<string | null>(null);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  function handleSettingSelect(id: string) {
    setSelectedSetting(id);
    setValue(1);
  }

  return (
    <div className="w-full min-w-0">

      <div className="p-4 md:p-8 flex flex-col gap-6">


        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Report analytics tabs"
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
            minHeight: 4,
            fontSize: "14px",
            fontWeight: 600,
            // borderRadius: "10px",
            color: "#64748b",
            padding: "5px 20px",
            
          },

          "& .MuiTab-root.Mui-selected": {
  // backgroundColor: "#d1fae5",
  color: "#166534",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,

    width: "80%",
    height: "3px",
    backgroundColor: "#166534",
    borderRadius: "4px",
  },
},
        }}
        >
          <Tab label="Reports" />
          <Tab label="Settings" />
        </Tabs>


        {value === 0 && (
          <div className="flex flex-col gap-8">

            <DocumentCentersidemenu
              nav={true}
              links={reportLinks}
              renderContent={(category) => (
                <ReportContent category={category} />
              )}
            />

            <SystemSettings
              onSelect={handleSettingSelect}
            />

          </div>
        )}

        {value === 1 && (
          <div className="flex flex-col gap-6">

            <SystemSettings
              onSelect={handleSettingSelect}
            />

            {selectedSetting && (
              <div
                className="bg-white  rounded-xl p-6
                shadow-[0_0_10px_rgba(0,0,0,0.08)]"
              >
                {selectedSetting === "users_roles" && (
                  <h2>Users & Roles Management</h2>
                )}

                {selectedSetting === "company_settings" && (
                  <h2>Company Settings</h2>
                )}

                {selectedSetting === "notifications" && (
                  <h2>Notification Settings</h2>
                )}

                {selectedSetting === "security" && (
                  <h2>Security Settings</h2>
                )}
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
}

export default ReportAnalytics;