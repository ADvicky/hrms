"use client";

import React, { useState } from "react";

// Parent component props
interface EmployeeProfileInformationProps {
  edit: boolean;
  onCloseEdit:() => void
}

// Reusable information row props
interface InformationRowProps {
  label: string;
  value: string;
  edit: boolean;
  onChange: (value: string) => void;
  type?: string;
  options?: string[];
  labelWidth?: "personal" | "employment";
}

// Reusable information row
function InformationRow({
  label,
  value,
  edit,
  onChange,
  type = "text",
  options,
  labelWidth = "personal",
}: InformationRowProps) {

  const inputClass =
    "w-full min-w-0 border border-gray-300 dark:!text-white rounded-md dark:!border dark:!border-white/15 px-2 py-1 outline-none focus:border-green-600";

  return (
    <div
      className={`grid items-center gap-2 ${
        labelWidth === "personal"
          ? "grid-cols-[110px_8px_minmax(0,1fr)]"
          : "grid-cols-[150px_8px_minmax(0,1fr)]"
      }`}
    >

      <span className="text-gray-500 dark:!text-white">
        {label}
      </span>

      <span>:</span>

      {edit ? (

        options ? (

          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={inputClass}
          >

            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}

          </select>

        ) : (

          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={inputClass}
          />

        )

      ) : (

        <p
          className={`break-words ${
            label === "Status" && value === "Active"
              ? "text-green-600 font-medium"
              : ""
          }`}
        >
          {value}
        </p>

      )}

    </div>
  );
}



function EmployeeProfileInformation({
  edit,onCloseEdit
}: EmployeeProfileInformationProps) {

//   const [employee, setEmployee] = useState({
//     fullname: "Priya Sharma",
//     dob: "1995-08-15",
//     email: "Priya.sharma@iprotecs.com",
//     mobile: "+91 96765 43210",
//     address: "123 Green Park, Chennai",
//     department: "HR",
//     designation: "HR Manager",
//     joiningDate: "2022-01-01",
//     employmentType: "Full Time",
//     status: "Active",
//   });

const [employee, setEmployee] = useState({
  fullname: "Priya Sharma",
  dob: "1995-08-15",
  email: "Priya.sharma@iprotecs.com",
  mobile: "+91 96765 43210",
  address: "123 Green Park, Chennai",
  department: "HR",
  designation: "HR Manager",
  joiningDate: "2022-01-01",
  employmentType: "Full Time",
  status: "Active",
});
const [draft, setDraft] = useState({ ...employee });



const updateEmployee = (
  field: keyof typeof employee,
  value: string
) => {
  setDraft((prev) => ({
    ...prev,
    [field]: value,
  }));
};
const handleSave = () => {
  
  setEmployee({ ...draft });

 
  onCloseEdit();
};
const handleCancel = () => {
  
  setDraft({ ...employee });

  
  onCloseEdit();
};

const displayEmployee = edit ? draft : employee;


  return (
    <div className="w-full min-w-0 p-2 md:pt-6">

  <div className="
    grid
    grid-cols-1
    xl:grid-cols-2
    gap-4
    items-stretch
    auto-rows-auto
  ">


      <div className="
  flex flex-col
  gap-6
  w-full min-w-0
  min-h-[380px]
  xl:min-h-[480px]
  bg-white
  rounded-md
  p-4 md:p-6
  shadow-[0_0_10px_rgba(0,0,0,0.12)]
  dark:!border
  dark:!border-white/15
  dark:!bg-slate-700/50
  dark:!text-white
">

  <h1 className="text-xl font-semibold shrink-0">
    Personal Information
  </h1>

  <div className="flex flex-col flex-1 justify-evenly gap-4">

            <InformationRow
              label="Full Name"
            //   value={employee.fullname}
            value={displayEmployee.fullname}
              edit={edit}
              onChange={(value) =>
                updateEmployee("fullname", value)
              }
            />

            <InformationRow
              label="Date of Birth"
              type="date"
            //   value={employee.dob}
              value={displayEmployee.dob}
              edit={edit}
              onChange={(value) =>
                updateEmployee("dob", value)
              }
            />

            <InformationRow
              label="Email"
              value={displayEmployee.email}
              type="email"
            //   value={employee.email}
              edit={edit}
              onChange={(value) =>
                updateEmployee("email", value)
              }
            />

            <InformationRow
              label="Mobile"
              type="tel"
            //   value={employee.mobile}
              value={displayEmployee.mobile}

              edit={edit}
              onChange={(value) =>
                updateEmployee("mobile", value)
              }
            />

            <InformationRow
              label="Address"
            //   value={employee.address}
              value={displayEmployee.address}

              edit={edit}
              onChange={(value) =>
                updateEmployee("address", value)
              }
            />

          </div>

        </div>


       
<div className="
  flex flex-col
  gap-6
  w-full min-w-0
  min-h-[380px]
  xl:min-h-[480px]
  bg-white
  rounded-md
  p-4 md:p-6
  shadow-[0_0_10px_rgba(0,0,0,0.12)]
  dark:!border
  dark:!border-white/15
  dark:!bg-slate-700/50
  dark:!text-white
">

  <h1 className="text-xl font-semibold shrink-0">
    Employment Information
  </h1>

  <div className="flex flex-col flex-1 justify-evenly gap-4">

            <InformationRow
              label="Department"
              labelWidth="employment"
            //   value={employee.department}
               value={displayEmployee.department}
              edit={edit}
              options={[
                "HR",
                "IT",
                "Finance",
                "Operations",
                "Sales",
              ]}
              onChange={(value) =>
                updateEmployee("department", value)
              }
            />

            <InformationRow
              label="Designation"
              labelWidth="employment"
            //   value={employee.designation}
              value={displayEmployee.designation}
              edit={edit}
              onChange={(value) =>
                updateEmployee("designation", value)
              }
            />

            <InformationRow
              label="Joining Date"
              labelWidth="employment"
              type="date"
            //   value={employee.joiningDate}
              value={displayEmployee.joiningDate}
              edit={edit}
              onChange={(value) =>
                updateEmployee("joiningDate", value)
              }
            />

            <InformationRow
              label="Employment Type"
              labelWidth="employment"
            //   value={employee.employmentType}
              value={displayEmployee.employmentType}
              edit={edit}
              options={[
                "Full Time",
                "Part Time",
                "Contract",
                "Intern",
              ]}
              onChange={(value) =>
                updateEmployee("employmentType", value)
              }
            />

            <InformationRow
              label="Status"
              labelWidth="employment"
            //   value={employee.status}
              value={displayEmployee.status}
              edit={edit}
              options={[
                "Active",
                "Inactive",
                "On Leave",
              ]}
              onChange={(value) =>
                updateEmployee("status", value)
              }
            />

          </div>

        </div>
{edit && (
  <div className="col-span-full flex justify-end items-center gap-3 pt-4">

    <button
      type="button"
      onClick={handleCancel}
      className="w-full max-w-32 p-2 dark:!bg-slate-200 border rounded-md cursor-pointer"
    >
      Cancel
    </button>

    <button
      type="button"
      onClick={handleSave}
      className="w-full max-w-32 p-2 bg-secondary text-white rounded-md cursor-pointer"
    >
      Save
    </button>

  </div>
)}
      </div>

    </div>
  );
}

export default EmployeeProfileInformation;