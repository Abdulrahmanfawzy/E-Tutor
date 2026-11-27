import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InstructorListItem } from "../types/instructors";
import { formatNumber } from "@/features/instructor-profile/lib/format";


interface InstructorCardProps {
  instructor: InstructorListItem;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  const { name, role, avatarUrl, rating, studentsCount } = instructor;

  return (
    <Card className="gap-0 overflow-hidden rounded-sm border-slate-200 py-0 shadow-none">
      <div className="relative aspect-square w-full bg-slate-100">
        <Image src={avatarUrl} alt={name} fill sizes="(min-width: 1024px) 240px, 50vw" className="object-cover" />
      </div>

      <div className="space-y-1 px-3 py-3 text-center">
        <h3 className="text-sm font-medium text-slate-900">{name}</h3>
        <p className="text-[11px] text-slate-400">{role}</p>
      </div>

      <div className="space-y-3 border-t border-slate-200 p-3">
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <Star className="size-3.5 fill-amber-500 text-amber-500" />
            {rating.toFixed(1)}
          </span>
          <span>
            <b className="font-medium text-slate-700">{formatNumber(studentsCount)}</b> students
          </span>
        </div>
        <Button
          type="button"
          variant="secondary"
          className="h-8 w-full rounded-sm bg-orange-50 text-[11px] font-semibold text-orange-500 hover:bg-orange-100"
        >
          Send Message
        </Button>
      </div>
    </Card>
  );
}