"use client";

import { MoreHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CourseHeaderMenu() {
  const t = useTranslations("courseDetails.header");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("options")}
        className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 outline-none hover:bg-gray-100"
      >
        <MoreHorizontal size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuItem>{t("edit")}</DropdownMenuItem>
        <DropdownMenuItem className="text-red-500 focus:text-red-500">
          {t("delete")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}