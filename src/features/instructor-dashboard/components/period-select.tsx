
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useTranslations } from "next-intl";

type Option = {
  label: string;
  value: string;
};

type PeriodSelectProps = {
  options?: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export default function PeriodSelect({
  options,
  defaultValue,
  onChange,
}: PeriodSelectProps) {
  const t = useTranslations("dashboard.periods");

  const defaultOptions: Option[] = [
    { label: t("today"), value: "today" },
    { label: t("week"), value: "week" },
    { label: t("month"), value: "month" },
  ];

  const items = options ?? defaultOptions;
  const initial = defaultValue ?? items[0].value;

  return (
    <Select
      defaultValue={initial}
      onValueChange={onChange}
    >
      <SelectTrigger className="h-8 w-28 border-0 text-label-sm shadow-none">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {items.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
