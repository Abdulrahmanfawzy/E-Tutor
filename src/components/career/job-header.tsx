import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import type { JobDetails } from "@/features/become-instructor/data/job-data";

export default function JobHeader({ job }: { job: JobDetails }) {
  return (
    <section className="bg-gray-50 border-b border-gray-100">
      <div className="mx-auto flex max-w-[1100px] items-start justify-between gap-6 px-6 py-12">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1"><MapPin size={14} className="text-purple-500" />{job.location}</span>
            <span className="flex items-center gap-1"><Clock size={14} className="text-green-500" />{job.type}</span>
            <span className="flex items-center gap-1"><Briefcase size={14} className="text-amber-500" />{job.vacancy}</span>
          </div>
          <h1 className="mb-6 text-3xl font-semibold text-gray-900">{job.title}</h1>

          <div className="flex gap-16 text-sm">
            <div>
              <p className="mb-1 text-xs font-medium uppercase text-orange-500">Address</p>
              <p className="max-w-[160px] text-gray-700">{job.address}</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium uppercase text-orange-500">Contact</p>
              <p className="text-gray-700">{job.email}</p>
              <p className="text-gray-700">{job.phone}</p>
            </div>
          </div>
        </div>

        <button className="flex shrink-0 items-center gap-2 bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600">
          Apply Now <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}