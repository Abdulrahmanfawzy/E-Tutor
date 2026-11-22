"use client"

import { MoreHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CourseActionsMenu() {
  const t = useTranslations("instructorCourses");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("actions.options")}
        className="text-gray-500 outline-none hover:text-gray-900"
      >
        <MoreHorizontal size={18} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuItem className="focus:bg-button-primary focus:text-white">
          {t("actions.viewDetails")}
        </DropdownMenuItem>
        <DropdownMenuItem>{t("actions.editCourse")}</DropdownMenuItem>
        <DropdownMenuItem className="text-red-500 focus:text-red-500">
          {t("actions.deleteCourse")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}