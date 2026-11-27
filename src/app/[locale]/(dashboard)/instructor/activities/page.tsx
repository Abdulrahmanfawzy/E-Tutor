"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import PeriodSelect from "@/features/instructor-dashboard/components/period-select";
import ActivityItem from "@/features/instructor-dashboard/components/activity-item";
import { getRecentActivities } from "@/features/instructor-dashboard/api/recent-activities-api";

export default function ActivitiesPage() {
  const [filter, setFilter] = useState("week");

  const limit = 50;

  const { data, error, isLoading } = useQuery({
    queryKey: ["recent-activities", filter, limit],
    queryFn: () => getRecentActivities(filter, limit),
  });

  return (
    <section className="flex flex-col gap-4 rounded-lg border bg-white p-4">
      <div className="flex items-center justify-between border-b pb-2">
        <h3 className="text-label-lg font-semibold">
          All Activities
        </h3>

        <PeriodSelect
          defaultValue="week"
          onChange={setFilter}
        />
      </div>

      {isLoading && <p>Loading activities...</p>}

      {error && <p>Failed to load activities.</p>}

      {!isLoading && !error && (
        <>
          {data?.data.length ? (
            <ul className="flex flex-col gap-4">
              {data.data.map((activity, index) => (
                <ActivityItem
                  key={`${activity.type}-${activity.created_at}-${index}`}
                  activity={activity}
                />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">
              No activities found.
            </p>
          )}
        </>
      )}
    </section>
  );
}
