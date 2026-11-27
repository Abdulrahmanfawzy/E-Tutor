import type { CareersData, CareersResponse, Job, JobApiResponse, Position } from "./types";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://lms.huma-volve.com";

export async function getCareers(): Promise<CareersData> {
  const res = await fetch(`${BASE_URL}/api/v1/careers`, {
    headers: { Accept: "application/json" },
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Failed to load careers (${res.status})`);
  const json: CareersResponse = await res.json();
  if (!json.success) throw new Error(json.message ?? "Failed to load careers");
  return json.data;
}

export async function getPosition(slug: string): Promise<Position | undefined> {
  const { positions } = await getCareers();
  return positions.find((p) => p.slug === slug && p.is_active);
}


//get the detials 
export async function getJobDetails(slug: string): Promise<Job> {
  const res = await fetch(
    `${BASE_URL}/api/v1/careers/${slug}`,
    {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to load job details (${res.status})`);
  }

  const json: JobApiResponse = await res.json();

  if (!json.success) {
    throw new Error(json.message ?? "Failed to load job details");
  }
console.log(json.data)
  return json.data;
}