import PositionCard from "./postions-card";
import type { Position } from  "@/app/[locale]/(website)/career/types"; 

export default function OpenPositions({ title, positions }: { title?: string; positions: Position[] }) {
  const active = positions.filter((p) => p.is_active);
  return (
    <section id="positions" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900">
          {title ?? "Our all open positions"} ({String(active.length).padStart(2, "0")})
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {active.map((p) => <PositionCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}