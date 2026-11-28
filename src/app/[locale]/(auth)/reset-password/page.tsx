import { Suspense } from "react";

import { ResetPasswordPageView } from "@/features/auth/components/ResetPasswordPageView";

type ResetPasswordPageProps = {
  searchParams: Promise<{
    token?: string | string[];
    email?: string | string[];
  }>;
};

export default function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto min-h-[70vh] w-full max-w-xl px-6 py-10" />
      }
    >
      <ResetPasswordPageContent searchParams={searchParams} />
    </Suspense>
  );
}

async function ResetPasswordPageContent({
  searchParams,
}: ResetPasswordPageProps) {
  const params = await searchParams;
  const token = Array.isArray(params.token) ? params.token[0] : params.token;
  const email = Array.isArray(params.email) ? params.email[0] : params.email;

  return <ResetPasswordPageView token={token ?? ""} email={email ?? ""} />;
}
