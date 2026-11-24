"use client"

import React from 'react'
import {
  UsersRound,
  CircleCheck,
  Plane,
  ClipboardCheck,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { DayPicker } from 'react-day-picker';
import TeamLeaveCalendar from '../components/TeamLeaveCalendar';


interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`keep-mounted-tabpanel-${index}`}
      aria-labelledby={`keep-mounted-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: { xs: 1, sm: 2 } }}>{children}</Box>
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `keep-mounted-tab-${index}`,
    'aria-controls': `keep-mounted-tabpanel-${index}`,
  };
}


const kpiData = [
  {
    id: 1,
    title: "Total Employees",
    value: 245,
    percentage: 5,
    status:"Avilable",
    icon: UsersRound,
    trend: "up",
    graph: [10, 25, 17, 22, 20, 26, 24, 30],
  },
  {
    id: 2,
    title: "Present Today",
    value: 232,
    percentage: 2,
    status:"Taken",
    icon: CircleCheck,
    trend: "up",
    graph: [12, 28, 17, 24, 19, 23, 26, 34],
  },
  {
    id: 3,
    title: "On Leave",
    value: 13,
    percentage: 1,
    status:"Pending",
    icon: Plane,
    trend: "up",
    graph: [15, 30, 19, 27, 16, 24, 18, 32],
  },
  {
    id: 4,
    title: "Pending Approvals",
    value: 5,
    percentage: 1,
    status:"CarryForward",
    icon: ClipboardCheck,
    trend: "down",
    graph: [12, 24, 17, 27, 16, 22, 15, 29],
  },
];





export default function LeaveManagement() {
  
     const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

     const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
   return (
    <div className='flex flex-col'>

    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4 p-8">
      {kpiData.map((card) => {
          const Icon = card.icon;
          
          
          return (
              <div
              key={card.id}
              className="flex min-h-25 min-w-0 w-full p-8 gap-2 flex-col justify-center items-center rounded-md bg-white dark:!bg-slate-500  hover:shadow-md"
              >
         
            
            <div className="rounded-lg bg-light dark:!bg-slate-500 p-2 w-fit">
              <Icon size={24} className="text-primary" />
            </div>
            {/* <p className="text-md font-medium text-gray-700 dark:text-gray-300">
      {card.title}
      </p> */}
            



    <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-300">
      {card.value}
    </h2>

           <h1 className='text-xl font-semibold'>
            {card.status}
           </h1>
 
    




          </div>
        );
    })}
    </div>
    <div className='p-8'>
         <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="keep mounted tabs example"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="My Request" {...a11yProps(0)} />
        <Tab label="Team Request" {...a11yProps(1)} />
        <Tab label="Leave Calender" {...a11yProps(2)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        {/* <TextField label="Item One input" /> */}
        <div className='overflow-y-auto sidebar-scroll'>
              <TableContainer component={Paper}>
      <Table sx={{
    width: "100%",
    tableLayout: "fixed",
  }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell sx={{ width: "50%" }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{ width: "25%" }} align="right">
                {row.calories}
              </TableCell>
              <TableCell sx={{ width: "25%" }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* <TextField label="Item Two input" /> */}
        <div className='overflow-y-auto sidebar-scroll'>
              <TableContainer component={Paper}>
      <Table sx={{
    width: "100%",
    tableLayout: "fixed",
  }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell sx={{ width: "50%" }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{ width: "25%" }} align="right">
                {row.calories}
              </TableCell>
              <TableCell sx={{ width: "25%" }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* <TextField label="Item Three input" /> */}
  <TeamLeaveCalendar />
      </CustomTabPanel>
    </Box>
    </div>
    </div>
  );
}
