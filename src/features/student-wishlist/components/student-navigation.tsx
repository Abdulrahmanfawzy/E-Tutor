
import Link from "next/link";

const navigationItems = [
  { label: "Dashboard", href: "/student/dashboard" },
  { label: "Courses", href: "/student/courses" },
  { label: "Teachers", href: "/student/teachers" },
  { label: "Message", href: "/student/messages" },
  { label: "Wishlist", href: "/student/wishlist" },
  { label: "Purchase History", href: "/student/purchase-history" },
  { label: "Settings", href: "/student/settings" },
];

export function StudentNavigation() {
  return (
<nav className="mx-auto grid w-full max-w-5xl grid-cols-4 border-x border-b border-orange-100 bg-white sm:grid-cols-4 lg:grid-cols-7">      {navigationItems.map((item) => {
        const isActive = item.label === "Wishlist";

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`flex min-h-11 items-center justify-center border-b-2 px-3 py-3 text-center text-xs transition ${
              isActive
                ? "border-orange-400 font-medium text-gray-900"
                : "border-transparent text-gray-600 hover:text-orange-400"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
