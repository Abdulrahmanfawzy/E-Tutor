
import { ArrowRight } from "lucide-react";

export default function ApplyButton({
  applyUrl,
}: {
  applyUrl: string;
}) {
  return (
    <div className="flex justify-center py-10">
      <a
        href={applyUrl}
        className="flex items-center gap-2 bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600"
      >
        Apply Now
        <ArrowRight size={16} />
      </a>
    </div>
  );
}
