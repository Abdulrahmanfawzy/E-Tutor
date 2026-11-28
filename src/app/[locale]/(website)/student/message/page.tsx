import StudentMessage from "@/features/student-message/components/student-message";

import type { MessagingSearchParams } from "@/types/messaging-types";

interface StudentMessagePageProps {
  searchParams: Promise<MessagingSearchParams>;
}

export default async function StudentMessagePage({
  searchParams,
}: StudentMessagePageProps) {
  return <StudentMessage searchParams={await searchParams} />;
}
