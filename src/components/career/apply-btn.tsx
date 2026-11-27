import { ArrowRight } from "lucide-react";

export default function ApplyButton() {
  return (
    <div className="flex justify-center py-10">
      <button className="flex items-center gap-2 bg-orange-500 px-8 py-3 text-sm font-medium text-white hover:bg-orange-600">
        Apply Now <ArrowRight size={16} />
      </button>
    </div>
  );
}