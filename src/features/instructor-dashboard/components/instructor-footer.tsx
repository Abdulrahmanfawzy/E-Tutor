import { useTranslations } from "next-intl";

export default function InstructorFooter() {
  const t= useTranslations("dashboard.footer");
  return (
    <footer className="flex flex-col gap-3 border-t border-gray-100 bg-white px-8 py-4 text-label-sm text-gray-600 md:flex-row md:items-center md:justify-between">
     <p>{t("copyright", { designer: t("designer") })}</p>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-gray-900">{t("faqs")}</a>
        <a href="#" className="hover:text-gray-900">{t("privacy")}</a>
        <a href="#" className="hover:text-gray-900">{t("terms")}</a>
      </div>
    </footer>
  );
}