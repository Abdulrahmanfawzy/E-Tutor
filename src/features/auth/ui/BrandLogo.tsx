import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { ROUTES } from "@/lib/Routes";

export function BrandLogo() {
  return (
    <Link href={ROUTES.home} className="flex items-center justify-center gap-2">
      <span className="flex size-9 items-center justify-center rounded-sm bg-orange-500 text-white">
        <GraduationCap className="size-5" />
      </span>
      <span className="text-lg font-semibold text-slate-900">Academy</span>
    </Link>
  );
}
