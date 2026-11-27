
import {
  MessageSquare,
  Star,
  ShoppingBag,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

import type { RecentActivitiesData } from "../types/recent-activities";

const activityIcons: Record<RecentActivitiesData["type"], LucideIcon> = {
  enrollment: UserPlus,
  comment: MessageSquare,
  review: Star,
  purchase: ShoppingBag,
};

type ActivityItemProps = {
  activity: RecentActivitiesData;
};

export default function ActivityItem({ activity }: ActivityItemProps) {
  const Icon = activityIcons[activity.type];

  return (
    <li className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-400 text-white">
        <Icon size={18} />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-label-md leading-5 text-gray-700">
          <span className="font-semibold text-gray-900">
            {activity.user.name}
          </span>{" "}
          {activity.message}
        </p>

        <span className="text-label-sm text-gray-500">
          {activity.time_ago}
        </span>
      </div>
    </li>
  );
}
