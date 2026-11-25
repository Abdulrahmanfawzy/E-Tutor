import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoadMoreButton({ label = "Load More" }: { label?: string }) {
  return (
    <Button
      type="button"
      variant="secondary"
      className="rounded-sm bg-orange-50 px-8 text-xs font-medium text-orange-500 hover:bg-orange-100"
    >
      {label}
      <Loader className="size-3.5" />
    </Button>
  );
}