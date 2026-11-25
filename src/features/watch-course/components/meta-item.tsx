import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetaItemProps {
  icon: LucideIcon;
  label: string;
  iconClassName?: string;
}

export function MetaItem({ icon: Icon, label, iconClassName }: MetaItemProps) {
  return (
    <span className="flex items-center gap-1 whitespace-nowrap">
      <Icon className={cn("size-3.5", iconClassName)} />
      {label}
    </span>
  );
}