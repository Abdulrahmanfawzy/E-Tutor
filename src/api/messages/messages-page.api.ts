import "server-only";

import {
  getContacts,
  getConversations,
  getMessages,
  getUnreadCount,
} from "./messages.api";

import type {
  MessagingPageData,
  MessagingSearchParams,
} from "@/types/messaging-types";

export async function getMessagingPageData(
  searchParams: MessagingSearchParams = {},
): Promise<MessagingPageData> {
  const search = searchParams.search?.trim() ?? "";
  const contactSearch = searchParams.contactSearch?.trim() ?? "";
  const composeOpen = searchParams.compose === "1";

  const [conversations, unreadCount, contacts] = await Promise.all([
    getConversations({ search }),
    getUnreadCount(),
    composeOpen ? getContacts(contactSearch) : Promise.resolve([]),
  ]);

  const requestedId = Number(searchParams.conversationId);

  const requestedConversation =
    Number.isInteger(requestedId) && requestedId > 0
      ? conversations.data.find(
          (conversation) => conversation.id === requestedId,
        )
      : undefined;

  const selectedConversation =
    requestedConversation ?? conversations.data[0] ?? null;

  const selectedConversationId = selectedConversation?.id ?? null;

    const messages = selectedConversationId
    ? await getMessages(selectedConversationId)
    : null;

  return {
    conversations,
    contacts,
    messages,
    unreadCount,
    selectedConversationId,
    search,
    contactSearch,
    composeOpen,
  };
}
