import JobHeader from "@/components/career/job-header";
import JobSection from "@/components/career/job-section";
import ApplyButton from "@/components/career/apply-btn";
import { jobDetails } from "@/features/become-instructor/data/job-data"; 

export default function JobDetailsPage() {
  const job = jobDetails;
  return (
    <main>
      <JobHeader job={job} />
      <div className="mx-auto max-w-[640px] px-6 pt-12">
        <JobSection title="Who we are" text={job.whoWeAre} />
        <JobSection title="Requirements" items={job.requirements} />
        <JobSection title="Benefits" items={job.benefits} />
        <JobSection title="Salary" text={job.salary} />
        <JobSection title="Job Nature" items={job.jobNature} />
      </div>
      <ApplyButton />
    </main>
  );
}