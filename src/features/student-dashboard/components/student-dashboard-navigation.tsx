"use client";

import { Link, usePathname } from "@/i18n/navigation";

const navigationItems = [
  {
    label: "Dashboard",
    href: "/student/dashboard",
  },
  {
    label: "Courses",
    href: "/student/courses",
  },
  {
    label: "Teachers",
    href: "/student/teachers",
  },
  {
    label: "Message",
    href: "/student/message",
  },
  {
    label: "Wishlist",
    href: "/student/wishlist",
  },
  {
    label: "Purchase History",
    href: "/student/purchase-history",
  },
  {
    label: "Settings",
    href: "/student/settings",
  },
];

const StudentDashboardNavigation = () => {
  const pathname = usePathname();
  const normalizedPathname =
    pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  return (
    <nav aria-label="Student dashboard navigation" className="w-full ">
      <div className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
        {navigationItems.map((item) => {
          const isActive =
            normalizedPathname === item.href ||
            (item.href !== "/dashboard" &&
              normalizedPathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`
                relative flex min-h-12 items-center justify-center
                px-1 py-3 text-center text-xs font-medium sm:px-2 lg:min-h-14 lg:px-4
                transition-colors duration-200
                ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }
              `}
            >
              {item.label}

              {isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#FF6636]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default StudentDashboardNavigation;
