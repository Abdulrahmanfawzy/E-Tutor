import { Handshake, Plane, GraduationCap, HeartPulse, Bus, Users, Laptop, Trophy, Gift, type LucideIcon } from "lucide-react";
import type { PerksSection } from "@/app/[locale]/(website)/career/types";

const iconMap: Record<string, LucideIcon> = {
  handshake: Handshake,
  airplane: Plane,
  "graduation-cap": GraduationCap,
  heartbeat: HeartPulse,
  bus: Bus,
  users: Users,
  laptop: Laptop,
  trophy: Trophy,
};

const palette = [
  { bg: "bg-orange-50", color: "text-orange-400" },
  { bg: "bg-purple-50", color: "text-purple-400" },
  { bg: "bg-green-50", color: "text-green-400" },
  { bg: "bg-amber-50", color: "text-amber-400" },
];

export default function PerksBenefits({ data }: { data?: PerksSection }) {
  return (
    <div className="bg-white">
      <section className="container py-16 px-30">
        <h2 className="text-center text-heading-6 text-gray-900">{data?.title}</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {data?.items.map(({ title, icon }, i) => {
            const Icon = iconMap[icon] ?? Gift;
            const { bg, color } = palette[i % palette.length];
            return (
              <div key={title} className={`${bg} flex flex-col gap-6 p-6`}>
                <span className={`flex h-12 w-12 items-center justify-center bg-white ${color}`}>
                  <Icon size={22} />
                </span>
                <p className="text-sm font-medium text-gray-900">{title}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}