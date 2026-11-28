import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  labelAction?: ReactNode;
  children: ReactNode;
}

export function FormField({ label, htmlFor, hint, error, labelAction, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor={htmlFor} className="text-xs font-medium text-slate-700">
          {label}
        </Label>
        {labelAction}
      </div>
      {children}
      {error ? (
        <p role="alert" className="text-[11px] text-red-500">{error}</p>
      ) : (
        hint && <p className="text-[11px] text-slate-400">{hint}</p>
      )}
    </div>
  );
}