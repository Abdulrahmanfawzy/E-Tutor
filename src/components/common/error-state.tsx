
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry: () => void;
}

export default function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load the data. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center gap-4 rounded-xl border border-gray-100 bg-white p-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
        <AlertCircle className="h-7 w-7 text-red-500" />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="max-w-sm text-sm text-gray-500">
          {message}
        </p>
      </div>

      <Button
        onClick={onRetry}
        variant="outline"
        className="gap-2"
      >
        <RefreshCw size={16} />
        Try Again
      </Button>
    </div>
  );
}
