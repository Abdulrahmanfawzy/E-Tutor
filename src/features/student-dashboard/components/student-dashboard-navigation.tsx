
"use client";

import { Link, usePathname } from "@/i18n/navigation";

const navigationItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        label: "Courses",
        href: "/courses",
    },
    {
        label: "Teachers",
        href: "/teachers",
    },
    {
        label: "Message",
        href: "/messages",
    },
    {
        label: "Wishlist",
        href: "/wishlist",
    },
    {
        label: "Purchase History",
        href: "/purchase-history",
    },
    {
        label: "Settings",
        href: "/settings",
    },
];

const StudentDashboardNavigation = () => {
    const pathname = usePathname();
    const normalizedPathname =
        pathname !== "/" && pathname.endsWith("/")
            ? pathname.slice(0, -1)
            : pathname;

    return (
        <nav
            aria-label="Student dashboard navigation"
            className="w-full "
        >
            <div className="grid w-full grid-cols-7">
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
                relative flex min-w-0 items-center justify-center
                px-2 py-5 text-center text-xs font-medium
                transition-colors duration-200 sm:px-6
                ${isActive
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
