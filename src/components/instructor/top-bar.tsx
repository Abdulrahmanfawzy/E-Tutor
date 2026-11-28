import { Bell, Search } from "lucide-react";

export default function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4">
      <div>
        <p className="text-xs text-[#6E7485]">Good Morning</p>
        <h1 className="text-lg font-semibold text-[#1D2026]">{title}</h1>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex h-10 w-64 items-center gap-2 bg-[#F5F7FA] px-3">
          <Search size={16} className="text-[#1D2026]" />
          <input
            placeholder="Search"
            className="w-full bg-transparent text-sm outline-none placeholder:text-[#8C94A3]"
          />
        </div>
        <button className="relative bg-[#FFEEE8] p-2 text-[#FF6636]" aria-label="Notifications">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#FF6636]" />
        </button>
        <div className="h-9 w-9 rounded-full bg-[#E9EAF0]" />
      </div>
    </header>
  );
}