"use server";

import { getAccessToken } from "@/features/auth/hooks/get-access-token";
import { getMessagesApiUrl } from "@/api/messages/messages.config";

import type {
  ApiMessage,
  ApiResponse,
  MarkReadResponse,
  SendMessagePayload,
  StartConversationPayload,
  StartConversationResponse,
} from "@/types/messaging-types";

// Action result

export type ApiActionResult<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };

// Shared mutation request

async function mutationRequest<T>(
  endpoint: string,
  method: "POST" | "DELETE",
  body?: unknown,
): Promise<ApiActionResult<T>> {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return {
        success: false,
        error: "You must be authenticated to access messages.",
      };
    }

    const response = await fetch(getMessagesApiUrl(endpoint), {
      method,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
      cache: "no-store",
    });

    const result = (await response
      .json()
      .catch(() => null)) as ApiResponse<T> | null;

    if (!response.ok || !result?.success) {
      if (response.status === 401) {
        return {
          success: false,
          error: "Your session has expired. Please sign in again.",
        };
      }

      return {
        success: false,
        error:
          result?.message || `Request failed with status ${response.status}.`,
      };
    }

    return {
      success: true,
      data: result.data,
    };
  } catch (error) {
    console.error("[messages action] Request failed:", error);

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
    };
  }
}

// POST: start a conversation

export async function startConversationAction(
  payload: StartConversationPayload,
): Promise<ApiActionResult<StartConversationResponse>> {
  return mutationRequest<StartConversationResponse>(
    "/conversations",
    "POST",
    payload,
  );
}


// POST: send a message

export async function sendMessageAction(
  conversationId: number,
  payload: SendMessagePayload,
): Promise<ApiActionResult<ApiMessage>> {
  return mutationRequest<ApiMessage>(
    `/conversations/${conversationId}/messages`,
    "POST",
    payload,
  );
}

// POST: mark a conversation as read

export async function markConversationReadAction(
  conversationId: number,
): Promise<ApiActionResult<MarkReadResponse>> {
  return mutationRequest<MarkReadResponse>(
    `/conversations/${conversationId}/read`,
    "POST",
  );
}

// DELETE: delete a conversation

export async function deleteConversationAction(
  conversationId: number,
): Promise<ApiActionResult<null>> {
  return mutationRequest<null>(`/conversations/${conversationId}`, "DELETE");
}
