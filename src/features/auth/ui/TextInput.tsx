import type { ComponentProps } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function TextInput({ className, ...props }: ComponentProps<typeof Input>) {
  return (
    <Input
      className={cn("h-10 rounded-sm border-slate-200 text-sm shadow-none focus-visible:border-orange-400 focus-visible:ring-orange-100", className)}
      {...props}
    />
  );
}