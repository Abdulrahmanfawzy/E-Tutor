import type { LucideIcon } from "lucide-react";
export type EarningStat = {
  labelKey: string;
  value: string;
  icon: LucideIcon;
  iconClassName: string;
};

export type BankCardData = {
  id: number;
  number: string;
  expires: string;
  name: string;
};
export type PaymentMethod = {
  id: number;
  type: "visa" | "mastercard" | "paypal";
  number?: string;
  expires?: string;
  name?: string;
};

export type WithdrawStatus = "pending" | "completed" | "canceled";

export type WithdrawRecord = {
  id: number;
  date: string;
  method: string;
  amount: string;
  status: WithdrawStatus;
};

