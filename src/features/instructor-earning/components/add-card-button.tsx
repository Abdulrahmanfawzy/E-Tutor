"use client";
import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import AddCardDialog from "./add-card-dialog";

export default function AddCardButton() {
  const t = useTranslations("instructorEarning.cards");
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-24 w-full items-center justify-center gap-2 rounded-md border border-dashed border-gray-300 text-label-md hover:bg-gray-50"
      >
        <PlusCircle size={18} className="text-button-primary" />
        {t("addNewCard")}
      </button>
      <AddCardDialog open={open} onOpenChange={setOpen} />
    </>
  );
}