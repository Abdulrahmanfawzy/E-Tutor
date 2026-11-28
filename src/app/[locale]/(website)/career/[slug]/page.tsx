import { notFound } from "next/navigation";
import JobHeader from "@/components/career/job-header";
import JobSection from "@/components/career/job-section";
import ApplyButton from "@/components/career/apply-btn";
import { getJobDetails } from "../api";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const job = await getJobDetails(slug);
  return { title: job ? job.title : "Job not found" };
}

export default async function JobDetailsPage({ params }: Props) {
  const { slug } = await params;
  const job = await getJobDetails(slug);

  if (!job) notFound();

  return (
    <main>
      <JobHeader job={job} />

      <div className="mx-auto max-w-[640px] px-6 pt-12">
        <JobSection title="Who we are" text={job.who_we_are} />
        <JobSection title="Requirements" items={job.requirements} />
        <JobSection title="Benefits" items={job.benefits} />
        <JobSection title="Salary" text={job.salary} />
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