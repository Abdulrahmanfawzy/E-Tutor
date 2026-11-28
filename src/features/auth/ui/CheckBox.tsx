import type { ReactNode } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxFieldProps {
  id: string;
  children: ReactNode;
}

export function CheckboxField({ id, children }: CheckboxFieldProps) {
  return (
    <div className="flex items-start gap-2">
      <Checkbox
        id={id}
        className="mt-0.5 size-4 rounded-[3px] border-slate-300 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:text-white"
      />
      <Label htmlFor={id} className="text-xs font-normal leading-relaxed text-slate-600">
        {children}
      </Label>
    </div>
  );
}