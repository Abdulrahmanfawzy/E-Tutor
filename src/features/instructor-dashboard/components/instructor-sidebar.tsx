"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  GraduationCap,
  LayoutDashboard,
  SquarePlus,
  BookOpen,
  CreditCard,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
const NAV_ITEMS = [
  { labelKey: "dashboard", href: "/instructor/dashboard", icon: LayoutDashboard },
  { labelKey: "createCourse", href: "/instructor/create-course", icon: SquarePlus },
  { labelKey: "myCourses", href: "/instructor/courses", icon: BookOpen },
  { labelKey: "earning", href: "/instructor/earning", icon: CreditCard },
  { labelKey: "message", href: "/instructor/messages", icon: MessageCircle, badge: 3 },
  { labelKey: "settings", href: "/instructor/settings", icon: Settings },
];

export default function InstructorSidebar() {
  const pathname = usePathname();
  const  {locale}  = useParams();
  const t= useTranslations("dashboard.sidebar")
  return (
    <aside className="sticky top-0 flex h-screen w-60 shrink-0 flex-col bg-gray-900 text-gray-300">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-6 text-white">
        <GraduationCap className="text-button-primary" size={28} />
        <span className="text-heading-7">E-tutor</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col">
        {NAV_ITEMS.map(({ labelKey, href, icon: Icon, badge }) => {
            const fullHref = `/${locale}${href}`; // Construct the full href with locale
          const isActive = pathname === fullHref || pathname.startsWith(`${fullHref}/`);

          return (
            <Link
              key={href}
              href={fullHref}
              className={cn(
                "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-button-primary text-white"
                  : "hover:bg-gray-800 hover:text-white"
              )}
            >
              <Icon size={18} />
              <span className="flex-1">{t(labelKey)}</span>

              {badge ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-button-primary text-label-xs text-white">
                  {badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      {/* Sign out */}
      <button
        type="button"
        className="flex items-center gap-3 px-6 py-5 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-white"
      >
        <LogOut size={18} />
      {t("signOut")}
      </button>
    </aside>
  );
}