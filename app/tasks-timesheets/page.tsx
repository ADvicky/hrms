// // // "use client"

// // // import React from 'react'
// // // import Table from '@mui/material/Table';
// // // import TableBody from '@mui/material/TableBody';
// // // import TableCell from '@mui/material/TableCell';
// // // import TableContainer from '@mui/material/TableContainer';
// // // import TableHead from '@mui/material/TableHead';
// // // import TableRow from '@mui/material/TableRow';
// // // import Paper from '@mui/material/Paper';
// // // import { TableVirtuoso, TableComponents } from 'react-virtuoso';
// // // import Chance from 'chance';


// // // interface Data {
// // //   id: number;
// // //   firstName: string;
// // //   lastName: string;
// // //   age: number;
// // //   phone: string;
// // //   state: string;
// // // }

// // // interface ColumnData {
// // //   dataKey: keyof Data;
// // //   label: string;
// // //   numeric?: boolean;
// // //   width?: number;
// // // }

// // // const chance = new Chance(42);

// // // function createData(id: number): Data {
// // //   return {
// // //     id,
// // //     firstName: chance.first(),
// // //     lastName: chance.last(),
// // //     age: chance.age(),
// // //     phone: chance.phone(),
// // //     state: chance.state({ full: true }),
// // //   };
// // // }

// // // const columns: ColumnData[] = [
// // //   {
// // //     width: 100,
// // //     label: 'First Name',
// // //     dataKey: 'firstName',
// // //   },
// // //   {
// // //     width: 100,
// // //     label: 'Last Name',
// // //     dataKey: 'lastName',
// // //   },
// // //   {
// // //     width: 50,
// // //     label: 'Age',
// // //     dataKey: 'age',
// // //     numeric: true,
// // //   },
// // //   {
// // //     width: 110,
// // //     label: 'State',
// // //     dataKey: 'state',
// // //   },
// // //   {
// // //     width: 130,
// // //     label: 'Phone Number',
// // //     dataKey: 'phone',
// // //   },
// // // ];

// // // const rows: Data[] = Array.from({ length: 200 }, (_, index) => createData(index));

// // // const VirtuosoTableComponents: TableComponents<Data> = {
// // //   Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
// // //     <TableContainer component={Paper} {...props} ref={ref} />
// // //   )),
// // //   Table: (props:any) => (
// // //     <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
// // //   ),
// // //   TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
// // //     <TableHead {...props} ref={ref} />
// // //   )),
// // //   TableRow,
// // //   TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
// // //     <TableBody {...props} ref={ref} />
// // //   )),
// // // };


// // // function fixedHeaderContent() {
// // //   return (
// // //     <TableRow>
// // //       {columns.map((column) => (
// // //         <TableCell
// // //           key={column.dataKey}
// // //           variant="head"
// // //           align={column.numeric || false ? 'right' : 'left'}
// // //           style={{ width: column.width }}
// // //             sx={{
// // //           backgroundColor: "#65A879",
// // //           color: "#FFFFFF",
// // //           fontWeight: "bold",
// // //         }}
// // //         >
// // //           {column.label}
// // //         </TableCell>
// // //       ))}
// // //     </TableRow>
// // //   );
// // // }

// // // function rowContent(_index: number, row: Data) {
// // //   return (
// // //     <React.Fragment>
// // //       {columns.map((column) => (
// // //         <TableCell
// // //           key={column.dataKey}
// // //           component={column.dataKey === 'firstName' ? 'th' : 'td'}
// // //           scope={column.dataKey === 'firstName' ? 'row' : undefined}
// // //           align={column.numeric || false ? 'right' : 'left'}
// // //         >
// // //           {row[column.dataKey]}
// // //         </TableCell>
// // //       ))}
// // //     </React.Fragment>
// // //   );
// // // }

// // // export default function TaskTimesheet() {
// // //   return (
// // //     <div className="flex w-full min-w-0 min-h-0">
// // //       <div className="flex w-full min-w-0 flex-col gap-4 p-6">

// // //         <h1 className="text-2xl font-bold">
// // //           Time Sheets
// // //         </h1>

// // //         <div className="w-full min-w-0">
// // //           <Paper
// // //             sx={{
// // //               height: 600,
// // //               width: "100%",
// // //               overflow: "hidden",
// // //             }}
// // //           >
// // //             <TableVirtuoso
// // //               style={{ height: "100%" }}
// // //               data={rows}
// // //               components={VirtuosoTableComponents}
// // //               fixedHeaderContent={fixedHeaderContent}
// // //               itemContent={rowContent}
// // //             />
// // //           </Paper>
// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // }
// //  "use client"
// //  import React from"react";
// // import { useState } from "react";
// // import TextField from "@mui/material/TextField";
// // import Select from "@mui/material/Select";
// // import MenuItem from "@mui/material/MenuItem";
// // import IconButton from "@mui/material/IconButton";
// // import Button from "@mui/material/Button";
// // import { Pencil, Check, X, Trash2, Plus } from "lucide-react";
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import { TableVirtuoso, TableComponents } from 'react-virtuoso';
// // import Chance from 'chance';

// // type Status = "Pending" | "Approved" | "Rejected";
// // type PhoneType = "Work" | "Mobile" | "Home";

// // interface Data {
// //   id: number;
// //   projectName: string;
// //   taskName: string;
// //   date: string;
// //   loginTime: string;
// //   logoutTime: string;
// //   status: "Pending" | "Approved" | "Rejected";
// // }

// // const chance = new Chance(42);

// // function fixedHeaderContent() {
// //   return (
// //     <TableRow>
// //       {columns.map((column) => (
// //         <TableCell
// //           key={column.label}
// //           style={{ width: column.width }}
// //           sx={{
// //             backgroundColor: "#65A879",
// //             color: "#fff",
// //             fontWeight: 600,
// //           }}
// //         >
// //           {column.label}
// //         </TableCell>
// //       ))}
// //     </TableRow>
// //   );
// // }

// // // const rows: Data[] = Array.from({ length: 200 }, (_, index) => createData(index));

// // const VirtuosoTableComponents: TableComponents<Data> = {
// //   Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
// //     <TableContainer component={Paper} {...props} ref={ref} />
// //   )),
// //   Table: (props:any) => (
// //     <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
// //   ),
// //   TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
// //     <TableHead {...props} ref={ref} />
// //   )),
// //   TableRow,
// //   TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
// //     <TableBody {...props} ref={ref} />
// //   )),
// // };



// // function createData(id: number): Data {
// //   return {
// //     id,
// //     firstName: chance.first(),
// //     lastName: chance.last(),
// //     age: chance.age(),
// //     phone: "Work",
// //     state: chance.state({ full: true }),
// //     status: "Pending",
// //   };
// // }

// // const columns = [
// //   { label: "Date", width: 150 },
// //   { label: "Login Time", width: 80 },
// //   { label: "Logout Time", width: 80 },
  
// //   { label: "Project Name", width: 130 },
// //   { label: "Task Name", width: 150 },
// //   { label: "Status", width: 160 },
// //   { label: "Actions", width: 150 },
// // ];

// // export default function TaskTimesheet() {
// //   const [rows, setRows] = useState<Data[]>(() =>
// //     Array.from({ length: 5 }, (_, i) => createData(i + 1))
// //   );

// //   const [editingId, setEditingId] = useState<number | null>(null);
// //   const [draft, setDraft] = useState<Data | null>(null);
// //   const [nextId, setNextId] = useState(201);

// //   const states = [
// //     "California",
// //     "Texas",
// //     "Florida",
// //     "New York",
// //   ];

// //   // Start editing a row
// //   const handleEdit = (row: Data) => {
// //     setEditingId(row.id);
// //     setDraft({ ...row });
// //   };

// //   // Save edited row
// //   const handleSave = () => {
// //     if (!draft) return;

// //     if (!draft.firstName.trim() || !draft.lastName.trim()) {
// //       alert("First and last name are required");
// //       return;
// //     }

// //     setRows((prev) =>
// //       prev.map((row) =>
// //         row.id === draft.id ? draft : row
// //       )
// //     );

// //     setEditingId(null);
// //     setDraft(null);
// //   };

// //   // Cancel editing
// //   const handleCancel = () => {
// //     setEditingId(null);
// //     setDraft(null);
// //   };

// //   // Delete row
// //   const handleDelete = (id: number) => {
// //     setRows((prev) =>
// //       prev.filter((row) => row.id !== id)
// //     );
// //   };

// //   // Update phone or status directly
// //   const updateField = <K extends keyof Data>(
// //     id: number,
// //     field: K,
// //     value: Data[K]
// //   ) => {
// //     setRows((prev) =>
// //       prev.map((row) =>
// //         row.id === id
// //           ? { ...row, [field]: value }
// //           : row
// //       )
// //     );
// //   };

// //   // Add new row
// //   const handleAdd = () => {
// //     const newRow: Data = {
// //       id: nextId,
// //       firstName: "",
// //       lastName: "",
// //       age: 18,
// //       state: "California",
// //       phone: "Work",
// //       status: "Pending",
// //     };

// //     setRows((prev) => [newRow, ...prev]);
// //     setNextId((prev) => prev + 1);

// //     setEditingId(newRow.id);
// //     setDraft(newRow);
// //   };

// //   // Render each table row
// //   const rowContent = (_index: number, row: Data) => {
// //     const isEditing = editingId === row.id;

// //     return (
// //       <>
// //         {/* First Name */}
// //         <TableCell>
// //           {isEditing && draft ? (
// //             <TextField
// //               size="small"
// //               value={draft.firstName}
// //               onChange={(e) =>
// //                 setDraft({
// //                   ...draft,
// //                   firstName: e.target.value,
// //                 })
// //               }
// //             />
// //           ) : (
// //             row.firstName
// //           )}
// //         </TableCell>

// //         {/* Last Name */}
// //         {/* <TableCell>
// //           {isEditing && draft ? (
// //             <TextField
// //               size="small"
// //               value={draft.lastName}
// //               onChange={(e) =>
// //                 setDraft({
// //                   ...draft,
// //                   lastName: e.target.value,
// //                 })
// //               }
// //             />
// //           ) : (
// //             row.lastName
// //           )}
// //         </TableCell> */}

// //         <TableCell>{row.age}</TableCell>

// //         {/* Age - Read Only */}
// //        {/* <TableCell>
// //   {isEditing && draft ? (
// //     <TextField
// //       size="small"
// //       type="number"
// //       value={draft.age}
// //       onChange={(e) =>
// //         setDraft({
// //           ...draft,
// //           age: Number(e.target.value),
// //         })
// //       }
// //     />
// //   ) : (
// //     row.age
// //   )}
// // </TableCell> */}
// // <TableCell>{row.age}</TableCell>

// //         {/* State - Dropdown when editing */}
// //         <TableCell>
// //           {isEditing && draft ? (
// //             <Select
// //               size="small"
// //               fullWidth
// //               value={draft.state}
// //               onChange={(e) =>
// //                 setDraft({
// //                   ...draft,
// //                   state: e.target.value,
// //                 })
// //               }
// //             >
// //               {Array.from(new Set([...states, draft.state]))
// //                 .map((state) => (
// //                   <MenuItem key={state} value={state}>
// //                     {state}
// //                   </MenuItem>
// //                 ))}
// //             </Select>
// //           ) : (
// //             row.state
// //           )}
// //         </TableCell>

// //         {/* Phone Dropdown */}
// //         {/* <TableCell>
// //           <Select
// //             size="small"
// //             fullWidth
// //             disabled={editingId !== null}
// //             value={row.phone}
// //             onChange={(e) =>
// //               updateField(
// //                 row.id,
// //                 "phone",
// //                 e.target.value as PhoneType
// //               )
// //             }
// //           >
// //             {(["Work", "Mobile", "Home"] as const).map(
// //               (phone) => (
// //                 <MenuItem key={phone} value={phone}>
// //                   {phone}
// //                 </MenuItem>
// //               )
// //             )}
// //           </Select>
// //         </TableCell> */}
// //         {/* <TableCell>{row.age}</TableCell> */}
// //           <TableCell>
// //   {isEditing && draft ? (
// //     <TextField
// //       size="small"
// //       type="number"
// //       value={draft.age}
// //       onChange={(e) =>
// //         setDraft({
// //           ...draft,
// //           age: Number(e.target.value),
// //         })
// //       }
// //     />
// //   ) : (
// //     row.age
// //   )}
// // </TableCell>

// //         {/* Status Dropdown */}
// //         <TableCell>
// //           <Select
// //             size="small"
// //             fullWidth
// //             disabled={editingId !== null}
// //             value={row.status}
// //             onChange={(e) =>
// //               updateField(
// //                 row.id,
// //                 "status",
// //                 e.target.value as Status
// //               )
// //             }
// //           >
// //             {(["Pending", "Approved", "Rejected"] as const)
// //               .map((status) => (
// //                 <MenuItem key={status} value={status}>
// //                   {status}
// //                 </MenuItem>
// //               ))}
// //           </Select>
// //         </TableCell>

// //         {/* Actions */}
// //         <TableCell>
// //           {isEditing ? (
// //             <div className="flex gap-1">
// //               <IconButton
// //                 color="success"
// //                 onClick={handleSave}
// //                 aria-label="Save"
// //               >
// //                 <Check size={18} />
// //               </IconButton>

// //               <IconButton
// //                 onClick={handleCancel}
// //                 aria-label="Cancel"
// //               >
// //                 <X size={18} />
// //               </IconButton>
// //             </div>
// //           ) : (
// //             <div className="flex gap-1">
// //               <IconButton
// //                 disabled={editingId !== null}
// //                 onClick={() => handleEdit(row)}
// //                 aria-label="Edit"
// //               >
// //                 <Pencil size={18} />
// //               </IconButton>

// //               <IconButton
// //                 color="error"
// //                 disabled={editingId !== null}
// //                 onClick={() => handleDelete(row.id)}
// //                 aria-label="Delete"
// //               >
// //                 <Trash2 size={18} />
// //               </IconButton>
// //             </div>
// //           )}
// //         </TableCell>
// //       </>
// //     );
// //   };

// //   return (
// //     <div className="flex w-full min-w-0 flex-col gap-4 p-6">
// //       <div className="flex items-center justify-between">
// //         <h1 className="text-2xl font-bold">
// //           Time Sheets
// //         </h1>

// //         <Button
// //           variant="contained"
// //           disabled={editingId !== null}
// //           startIcon={<Plus size={18} />}
// //           onClick={handleAdd}
// //           sx={{
// //             backgroundColor: "#65A879",
// //           }}
// //         >
// //           Add Row
// //         </Button>
// //       </div>

// //       <Paper sx={{ height: 600, width: "100%", minWidth: 0 }}>
// //         <TableVirtuoso
// //           style={{ height: "100%" }}
// //           data={rows}
// //           computeItemKey={(_index, row) => row.id}
// //           components={VirtuosoTableComponents}
// //           fixedHeaderContent={fixedHeaderContent}
// //           itemContent={rowContent}
// //         />
// //       </Paper>
// //     </div>
// //   );
// // }




// "use client";

// import React, { useState } from "react";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import Box from "@mui/material/Box";

// import { TableVirtuoso } from "react-virtuoso";
// import type { TableComponents } from "react-virtuoso";

// import TablePagination from "@mui/material/TablePagination";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";
// import DialogPopup from "@/app/components/Dialog";
// import useDialog from "@/app/hook/useDialog";

// import {
//   Pencil,
//   Check,
//   X,
//   Trash2,
//   Plus,
// } from "lucide-react";


// type Status = "Pending" | "Approved" | "Rejected";

// interface Data {
//   id: number;
//   date: string;
//   loginTime: string;
//   logoutTime: string;
//   projectName: string;
//   taskName: string;
//   status: Status;
// }

// interface ColumnData {
//   key: string;
//   label: string;
//   width: number;
// }


// const columns: ColumnData[] = [
//   { key: "date", label: "Date", width: 150 },
//   { key: "loginTime", label: "Login Time", width: 130 },
//   { key: "logoutTime", label: "Logout Time", width: 130 },
//   { key: "projectName", label: "Project Name", width: 200 },
//   { key: "taskName", label: "Task Name", width: 200 },
//   { key: "status", label: "Status", width: 150 },
//   { key: "actions", label: "Actions", width: 120 },
// ];


// const initialRows: Data[] = [
//   {
//     id: 1,
//     date: "2026-11-20",
//     loginTime: "09:00",
//     logoutTime: "18:00",
//     projectName: "HR Management",
//     taskName: "Dashboard Development",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     date: "2026-11-19",
//     loginTime: "09:30",
//     logoutTime: "18:30",
//     projectName: "DNS Management",
//     taskName: "API Integration",
//     status: "Approved",
//   },
// ];


// const VirtuosoTableComponents: TableComponents<Data> = {
//   Scroller: React.forwardRef<HTMLDivElement>(
//     (props, ref) => (
//       <TableContainer
//         component={Paper}
//         {...props}
//         ref={ref}
//          className="
//           !bg-white
//           dark:!bg-gray-800
//            border border-gray-300
//         "
//       />
//     )
//   ),

//   Table: (props) => (
//     <Table
//       {...props}
//       sx={{
//         borderCollapse: "separate",
//         tableLayout: "fixed",
//         minWidth: 1080,
       
//       }}
//        className="
//       !bg-white
//       dark:!bg-gray-800
//       [&_tbody_.MuiTableCell-root]:!text-gray-900
//       dark:[&_tbody_.MuiTableCell-root]:!text-gray-100
//       dark:[&_tbody_.MuiTableCell-root]:!border-gray-700
//     "
//     />
//   ),

//   TableHead: React.forwardRef<HTMLTableSectionElement>(
//     (props, ref) => (
//       <TableHead {...props} ref={ref} />
//     )
//   ),



//     TableRow: (props) => (
//     <TableRow
//       {...props}
//       className="bg-white dark:bg-gray-800"
//       sx={{
//         "& .MuiTableCell-root": {
//           borderBottom: "1px solid",
//           borderColor: "divider",
//         },
//       }}
//     />
//   ),

//   TableBody: React.forwardRef<HTMLTableSectionElement>(
//     (props, ref) => (
//       <TableBody {...props} ref={ref} />
//     )
//   ),
// };


// function fixedHeaderContent() {
//   return (
//     <TableRow>
//       {columns.map((column) => (
//         <TableCell
//           key={column.key}
//           variant="head"
//           style={{ width: column.width }}
//            className="
//             !bg-[#65A879]
//             dark:!bg-[#285C42]
//             !text-white
//           "
//           // sx={{
//           //   backgroundColor: "#65A879",
//           //   color: "#FFFFFF",
//           //   fontWeight: 600,
//           // }}
//         >
//           {column.label}
//         </TableCell>
//       ))}
//     </TableRow>
//   );
// }


// export default function TaskTimesheet() {
//   const [rows, setRows] = useState<Data[]>(initialRows);

//   const {
//     selectedId,
//     openDialog,
//     closeDialog,
//   } = useDialog<number>();


// //  const handleDelete = (id: number) => {
// //   setRows((prev) =>
// //     prev.filter((row) => row.id !== id)
// //   );

// //   closeDialog();
// // };

//   const [page, setPage] = useState(0);
// const [rowsPerPage, setRowsPerPage] = useState(5);

//   const [nextId, setNextId] = useState(3);

//   const [editingId, setEditingId] = useState<number | null>(
//     null
//   );

//   const [draft, setDraft] = useState<Data | null>(null);

//   const [isNewRow, setIsNewRow] = useState(false);

  
//   const [projects, setProjects] = useState<string[]>([
//     "HR Management",
//     "DNS Management",
//   ]);


//   const [showAddProject, setShowAddProject] =
//     useState(false);

//   const [newProject, setNewProject] = useState("");

  
//   const handleChangePage = (
//   event: React.MouseEvent<HTMLButtonElement> | null,
//   newPage: number
// ) => {
//   setPage(newPage);
// };

// const handleChangeRowsPerPage = (
//   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   setRowsPerPage(parseInt(event.target.value, 10));
//   setPage(0);
// };

// const safePage = Math.min(
//   page,
//   Math.max(0, Math.ceil(rows.length / rowsPerPage) - 1)
// );

// const paginatedRows = rows.slice(
//   safePage * rowsPerPage,
//   safePage * rowsPerPage + rowsPerPage
// );


//   const handleEdit = (row: Data) => {
//     setEditingId(row.id);
//     setDraft({ ...row });
//     setIsNewRow(false);
//   };

  
//   const handleSave = () => {
//     if (!draft) return;

//     if (!draft.date) {
//       alert("Please select a date");
//       return;
//     }

//     if (!draft.projectName) {
//       alert("Please select a project");
//       return;
//     }

//     if (!draft.taskName.trim()) {
//       alert("Please enter a task name");
//       return;
//     }

//     if (!draft.loginTime || !draft.logoutTime) {
//       alert("Please enter login and logout times");
//       return;
//     }

//     if (draft.logoutTime <= draft.loginTime) {
//       alert("Logout time must be after login time");
//       return;
//     }

//     setRows((prev) =>
//       prev.map((row) =>
//         row.id === draft.id ? draft : row
//       )
//     );

//     setEditingId(null);
//     setDraft(null);
//     setIsNewRow(false);
//   };


//   const handleCancel = () => {
//     if (isNewRow && editingId !== null) {
//       setRows((prev) =>
//         prev.filter((row) => row.id !== editingId)
//       );
//     }

//     setEditingId(null);
//     setDraft(null);
//     setIsNewRow(false);
//   };


//   const handleDelete = (id: number) => {
//     setRows((prev) =>
//       prev.filter((row) => row.id !== id)
//     );

//      closeDialog();
//   };


//   const handleAddRow = () => {
//     const newRow: Data = {
//       id: nextId,
//       date: "",
//       loginTime: "",
//       logoutTime: "",
//       projectName: "",
//       taskName: "",
//       status: "Pending",
//     };

//     setRows((prev) => [newRow, ...prev]);

//     setNextId((prev) => prev + 1);
//     setEditingId(newRow.id);
//     setDraft(newRow);
//     setIsNewRow(true);
//   };


//   const handleAddProject = () => {
//     const name = newProject.trim();

//     if (!name) {
//       alert("Please enter a project name");
//       return;
//     }

//     const existingProject = projects.find(
//       (project) =>
//         project.toLowerCase() === name.toLowerCase()
//     );

//     if (existingProject) {
//       alert("Project already exists");
//       return;
//     }

    
//     setProjects((prev) => [...prev, name]);

    
//     if (draft) {
//       setDraft((prev) =>
//         prev ? { ...prev, projectName: name } : prev
//       );
//     }

//     setNewProject("");
//     setShowAddProject(false);
//   };

  
//   const updateDraft = <K extends keyof Data>(
//     field: K,
//     value: Data[K]
//   ) => {
//     setDraft((prev) =>
//       prev ? { ...prev, [field]: value } : prev
//     );
//   };

  
//   const rowContent = (_index: number, row: Data) => {
//     const isEditing = editingId === row.id;

//     return (
//       <>
//         {/* <TableCell>
//           {isEditing && draft ? (
//             <TextField
//               type="date"
//               size="small"
              
//               fullWidth
//               value={draft.date}
//               onChange={(e) =>
//                 updateDraft("date", e.target.value)
//               }
//                className="dark:text-gray-300 dark:bg-gray-300"
               
//             />
//           ) : (
//             row.date
//           )}
//         </TableCell> */}

// <TableCell>
//   {isEditing && draft ? (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         value={draft.date ? dayjs(draft.date) : null}
//         onChange={(newDate) =>
//           updateDraft(
//             "date",
//             newDate ? newDate.format("YYYY-MM-DD") : ""
//           )
//         }
//         slotProps={{
//           textField: {
//             size: "small",
//             fullWidth: true,
//           },
//           day: {
//             sx: {
//               "&.Mui-selected": {
//                 backgroundColor: "#16a34a",
//                 color: "#ffffff",
//               },
//               "&.Mui-selected:hover": {
//                 backgroundColor: "#16a34a",
//               },
//               "&.Mui-selected:focus": {
//                 backgroundColor: "#16a34a",
//               },
//             },
//           },
//         }}
//       />
//     </LocalizationProvider>
//   ) : (
//     row.date
//   )}
// </TableCell>

       
//         {/* <TableCell>
//           {isEditing && draft ? (
//             <TextField
//               type="time"
//               size="small"
//               fullWidth
//               value={draft.loginTime}
//               onChange={(e) =>
//                 updateDraft("loginTime", e.target.value)
//               }
//                className="dark:text-gray-300 dark:bg-gray-300"
//             />
//           ) : (
//             row.loginTime
//           )}
//         </TableCell> */}
// <TableCell>
//   {isEditing && draft ? (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <TimePicker
//         ampm={true}
//         format="HH:mm"
//         value={
//           draft.loginTime
//             ? dayjs(`2000-01-01T${draft.loginTime}`)
//             : null
//         }
//         onChange={(newValue) => {
//           updateDraft(
//             "loginTime",
//             newValue && newValue.isValid()
//               ? newValue.format("HH:mm")
//               : ""
//           );
//         }}
//         slotProps={{
//           textField: {
//             size: "small",
//             fullWidth: true,
//             sx: {
//               backgroundColor: "#ffff",
//               "& .MuiPickersInputBase-root": {
//                 color: "#00000",
//               },
//             },
//           },
//           desktopPaper: {
//             sx: {
//               "& .MuiMenuItem-root.Mui-selected": {
//                 backgroundColor: "#16a34a",
//                 color: "#ffffff",
//               },
//               "& .MuiMenuItem-root.Mui-selected:hover": {
//                 backgroundColor: "#15803d",
//               },
//             },
//           },
//         }}
//       />
//     </LocalizationProvider>
//   ) : (
//     row.loginTime
//   )}
// </TableCell>
       
//         {/* <TableCell>
//           {isEditing && draft ? (
//             <TextField
//               type="time"
//               size="small"
//               fullWidth
//               value={draft.logoutTime}
//               onChange={(e) =>
//                 updateDraft("logoutTime", e.target.value)
//               }
//                className="dark:text-gray-300 dark:bg-gray-300"
//             />
//           ) : (
//             row.logoutTime
//           )}
//         </TableCell> */}


// <TableCell>
//   {isEditing && draft ? (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <TimePicker
//         ampm={true}
//         format="HH:mm"
//         value={
//           draft.logoutTime
//             ? dayjs(`2000-01-01T${draft.logoutTime}`)
//             : null
//         }
//         onChange={(newValue) => {
//           updateDraft(
//             "logoutTime",
//             newValue && newValue.isValid()
//               ? newValue.format("HH:mm")
//               : ""
//           );
//         }}
//         slotProps={{
//           textField: {
//             size: "small",
//             fullWidth: true,
//             sx: {
//               backgroundColor: "#ffff",
//               "& .MuiPickersInputBase-root": {
//                 color: "#00000",
//               },
//             },
//           },
//           desktopPaper: {
//             sx: {
//               "& .MuiMenuItem-root.Mui-selected": {
//                 backgroundColor: "#16a34a",
//                 color: "#ffffff",
//               },
//               "& .MuiMenuItem-root.Mui-selected:hover": {
//                 backgroundColor: "#15803d",
//               },
//             },
//           },
//         }}
//       />
//     </LocalizationProvider>
//   ) : (
//     row.loginTime
//   )}
// </TableCell>
       
//         <TableCell>
//           {isEditing && draft ? (
//             <Box sx={{ display: "flex", gap: 1 }}>
//               <Select
//                 size="small"
//                 fullWidth
//                 displayEmpty
//                 value={draft.projectName}
//                 onChange={(e) =>
//                   updateDraft(
//                     "projectName",
//                     e.target.value
//                   )
//                 }
//                  className="dark:text-gray-300 dark:bg-gray-300"
//               >
//                 <MenuItem value="" disabled>
//                   Select Project
//                 </MenuItem>

//                 {projects.map((project) => (
//                   <MenuItem
//                     key={project}
//                     value={project}
//                   >
//                     {project}
//                   </MenuItem>
//                 ))}
//               </Select>

//               <IconButton
//                 color="primary"
//                 aria-label="Add project"
//                 onClick={() => setShowAddProject(true)}
//               >
//                 <Plus size={18} />
//               </IconButton>
//             </Box>
//           ) : (
//             row.projectName || "-"
//           )}
//         </TableCell>

     
//         <TableCell>
//           {isEditing && draft ? (
//             <TextField
//               size="small"
//               fullWidth
//               placeholder="Enter task"
//               value={draft.taskName}
//               onChange={(e) =>
//                 updateDraft(
//                   "taskName",
//                   e.target.value
//                 )
//               }
//                className="dark:text-gray-300 dark:bg-gray-300"
//             />
//           ) : (
//             row.taskName || "-"
//           )}
//         </TableCell>

//         <TableCell>
//           {isEditing && draft ? (
//             <Select
//               size="small"
//               fullWidth
//               value={draft.status}
//               onChange={(e) =>
//                 updateDraft(
//                   "status",
//                   e.target.value as Status
//                 )
//               }
//               className="dark:text-gray-300 dark:bg-gray-300"
//             >
//               <MenuItem value="Pending">
//                 Pending
//               </MenuItem>
//               <MenuItem value="Approved">
//                 Approved
//               </MenuItem>
//               <MenuItem value="Rejected">
//                 Rejected
//               </MenuItem>
//             </Select>
//           ) : (
//             row.status
//           )}
//         </TableCell>

    
//         <TableCell>
//           {isEditing ? (
//             <Box sx={{ display: "flex" }}>
//               <IconButton
//                 color="success"
//                 aria-label="Save row"
//                 onClick={handleSave}
//               >
//                 <Check size={18} className="dark:text-gray-300"/>
//               </IconButton>

//               <IconButton
//                 aria-label="Cancel editing"
//                 onClick={handleCancel}
//               >
//                 <X size={18} className="dark:text-gray-300"/>
//               </IconButton>
//             </Box>
//           ) : (
//             <Box sx={{ display: "flex" }}>
//               <IconButton
//                 disabled={editingId !== null}
//                 aria-label="Edit row"
//                 onClick={() => handleEdit(row)}
//               >
//                 <Pencil size={18} className="dark:text-gray-300"/>
//               </IconButton>

//       <IconButton
//   color="error"
//   disabled={editingId !== null}
//   aria-label="Delete row"
//   onClick={() => openDialog(row.id)}
// >
//   <Trash2 size={18} />
// </IconButton>
//             </Box>
//           )}
//         </TableCell>
//       </>
//     );
//   };


//   return (
//     <div className="flex w-full min-w-0 flex-col gap-4 p-6">
  
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold dark:text-gray-300">
//           Time Sheets
//         </h1>

//         <Button
//   variant="contained"
//   size="small"
//   startIcon={<Plus size={14} />}
//   onClick={handleAddRow}
//   disabled={editingId !== null}
//   sx={(theme) => ({
//     height: "30px",
//     minWidth: "auto",
//     width: "fit-content",

//     padding: "4px 10px",
//     fontSize: "12px",
//     textTransform: "none",
//     borderRadius: "6px",

//     backgroundColor:
//       theme.palette.mode === "dark"
//         ? "#65A879"
//         : "#65A879",

//     color: "#ffffff",

//     border:
//       theme.palette.mode === "dark"
//         ? "1px solid rgba(255,255,255,0.15)"
//         : "1px solid transparent",

//     boxShadow: "none",

//     "&:hover": {
//       backgroundColor:
//         theme.palette.mode === "dark"
//           ? "#374151"
//           : "#4C8A60",

//       boxShadow:
//         theme.palette.mode === "dark"
//           ? "0 0 8px rgba(101,168,121,0.4)"
//           : "none",
//     },

//     "& .MuiButton-startIcon": {
//       marginRight: "4px",
//       marginLeft: "0px",
//     },
//   })}
// >
//   Add Row
// </Button>
//       </div>
// {rows && rows.length === 0 ? (
//   <div className="flex justify-center items-center min-h-[calc(100dvh-80px)]">
//   <p className=" text-2xl font-bold">NO Data To Display</p>
//   </div> 
//   ) 
//   :
// (
//   <div>


//       {/* <Paper
//         sx={{
//           height: 565,
//           width: "100%",
//           minWidth: 0,
//           overflow: "hidden",
//         }}
//          className="
//     !bg-white
//     dark:!bg-gray-800
//     dark:!text-gray-100
//   "
//       >
//         <TableVirtuoso
//           style={{ height: "100%" }}
//           data={rows}
//           computeItemKey={(_index, row) => row.id}
//           components={VirtuosoTableComponents}
//           fixedHeaderContent={fixedHeaderContent}
//           itemContent={rowContent}
//         />
//       </Paper> */}



// <Paper
//   sx={(theme) => ({
//     height: 565,
//     width: "100%",
//     minWidth: 0,
//     overflow: "hidden",
//     display: "flex",
//     flexDirection: "column",
//     borderRadius: "8px",

//     backgroundImage: "none",

//     backgroundColor:
//       theme.palette.mode === "dark"
//         ? "rgba(51,65,85,0.2)"
//         : "#ffffff",

//     border: "1px solid",
//     borderColor: "divider",

//     transition: "box-shadow 0.2s ease-in-out",

//     "&:hover": {
//       boxShadow:
//         theme.palette.mode === "dark"
//           ? "0 0 8px rgba(101,168,121,0.9)"
//           : "none",
//     },

//     // Table header
//     "& .MuiTableHead-root .MuiTableCell-root": {
//       backgroundColor:
//         theme.palette.mode === "dark"
//           ? "#0000"
//           : "#f1f5f9",

//       color: theme.palette.text.primary,
//       fontWeight: 600,
//       borderColor: "divider",
//     },

//     // Table body cells
//     "& .MuiTableBody-root .MuiTableCell-root": {
//       color: theme.palette.text.primary,
//       backgroundColor: "transparent",
//       borderColor: "divider",
//     },

//     // Row hover
//     "& .MuiTableBody-root .MuiTableRow-root:hover": {
//       backgroundColor:
//         theme.palette.mode === "dark"
//           ? "rgba(255,255,255,0.04)"
//           : "#f8fafc",
//     },
//   })}
// >
//   <div className="min-h-0 flex-1">
//     <TableVirtuoso
//       style={{ height: "100%" }}
//       data={paginatedRows}
//       computeItemKey={(_index, row) => row.id}
//       components={VirtuosoTableComponents}
//       fixedHeaderContent={fixedHeaderContent}
//       itemContent={rowContent}
//     />
//   </div>

//   <TablePagination
//     component="div"
//     count={rows.length}
//     page={safePage}
//     onPageChange={handleChangePage}
//     rowsPerPage={rowsPerPage}
//     onRowsPerPageChange={handleChangeRowsPerPage}
//     rowsPerPageOptions={[5, 10, 25]}
//     sx={(theme) => ({
//       borderTop: "1px solid",
//       borderColor: "divider",
//       flexShrink: 0,

//       backgroundColor:
//         theme.palette.mode === "dark"
//           ? "rgba(51,65,85,0.2)"
//           : "#ffffff",

//       color: theme.palette.text.primary,

//       "& .MuiTablePagination-selectIcon": {
//         color: "inherit",
//       },

//       "& .MuiTablePagination-actions button:not(.Mui-disabled)": {
//         color: "inherit",
//       },
//     })}
//   />
// </Paper>

// <DialogPopup
//   id={selectedId}
//   title="Delete Timesheet"
//   description="Are you sure you want to delete this timesheet?"
//   confirmText="Delete"
//   cancelText="Cancel"
//   onConfirm={handleDelete}
//   onClose={closeDialog}
// />

      
//       <Dialog
//         open={showAddProject}
//         onClose={() => {
//           setShowAddProject(false);
//           setNewProject("");
//         }}
//         fullWidth
//         maxWidth="xs"
//       >
//         <DialogTitle>Add New Project</DialogTitle>

//         <DialogContent>
//           <TextField
//             autoFocus
//             fullWidth
//             size="small"
//             label="Project Name"
//             placeholder="Enter project name"
//             value={newProject}
//             onChange={(e) =>
//               setNewProject(e.target.value)
//             }
//             sx={{ mt: 1 }}
//           />
//         </DialogContent>

//         <DialogActions>
//           <Button
//             onClick={() => {
//               setShowAddProject(false);
//               setNewProject("");
//             }}
//           >
//             Cancel
//           </Button>

//           <Button
//             variant="contained"
//             onClick={handleAddProject}
//             sx={{
//               backgroundColor: "#65A879",
//             }}
//           >
//             Save Project
//           </Button>
//         </DialogActions>
//       </Dialog>
//   </div>
// )
// }
   
//     </div>
//   );
// }



"use client";

import React, { useState } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";

import { TableVirtuoso } from "react-virtuoso";
import type { TableComponents } from "react-virtuoso";

import TablePagination from "@mui/material/TablePagination";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import DialogPopup from "@/app/components/Dialog";
import useDialog from "@/app/hook/useDialog";

import {
  Pencil,
  Check,
  X,
  Trash2,
  Plus,
} from "lucide-react";

type Status = "Pending" | "Approved" | "Rejected";

interface Data {
  id: number;
  date: string;
  loginTime: string;
  logoutTime: string;
  projectName: string;
  taskName: string;
  status: Status;
}

interface ColumnData {
  key: string;
  label: string;
  width: number;
}

const columns: ColumnData[] = [
  { key: "date", label: "Date", width: 150 },
  { key: "loginTime", label: "Login Time", width: 130 },
  { key: "logoutTime", label: "Logout Time", width: 130 },
  { key: "projectName", label: "Project Name", width: 200 },
  { key: "taskName", label: "Task Name", width: 200 },
  { key: "status", label: "Status", width: 150 },
  { key: "actions", label: "Actions", width: 120 },
];

const initialRows: Data[] = [
  {
    id: 1,
    date: "2026-11-20",
    loginTime: "09:00",
    logoutTime: "18:00",
    projectName: "HR Management",
    taskName: "Dashboard Development",
    status: "Pending",
  },
  {
    id: 2,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 3,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 4,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 5,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 6,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 7,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 8,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 9,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 10,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 11,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 12,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 13,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 14,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
  {
    id: 15,
    date: "2026-11-19",
    loginTime: "09:30",
    logoutTime: "18:30",
    projectName: "DNS Management",
    taskName: "API Integration",
    status: "Approved",
  },
];




const inputSx = (theme: Theme) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(51,65,85,0.2)"
      : "#ffffff",

  color: theme.palette.text.primary,

  borderRadius: "6px",

  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
    fontSize: "13px",
  },

  "& .MuiPickersInputBase-root": {
    color: theme.palette.text.primary,
    fontSize: "13px",
  },

  "& .MuiOutlinedInput-notchedOutline, & .MuiPickersOutlinedInput-notchedOutline": {
    borderColor: theme.palette.divider,
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#65A879",
  },

  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#65A879",
  },

  "& .MuiSvgIcon-root": {
    color: theme.palette.text.secondary,
  },
});

const popupSx = (theme: Theme) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "#1f2937"
      : "#ffffff",

  backgroundImage: "none",

  color: theme.palette.text.primary,

  border: "1px solid",

  borderColor:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.15)"
      : "#e5e7eb",

  borderRadius: "8px",

  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 8px rgba(101,168,121,0.2)"
      : "0 4px 12px rgba(0,0,0,0.1)",
});

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer {...props} ref={ref} sx={{ backgroundColor: "transparent" }} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: "separate", borderSpacing: 0, tableLayout: "fixed", minWidth: 1080, backgroundColor: "transparent" }} />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

// function fixedHeaderContent() {
//   return (
//     <TableRow>
//       {columns.map((column) => (
//         <TableCell key={column.key} variant="head" style={{ width: column.width }}
//           sx={(theme) => ({
//             backgroundColor: theme.palette.mode === "dark" ? "#285C42" : "#65A879",
//             color: "#ffffff", fontWeight: 600, borderColor: theme.palette.divider,
//           })}>
//           {column.label}
//         </TableCell>
//       ))}
//     </TableRow>
//   );
// }
const fixedHeaderContent = () => {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.key}
          sx={(theme) => ({
            backgroundColor:
              theme.palette.mode === "dark"
                ? "#1f2937"
                : "#65A879",

            color: "#ffffff",
            fontWeight: 600,
            fontSize: "13px",
            width: column.width,
            padding: "12px 16px",
            borderColor: theme.palette.divider,
          })}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
};
import type { MenuProps } from "@mui/material/Menu";

const dropdownMenuProps: Partial<MenuProps> = {
  slotProps: {
    paper: {
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? "#1f2937"
            : "#ffffff",

        backgroundImage: "none",
        color: theme.palette.text.primary,

        border: "1px solid",
        borderColor: theme.palette.divider,
        borderRadius: "8px",

        "& .MuiMenuItem-root": {
          fontSize: "13px",

          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? "#374151"
                : "#f3f4f6",
          },

          "&.Mui-selected": {
            backgroundColor: "rgba(101,168,121,0.2)",
          },

          "&.Mui-selected:hover": {
            backgroundColor: "rgba(101,168,121,0.3)",
          },
        },
      }),
    },
  },
};

export default function TaskTimesheet() {
  const [rows, setRows] = useState<Data[]>(initialRows);

  const {
    selectedId,
    openDialog,
    closeDialog,
  } = useDialog<number>();

  const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(5);

  const [nextId, setNextId] = useState(initialRows.length);

  const [editingId, setEditingId] = useState<number | null>(
    null
  );

  const [draft, setDraft] = useState<Data | null>(null);

  const [isNewRow, setIsNewRow] = useState(false);

  const [projects, setProjects] = useState<string[]>([
    "HR Management",
    "DNS Management",
  ]);

  const [showAddProject, setShowAddProject] =
    useState(false);

  const [newProject, setNewProject] = useState("");

  const handleChangePage = (
  event: React.MouseEvent<HTMLButtonElement> | null,
  newPage: number
) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};

const safePage = Math.min(
  page,
  Math.max(0, Math.ceil(rows.length / rowsPerPage) - 1)
);

const paginatedRows = rows.slice(
  safePage * rowsPerPage,
  safePage * rowsPerPage + rowsPerPage
);

  const handleEdit = (row: Data) => {
    setEditingId(row.id);
    setDraft({ ...row });
    setIsNewRow(false);
  };

  const handleSave = () => {
    if (!draft) return;

    if (!draft.date) {
      alert("Please select a date");
      return;
    }

    if (!draft.projectName) {
      alert("Please select a project");
      return;
    }

    if (!draft.taskName.trim()) {
      alert("Please enter a task name");
      return;
    }

    if (!draft.loginTime || !draft.logoutTime) {
      alert("Please enter login and logout times");
      return;
    }

    if (draft.logoutTime <= draft.loginTime) {
      alert("Logout time must be after login time");
      return;
    }

    setRows((prev) =>
      prev.map((row) =>
        row.id === draft.id ? draft : row
      )
    );

    setEditingId(null);
    setDraft(null);
    setIsNewRow(false);
  };

  const handleCancel = () => {
    if (isNewRow && editingId !== null) {
      setRows((prev) =>
        prev.filter((row) => row.id !== editingId)
      );
    }

    setEditingId(null);
    setDraft(null);
    setIsNewRow(false);
  };

  const handleDelete = (id: number) => {
    setRows((prev) =>
      prev.filter((row) => row.id !== id)
    );

     closeDialog();
  };

  const handleAddRow = () => {
    const newRow: Data = {
      id: nextId,
      date: "",
      loginTime: "",
      logoutTime: "",
      projectName: "",
      taskName: "",
      status: "Pending",
    };

    setRows((prev) => [newRow, ...prev]);
    setPage(0);

    setNextId((prev) => prev + 1);
    setEditingId(newRow.id);
    setDraft(newRow);
    setIsNewRow(true);
  };

  const handleAddProject = () => {
    const name = newProject.trim();

    if (!name) {
      alert("Please enter a project name");
      return;
    }

    const existingProject = projects.find(
      (project) =>
        project.toLowerCase() === name.toLowerCase()
    );

    if (existingProject) {
      alert("Project already exists");
      return;
    }

    setProjects((prev) => [...prev, name]);

    if (draft) {
      setDraft((prev) =>
        prev ? { ...prev, projectName: name } : prev
      );
    }

    setNewProject("");
    setShowAddProject(false);
  };

  const updateDraft = <K extends keyof Data>(
    field: K,
    value: Data[K]
  ) => {
    setDraft((prev) =>
      prev ? { ...prev, [field]: value } : prev
    );
  };

  const rowContent = (_index: number, row: Data) => {
    const isEditing = editingId === row.id;

    return (
      <>

<TableCell>
  {isEditing && draft ? (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={draft.date ? dayjs(draft.date) : null}
        onChange={(newDate) =>
          updateDraft(
            "date",
            newDate && newDate.isValid() ? newDate.format("YYYY-MM-DD") : ""
          )
        }
        slotProps={{
          textField: {
            size: "small",
            fullWidth: true,
            sx: inputSx,
          },
          desktopPaper: { sx: popupSx },
          mobilePaper: { sx: popupSx },
          day: {
            sx: {
              "&.Mui-selected": {
                backgroundColor: "#16a34a",
                color: "#ffffff",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#16a34a",
              },
              "&.Mui-selected:focus": {
                backgroundColor: "#16a34a",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  ) : (
    row.date
  )}
</TableCell>

<TableCell>
  {isEditing && draft ? (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        ampm={false}
        format="HH:mm"
        value={
          draft.loginTime
            ? dayjs(`2000-01-01T${draft.loginTime}`)
            : null
        }
        onChange={(newValue) => {
          updateDraft(
            "loginTime",
            newValue && newValue.isValid()
              ? newValue.format("HH:mm")
              : ""
          );
        }}
        slotProps={{
          textField: {
            size: "small",
            fullWidth: true,
            sx: inputSx,
          },
          desktopPaper: { sx: popupSx },
          mobilePaper: { sx: popupSx },
        }}
      />
    </LocalizationProvider>
  ) : (
    row.loginTime
  )}
</TableCell>

<TableCell>
  {isEditing && draft ? (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        ampm={false}
        format="HH:mm"
        value={
          draft.logoutTime
            ? dayjs(`2000-01-01T${draft.logoutTime}`)
            : null
        }
        onChange={(newValue) => {
          updateDraft(
            "logoutTime",
            newValue && newValue.isValid()
              ? newValue.format("HH:mm")
              : ""
          );
        }}
        slotProps={{
          textField: {
            size: "small",
            fullWidth: true,
            sx: inputSx,
          },
          desktopPaper: { sx: popupSx },
          mobilePaper: { sx: popupSx },
        }}
      />
    </LocalizationProvider>
  ) : (
    row.logoutTime
  )}
</TableCell>
       
       <TableCell>
  {isEditing && draft ? (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Select
        size="small"
        fullWidth
        displayEmpty
        value={draft.projectName}
        onChange={(e) =>
          updateDraft("projectName", e.target.value)
        }
        sx={inputSx}
        MenuProps={dropdownMenuProps}
      >
        <MenuItem value="" disabled>
          Select Project
        </MenuItem>

        {projects.map((project) => (
          <MenuItem key={project} value={project}>
            {project}
          </MenuItem>
        ))}
      </Select>

      <IconButton
        color="primary"
        aria-label="Add project"
        onClick={() => setShowAddProject(true)}
      >
        <Plus size={18} />
      </IconButton>
    </Box>
  ) : (
    row.projectName || "-"
  )}
</TableCell>

        <TableCell>
          {isEditing && draft ? (
            <TextField
              size="small"
              fullWidth
              placeholder="Enter task"
              value={draft.taskName}
              onChange={(e) =>
                updateDraft(
                  "taskName",
                  e.target.value
                )
              }
               sx={inputSx}
            />
          ) : (
            row.taskName || "-"
          )}
        </TableCell>

        <TableCell>
  {isEditing && draft ? (
    <Select
      size="small"
      fullWidth
      value={draft.status}
      onChange={(e) =>
        updateDraft("status", e.target.value as Status)
      }
      sx={inputSx}
      MenuProps={dropdownMenuProps}
    >
      <MenuItem value="Pending">
        Pending
      </MenuItem>

      <MenuItem value="Approved">
        Approved
      </MenuItem>

      <MenuItem value="Rejected">
        Rejected
      </MenuItem>
    </Select>
  ) : (
    row.status
  )}
</TableCell>

        <TableCell>
          {isEditing ? (
            <Box sx={{ display: "flex" }}>
              <IconButton
                color="success"
                aria-label="Save row"
                onClick={handleSave}
              >
                <Check size={18}/>
              </IconButton>

              <IconButton
                aria-label="Cancel editing"
                onClick={handleCancel}
              >
                <X size={18}/>
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              <IconButton
                disabled={editingId !== null}
                aria-label="Edit row"
                onClick={() => handleEdit(row)}
              >
                <Pencil size={18}/>
              </IconButton>

      <IconButton
  color="error"
  disabled={editingId !== null}
  aria-label="Delete row"
  onClick={() => openDialog(row.id)}
>
  <Trash2 size={18} />
</IconButton>
            </Box>
          )}
        </TableCell>
      </>
    );
  };

  return (
    <div className="flex w-full min-w-0 flex-col gap-4 p-6">
  
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold dark:text-gray-100">
          Time Sheets
        </h1>

        <Button
  variant="contained"
  size="small"
  startIcon={<Plus size={14} />}
  onClick={handleAddRow}
  disabled={editingId !== null}
  sx={(theme) => ({
    height: "30px",
    minWidth: "auto",
    width: "fit-content",

    padding: "4px 10px",
    fontSize: "12px",
    textTransform: "none",
    borderRadius: "6px",

    backgroundColor: "#65A879",

    color: "#ffffff",

    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.15)"
        : "1px solid transparent",

    boxShadow: "none",

    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "#374151"
          : "#4C8A60",

      boxShadow:
        theme.palette.mode === "dark"
          ? "0 0 8px rgba(101,168,121,0.4)"
          : "none",
    },

    "& .MuiButton-startIcon": {
      marginRight: "4px",
      marginLeft: "0px",
    },
  })}
>
  Add Row
</Button>
      </div>
{rows.length === 0 ? (
  <div className="flex justify-center items-center min-h-[calc(100dvh-80px)]">
  <p className="text-2xl font-bold dark:text-gray-100">NO Data To Display</p>
  </div> 
  ) 
  :
(
  <div>

<Paper
  sx={(theme) => ({
        height: {
      xs: 350,
      sm: 400,
      md: 500,
      lg: 565,
      xl: 650,
    },
    width: "100%",
    minWidth: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",

    backgroundImage: "none",

    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(51,65,85,0.2)"
        : "#ffffff",

    border: "1px solid",
    borderColor: "divider",

    transition: "box-shadow 0.2s ease-in-out",

    "&:hover": {
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 0 8px rgba(101,168,121,0.4)"
          : "none",
    },

    "& .MuiTableBody-root .MuiTableCell-root": {
      color: theme.palette.text.primary,
      backgroundColor: "transparent",
      borderColor: "divider",
    },

    "& .MuiTableBody-root .MuiTableRow-root:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.04)"
          : "#f8fafc",
    },
  })}
>
  <div className="min-h-0 flex-1">
    <TableVirtuoso
      style={{ height: "100%" }}
      data={paginatedRows}
      computeItemKey={(_index, row) => row.id}
      components={VirtuosoTableComponents}
      fixedHeaderContent={fixedHeaderContent}
      itemContent={rowContent}
    />
  </div>

  <TablePagination
    component="div"
    count={rows.length}
    page={safePage}
    onPageChange={handleChangePage}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    rowsPerPageOptions={[5, 10, 25]}
    sx={(theme) => ({
      borderTop: "1px solid",
      borderColor: "divider",
      flexShrink: 0,

      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(51,65,85,0.2)"
          : "#ffffff",

      color: theme.palette.text.primary,

      "& .MuiTablePagination-selectIcon": {
        color: "inherit",
      },

      "& .MuiTablePagination-actions button:not(.Mui-disabled)": {
        color: "inherit",
      },
    })}
  />
</Paper>

<DialogPopup
  id={selectedId}
  title="Delete Timesheet"
  description="Are you sure you want to delete this timesheet?"
  confirmText="Delete"
  cancelText="Cancel"
  onConfirm={handleDelete}
  onClose={closeDialog}
/>

      <Dialog
  open={showAddProject}
  onClose={() => {
    setShowAddProject(false);
    setNewProject("");
  }}
  fullWidth
  maxWidth="xs"
  slotProps={{
    paper: {
      sx: popupSx,
    },
  }}
>
  <DialogTitle
    sx={{
      fontSize: "18px",
      fontWeight: 600,
      color: "text.primary",
    }}
  >
    Add New Project
  </DialogTitle>

  <DialogContent>
    <TextField
      autoFocus
      fullWidth
      size="small"
      label="Project Name"
      placeholder="Enter project name"
      value={newProject}
      onChange={(e) =>
        setNewProject(e.target.value)
      }
      sx={[inputSx, { mt: 1 }]}
    />
  </DialogContent>

  <DialogActions sx={{ padding: "12px 24px" }}>
    <Button
      size="small"
      onClick={() => {
        setShowAddProject(false);
        setNewProject("");
      }}
      sx={{
        textTransform: "none",
        color: "text.secondary",
      }}
    >
      Cancel
    </Button>

    <Button
      size="small"
      variant="contained"
      onClick={handleAddProject}
      sx={{
        backgroundColor: "#65A879",
        color: "#ffffff",
        textTransform: "none",
        boxShadow: "none",

        "&:hover": {
          backgroundColor: "#4C8A60",
          boxShadow: "none",
        },
      }}
    >
      Save Project
    </Button>
  </DialogActions>
</Dialog>
  </div>
)
}
   
    </div>
  );
}
