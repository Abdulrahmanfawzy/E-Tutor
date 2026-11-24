"use client";

import { MoreHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function WithdrawRowMenu() {
  const t = useTranslations("instructorEarning.history");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label={t("options")} className="text-gray-500 outline-none hover:text-gray-900">
        <MoreHorizontal size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuItem>{t("cancelWithdraw")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}