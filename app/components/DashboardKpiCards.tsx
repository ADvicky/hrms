import type { LucideIcon } from "lucide-react";

interface KpiCard {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
}

interface DashboardKpiCardsProps {
  cards: KpiCard[];
}

function DashboardKpiCards({
  cards,
}: DashboardKpiCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white dark:bg-gray-800
            rounded-xl p-5 min-w-0
            shadow-[0_0_10px_rgba(0,0,0,0.08)]
            flex flex-col gap-3"
          >
            <div className="flex items-center justify-between gap-2">

              <span className="text-sm text-gray-500 dark:text-gray-300">
                {card.title}
              </span>

              <div className="bg-emerald-100 rounded-lg p-2 shrink-0">
                <Icon
                  size={22}
                  className={card.color ?? "text-emerald-700"}
                />
              </div>

            </div>

            <h2 className="text-2xl font-bold break-words">
              {card.value}
            </h2>

          </div>
        );
      })}

    </div>
  );
}

export default DashboardKpiCards;