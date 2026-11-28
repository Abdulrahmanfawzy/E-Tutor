import InstructorMessage from "@/features/instructor-message/components/instructor-message";

import type { MessagingSearchParams } from "@/types/messaging-types";

interface InstructorMessagePageProps {
  searchParams: Promise<MessagingSearchParams>;
}

export default async function InstructorMessagePage({
  searchParams,
}: InstructorMessagePageProps) {
  return <InstructorMessage searchParams={await searchParams} />;
}
