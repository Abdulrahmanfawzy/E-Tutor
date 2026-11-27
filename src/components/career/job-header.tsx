
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import type { Job } from "@/app/[locale]/(website)/career/types"; 

export default function JobHeader({ job }: { job: Job }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-[1100px] items-start justify-between gap-6 px-6 py-12">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-purple-500" />
              {job.location}
            </span>

            <span className="flex items-center gap-1">
              <Clock size={14} className="text-green-500" />
              {job.type}
            </span>

            <span className="flex items-center gap-1">
              <Briefcase size={14} className="text-amber-500" />
              {job.vacancies} Vacancies
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-semibold text-gray-900">
            {job.title}
          </h1>

          <p className="text-sm text-gray-600">
            Application Deadline: {job.deadline}
          </p>
        </div>
      </div>
    </section>
  );
}
