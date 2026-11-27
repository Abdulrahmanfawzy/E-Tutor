import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
      <Input
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
        className="h-10 rounded-sm border-slate-200 pl-9 text-xs shadow-none"
      />
    </div>
  );
}