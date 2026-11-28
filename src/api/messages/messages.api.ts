import "server-only";

import { getAccessToken } from "@/features/auth/hooks/get-access-token";

import { getMessagesApiUrl } from "./messages.config";

import type {
  ApiContact,
  ApiConversation,
  ApiMessage,
  ApiResponse,
  ConversationListData,
  MessagesListData,
  UnreadCountResponse,
} from "@/types/messaging-types";

// Request helper

async function getRequest<T>(endpoint: string): Promise<T> {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    throw new Error("You must be authenticated to access messages.");
  }

  const response = await fetch(getMessagesApiUrl(endpoint), {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  const result = (await response
    .json()
    .catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !result?.success) {
    if (response.status === 401) {
      throw new Error("Your session has expired. Please sign in again.");
    }

    throw new Error(
      result?.message || `Request failed with status ${response.status}.`,
    );
  }

  return result.data;
}

// GET: conversations

interface GetConversationsParams {
  search?: string;
  page?: number;
  perPage?: number;
}

export async function getConversations({
  search = "",
  page = 1,
  perPage = 50,
}: GetConversationsParams = {}): Promise<ConversationListData> {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  });

  if (search.trim()) {
    params.set("search", search.trim());
  }

  return getRequest<ConversationListData>(
    `/conversations?${params.toString()}`,
  );
}

// GET: contacts

export async function getContacts(search = ""): Promise<ApiContact[]> {
  const params = new URLSearchParams();

  if (search.trim()) {
    params.set("search", search.trim());
  }

  const query = params.toString();

  return getRequest<ApiContact[]>(`/contacts${query ? `?${query}` : ""}`);
}

// GET: conversation messages

interface GetMessagesParams {
  page?: number;
  perPage?: number;
}

export async function getMessages(
  conversationId: number,
  { page = 1, perPage = 30 }: GetMessagesParams = {},
): Promise<MessagesListData> {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  });

  return getRequest<MessagesListData>(
    `/conversations/${conversationId}?${params.toString()}`,
  );
}

// GET: unread count

export async function getUnreadCount(): Promise<UnreadCountResponse> {
  return getRequest<UnreadCountResponse>("/unread-count");
}

// Export API item aliases

export type ConversationApiItem = ApiConversation;
export type MessageApiItem = ApiMessage;
