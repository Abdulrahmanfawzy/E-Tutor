import DashboardStatCard from "./dashboard-stat-card";
import { dashboardStats } from "../data/dashboard.mock";

export default function DashboardStats() {
    return (
        <section className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
                Dashboard
            </h2>

            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 xl:grid-cols-4">
                {dashboardStats.map((stat) => (
                    <DashboardStatCard
                        key={stat.id}
                        stat={stat}
                    />
                ))}
            </div>
        </section>
    );
}