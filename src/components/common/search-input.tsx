import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export default function SearchInput({
  placeholder = "Search",
  className,
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className={cn("relative w-full max-w-xs", className)}>
      <Search
        size={16}
        className="absolute start-3 top-1/2 -translate-y-1/2 text-gray-500"
      />

      <Input
         type="search"
  placeholder={placeholder}
  value={value}
  onChange={(e) => onChange?.(e.target.value)}
  className="h-10 bg-gray-50 ps-9 rounded-lg"
      />
    </div>
  );
}