import { Suspense } from "react";

import { ResetPasswordPageView } from "@/features/auth/components/ResetPasswordPageView";

type ResetPasswordTokenPageProps = {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ email?: string | string[] }>;
};

export default function ResetPasswordTokenPage(
  props: ResetPasswordTokenPageProps,
) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto min-h-[70vh] w-full max-w-xl px-6 py-10" />
      }
    >
      <ResetPasswordTokenPageContent {...props} />
    </Suspense>
  );
}

async function ResetPasswordTokenPageContent({
  params,
  searchParams,
}: ResetPasswordTokenPageProps) {
  const [routeParams, queryParams] = await Promise.all([params, searchParams]);
  const email = Array.isArray(queryParams.email)
    ? queryParams.email[0]
    : queryParams.email;

  return (
    <ResetPasswordPageView token={routeParams.token} email={email ?? ""} />
  );
}
