"use client";

import { useState, type FormEvent } from "react";

import {
  Package,
  UserCheck,
  Boxes,
  Wrench,
  Plus,
  Trash2,
  ChevronDown,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import DashboardKpiCards from "@/app/components/DashboardKpiCards";
import ManagementTabs from "@/app/components/ManagementTabs";
import ManagementSearch from "@/app/components/ManagementSearch";
import ManagementModal from "@/app/components/ManagementModal";
import { useTheme } from "next-themes";



type AssetStatus =
  | "Available"
  | "Assigned"
  | "Maintenance"
  | "Retired";

interface Asset {
  id: string;
  name: string;
  category: string;
  brand: string;
  serialNumber: string;
  purchaseDate: string;
  purchaseCost: number;
  warrantyExpiry: string;
  assignedTo: string;
  assignedDate: string;
  condition: string;
  status: AssetStatus;
}

interface ReturnRecord {
  id: string;
  assetName: string;
  employee: string;
  returnDate: string;
  condition: string;
}



const categories = [
  "Laptop",
  "Desktop",
  "Monitor",
  "Mobile",
  "Printer",
  "Network Device",
  "Furniture",
  "Software License",
  "Accessories",
];



const employees = [
  "Arun Kumar",
  "Priya Sharma",
  "Rahul Raj",
  "Divya S",
  "Karthik R",
];



const tabs = [
  "Overview",
  "All Assets",
  "Assignments",
  "Maintenance",
  "Returns",
  "Reports",
];



const initialAssets: Asset[] = [
  {
    id: "AST-001",
    name: "Dell Latitude 5420",
    category: "Laptop",
    brand: "Dell",
    serialNumber: "DL-001",
    purchaseDate: "2026-01-10",
    purchaseCost: 65000,
    warrantyExpiry: "2029-01-10",
    assignedTo: "Arun Kumar",
    assignedDate: "2026-02-01",
    condition: "Good",
    status: "Assigned",
  },
  {
    id: "AST-002",
    name: "HP Monitor 24",
    category: "Monitor",
    brand: "HP",
    serialNumber: "HP-002",
    purchaseDate: "2026-02-15",
    purchaseCost: 15000,
    warrantyExpiry: "2029-02-15",
    assignedTo: "Priya Sharma",
    assignedDate: "2026-03-01",
    condition: "Good",
    status: "Assigned",
  },
  {
    id: "AST-003",
    name: "Lenovo ThinkPad",
    category: "Laptop",
    brand: "Lenovo",
    serialNumber: "LN-003",
    purchaseDate: "2026-05-10",
    purchaseCost: 72000,
    warrantyExpiry: "2029-05-10",
    assignedTo: "",
    assignedDate: "",
    condition: "New",
    status: "Available",
  },
  {
    id: "AST-004",
    name: "Canon Printer",
    category: "Printer",
    brand: "Canon",
    serialNumber: "CN-004",
    purchaseDate: "2026-06-20",
    purchaseCost: 22000,
    warrantyExpiry: "2028-06-20",
    assignedTo: "",
    assignedDate: "",
    condition: "Damaged",
    status: "Maintenance",
  },
];



const initialForm = {
  name: "",
  category: "Laptop",
  brand: "",
  serialNumber: "",
  purchaseDate: "",
  purchaseCost: "",
  warrantyExpiry: "",
  condition: "New",
};

const inputClass = `
  w-full border border-gray-300 rounded-lg
  px-3 py-2.5 outline-none
  focus:border-emerald-500
`;

const statusStyles: Record<AssetStatus, string> = {
  Available: "bg-green-100 text-green-700",
  Assigned: "bg-blue-100 text-blue-700",
  Maintenance: "bg-yellow-100 text-yellow-700",
  Retired: "bg-gray-200 text-gray-700",
};

const COLORS = [
  "#22a35a",
  "#3b82f6",
  "#eab308",
  "#94a3b8",
];

function today() {
  return new Date().toLocaleDateString("en-CA");
}

export default function AssetManagement() {

const { resolvedTheme } = useTheme();

const isDark = resolvedTheme === "dark";

  const [assets, setAssets] =
    useState<Asset[]>(initialAssets);

  const [returns, setReturns] =
    useState<ReturnRecord[]>([]);

  const [value, setValue] = useState(0);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState(initialForm);

  const [assignOpen, setAssignOpen] = useState(false);

  const [selectedAsset, setSelectedAsset] =
    useState<Asset | null>(null);

  const [employee, setEmployee] = useState("");

  const [returnOpen, setReturnOpen] = useState(false);

  const [returnCondition, setReturnCondition] =
    useState("Good");



  const assignedCount = assets.filter(
    (asset) => asset.status === "Assigned"
  ).length;

  const availableCount = assets.filter(
    (asset) => asset.status === "Available"
  ).length;

  const maintenanceCount = assets.filter(
    (asset) => asset.status === "Maintenance"
  ).length;

  const retiredCount = assets.filter(
    (asset) => asset.status === "Retired"
  ).length;

  const totalValue = assets.reduce(
    (total, asset) => total + asset.purchaseCost,
    0
  );

  const cards = [
    {
      title: "Total Assets",
      value: assets.length,
      icon: Package,
    },
    {
      title: "Assigned Assets",
      value: assignedCount,
      icon: UserCheck,
      // color: "text-blue-600",
    },
    {
      title: "Available Assets",
      value: availableCount,
      icon: Boxes,
    },
    {
      title: "Under Maintenance",
      value: maintenanceCount,
      icon: Wrench,
      // color: "text-yellow-600",
    },
  ];



  const chartData = [
    { name: "Available", value: availableCount },
    { name: "Assigned", value: assignedCount },
    { name: "Maintenance", value: maintenanceCount },
    { name: "Retired", value: retiredCount },
  ];



  const filteredAssets = assets.filter((asset) => {

    const query = search.toLowerCase().trim();

    const matchesSearch =
      asset.name.toLowerCase().includes(query) ||
      asset.id.toLowerCase().includes(query) ||
      asset.assignedTo.toLowerCase().includes(query) ||
      asset.serialNumber.toLowerCase().includes(query);

    const matchesCategory =
      category === "all" || asset.category === category;

    const matchesTab =
      value === 2
        ? asset.status === "Assigned"
        : value === 3
          ? asset.status === "Maintenance"
          : true;

    return matchesSearch && matchesCategory && matchesTab;
  });



  function handleAddAsset(e: FormEvent<HTMLFormElement>) {

    e.preventDefault();

    const purchaseCost = Number(form.purchaseCost);

    if (
      !form.name.trim() ||
      !form.serialNumber.trim() ||
      !Number.isFinite(purchaseCost) ||
      purchaseCost < 0
    ) {
      return;
    }

    const duplicateSerial = assets.some(
      (asset) =>
        asset.serialNumber.toLowerCase() ===
        form.serialNumber.trim().toLowerCase()
    );

    if (duplicateSerial) {
      alert("Serial number already exists");
      return;
    }

    if (
      form.warrantyExpiry &&
      form.warrantyExpiry < form.purchaseDate
    ) {
      alert("Warranty expiry cannot be before purchase date");
      return;
    }

    const newAsset: Asset = {
      ...form,
      id: `AST-${crypto.randomUUID().slice(0, 8)}`,
      purchaseCost,
      assignedTo: "",
      assignedDate: "",
      status:
        form.condition === "Damaged"
          ? "Maintenance"
          : "Available",
    };

    setAssets((prev) => [newAsset, ...prev]);

    setForm(initialForm);

    setOpen(false);

    setValue(1);

    setSearch("");

    setCategory("all");
  }

 

  function openAssignModal(asset: Asset) {

    setSelectedAsset(asset);

    setEmployee("");

    setAssignOpen(true);
  }

  

  function handleAssign(e: FormEvent<HTMLFormElement>) {

    e.preventDefault();

    if (!selectedAsset || !employee) {
      return;
    }

    setAssets((prev) =>
      prev.map((asset) =>
        asset.id === selectedAsset.id &&
        asset.status === "Available"
          ? {
              ...asset,
              assignedTo: employee,
              assignedDate: today(),
              status: "Assigned",
            }
          : asset
      )
    );

    setAssignOpen(false);

    setSelectedAsset(null);

    setEmployee("");
  }



  function openReturnModal(asset: Asset) {

    setSelectedAsset(asset);

    setReturnCondition(asset.condition);

    setReturnOpen(true);
  }

 

  function handleReturn(e: FormEvent<HTMLFormElement>) {

    e.preventDefault();

    if (!selectedAsset) return;

    const asset = assets.find(
      (item) => item.id === selectedAsset.id
    );

    if (!asset || asset.status !== "Assigned") {
      return;
    }

    const returnRecord: ReturnRecord = {
      id: crypto.randomUUID(),
      assetName: asset.name,
      employee: asset.assignedTo,
      returnDate: today(),
      condition: returnCondition,
    };

    setReturns((prev) => [returnRecord, ...prev]);

    setAssets((prev) =>
      prev.map((item) =>
        item.id === asset.id
          ? {
              ...item,
              assignedTo: "",
              assignedDate: "",
              condition: returnCondition,
              status:
                returnCondition === "Damaged"
                  ? "Maintenance"
                  : "Available",
            }
          : item
      )
    );

    setReturnOpen(false);

    setSelectedAsset(null);
  }

  

  function updateStatus(
    id: string,
    status: AssetStatus
  ) {

    setAssets((prev) =>
      prev.map((asset) =>
        asset.id === id
          ? {
              ...asset,
              status,
              condition:
                asset.status === "Maintenance" &&
                status === "Available"
                  ? "Good"
                  : asset.condition,
            }
          : asset
      )
    );
  }


  function deleteAsset(id: string) {

    const asset = assets.find((item) => item.id === id);

    if (!asset || asset.status === "Assigned") {
      return;
    }

    if (!window.confirm("Delete this asset?")) {
      return;
    }

    setAssets((prev) =>
      prev.filter((asset) => asset.id !== id)
    );
  }

  return (
    <div className="w-full min-w-0 p-4 md:p-8
      flex flex-col gap-6 bg-[#f5f9f7]
      dark:!bg-slate-700/20 dark:!text-white min-h-screen">

    

      <div className="flex flex-wrap items-center
        justify-between gap-4">

        <div>

          <h1 className="text-2xl font-bold">
            Asset Management
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage company assets and employee assignments
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-1
          bg-emerald-700 text-white
          px-2 py-1.5 text-xs rounded-lg
          hover:bg-emerald-800 cursor-pointer"
        >
          <Plus size={18} />
          Add Asset
        </button>

      </div>


      <DashboardKpiCards cards={cards} />


      <ManagementTabs
        tabs={tabs}
        value={value}
        onChange={setValue}
      />

      

      {(value === 0 || value === 5) && (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div className="bg-white dark:!border dark:!text-white dark:!border-white/15 dark:!bg-slate-700/0 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)]
            rounded-xl p-5 min-w-0
            shadow-[0_0_10px_rgba(0,0,0,0.08)]">

            <h2 className="text-lg font-semibold">
              Asset Distribution
            </h2>

            <div className="w-full h-[280px]">

              {/* <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={55}
                    outerRadius={95}
                    paddingAngle={3}
                  >

                    {chartData.map((item, index) => (
                      <Cell
                        key={item.name}
                        fill={COLORS[index]}
                      />
                    ))}

                  </Pie>

                  <Tooltip />

                  <Legend />

                </PieChart>

              </ResponsiveContainer> */}
              <ResponsiveContainer width="100%" height="100%">
  <PieChart>
    <Pie
      data={chartData}
      dataKey="value"
      nameKey="name"
      innerRadius={55}
      outerRadius={95}
      paddingAngle={3}
      stroke="none"
    >
      {chartData.map((item, index) => (
        <Cell
          key={item.name}
          fill={COLORS[index % COLORS.length]}
        />
      ))}
    </Pie>

    <Tooltip
      cursor={false}
      contentStyle={{
        backgroundColor: isDark ? "#1f2937" : "#ffffff",

        border: isDark
          ? "1px solid rgba(255,255,255,0.15)"
          : "1px solid #e5e7eb",

        borderRadius: "8px",
        fontSize: "12px",

        boxShadow: isDark
          ? "0 0 8px rgba(101,168,121,0.4)"
          : "0 2px 8px rgba(0,0,0,0.1)",
      }}
      labelStyle={{
        color: isDark ? "#ffffff" : "#111827",
        fontWeight: 600,
      }}
      itemStyle={{
        color: isDark ? "#d1d5db" : "#374151",
      }}
    />

    <Legend
      iconType="circle"
      iconSize={10}
      formatter={(value) => (
        <span
          style={{
            color: isDark ? "#d1d5db" : "#374151",
            fontSize: "12px",
          }}
        >
          {value}
        </span>
      )}
    />
  </PieChart>
</ResponsiveContainer>

            </div>

          </div>

      

          <div className="bg-white dark:!border dark:!border-white/15 dark:!bg-slate-700/0 dark:!text-white  dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)]
            rounded-xl p-5 flex flex-col gap-5
            shadow-[0_0_10px_rgba(0,0,0,0.08)]">

            <h2 className="text-lg font-semibold">
              Asset Summary
            </h2>

            <div className="flex justify-between
              items-center border-b dark:!border-b dark:!border-white/15 border-gray-200 pb-4">

              <span className="text-gray-500 dark:!text-white ">
                Total Purchase Value
              </span>

              <span className="text-xl font-bold">
                ₹{totalValue.toLocaleString("en-IN")}
              </span>

            </div>

            {categories.map((item) => {

              const count = assets.filter(
                (asset) => asset.category === item
              ).length;

              return (
                <div
                  key={item}
                  className="flex items-center justify-between gap-3 "
                >

                  <span className="text-sm text-gray-500 dark:!text-white ">
                    {item}
                  </span>

                  <div className="flex items-center gap-3">

                    <div className="w-[100px] sm:w-[150px]
                      h-2 bg-gray-100 dark:!bg-gray-500 rounded-full">

                      <div
                        className="h-2 bg-emerald-500 dark:!bg-emerald-500/50 rounded-full"
                        style={{
                          width: `${
                            assets.length
                              ? (count / assets.length) * 100
                              : 0
                          }%`,
                        }}
                      />

                    </div>

                    <span className="text-sm font-semibold">
                      {count}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      )}

    

      {value !== 4 && value !== 5 && (

        <div className="bg-white dark:!border dark:!border-white/15 dark:!bg-slate-700/0 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)]
          rounded-xl p-4 min-w-0 flex flex-col gap-5
          shadow-[0_0_10px_rgba(0,0,0,0.08)]">

          <div className="flex flex-wrap items-center
            justify-between gap-3">

            <h2 className="text-lg font-semibold">
              {value === 0 ? "Asset Inventory" : tabs[value]}
            </h2>

            <div className="flex  gap-3">

              <ManagementSearch
                value={search}
                onChange={setSearch}
                placeholder="Search assets..."
              />
<div className="relative w-fit">
              <select
                aria-label="Asset category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                 className="
      appearance-none
      border border-gray-200
      rounded-lg
      pl-3 pr-10 py-2
      cursor-pointer
      outline-none
      dark:!border dark:!border-white/15
      dark:text-white
      
                rounded-lg px-3 py-2 dark:bg-gray-800"
              >

                <option value="all">All Categories</option>

                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}

              </select>
                <ChevronDown
    size={16}
    className="
      absolute
      right-3
      top-1/2
      -translate-y-1/2
      pointer-events-none
      text-gray-500
      dark:text-gray-300
    "
  />

</div>

            </div>

          </div>

          <div className="w-full overflow-x-auto">

            <table className="w-full min-w-[1000px]
              text-sm text-left dark:!border dark:!border-white/15">

              <thead className="bg-gray-100 dark:bg-gray-700">

                <tr>
                  {[
                    "Asset ID",
                    "Asset Name",
                    "Category",
                    "Serial Number",
                    "Assigned To",
                    "Condition",
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

                {filteredAssets.map((asset) => (

                  <tr
                    key={asset.id}
                    className="border-b border-gray-100
                    dark:border-gray-700"
                  >

                    <td className="p-4">{asset.id}</td>

                    <td className="p-4 font-medium">
                      {asset.name}
                    </td>

                    <td className="p-4">{asset.category}</td>

                    <td className="p-4">{asset.serialNumber}</td>

                    <td className="p-4">
                      {asset.assignedTo || "Unassigned"}
                    </td>

                    <td className="p-4">{asset.condition}</td>

                    <td className="p-4">

                      <span className={`px-3 py-1
                        rounded-full text-xs font-medium
                        ${statusStyles[asset.status]}`}>
                        {asset.status}
                      </span>

                    </td>

                    <td className="p-4">

                      <div className="flex items-center gap-2">

                        {asset.status === "Available" && (
                          <>
                            <button
                              onClick={() => openAssignModal(asset)}
                              className="bg-green-100 text-green-700
                              px-2 text-xs py-1.5 rounded-md"
                            >
                              Assign
                            </button>

                            <button
                              onClick={() =>
                                updateStatus(asset.id, "Maintenance")
                              }
                              className="text-yellow-600 p-2 cursor-pointer"
                              aria-label="Send to maintenance"
                              title="Send to maintenance "
                            >
                              <Wrench size={18} />
                            </button>
                          </>
                        )}

                        {asset.status === "Assigned" && (
                          <button
                            onClick={() => openReturnModal(asset)}
                            className="bg-blue-100 text-blue-700
                            px-2 py-1.5 text-xs rounded-md cursor-pointer"
                          >
                            Return
                          </button>
                        )}

                        {asset.status === "Maintenance" && (
                          <button
                            onClick={() =>
                              updateStatus(asset.id, "Available")
                            }
                            className="bg-green-100 text-green-700
                            px-2 text-xs py-1.5 rounded-md whitespace-nowrap cursor-pointer"
                          >
                            Complete Repair
                          </button>
                        )}

                        {asset.status !== "Assigned" &&
                         asset.status !== "Retired" && (
                          <button
                            onClick={() =>
                              updateStatus(asset.id, "Retired")
                            }
                            className="text-gray-500 text-xs dark:!text-white cursor-pointer"
                          >
                            Retire
                          </button>
                        )}

                        {asset.status !== "Assigned" && (
                          <button
                            aria-label={`Delete ${asset.id}`}
                            onClick={() => deleteAsset(asset.id)}
                            className="text-red-600 p-2 cursor-pointer"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}

                      </div>

                    </td>

                  </tr>

                ))}

                {filteredAssets.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="p-10 text-center text-gray-500"
                    >
                      No assets found
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>

      )}


      {value === 4 && (

        <div className="bg-white dark:!border dark:!border-white/15 dark:!bg-slate-700/0 dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)]
          rounded-xl p-5 min-w-0
          shadow-[0_0_10px_rgba(0,0,0,0.08)]">

          <h2 className="text-lg font-semibold mb-5">
            Asset Return History
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[600px]
              text-sm text-left dark:!border dark:!border-white/15 ">

              <thead className="bg-gray-100 dark:bg-gray-700 ">

                <tr>
                  <th className="p-4">Asset Name</th>
                  <th className="p-4">Employee</th>
                  <th className="p-4">Return Date</th>
                  <th className="p-4">Condition</th>
                </tr>

              </thead>

              <tbody>

                {returns.map((record) => (

                  <tr
                    key={record.id}
                    className="border-b border-gray-100"
                  >

                    <td className="p-4">{record.assetName}</td>

                    <td className="p-4">{record.employee}</td>

                    <td className="p-4">{record.returnDate}</td>

                    <td className="p-4">{record.condition}</td>

                  </tr>

                ))}

                {returns.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="p-10 text-center text-gray-500 dark:!text-white"
                    >
                      No asset returns recorded
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>

      )}

   

      <ManagementModal
        open={open}
        title="Register New Asset"
        onClose={() => setOpen(false)}
      >

        <form
          onSubmit={handleAddAsset}
          className="flex flex-col gap-5"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <label className="flex flex-col gap-1 text-sm">
              Asset Name

              <input
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className={inputClass}
                placeholder="Dell Latitude"
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
              Brand

              <input
                required
                value={form.brand}
                onChange={(e) =>
                  setForm({ ...form, brand: e.target.value })
                }
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Serial Number

              <input
                required
                value={form.serialNumber}
                onChange={(e) =>
                  setForm({
                    ...form,
                    serialNumber: e.target.value,
                  })
                }
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Purchase Date

              <input
                type="date"
                required
                value={form.purchaseDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    purchaseDate: e.target.value,
                  })
                }
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Purchase Cost

              <input
                type="number"
                min="0"
                step="0.01"
                required
                value={form.purchaseCost}
                onChange={(e) =>
                  setForm({
                    ...form,
                    purchaseCost: e.target.value,
                  })
                }
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Warranty Expiry

              <input
                type="date"
                min={form.purchaseDate || undefined}
                value={form.warrantyExpiry}
                onChange={(e) =>
                  setForm({
                    ...form,
                    warrantyExpiry: e.target.value,
                  })
                }
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-1 text-sm">
              Condition

              <select
                value={form.condition}
                onChange={(e) =>
                  setForm({
                    ...form,
                    condition: e.target.value,
                  })
                }
                className={inputClass}
              >
                <option>New</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Damaged</option>
              </select>
            </label>

          </div>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="border border-gray-300
              px-2 py-1.5 text-xs rounded-lg cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-emerald-700 text-white
              px-2 py-1.5 text-xs rounded-lg cursor-pointer"
            >
              Save Asset
            </button>

          </div>

        </form>

      </ManagementModal>

      {/* Assign Asset Modal */}

      <ManagementModal
        open={assignOpen}
        title="Assign Asset"
        onClose={() => setAssignOpen(false)}
      >

        <form
          onSubmit={handleAssign}
          className="flex flex-col gap-4"
        >

          <div className="bg-gray-100 rounded-lg p-4">

            <p className="text-sm text-gray-500">
              Selected Asset
            </p>

            <h3 className="font-semibold">
              {selectedAsset?.name}
            </h3>

            <p className="text-sm text-gray-500">
              {selectedAsset?.id}
            </p>

          </div>

          <label className="flex flex-col gap-2 text-sm">
            Select Employee

            <select
              required
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              className={inputClass}
            >

              <option value="">Select employee</option>

              {employees.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

            </select>

          </label>

          <button
            type="submit"
            className="bg-emerald-700 text-white
            px-4 py-2.5 rounded-lg"
          >
            Assign Asset
          </button>

        </form>

      </ManagementModal>

    

      <ManagementModal
        open={returnOpen}
        title="Return Asset"
        onClose={() => setReturnOpen(false)}
      >

        <form
          onSubmit={handleReturn}
          className="flex flex-col gap-4"
        >

          <div className="bg-gray-100 rounded-lg p-4">

            <h3 className="font-semibold">
              {selectedAsset?.name}
            </h3>

            <p className="text-sm text-gray-500">
              Assigned to: {selectedAsset?.assignedTo}
            </p>

          </div>

          <label className="flex flex-col gap-2 text-sm">
            Returned Asset Condition

            <select
              value={returnCondition}
              onChange={(e) =>
                setReturnCondition(e.target.value)
              }
              className={inputClass}
            >
              <option>New</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Damaged</option>
            </select>

          </label>

          <button
            type="submit"
            className="bg-emerald-700 text-white
            px-4 py-2.5 rounded-lg"
          >
            Confirm Return
          </button>

        </form>

      </ManagementModal>

    </div>
  );
}