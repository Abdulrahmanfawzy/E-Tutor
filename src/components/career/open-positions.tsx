import PositionCard from "./postions-card";
import { positions } from "@/features/become-instructor/data/job-data"; 

export default function OpenPositions() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900">
          Our all open positions ({String(positions.length).padStart(2, "0")})
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((p) => <PositionCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}