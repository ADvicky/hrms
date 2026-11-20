
import {
  UsersRound,
  CircleCheck,
  Plane,
  ClipboardCheck,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const kpiData = [
  {
    id: 1,
    title: "Total Employees",
    value: 245,
    percentage: 5,
    icon: UsersRound,
    trend: "up",
    graph: [10, 25, 17, 22, 20, 26, 24, 30],
  },
  {
    id: 2,
    title: "Present Today",
    value: 232,
    percentage: 2,
    icon: CircleCheck,
    trend: "up",
    graph: [12, 28, 17, 24, 19, 23, 26, 34],
  },
  {
    id: 3,
    title: "On Leave",
    value: 13,
    percentage: 1,
    icon: Plane,
    trend: "up",
    graph: [15, 30, 19, 27, 16, 24, 18, 32],
  },
  {
    id: 4,
    title: "Pending Approvals",
    value: 5,
    percentage: 1,
    icon: ClipboardCheck,
    trend: "down",
    graph: [12, 24, 17, 27, 16, 22, 15, 29],
  },
];

// Convert dummy data into SVG coordinates
function createGraphPath(data: number[]) {
  const width = 140;
  const height = 40;
  const padding = 4;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  return data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;

      const y =
        height -
        padding -
        ((value - min) / range) * (height - padding * 2);

      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

function KpCard() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4 p-2">
      {kpiData.map((card) => {
        const Icon = card.icon;
        const graphPath = createGraphPath(card.graph);

        return (
          <div
            key={card.id}
            className="flex min-h-25 min-w-0 w-full flex-col justify-between rounded-xl bg-white dark:!bg-slate-500 p-2 shadow-md"
          >
            {/* Icon */}
            <div className="flex gap-2">
            <div className="rounded-lg bg-light dark:!bg-slate-500 p-2 w-fit">
              <Icon size={24} className="text-primary" />
            </div>
            <p className="text-md font-medium text-gray-700 dark:text-gray-300">
      {card.title}
    </p>
            </div>

            {/* Value */}
            {/* <div className="flex ">
            <div className="flex flex-col">
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:!text-gray-300">
              {card.value}
            </h2>

            
           
            
                <p className="text-sm font-medium text-gray-700 dark:!text-gray-300">
                  {card.title}
                </p>
               

              
            
             
            </div>
              <div className="flex flex-col ml-auto">
                <div
                  className={` flex ml-auto items-center gap-1 text-sm font-semibold ${
                    card.trend === "up"
                      ? "text-green-600 dark:!text-green-200"
                      : "text-orange-500 dark:!text-red-200"
                  }`}
                >
                  {card.trend === "up" ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}

                  {card.percentage}%
                </div>
              <svg
                viewBox="0 0 140 40"
                className="h-12 w-28 flex mb-auto shrink-0 dark:!text-gray-300"
                aria-label={`${card.title} trend`}
                role="img"
              >
                <path
                  d={`${graphPath} L 140 40 L 0 40 Z`}
                  fill="#DDEFE2"
                  opacity="0.7"
                />

                <path
                  d={graphPath}
                  fill="none"
                  stroke="#65A879"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            </div> */}
            <div className="flex w-full items-end justify-between gap-3">

  {/* Left Section */}
  <div className="flex min-w-0 flex-col">
    <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-300">
      {card.value}
    </h2>

    
  </div>

  {/* Right Section */}
  <div className="flex shrink-0 flex-col items-end px-4">

    {/* Trend Percentage */}
    <div
      className={`flex items-center gap-1 text-sm font-semibold ${
        card.trend === "up"
          ? "text-green-600 dark:text-green-200"
          : "text-orange-500 dark:text-red-200"
      }`}
    >
      {card.trend === "up" ? (
        <TrendingUp size={16} />
      ) : (
        <TrendingDown size={16} />
      )}

      {card.percentage}%
    </div>

    {/* SVG Graph */}
    <svg
      viewBox="0 0 140 40"
      className="block h-12 w-28 shrink-0"
      aria-label={`${card.title} trend`}
      role="img"
    >
      <path
        d={`${graphPath} L 140 40 L 0 40 Z`}
        className="fill-[#DDEFE2] dark:fill-green-900"
        opacity="0.7"
      />

      <path
        d={graphPath}
        fill="none"
        className="stroke-[#65A879] dark:stroke-green-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
</div>
          </div>
        );
      })}
    </div>
  );
}

export default KpCard;
