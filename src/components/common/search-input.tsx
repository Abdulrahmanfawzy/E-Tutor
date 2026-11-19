import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  placeholder?: string;
  className?: string;
};

export default function SearchInput({
  placeholder = "Search",
  className,
}: SearchInputProps) {
  return (
    <div className={cn("relative w-full max-w-xs", className)}>
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <Input
        type="search"
        placeholder={placeholder}
        className="h-10 bg-gray-50 pl-9"
      />
    </div>
  );
}