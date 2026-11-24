import { useTranslations } from "next-intl";
import DashboardCard from "@/features/instructor-dashboard/components/dashboard-card";

import WithdrawStatusBadge from "./withdraw-status-badge";
import WithdrawRowMenu from "./withdraw-row-menu";
import { WithdrawRecord } from "../types/earning.types";

export default function WithdrawHistory({ records }: { records: WithdrawRecord[] }) {
  const t = useTranslations("instructorEarning.history");

  return (
    <DashboardCard title={t("title")} action={null}>
      <div className="overflow-x-auto">
        <table className="w-full text-start text-label-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase">
            <tr>
              <th className="p-3 text-start">{t("date")}</th>
              <th className="p-3 text-start">{t("method")}</th>
              <th className="p-3 text-start">{t("amount")}</th>
              <th className="p-3 text-start">{t("status")}</th>
              <th className="p-3" />
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.id} className="border-b border-gray-100">
                <td className="p-3">{r.date}</td>
                <td className="p-3">{r.method}</td>
                <td className="p-3">{r.amount}</td>
                <td className="p-3"><WithdrawStatusBadge status={r.status} /></td>
                <td className="p-3 text-end">
                  {r.status === "pending" && <WithdrawRowMenu />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}