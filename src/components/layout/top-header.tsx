
"use client";

import { ChevronDown } from "lucide-react";
import { usePathname, Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/common/language-switcher";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/course-list" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
  { label: "Become an Instructor", href: "/instructor" },
];

export default function TopHeader() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#1D2026] text-white">
<div className="website-container flex min-h-11 items-center justify-between gap-3 sm:min-h-12 md:min-h-14">
        {/* Navigation Links */}
        <nav className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto scrollbar-hide sm:gap-6 md:gap-8">
          {navigationLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex h-11 shrink-0 items-center text-xs transition-colors sm:h-12 sm:text-sm md:h-14 ${isActive
                    ? "text-white"
                    : "text-[#A1A5B3] hover:text-white"
                  }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute left-0 top-0 h-[3px] w-full bg-[#FF6636]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Currency & Language */}
        <div className="flex shrink-0 items-center gap-2 text-xs text-[#A1A5B3] sm:ml-3 sm:gap-4 sm:text-sm md:gap-6">

          <button className="flex items-center gap-1 transition hover:text-white sm:gap-2">
            USD
            <ChevronDown size={14} />
          </button>

          <div className="flex items-center">
            <LanguageSwitcher />
          </div>

        </div>
      </div>
    </div>
  );
}
