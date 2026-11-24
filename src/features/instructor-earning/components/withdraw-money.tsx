"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import DashboardCard from "@/features/instructor-dashboard/components/dashboard-card";
import { PaymentMethod } from "../types/earning.types";


type Props = { methods: PaymentMethod[]; balance: number; minWithdraw: number };

export default function WithdrawMoney({ methods, balance, minWithdraw }: Props) {
  const t = useTranslations("instructorEarning.withdraw");
  const [selected, setSelected] = useState(methods[0]?.id);
  const canWithdraw = balance >= minWithdraw;

  return (
    <DashboardCard title={t("title")} action={null} >
      <div className="flex flex-col gap-4">
        <p className="text-label-sm text-gray-500">{t("paymentMethod")}</p>

        <ul className="flex flex-col gap-3">
          {methods.map((m) => {
            const active = m.id === selected;
            return (
              <li key={m.id}>
                <button
                  type="button"
                  onClick={() => setSelected(m.id)}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-md border p-3 text-start text-label-sm",
                    active ? "border-green-400" : "border-gray-100"
                  )}
                >
                  <span className="w-20 font-semibold capitalize">{m.type}</span>
                  {m.type === "paypal" ? (
                    <span className="flex-1 text-gray-500">{t("paypalNote")}</span>
                  ) : (
                    <>
                      <span className="flex-1">{m.number}</span>
                      <span>{m.expires}</span>
                      <span>{m.name}</span>
                    </>
                  )}
                  {active && <Check size={16} className="rounded-full bg-green-400 p-0.5 text-white" />}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-heading-7">${balance.toLocaleString()}.00</p>
            <p className="text-label-sm text-gray-500">{t("currentBalance")}</p>
          </div>
          <Button
            disabled={!canWithdraw}
            className="bg-button-primary px-6 text-white hover:bg-button-primary-hover"
          >
            {t("withdrawMoney")}
          </Button>
        </div>
      </div>
    </DashboardCard>
  );
}