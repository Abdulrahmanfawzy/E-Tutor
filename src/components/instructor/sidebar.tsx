"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  SquarePlay,
  BookOpen,
  CircleDollarSign,
  MessageSquare,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

const items = [
  { label: "Dashboard", href: "/instructor/dashboard", icon: LayoutDashboard },
  { label: "Create New Course", href: "/instructor/create-course", icon: SquarePlay },
  { label: "My Courses", href: "/instructor/courses", icon: BookOpen },
  { label: "Earning", href: "/instructor/earning", icon: CircleDollarSign },
  { label: "Message", href: "/instructor/messages", icon: MessageSquare, badge: 1 },
  { label: "Settings", href: "/instructor/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 flex w-60 flex-col bg-[#1D2026] py-6">
      <div className="mb-8 flex items-center gap-2 px-6 text-white">
        <GraduationCap className="text-[#FF6636]" size={26} />
        <span className="text-xl font-semibold">E-tutor</span>
      </div>

      <nav className="flex flex-1 flex-col">
        {items.map(({ label, href, icon: Icon, badge }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-6 py-3 text-sm transition ${
                active ? "bg-[#FF6636] text-white" : "text-[#8C94A3] hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6636] text-[10px] text-white">
                  {badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <button className="flex items-center gap-3 px-6 py-3 text-sm text-[#8C94A3] hover:text-white">
        <LogOut size={18} /> Sign-out
      </button>
    </aside>
  );
}