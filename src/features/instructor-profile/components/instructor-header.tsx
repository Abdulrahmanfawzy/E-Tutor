import { Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { InstructorStats } from "./instructor-stats";
import { SocialLinks } from "./social-links";
import { Instructor } from "../types/instructor-types";

interface InstructorHeaderProps {
  instructor: Instructor;
}

export function InstructorHeader({ instructor }: InstructorHeaderProps) {
  const { name, headline, badge, avatarUrl, website, socials, ...stats } = instructor;

  return (
    <Card className="flex flex-col gap-6 rounded-sm border-orange-100 p-6 shadow-sm sm:flex-row sm:items-start sm:justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="size-24 bg-gradient-to-br from-fuchsia-500 to-purple-600 sm:size-28">
          <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-slate-900">{name}</h1>
            <Badge variant="outline" className="border-orange-300 bg-orange-50 text-[10px] font-medium text-orange-500">
              {badge}
            </Badge>
          </div>
          <p className="text-xs text-slate-500">{headline}</p>
          <InstructorStats
            rating={stats.rating}
            reviewsCount={stats.reviewsCount}
            studentsCount={stats.studentsCount}
            coursesCount={stats.coursesCount}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:items-end">
        <a href={website} className="flex items-center gap-1.5 text-xs text-violet-600 hover:underline">
          <Globe className="size-3.5" />
          {website}
        </a>
        <SocialLinks links={socials} />
      </div>
    </Card>
  );
}