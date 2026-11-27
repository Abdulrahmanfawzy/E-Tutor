import { Utensils, BookOpen, Plane, Gift, CreditCard, HeartPulse, Trophy, CalendarHeart } from "lucide-react";

const perks = [
  { title: "Healthy Food & Snacks", icon: Utensils, bg: "bg-orange-50", color: "text-orange-400" },
  { title: "Personal Career Growth", icon: BookOpen, bg: "bg-purple-50", color: "text-purple-400" },
  { title: "Vacation & Paid Time Off", icon: Plane, bg: "bg-green-50", color: "text-green-400" },
  { title: "Special Allowance & Bonuse", icon: Gift, bg: "bg-amber-50", color: "text-amber-400" },
  { title: "Competitive Salary", icon: CreditCard, bg: "bg-green-50", color: "text-green-400" },
  { title: "Well-being memberships", icon: HeartPulse, bg: "bg-orange-50", color: "text-orange-400" },
  { title: "Maternity/Paternity Benefits", icon: Trophy, bg: "bg-gray-50", color: "text-gray-700" },
  { title: "Eduguard Annual Events", icon: CalendarHeart, bg: "bg-purple-50", color: "text-purple-400" },
];

export default function PerksBenefits() {
  return (
    <div className="bg-white">
    <section className="container py-16 px-30  ">
      <h2 className="text-center text-heading-6 text-gray-900">Our Perks &amp; Benefits</h2>
      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
        {perks.map(({ title, icon: Icon, bg, color }) => (
          <div key={title} className={`${bg} flex flex-col gap-6 p-6`}>
            <span className={`flex h-12 w-12 items-center justify-center bg-white ${color}`}>
              <Icon size={22} />
            </span>
            <p className="text-sm font-medium text-gray-900">{title}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}