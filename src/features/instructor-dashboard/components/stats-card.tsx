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
import { Tiles } from "../types/dashboard";

 type Stat = {
   label: string;
   value: number;
   icon: LucideIcon;
   iconClassName: string;
    };

type StatConfig = {
  key: keyof Tiles;
  label: string;
  icon: LucideIcon;
  iconClassName: string;
  isCurrency?: boolean;
}

const STATS_CONFIG: StatConfig[] = [
  { key: "enrolled_courses", label: "Enrolled Courses", icon: PlayCircle, iconClassName: "bg-orange-50 text-orange-400" },
  { key: "active_courses", label: "Active Courses", icon: MonitorPlay, iconClassName: "bg-purple-50 text-purple-400" },
  { key: "course_instructors", label: "Course Instructors", icon: Users, iconClassName: "bg-orange-50 text-orange-400" },
  { key: "completed_courses", label: "Completed Courses", icon: Trophy, iconClassName: "bg-green-50 text-green-400" },
  { key: "students", label: "Students", icon: UserRound, iconClassName: "bg-red-50 text-red-400" },
  { key: "online_courses", label: "Online Courses", icon: BookOpenCheck, iconClassName: "bg-green-50 text-green-400" },
  { key: "total_earning", label: "USD Total Earning", icon: Wallet, iconClassName: "bg-gray-50 text-gray-700", isCurrency: true },
  { key: "course_sold", label: "Course Sold", icon: ShoppingBag, iconClassName: "bg-purple-50 text-purple-400" },
];

function StatCard({ label, value, icon: Icon, iconClassName }: Stat) {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-lg ">
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

export default function StatsCards({tiles}:{tiles:Tiles}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STATS_CONFIG.map((stat) => (
        <StatCard  key={stat.key}
    label={stat.label}
    value={tiles[stat.key]}
    icon={stat.icon}
    iconClassName={stat.iconClassName} />
      ))}
    </div>
  );
}