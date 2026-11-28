"use client"

import React, { useState } from 'react'
import PeriodSelect from './period-select';
import { useQuery } from '@tanstack/react-query';
import { getRecentActivities } from '../api/recent-activities-api';
import Link from "next/link";
import ActivityItem from './activity-item';
import { useLocale } from "next-intl";

export default function RecentActivities() {
  const locale = useLocale();
  const [filter, setFilter] = useState("week");
  const{data,error,isLoading}=useQuery({
    queryKey:["recent-activities", filter,4],
    queryFn: ()=> getRecentActivities(filter,4),
  })

  if (isLoading) return <p>Loading activities...</p>;

if (error) return <p>Failed to load activities.</p>;
  return (
    <>
       <section className="flex h-full flex-col gap-4 bg-white p-4  rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-2">
        <h3 className="text-label-lg font-semibold">Recent Activity</h3>
        <PeriodSelect 
        defaultValue="week"
        onChange={setFilter}
        />

      </div>

      {/* List */}
   <ul className="flex flex-col gap-4">
  {data?.data.map((activity, index) => (
    <ActivityItem
      key={`${activity.type}-${activity.created_at}-${index}`}
      activity={activity}
    />
  ))}
</ul>
   
<Link
  href={`/${locale}/instructor/activities`}
  className="self-end text-sm text-primary"
>
  View All
</Link>
    </section>
    </>
  )
}
