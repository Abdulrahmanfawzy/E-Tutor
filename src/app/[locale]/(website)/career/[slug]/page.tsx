
import JobHeader from "@/components/career/job-header";
import JobSection from "@/components/career/job-section";
import ApplyButton from "@/components/career/apply-btn";
import { getJobDetails } from "../api";

export default async function JobDetailsPage() {
  const job = await getJobDetails("principal-software-engineer");

  return (
    <main>
      <JobHeader job={job} />

      <div className="mx-auto max-w-[640px] px-6 pt-12">
        <JobSection
          title="Who we are"
          text={job.who_we_are}
        />

        <JobSection
          title="Requirements"
          items={job.requirements}
        />

        <JobSection
          title="Benefits"
          items={job.benefits}
        />

        <JobSection
          title="Salary"
          text={job.salary}
        />

        <JobSection
          title="Job Nature"
          items={[
            `Job Type: ${job.type}`,
            `Location: ${job.location}`,
            `Vacancies: ${job.vacancies}`,
            `Application Deadline: ${job.deadline}`,
          ]}
        />
      </div>

      <ApplyButton applyUrl={job.apply_url} />
    </main>
  );
}
