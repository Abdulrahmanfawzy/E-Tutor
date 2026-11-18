"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PeriodSelect() {
  return (
    <Select defaultValue="today">
      <SelectTrigger className=" border-0 text-label-sm shadow-none text-gray-600">
        <SelectValue />
      </SelectTrigger>
      <SelectContent >
        <SelectItem value="today">Today</SelectItem>
        <SelectItem value="week">This week</SelectItem>
        <SelectItem value="month">This month</SelectItem>
      </SelectContent>
    </Select>
  );
}