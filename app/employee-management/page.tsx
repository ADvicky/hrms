
"use client";

import * as React from "react";
import { Suspense } from "react";
import { Plus, Search, X } from "lucide-react";

import {
  DataGrid,
  type GridColDef,
} from "@mui/x-data-grid";

import {
  FormControl,
  MenuItem,
  Select,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import {
  Package,
  UserCheck,
  Boxes,
  Wrench,
} from "lucide-react";
import { useRouter } from "next/navigation";
import DashboardKpiCards from "../components/DashboardKpiCards";
// import EmployeeDataPage from "../employee-data/page";

type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  status: "active" | "inactive";
};

const cards = [
    {
      title: "Employee",
      value: 60,
      icon: Package,
    },
    {
      title: "Present",
      value: 55,
      icon: UserCheck,
      // color: "text-blue-600",
    },
    {
      title: "Absent",
      value: 5,
      icon: Boxes,
    },
    {
      title: "Late",
      value:10,
      icon: Wrench,
      // color: "text-yellow-600",
    },
  ];

const initialRows: Employee[] = [
  {
    id: 1,
    firstName: "Jon",
    lastName: "Snow",
    age: 35,
    status: "active",
  },
  {
    id: 2,
    firstName: "Cersei",
    lastName: "Lannister",
    age: 42,
    status: "active",
  },
  {
    id: 3,
    firstName: "Jaime",
    lastName: "Lannister",
    age: 45,
    status: "inactive",
  },
  {
    id: 4,
    firstName: "Arya",
    lastName: "Stark",
    age: 16,
    status: "active",
  },
];
// interface KpiCard {
//   title: string;
//   value: string | number;
//   icon: LucideIcon;
//   color?: string;
// }

// interface DashboardKpiCardsProps {
//   cards: KpiCard[];
// }
export default function EmployeeManagement() {
  const router = useRouter()
  const [employees, setEmployees] =
    React.useState<Employee[]>(initialRows);

  const [search, setSearch] = React.useState("");
  const [age, setAge] = React.useState("");
  const [status, setStatus] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    age: "",
    status: "active" as Employee["status"],
  });

  const columns: GridColDef<Employee>[] = [
    {
      field: "id",
      headerName: "Employee ID",
      width: 150,
    },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "age",
      headerName: "Age",
      width: 120,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
      minWidth: 200,
      valueGetter: (_value, row) =>
        `${row.firstName} ${row.lastName}`,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => (
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            params.value === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {params.value === "active"
            ? "Active"
            : "Inactive"}
        </span>
      ),
    },
  ];

  const handleEmployeeProfile = (
  id: number|string,
  fullName: string
) => {
  console.log("fullname",fullName);
  
  // return <EmployeeData id={id} fullname={fullname} />;
   router.push(
    `/employee-data?id=${encodeURIComponent(id)}&fullName=${encodeURIComponent(fullName)}`
  );
};

  const filteredRows = employees.filter((employee) => {
    const fullName =
      `${employee.firstName} ${employee.lastName}`.toLowerCase();

    const matchesSearch =
      fullName.includes(search.toLowerCase()) ||
      String(employee.id).includes(search);

    const matchesAge =
      age === "" || employee.age === Number(age);

    const matchesStatus =
      status === "" || employee.status === status;

    return matchesSearch && matchesAge && matchesStatus;
  });

  const handleAddEmployee = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const employeeAge = Number(form.age);

    if (
      !firstName ||
      !lastName ||
      !Number.isInteger(employeeAge) ||
      employeeAge < 1
    ) {
      return;
    }

    const newEmployee: Employee = {
      id:
        employees.length > 0
          ? Math.max(...employees.map((emp) => emp.id)) + 1
          : 1,
      firstName,
      lastName,
      age: employeeAge,
      status: form.status,
    };

    setEmployees((prev) => [...prev, newEmployee]);

    setForm({
      firstName: "",
      lastName: "",
      age: "",
      status: "active",
    });

    setOpen(false);
  };

  return (
    <div className="w-full p-6">
 
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 ">
        <div>
          <h1 className="text-2xl font-bold  dark:!text-white ">
            Employee Management
          </h1>
          {/* <p className="mt-2 text-sm text-gray-500">
            Manage and view your employees
          </p> */}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 rounded-lg bg-secondary px-2 py-1.5 text-sm  font-medium text-white"
        >
          <Plus size={20} />
          Add Employee
        </button>
      </div>

      <DashboardKpiCards cards={cards} />
      <div className="mb-6 flex flex-wrap items-center gap-4 pt-5">
        <div className="relative w-full max-w-md">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search employees..."
            className="h-10 w-full rounded-lg border border-gray-300 bg-white pl-12 pr-4 text-black  outline-none focus:border-blue-500"
          />
        </div>

        {/* <FormControl sx={{ minWidth: 150 }}>
          <Select
            value={age}
            onChange={(event) =>
              setAge(event.target.value)
            }
            displayEmpty
            size="small"
          >
            <MenuItem value="">All Ages</MenuItem>
            {[...new Set(employees.map((emp) => emp.age))]
              .sort((a, b) => a - b)
              .map((value) => (
                <MenuItem key={value} value={String(value)}>
                  {value}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }}>
          <Select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value)
            }
            displayEmpty
            size="small"
          >
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </FormControl> */}
        <FormControl sx={{ minWidth: 150 }}>
  <Select
    value={age}
    onChange={(event) =>
      setAge(event.target.value)
    }
    displayEmpty
    size="small"
    sx={{
      color: "text.primary",
      backgroundColor: "background.paper",

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "divider",
      },

      "& .MuiSelect-icon": {
        color: "text.secondary",
      },
    }}
  >
    <MenuItem value="">All Ages</MenuItem>

    {[...new Set(employees.map((emp) => emp.age))]
      .sort((a, b) => a - b)
      .map((value) => (
        <MenuItem key={value} value={String(value)}>
          {value}
        </MenuItem>
      ))}
  </Select>
</FormControl>

<FormControl sx={{ minWidth: 150 }}>
  <Select
    value={status}
    onChange={(event) =>
      setStatus(event.target.value)
    }
    displayEmpty
    size="small"
    sx={{
      color: "text.primary",
      backgroundColor: "background.paper",

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "divider",
      },

      "& .MuiSelect-icon": {
        color: "text.secondary",
      },
    }}
  >
    <MenuItem value="">All Status</MenuItem>
    <MenuItem value="active">Active</MenuItem>
    <MenuItem value="inactive">Inactive</MenuItem>
  </Select>
</FormControl>
      </div>

      
      {/* <Paper
        elevation={0}
        sx={{
          width: "100%",
          borderRadius: 3,
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={columns}
          autoHeight
          initialState={{
            pagination: {
              paginationModel: {
                page: 0,
                pageSize: 5,
              },
            },
          }}
          onRowClick={handleEmployeeProfile}
          pageSizeOptions={[5, 10, 25]}
          rowHeight={65}
          columnHeaderHeight={65}
          sx={{
            border: 0,

            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f1f5f9",
            },

            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#f1f5f9",
            },

            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 700,
              fontSize: "14px",
            },

            "& .MuiDataGrid-cell": {
              fontSize: "14px",
              paddingLeft: "20px",
              paddingRight: "20px",
            },

            // "& .MuiDataGrid-columnHeader": {
            //   paddingLeft: "20px",
            //   paddingRight: "20px",
            // },

            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f8fafc",
            },
          }}
        />
      </Paper> */}
      {/* <Paper
  elevation={0}
  sx={{
    width: "100%",
    borderRadius: 3,
    overflow: "hidden",
    border: "1px solid",
    borderColor: "divider",
  }}
>
  <Suspense
    fallback={
      <div className="flex items-center justify-center h-[400px]">
        Loading employees...
      </div>
    }
  >
    <DataGrid
      rows={filteredRows}
      columns={columns}
      autoHeight
      initialState={{
        pagination: {
          paginationModel: {
            page: 0,
            pageSize: 5,
          },
        },
      }}
      onRowClick={(params) =>{
        const fullName= `${params.row.firstName} ${params.row.lastName}`
  handleEmployeeProfile(
    params.row.id,
    fullName
    
  )}
}
      pageSizeOptions={[5, 10, 25]}
      rowHeight={65}
      columnHeaderHeight={65}
      sx={{
        border: 0,

        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#f1f5f9",
        },

        "& .MuiDataGrid-columnHeader": {
          backgroundColor: "#f1f5f9",
        },

        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: 700,
          fontSize: "14px",
        },

        "& .MuiDataGrid-cell": {
          fontSize: "14px",
          paddingLeft: "20px",
          paddingRight: "20px",
        },

        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#f8fafc",
          cursor: "pointer",
        },
      }}
    />
  </Suspense>
</Paper> */}

{/* <Paper
  elevation={0}
  sx={{
    width: "100%",
    borderRadius: 3,
    overflow: "hidden",
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
    color: "text.primary",
  }}
>
  <Suspense
    fallback={
      <div className="flex items-center justify-center h-[400px] dark:text-gray-300">
        Loading employees...
      </div>
    }
  >
    <DataGrid
      rows={filteredRows}
      columns={columns}
      autoHeight
      initialState={{
        pagination: {
          paginationModel: {
            page: 0,
            pageSize: 5,
          },
        },
      }}
      onRowClick={(params) => {
        const fullName =
          `${params.row.firstName} ${params.row.lastName}`;

        handleEmployeeProfile(
          params.row.id,
          fullName
        );
      }}
      pageSizeOptions={[5, 10, 25]}
      rowHeight={65}
      columnHeaderHeight={65}
      sx={(theme) => ({
        border: 0,

        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,

        
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "#334155"
              : "#f1f5f9",
        },

      
        "& .MuiDataGrid-columnHeader": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "#334155"
              : "#f1f5f9",

          color: theme.palette.text.primary,
        },

     
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: 700,
          fontSize: "14px",
        },

        
        "& .MuiDataGrid-cell": {
          fontSize: "14px",
          paddingLeft: "20px",
          paddingRight: "20px",
          color: theme.palette.text.primary,
          borderColor: theme.palette.divider,
        },

       
        "& .MuiDataGrid-row:hover": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "#334155"
              : "#f8fafc",

          cursor: "pointer",
        },

      
        "& .MuiDataGrid-footerContainer": {
          backgroundColor:
            theme.palette.background.paper,

          borderColor: theme.palette.divider,
        },

        // Pagination text
        "& .MuiTablePagination-root": {
          color: theme.palette.text.primary,
        },

        // Icons
        "& .MuiSvgIcon-root": {
          color: theme.palette.text.secondary,
        },

        // Column separators
        "& .MuiDataGrid-columnSeparator": {
          color: theme.palette.divider,
        },
      })}
    />
  </Suspense>
</Paper> */}

<Paper
  elevation={0}
  className="
    w-full !rounded-xl overflow-hidden
    border border-gray-200 
    !bg-white !text-gray-900
    dark:!bg-black
    dark:!text-gray-100
    dark:!border-slate-600
  "
>
  <Suspense
    fallback={
      <div
        className="
          flex items-center justify-center
          h-[400px]
          dark:text-gray-300
        "
      >
        Loading employees...
      </div>
    }
  >
    <DataGrid
      rows={filteredRows}
      columns={columns}
      autoHeight
      initialState={{
        pagination: {
          paginationModel: {
            page: 0,
            pageSize: 5,
          },
        },
      }}
      onRowClick={(params) => {
        const fullName =
          `${params.row.firstName} ${params.row.lastName}`;

        handleEmployeeProfile(
          params.row.id,
          fullName
        );
      }}
      pageSizeOptions={[5, 10, 25]}
      rowHeight={75}
      columnHeaderHeight={75}
      // className="
      //   !border-0
      //   !bg-white
      //   !text-gray-900
      //   dark:!bg-black
      //   dark:!text-gray-100
        

      //   [&_.MuiDataGrid-columnHeaders]:!bg-slate-100
      //   dark:[&_.MuiDataGrid-columnHeaders]:!bg-black

      //   [&_.MuiDataGrid-columnHeader]:!bg-slate-100
      //   [&_.MuiDataGrid-columnHeader]:!text-gray-900
      //   dark:[&_.MuiDataGrid-columnHeader]:!bg-black
      //   dark:[&_.MuiDataGrid-columnHeader]:!text-white

      //   [&_.MuiDataGrid-columnHeaderTitle]:!font-bold
      //   [&_.MuiDataGrid-columnHeaderTitle]:!text-sm

      //   [&_.MuiDataGrid-cell]:!text-sm
      //   [&_.MuiDataGrid-cell]:!px-5
      //   [&_.MuiDataGrid-cell]:!text-gray-900
      //   [&_.MuiDataGrid-cell]:!border-gray-200
      //   dark:[&_.MuiDataGrid-cell]:!text-gray-100
      //   dark:[&_.MuiDataGrid-cell]:!border-slate-600

      //   [&_.MuiDataGrid-row:hover]:!bg-slate-50
      //   [&_.MuiDataGrid-row:hover]:cursor-pointer
      //   dark:[&_.MuiDataGrid-row:hover]:!bg-slate-700

      //   [&_.MuiDataGrid-footerContainer]:!bg-white
      //   [&_.MuiDataGrid-footerContainer]:!border-gray-200
      //   dark:[&_.MuiDataGrid-footerContainer]:!bg-slate-800
      //   dark:[&_.MuiDataGrid-footerContainer]:!border-slate-600

      //   [&_.MuiTablePagination-root]:!text-gray-900
      //   dark:[&_.MuiTablePagination-root]:!text-gray-100

      //   [&_.MuiSvgIcon-root]:!text-gray-500
      //   dark:[&_.MuiSvgIcon-root]:!text-gray-300

      //   [&_.MuiDataGrid-columnSeparator]:!text-gray-300
      //   dark:[&_.MuiDataGrid-columnSeparator]:!text-slate-500

      //   [&_.MuiDataGrid-filler]:!bg-slate-100
      //   dark:[&_.MuiDataGrid-filler]:!bg-slate-700
      // "
      className="
  !border-0
  !bg-white
  !text-gray-900
  dark:!bg-black
  dark:!text-gray-100

  [&_.MuiDataGrid-columnHeaders]:!bg-slate-100
  dark:[&_.MuiDataGrid-columnHeaders]:!bg-black

  [&_.MuiDataGrid-columnHeader]:!bg-slate-100
  [&_.MuiDataGrid-columnHeader]:!text-gray-900
  [&_.MuiDataGrid-columnHeader]:!px-5
  dark:[&_.MuiDataGrid-columnHeader]:!bg-slate-900
  dark:[&_.MuiDataGrid-columnHeader]:!text-white

[&_.MuiDataGrid-columnSeparator]:!text-gray-300
dark:[&_.MuiDataGrid-columnSeparator]:!text-slate-500
[&_.MuiDataGrid-columnSeparator]:!hidden

  [&_.MuiDataGrid-columnHeaderTitleContainer]:!justify-center
  [&_.MuiDataGrid-columnHeaderTitleContainer]:!items-center

  [&_.MuiDataGrid-columnHeaderTitle]:!font-bold
  [&_.MuiDataGrid-columnHeaderTitle]:!text-sm

  [&_.MuiDataGrid-cell]:!text-sm
  [&_.MuiDataGrid-cell]:!px-5
  [&_.MuiDataGrid-cell]:!flex
  [&_.MuiDataGrid-cell]:!items-center
  [&_.MuiDataGrid-cell]:!justify-center
  [&_.MuiDataGrid-cell]:!text-gray-900
  [&_.MuiDataGrid-cell]:!border-gray-200
  dark:[&_.MuiDataGrid-cell]:!text-gray-100
  dark:[&_.MuiDataGrid-cell]:!border-slate-600

  [&_.MuiDataGrid-row:hover]:!bg-slate-50
  [&_.MuiDataGrid-row:hover]:cursor-pointer
  dark:[&_.MuiDataGrid-row:hover]:!bg-gray-700
  

  [&_.MuiDataGrid-footerContainer]:!bg-white
  [&_.MuiDataGrid-footerContainer]:!border-gray-200
  dark:[&_.MuiDataGrid-footerContainer]:!bg-black
  dark:[&_.MuiDataGrid-footerContainer]:!border-slate-600

  [&_.MuiTablePagination-root]:!text-gray-900
  dark:[&_.MuiTablePagination-root]:!text-white

  dark:[&_.MuiTablePagination-toolbar]:!bg-black
  dark:[&_.MuiTablePagination-selectLabel]:!text-white
  dark:[&_.MuiTablePagination-displayedRows]:!text-white
  dark:[&_.MuiTablePagination-select]:!text-white
  dark:[&_.MuiTablePagination-selectIcon]:!text-white

  [&_.MuiSvgIcon-root]:!text-gray-500
  dark:[&_.MuiSvgIcon-root]:!text-gray-300

  dark:[&_.MuiTablePagination-actions_.MuiIconButton-root]:!text-white
  dark:[&_.MuiTablePagination-actions_.Mui-disabled]:!opacity-30

  [&_.MuiDataGrid-columnSeparator]:!text-gray-300
  dark:[&_.MuiDataGrid-columnSeparator]:!text-slate-500

  [&_.MuiDataGrid-filler]:!bg-slate-100
  dark:[&_.MuiDataGrid-filler]:!bg-black

  dark:[&_.MuiDataGrid-scrollbarFiller]:!bg-black
  dark:[&_.MuiDataGrid-overlay]:!bg-black
"
    />
  </Suspense>
</Paper>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <form onSubmit={handleAddEmployee}>
          <DialogTitle>
            <div className="flex items-center justify-between">
              <span>Add Employee</span>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>
          </DialogTitle>

          <DialogContent>
            <div className="mt-3 flex flex-col gap-5">
              <TextField
                label="First Name"
                fullWidth
                required
                value={form.firstName}
                onChange={(event) =>
                  setForm({
                    ...form,
                    firstName: event.target.value,
                  })
                }
              />

              <TextField
                label="Last Name"
                fullWidth
                required
                value={form.lastName}
                onChange={(event) =>
                  setForm({
                    ...form,
                    lastName: event.target.value,
                  })
                }
              />

              <TextField
                label="Age"
                type="number"
                fullWidth
                required
                slotProps={{
                  htmlInput: { min: 1, max: 120 },
                }}
                value={form.age}
                onChange={(event) =>
                  setForm({
                    ...form,
                    age: event.target.value,
                  })
                }
              />

              <FormControl fullWidth>
                <Select
                  value={form.status}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      status: event.target
                        .value as Employee["status"],
                    })
                  }
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </div>
          </DialogContent>

          <DialogActions sx={{ padding: 3 }}>
            <Button
              onClick={() => setOpen(false)}
              color="inherit"
              size="small"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              size="small"
            >
              Save Employee
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
