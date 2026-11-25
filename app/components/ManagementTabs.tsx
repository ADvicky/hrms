"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface ManagementTabsProps {
  tabs: string[];
  value: number;
  onChange: (value: number) => void;
}

function ManagementTabs({
  tabs,
  value,
  onChange,
}: ManagementTabsProps) {

  return (
    <Tabs
      value={value}
      onChange={(_, newValue: number) => onChange(newValue)}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="Management tabs"
      sx={{
        minHeight: 42,

        "& .MuiTabs-indicator": {
          display: "none",
        },

        "& .MuiTab-root": {
          textTransform: "none",
          minHeight: 42,
          fontSize: "14px",
          fontWeight: 600,
          borderRadius: "20px",
          color: "#64748b",
          padding: "8px 20px",
          marginRight: "8px",
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
      {tabs.map((tab) => (
        <Tab key={tab} label={tab} />
      ))}
    </Tabs>
  );
}

export default ManagementTabs;