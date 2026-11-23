import { dashboardStats } from "../data/dashboard.mock";

type DashboardStat = (typeof dashboardStats)[number];

interface DashboardStatCardProps {
    stat: DashboardStat;
}

export default function DashboardStatCard({
    stat,
}: DashboardStatCardProps) {
    const Icon = stat.icon;

    return (
        <article
            className={`flex min-w-0 items-center rounded-sm gap-3 p-3 sm:p-4 ${stat.bgColor}`}
        >
            <div
                className={`flex size-10 shrink-0 items-center rounded-sm justify-center bg-white ${stat.iconColor}`}
            >
                <Icon className="size-5" strokeWidth={1.7} />
            </div>

            <div className="min-w-0">
                <p className="text-base font-medium text-gray-900 sm:text-lg">
                    {stat.value}
                </p>

                <p className="truncate text-[11px] text-gray-500">
                    {stat.title}
                </p>
            </div>
        </article>
    );
}