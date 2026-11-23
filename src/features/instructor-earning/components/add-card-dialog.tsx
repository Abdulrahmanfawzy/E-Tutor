"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

export default function AddCardDialog({ open, onOpenChange }: Props) {
  const t = useTranslations("instructorEarning.addCard");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="card-name">{t("name")}</Label>
            <Input id="card-name" placeholder={t("namePlaceholder")} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="card-number">{t("cardNumber")}</Label>
            <Input id="card-number" inputMode="numeric" placeholder={t("cardNumberPlaceholder")} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="card-expiry">{t("expiry")}</Label>
              <Input id="card-expiry" placeholder={t("expiry")} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="card-cvc">{t("cvc")}</Label>
              <Input id="card-cvc" inputMode="numeric" placeholder={t("cvcPlaceholder")} />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>{t("cancel")}</Button>
          <Button className="bg-button-primary text-white hover:bg-button-primary-hover">{t("submit")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}