import {
  PlayCircle,
  MonitorPlay,
  Users,
  Trophy,
  UserRound,
  BookOpenCheck,
  Wallet,
  ShoppingBag,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Stat = {
  label: string;
  value: string;
  icon: LucideIcon;
  iconClassName: string;
};

const STATS: Stat[] = [
  
  {
    label: "Enrolled Courses",
    value: "957",
    icon: PlayCircle,
    iconClassName: "bg-orange-50 text-orange-400",
  },
  {
    label: "Active Courses",
    value: "19",
    icon: MonitorPlay,
    iconClassName: "bg-purple-50 text-purple-400",
  },
  {
    label: "Course Instructors",
    value: "241",
    icon: Users,
    iconClassName: "bg-orange-50 text-orange-400",
  },
  {
    label: "Completed Courses",
    value: "951",
    icon: Trophy,
    iconClassName: "bg-green-50 text-green-400",
  },

  
  {
    label: "Students",
    value: "1,674,767",
    icon: UserRound,
    iconClassName: "bg-red-50 text-red-400",
  },
  {
    label: "Online Courses",
    value: "3",
    icon: BookOpenCheck,
    iconClassName: "bg-green-50 text-green-400",
  },
  {
    label: "USD Total Earning",
    value: "$7,461,767",
    icon: Wallet,
    iconClassName: "bg-gray-50 text-gray-700",
  },
  {
    label: "Course Sold",
    value: "56,489",
    icon: ShoppingBag,
    iconClassName: "bg-purple-50 text-purple-400",
  },
];




function StatCard({ label, value, icon: Icon, iconClassName }: Stat) {
  return (
    <div className="flex items-center gap-4 bg-white p-5">
      <div className={cn("flex h-12 w-12 items-center justify-center", iconClassName)}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-xl ">{value}</p>
        <p className="text-label-md text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}