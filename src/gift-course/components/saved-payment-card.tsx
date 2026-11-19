import { Check } from "lucide-react";
import { SavedPaymentCardProps } from "../types/gift-course-type";



const SavedPaymentCard = ({
  type,
  number,
  expiry,
  holder,
  selected,
  onSelect,
}: SavedPaymentCardProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full flex items-center gap-6 border px-6 py-2.5 text-left transition
        ${
          selected
            ? "border-green-500"
            : "border-gray-200 hover:border-gray-400"
        }`}
    >
      {/* Card Logo */}
      <div className="flex items-center">
        {type === "visa" ? (
          <span className="w-8 h-8 font-black italic text-blue-700">
            VISA
          </span>
        ) : (
          <div className="flex items-center">
            <span className="size-6 rounded-full bg-red-600" />
            <span className="-ml-2.5 size-6 rounded-full bg-orange-500/95" />
          </div>
        )}
      </div>

      <span className="text-sm text-gray-700 font-normal">{number}</span>
      <span className="text-sm text-gray-700 font-normal">{expiry}</span>
      <span className="text-sm text-gray-700 font-normal">{holder}</span>

      {selected && (
        <span className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
          <Check size={16} strokeWidth={3} />
        </span>
      )}
    </button>
  );
};

export default SavedPaymentCard;