import {
  Users,
  BookOpen,
  Globe,
  BadgeCheck,
  Layers,
} from "lucide-react";

import type { AboutStat } from "../types/about.types";

interface StatsSectionProps {
  stats: AboutStat[];
}

const statIcons = {
  users: Users,
  book: BookOpen,
  globe: Globe,
  badge: BadgeCheck,
  layers: Layers,
};

const iconColors = [
  "text-orange-400",
  "text-purple-400",
  "text-red-400",
  "text-green-500",
  "text-orange-400",
];

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="bg-white pb-14 pt-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, index) => {
          const Icon = statIcons[stat.icon];

          return (
            <div
              key={stat.id}
              className="flex items-center justify-center gap-3"
            >
              <Icon
                className={`h-6 w-6 shrink-0 ${iconColors[index % iconColors.length]}`}
                strokeWidth={1.7}
              />

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {stat.value}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}