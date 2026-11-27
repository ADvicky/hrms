
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

const points = [
  { x: 0, y: 50 },
  { x: 25, y: 0 },
  { x: 70, y: 25 },
  { x: 105, y: 5 },
  { x: 140, y: 20 },
];

type Point = {
  x: number;
  y: number;
};

function createSmoothPath(points: Point[]): string {
  if (points.length === 0) return "";

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const previous = points[i - 1];
    const current = points[i];

    const midX = (previous.x + current.x) / 2;

    path += ` C ${midX} ${previous.y},
                ${midX} ${current.y},
                ${current.x} ${current.y}`;
  }

  return path;
}

// function createGraphPath(data: number[]) {
//   const width = 140;
//   const height = 40;
//   const padding = 4;

//   const min = Math.min(...data);
//   const max = Math.max(...data);
//   const range = max - min || 1;

//   return data
//     .map((value, index) => {
//       const x = (index / (data.length - 1)) * width;

//       const y =
//         height -
//         padding -
//         ((value - min) / range) * (height - padding * 2);

//       return `${index === 0 ? "M" : "L"} ${x} ${y}`;
//     })
//     .join(" ");
// }
const graphPath = createSmoothPath(points); 

function KpCard() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4 p-2">
      {kpiData.map((card) => {
        const Icon = card.icon;
        // const graphPath = createGraphPath(card.graph);
        const graphPath = createSmoothPath(points); 

        return (
          <div
            key={card.id}
            className="flex min-h-25 min-w-0 w-full flex-col dark:hover:shadow-[0_0_8px_rgba(101,168,121,0.4)] justify-between rounded-md bg-white dark:!border dark:!border-white/15 dark:!bg-slate-700/20 p-2 hover:shadow-md"
          >
         
            <div className="flex gap-2">
            <div className="rounded-lg bg-light dark:!bg-gray-800 dark:!text-white p-2 w-fit">
              <Icon size={20} className="text-primary dark:!text-white " />
            </div>
            <p className="text-md font-medium text-gray-700 dark:text-gray-300">
      {card.title}
    </p>
            </div>

           
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

  <div className="flex min-w-0 flex-col">
    <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-gray-300">
      {card.value}
    </h2>

    
  </div>

  
  <div className="flex shrink-0 flex-col items-end px-4">

   
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

   
    {/* <svg
      viewBox="0 0 140 40"
      className="block h-12 w-28 shrink-0"
      aria-label={`${card.title} trend`}
      role="img"
    >
      <path
        d={`${graphPath} L 140 40 L 0 40 Z`}
        className="fill-[#DDEFE2] dark:fill-green-300 dark:!shadow-[0_10px_10px_2px_rgba(0,0,0,0.2)]"
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
    </svg> */}
  <svg
  viewBox="0 0 140 40"
  className="block h-12 w-28 shrink-0 overflow-visible"
  aria-label={`${card.title} trend`}
  role="img"
>
  <path
    d={`${graphPath} L 140 40 L 0 40 Z`}
    className="
      // fill-[#DDEFE2]
      fill-green-600
      dark:fill-green-300
      dark:drop-shadow-[0_4px_5px_rgba(0,0,0,0.4)]
    "
    opacity="0.3"
  />

  <path
    d={graphPath}
    fill="none"
    className="
      stroke-[#65A879]
      dark:stroke-green-300
      dark:drop-shadow-[0_0_4px_rgba(134,239,172,0.8)]
    "
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
