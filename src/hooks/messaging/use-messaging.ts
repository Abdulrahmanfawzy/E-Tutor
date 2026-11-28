"use client";

import { useMutation } from "@tanstack/react-query";

import {
  deleteConversationAction,
  markConversationReadAction,
  sendMessageAction,
  startConversationAction,
  type ApiActionResult,
} from "@/actions/messages.actions";

import type {
  SendMessagePayload,
  StartConversationPayload,
} from "@/types/messaging-types";

// Unwrap action result

function unwrapActionResult<T>(result: ApiActionResult<T>): T {
  if (!result.success) {
    throw new Error(result.error);
  }

  return result.data;
}

// Messaging mutations

export function useMessaging() {
  // POST: start a conversation
  const startConversationMutation = useMutation({
    mutationFn: async (payload: StartConversationPayload) => {
      const result = await startConversationAction(payload);

      return unwrapActionResult(result);
    },
  });

  // POST: send a message
  const sendMessageMutation = useMutation({
    mutationFn: async ({
      conversationId,
      payload,
    }: {
      conversationId: number;
      payload: SendMessagePayload;
    }) => {
      const result = await sendMessageAction(conversationId, payload);

      return unwrapActionResult(result);
    },
  });

  // POST: mark conversation as read
  const markReadMutation = useMutation({
    mutationFn: async (conversationId: number) => {
      const result = await markConversationReadAction(conversationId);

      return unwrapActionResult(result);
    },
  });

  // DELETE: delete conversation
  const deleteConversationMutation = useMutation({
    mutationFn: async (conversationId: number) => {
      const result = await deleteConversationAction(conversationId);

      return unwrapActionResult(result);
    },
  });

  return {
    startConversationMutation,
    sendMessageMutation,
    markReadMutation,
    deleteConversationMutation,
  };
}
