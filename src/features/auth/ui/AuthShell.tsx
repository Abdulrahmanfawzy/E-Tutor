import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { BrandLogo } from "./BrandLogo";

interface AuthShellProps {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthShell({ title, description, children, footer }: AuthShellProps) {
  return (
    <div className="w-full max-w-md space-y-6">
      <BrandLogo />
      <Card className="gap-0 rounded-sm border-slate-200 p-8 shadow-sm">
        <header className="mb-6 space-y-1.5">
          <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
          <p className="text-sm text-slate-500">{description}</p>
        </header>
        {children}
      </Card>
      {footer && <div className="text-center text-sm text-slate-500">{footer}</div>}
    </div>
  );
}
