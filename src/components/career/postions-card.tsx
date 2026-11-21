import Link from "next/link";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import type { Position } from "@/features/become-instructor/data/job-data"; 

export default function PositionCard({ p }: { p: Position }) {
  return (
    <div className="bg-white p-5 shadow-sm">
      <h3 className="mb-3 text-base font-medium text-gray-900">{p.title}</h3>
      <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-gray-600">
        <span className="flex items-center gap-1"><MapPin size={12} className="text-purple-500" />{p.location}</span>
        <span className="flex items-center gap-1"><Clock size={12} className="text-green-500" />{p.type}</span>
        <span className="flex items-center gap-1"><Briefcase size={12} className="text-amber-500" />{p.vacancy}</span>
      </div>
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-600">
          <span className="text-red-500">Deadline:</span> {p.deadline}
        </p>
        <Link href="/career/job-details" className="flex h-9 w-9 items-center justify-center bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white">
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}