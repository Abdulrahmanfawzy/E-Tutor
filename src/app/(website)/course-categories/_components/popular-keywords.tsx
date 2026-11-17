
import { Badge } from "@/components/ui/badge";
import { popularKeywords } from "./courses-data";


export default function PopularKeywords() {
  return (
    <section className="flex flex-wrap items-center gap-2">
      <h2 className="mr-1 text-[10px] font-medium text-gray-700">
        Popular keyword:
      </h2>

      {popularKeywords.map((keyword) => (
        <Badge
          key={keyword}
          variant="secondary"
          className={`h-5 cursor-pointer rounded-none px-2 text-[8px] font-normal transition-colors ${
            keyword === "Developments"
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {keyword}
        </Badge>
      ))}
    </section>
  );
}
