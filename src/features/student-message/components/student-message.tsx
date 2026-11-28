import { getTranslations } from "next-intl/server";

import ServerDataFetcher from "@/components/common/server-data-fetcher";

import { getMessagingPageData } from "@/api/messages/messages-page.api";

import MessagingWorkspace from "@/components/common/messaging/messaging-workspace";

import type { MessagingSearchParams } from "@/types/messaging-types";

interface StudentMessageProps {
  searchParams: MessagingSearchParams;
}

export default async function StudentMessage({
  searchParams,
}: StudentMessageProps) {
  const t = await getTranslations("messages");

  return (
    <ServerDataFetcher
      fetcherFn={() => getMessagingPageData(searchParams)}
      errorFallback={(error) => (
        <div
          role="alert"
          className="flex min-h-100 items-center justify-center px-6 text-center text-sm text-red-600"
        >
          {error instanceof Error ? error.message : t("errors.generic")}
        </div>
      )}
    >
      {(initialData) => (
        <MessagingWorkspace
          title={t("studentTitle")}
          recipientLabel={t("newMessage.teacherLabel")}
          initialData={initialData}
        />
      )}
    </ServerDataFetcher>
  );
}
