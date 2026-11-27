import type { ReactNode } from "react";

interface FilterFieldProps {
  label: string;
  children: ReactNode;
}

export function FilterField({ label, children }: FilterFieldProps) {
  return (
    <div className="space-y-1.5">
      <span className="block text-[11px] text-slate-500">{label}:</span>
      {children}
    </div>
  );
}