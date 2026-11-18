import React from 'react'
import PeriodSelect from './period-select';
import { MessageSquare } from 'lucide-react';


type Activity = {
  id: number;
  user: string;
  action: string;
  time: string;
};

const ACTIVITIES: Activity[] = [
  {
    id: 1,
    user: "Kevin",
    action: 'comments on your lecture "What is ux" in "2021 ui/ux design with figma"',
    time: "Just now",
  },
  {
    id: 2,
    user: "John",
    action: 'give a 5 star rating on your course "2021 ui/ux design with figma"',
    time: "5 mins ago",
  },
  {
    id: 3,
    user: "Srabani",
    action: 'purchase your course "2021 ui/ux design with figma"',
    time: "6 mins ago",
  },
  {
    id: 4,
    user: "Arif",
    action: 'purchase your course "2021 ui/ux design with figma"',
    time: "10 mins ago",
  },
];

export default function RecentActivities() {
  return (
    <>
       <section className="flex h-full flex-col gap-4 bg-white p-4 border">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-2">
        <h3 className="text-label-lg font-semibold">Recent Activity</h3>
        <PeriodSelect />
      </div>

      {/* List */}
      <ul className="flex flex-col gap-4">
        {ACTIVITIES.map((activity) => (
          <li key={activity.id} className="flex items-start gap-3">
          
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-400 text-white">
  <MessageSquare size={18} />
</div>
               
            <div className="flex flex-col gap-1">
              <p className="text-label-md leading-5 text-gray-700">
                <span className="font-semibold text-gray-900">
                  {activity.user}
                </span>{" "}
                {activity.action}
              </p>
              <span className="text-label-sm text-gray-500">
                {activity.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}
