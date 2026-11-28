import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <Button type="submit" className="h-10 w-full rounded-sm bg-orange-500 text-sm font-medium text-white hover:bg-orange-600">
      {children}
    </Button>
  );
}