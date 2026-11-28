
import { Layers, Wallet, CreditCard, Crown } from "lucide-react";
import type { BankCardData, EarningStat, PaymentMethod, WithdrawRecord } from "@/features/instructor-earning/types/earning.types";

export const EARNING_STATS: EarningStat[] = [
  {
    labelKey: "totalRevenue",
    value: "$13,804.00",
    icon: Layers,
    iconClassName: "bg-orange-50 text-orange-400",
  },
  {
    labelKey: "currentBalance",
    value: "$16,593.00",
    icon: Wallet,
    iconClassName: "bg-purple-50 text-purple-400",
  },
  {
    labelKey: "totalWithdrawals",
    value: "$13,184.00",
    icon: CreditCard,
    iconClassName: "bg-red-50 text-red-400",
  },
  {
    labelKey: "todayRevenue",
    value: "$162.00",
    icon: Crown,
    iconClassName: "bg-green-50 text-green-400",
  },
];


export const BANK_CARDS: BankCardData[] = [
  { id: 1, number: "4855 **** **** ****", expires: "04/24", name: "Vako Shvili" },
  { id: 2, number: "2855 **** **** ****", expires: "08/25", name: "Vako Shvili" },
];


export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 1, type: "visa", number: "4855 **** **** ****", expires: "04/24", name: "Vako Shvili" },
  { id: 2, type: "mastercard", number: "2855 **** **** ****", expires: "04/24", name: "Vako Shvili" },
  { id: 3, type: "paypal" },
];

export const WITHDRAW_HISTORY: WithdrawRecord[] = [
  { id: 1, date: "21 Sep, 2021 at 2:14 AM", method: "Mastercards", amount: "American Express", status: "pending" },
  { id: 2, date: "21 Sep, 2021 at 2:14 AM", method: "Visa", amount: "American Express", status: "pending" },
  { id: 3, date: "21 Sep, 2021 at 2:14 AM", method: "Visa", amount: "American Express", status: "completed" },
  { id: 4, date: "21 Sep, 2021 at 2:14 AM", method: "Mastercards", amount: "American Express", status: "completed" },
  { id: 5, date: "21 Sep, 2021 at 2:14 AM", method: "Visa", amount: "American Express", status: "canceled" },
  { id: 6, date: "21 Sep, 2021 at 2:14 AM", method: "Mastercards", amount: "American Express", status: "completed" },
  { id: 7, date: "21 Sep, 2021 at 2:14 AM", method: "Mastercards", amount: "American Express", status: "completed" },
];

export const CURRENT_BALANCE = 16593;
export const MIN_WITHDRAW = 50;