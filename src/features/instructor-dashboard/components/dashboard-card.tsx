import { cn } from "cn";
import PeriodSelect from "./period-select";

type DashboardCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function DashboardCard({
  title,
  children,
  className,
}: DashboardCardProps) {
  return (
    <section
      className={cn("flex h-full flex-col bg-white rounded-lg", className)}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <h3 className="text-label-lg font-semibold">{title}</h3>
        <PeriodSelect />
      </div>

      {/* Content */}
      <div className="flex-1 p-4">{children}</div>
    </section>
  );
}