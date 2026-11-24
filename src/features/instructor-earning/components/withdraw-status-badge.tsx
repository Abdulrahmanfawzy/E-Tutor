import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { WithdrawStatus } from "../types/earning.types";

const STYLES: Record<WithdrawStatus, string> = {
  pending: "text-orange-400",
  completed: "text-green-400",
  canceled: "text-red-400",
};

export default function WithdrawStatusBadge({ status }: { status: WithdrawStatus }) {
  const t = useTranslations("instructorEarning.history.statuses");
  return <span className={cn("text-label-sm font-medium", STYLES[status])}>{t(status)}</span>;
}