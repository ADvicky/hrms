"use client";

import { useState, type FormEvent } from "react";

import {
  Wallet,
  Clock,
  CircleCheck,
  Banknote,
  Plus,
  Trash2,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import DashboardKpiCards from "@/app/components/DashboardKpiCards";
import ManagementTabs from "@/app/components/ManagementTabs";
import ManagementSearch from "@/app/components/ManagementSearch";
import ManagementModal from "@/app/components/ManagementModal";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { X } from "lucide-react";



type ExpenseStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Reimbursed";

interface Expense {
  id: string;
  employee: string;
  title: string;
  category: string;
  amount: number;
  date: string;
  description: string;
  receipt: File | null;
  status: ExpenseStatus;
}



const categories = [
  "Travel",
  "Food",
  "Accommodation",
  "Internet",
  "Fuel",
  "Office Supplies",
  "Training",
  "Others",
];



const tabs = [
  "Overview",
  "All Expenses",
  "Approvals",
  "Reimbursements",
  "Reports",
];



const initialExpenses: Expense[] = [
  {
    id: "EXP-001",
    employee: "Arun Kumar",
    title: "Client Meeting",
    category: "Travel",
    amount: 2500,
    date: "2026-11-20",
    description: "Travel to client office",
    receipt: null,
    status: "Pending",
  },
  {
    id: "EXP-002",
    employee: "Priya Sharma",
    title: "Team Lunch",
    category: "Food",
    amount: 850,
    date: "2026-11-21",
    description: "Team meeting lunch",
    receipt: null,
    status: "Approved",
  },
  {
    id: "EXP-003",
    employee: "Rahul Raj",
    title: "Internet Bill",
    category: "Internet",
    amount: 1200,
    date: "2026-11-22",
    description: "Monthly internet expense",
    receipt: null,
    status: "Reimbursed",
  },
  {
    id: "EXP-004",
    employee: "Divya S",
    title: "Hotel Booking",
    category: "Accommodation",
    amount: 4500,
    date: "2026-11-23",
    description: "Business trip accommodation",
    receipt: null,
    status: "Rejected",
  },
];



const initialForm = {
  employee: "",
  title: "",
  category: "Travel",
  amount: "",
  date: "",
  description: "",
  receipt: null as File | null,
};



const inputClass = `
  w-full border border-gray-300 rounded-lg
  px-3 py-2.5 outline-none
  focus:border-emerald-500
`;

const statusStyles: Record<ExpenseStatus, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Approved: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
  Reimbursed: "bg-blue-100 text-blue-700",
};

const formatAmount = (amount: number) =>
  `₹${amount.toLocaleString("en-IN")}`;

export default function ExpenseManagement() {



  const [expenses, setExpenses] =
    useState<Expense[]>(initialExpenses);

  const [deletepopup, setDeletepopup] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);


  const [value, setValue] = useState(0);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState(initialForm);



  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const pendingExpenses = expenses
    .filter((expense) => expense.status === "Pending")
    .reduce((total, expense) => total + expense.amount, 0);

  const approvedExpenses = expenses
    .filter((expense) => expense.status === "Approved")
    .reduce((total, expense) => total + expense.amount, 0);

  const reimbursedExpenses = expenses
    .filter((expense) => expense.status === "Reimbursed")
    .reduce((total, expense) => total + expense.amount, 0);

  const cards = [
    {
      title: "Total Expenses",
      value: formatAmount(totalExpenses),
      icon: Wallet,
    },
    {
      title: "Pending Approval",
      value: formatAmount(pendingExpenses),
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "Approved Expenses",
      value: formatAmount(approvedExpenses),
      icon: CircleCheck,
    },
    {
      title: "Reimbursed",
      value: formatAmount(reimbursedExpenses),
      icon: Banknote,
      color: "text-blue-600",
    },
  ];

  

  const filteredExpenses = expenses.filter((expense) => {

    const query = search.toLowerCase().trim();

    const matchesSearch =
      expense.employee.toLowerCase().includes(query) ||
      expense.title.toLowerCase().includes(query) ||
      expense.id.toLowerCase().includes(query) ||
      expense.category.toLowerCase().includes(query);

    const matchesCategory =
      category === "all" || expense.category === category;

    const matchesTab =
      value === 2
        ? expense.status === "Pending"
        : value === 3
          ? ["Approved", "Reimbursed"].includes(expense.status)
          : true;

    return matchesSearch && matchesCategory && matchesTab;
  });

  

  const chartData = categories.map((category) => ({
    category,
    amount: expenses
      .filter(
        (expense) =>
          expense.category === category &&
          expense.status !== "Rejected"
      )
      .reduce((total, expense) => total + expense.amount, 0),
  }));

function deleteExpense(id: string) {

  setExpenses((prev) =>
    prev.filter((expense) => expense.id !== id)
  );

  setDeletepopup(false);

  setDeleteId(null);
}

  function handleSubmit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault();

    const amount = Number(form.amount);

    if (
      !form.employee.trim() ||
      !form.title.trim() ||
      !form.date ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      return;
    }

    const newExpense: Expense = {
      ...form,
      id: `EXP-${crypto.randomUUID().slice(0, 8)}`,
      amount,
      status: "Pending",
    };

    setExpenses((prev) => [newExpense, ...prev]);

    setForm(initialForm);

    setOpen(false);

    setValue(1);

    setSearch("");

    setCategory("all");
  }



  function updateStatus(
    id: string,
    status: ExpenseStatus
  ) {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id
          ? { ...expense, status }
          : expense
      )
    );
  }



 

  return (
    <div className="w-full min-w-0 p-4 md:p-8
      flex flex-col gap-6 bg-[#f5f9f7]
      dark:bg-gray-900 min-h-screen">

      {/* Page Header */}

      <div className="flex flex-wrap items-center
        justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold">
            Expense Management
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage employee expenses and reimbursements
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2
          bg-emerald-700 text-white
          px-4 py-2.5 rounded-lg
          hover:bg-emerald-800 cursor-pointer"
        >
          <Plus size={18} />
          Add Expense
        </button>

      </div>



      <DashboardKpiCards cards={cards} />



      <ManagementTabs
        tabs={tabs}
        value={value}
        onChange={setValue}
      />

    

      {(value === 0 || value === 4) && (

        <div className="bg-white dark:bg-gray-800
          rounded-xl p-5 min-w-0
          shadow-[0_0_10px_rgba(0,0,0,0.08)]">

          <h2 className="text-lg font-semibold mb-5">
            Expenses by Category
          </h2>

          <div className="w-full h-[300px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={chartData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="category"
                  tick={{ fontSize: 11 }}
                  interval={0}
                  angle={-25}
                  textAnchor="end"
                  height={65}
                />

                <YAxis tick={{ fontSize: 12 }} />

                <Tooltip />

                <Bar
                  dataKey="amount"
                  fill="#22a35a"
                  radius={[5, 5, 0, 0]}
                  maxBarSize={45}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      )}

      {/* Expense Table */}

      {value !== 4 && (

        <div className="bg-white dark:bg-gray-800
          rounded-xl p-4 flex flex-col gap-5 min-w-0
          shadow-[0_0_10px_rgba(0,0,0,0.08)]">

          <div className="flex flex-wrap items-center
            justify-between gap-3">

            <h2 className="text-lg font-semibold">
              {value === 0 ? "Recent Expenses" : tabs[value]}
            </h2>

            <div className="flex gap-3">

              <ManagementSearch
                value={search}
                onChange={setSearch}
                placeholder="Search expenses..."
              />

              <select
                aria-label="Expense category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-200
                rounded-lg px-3 py-2 dark:bg-gray-800"
              >
                <option value="all">All Categories</option>

                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

            </div>

          </div>

          <div className="w-full overflow-x-auto">

            <table className="w-full min-w-[950px]
              text-sm text-left">

              <thead className="bg-gray-100 dark:bg-gray-700">

                <tr>
                  {[
                    "Expense ID",
                    "Employee",
                    "Title",
                    "Category",
                    "Date",
                    "Amount",
                    "Status",
                    "Actions",
                  ].map((heading) => (
                    <th key={heading} className="p-4 whitespace-nowrap">
                      {heading}
                    </th>
                  ))}
                </tr>

              </thead>

              <tbody>

                {filteredExpenses.map((expense) => (

                  <tr
                    key={expense.id}
                    className="border-b border-gray-100
                    dark:border-gray-700"
                  >

                    <td className="p-4">{expense.id}</td>

                    <td className="p-4">{expense.employee}</td>

                    <td className="p-4">
                      {expense.title}

                      {expense.receipt && (
                        <p className="text-xs text-gray-500">
                          {expense.receipt.name}
                        </p>
                      )}
                    </td>

                    <td className="p-4">{expense.category}</td>

                    <td className="p-4 whitespace-nowrap">
                      {expense.date}
                    </td>

                    <td className="p-4 font-semibold">
                      {formatAmount(expense.amount)}
                    </td>

                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full
                        text-xs font-medium
                        ${statusStyles[expense.status]}`}>
                        {expense.status}
                      </span>
                    </td>

                    <td className="p-4">

                      <div className="flex items-center gap-2">

                        {expense.status === "Pending" && (
                          <>
                            <button
                              onClick={() =>
                                updateStatus(expense.id, "Approved")
                              }
                              className="text-green-700
                              bg-green-100 px-3 py-1.5 rounded-md"
                            >
                              Approve
                            </button>

                            <button
                              onClick={() =>
                                updateStatus(expense.id, "Rejected")
                              }
                              className="text-red-700
                              bg-red-100 px-3 py-1.5 rounded-md"
                            >
                              Reject
                            </button>
                          </>
                        )}

                        {expense.status === "Approved" && (
                          <button
                            onClick={() =>
                              updateStatus(expense.id, "Reimbursed")
                            }
                            className="text-blue-700 bg-blue-100
                            px-3 py-1.5 rounded-md"
                          >
                            Reimburse
                          </button>
                        )}

                        {["Pending", "Rejected"].includes(
                          expense.status
                        ) && (
                          <button
                            aria-label={`Delete ${expense.id}`}
                            // onClick={() => deleteExpense(expense.id)}
                            onClick={() => {setDeletepopup(true),setDeleteId(expense.id);}}
                            className="text-red-600 p-2"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}

                      </div>

                    </td>

                  </tr>

                ))}

                {filteredExpenses.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="p-10 text-center text-gray-500"
                    >
                      No expenses found
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>

      )}
      <Dialog
  open={deletepopup}
  onClose={() => {
    setDeletepopup(false);
    setDeleteId(null);
  }}
  fullWidth
  maxWidth="sm"
>
  <DialogTitle>
    <div className="flex items-center justify-between gap-4">

      <span className="text-xl font-semibold">
        Delete Expense
      </span>

      <button
        type="button"
        aria-label="Close dialog"
        onClick={() => {
          setDeletepopup(false);
          setDeleteId(null);
        }}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        <X size={22} />
      </button>

    </div>
  </DialogTitle>

  <DialogContent dividers>

    <p className="text-gray-600">
      Are you sure you want to delete this expense?
    </p>

    <p className="text-sm text-gray-500 mt-2">
      Expense ID: {deleteId}
    </p>

    <div className="flex justify-end gap-3 pt-6">

      <button
        className="border border-gray-300 px-5 py-2 hover:bg-secondary rounded-md"
        onClick={() => {
          setDeletepopup(false);
          setDeleteId(null);
        }}
      >
        No
      </button>

      <button
        className="bg-red-600 text-white px-5 py-2 rounded-md
        hover:bg-red-700"
        onClick={() => {
          if (deleteId !== null) {
            deleteExpense(deleteId);
          }
        }}
      >
        Yes, Delete
      </button>

    </div>

  </DialogContent>
</Dialog>

   

      <ManagementModal
        open={open}
        title="Add Expense"
        onClose={() => setOpen(false)}
      >

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <label className="flex flex-col gap-1 text-sm">
              Employee Name

              <input
                required
                value={form.employee}
                onChange={(e) =>
                  setForm({ ...form, employee: e.target.value })
                }
                className={inputClass}
                placeholder="Employee name"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Expense Title

              <input
                required
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                className={inputClass}
                placeholder="Expense title"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Category

              <select
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                className={inputClass}
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Amount

              <input
                type="number"
                min="0.01"
                step="0.01"
                required
                value={form.amount}
                onChange={(e) =>
                  setForm({ ...form, amount: e.target.value })
                }
                className={inputClass}
                placeholder="Enter amount"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Expense Date

              <input
                type="date"
                required
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Upload Receipt

              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={(e) =>
                  setForm({
                    ...form,
                    receipt: e.target.files?.[0] ?? null,
                  })
                }
                className={inputClass}
              />
            </label>

          </div>

          <label className="flex flex-col gap-1 text-sm">
            Description

            <textarea
              rows={4}
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              className={inputClass}
              placeholder="Enter expense description"
            />
          </label>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="border border-gray-300
              px-4 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-emerald-700 text-white
              px-4 py-2 rounded-lg"
            >
              Submit Expense
            </button>

          </div>

        </form>

      </ManagementModal>

    </div>
  );
}