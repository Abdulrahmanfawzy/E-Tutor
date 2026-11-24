import { cn } from "cn";
import {
  PlayCircle,
  MessageSquare,
  Users,
  BarChart3,
  Languages,
  Paperclip,
  Clock,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

type StatTileData = {
  labelKey: string;
  value: string;
  detail?: string;
  icon: LucideIcon;
  iconClassName: string;
};

const STAT_TILES: StatTileData[] = [
  {
    labelKey: "lectures",
    value: "1,957",
    detail: "(219.3 GB)",
    icon: PlayCircle,
    iconClassName: "bg-orange-50 text-orange-400",
  },
  {
    labelKey: "comments",
    value: "51,429",
    icon: MessageSquare,
    iconClassName: "bg-purple-50 text-purple-400",
  },
  {
    labelKey: "students",
    value: "9,419,418",
    icon: Users,
    iconClassName: "bg-red-50 text-red-400",
  },
  {
    labelKey: "level",
    value: "Beginner",
    icon: BarChart3,
    iconClassName: "bg-green-50 text-green-400",
  },
  {
    labelKey: "language",
    value: "Mandarin",
    icon: Languages,
    iconClassName: "bg-gray-50 text-gray-700",
  },
  {
    labelKey: "files",
    value: "142",
    detail: "(14.4 GB)",
    icon: Paperclip,
    iconClassName: "bg-orange-50 text-orange-400",
  },
  {
    labelKey: "hours",
    value: "19:37:51",
    icon: Clock,
    iconClassName: "bg-purple-50 text-purple-400",
  },
  {
    labelKey: "viewed",
    value: "76,395,167",
    icon: Trophy,
    iconClassName: "bg-gray-50 text-gray-700",
  },
];




function StatTile({ labelKey, value, icon: Icon, iconClassName ,detail}: StatTileData) {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-lg ">
      <div className={cn("flex h-12 w-12 items-center justify-center", iconClassName)}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-xl ">{value}</p>
          <p className="text-label-md text-muted-foreground">{labelKey}</p>
       {detail && <span>{detail}</span> }
      </div>
    </div>
  );
}

export default function StatTiles() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {STAT_TILES.map((statTile) => (
        <StatTile key={statTile.labelKey} {...statTile} />
      ))}
    </div>
  );
}




