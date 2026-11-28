"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import {
  ConversationHeader,
  ConversationMessages,
  ConversationSidebar,
  MessageComposer,
  NewMessageDialog,
} from "@/components/common/messaging";

import { useMessaging } from "@/hooks/messaging/use-messaging";

import type {
  ApiContact,
  ApiConversation,
  ApiMessage,
  ChatMessage,
  Conversation,
  MessagingPageData,
  NewMessageFormValues,
} from "@/types/messaging-types";

// Props

interface MessagingWorkspaceProps {
  title: string;
  recipientLabel: string;
  initialData: MessagingPageData;
}

type MobileView = "list" | "chat";

interface UrlUpdates {
  search?: string;
  contactSearch?: string;
  conversationId?: number | null;
  composeOpen?: boolean;
}

// Helpers

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

function formatTime(value: string | null | undefined, locale: string): string {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

// API-to-UI mapping

function mapConversation(item: ApiConversation, locale: string): Conversation {
  const participant = item.participant;

  return {
    id: String(item.id),
    name: participant.name,
    avatar: participant.avatar_url ?? "",
    initials: getInitials(participant.name),
    preview: item.last_message?.body ?? "",
    time: formatTime(item.last_message_at, locale),
    unread: item.unread_count > 0,
    unreadCount: item.unread_count,
  };
}

function mapContact(contact: ApiContact) {
  return {
    id: String(contact.id),
    name: contact.name,
  };
}

function mapMessage(message: ApiMessage, locale: string): ChatMessage {
  return {
    id: String(message.id),
    text: message.body,
    time: formatTime(message.created_at, locale),
    sender: message.is_mine ? "me" : "them",
  };
}

// Debounce hook


function useDebouncedValue<T>(value: T, delay = 400): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}

// Workspace

export default function MessagingWorkspace({
  title,
  recipientLabel,
  initialData,
}: MessagingWorkspaceProps) {
  const t = useTranslations("messages");
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const {
    startConversationMutation,
    sendMessageMutation,
    markReadMutation,
    deleteConversationMutation,
  } = useMessaging();

  // Server-provided URL state

  const { search, contactSearch, composeOpen, selectedConversationId } =
    initialData;

  // Local UI state

  const [searchInput, setSearchInput] = useState(search);

  const [contactSearchInput, setContactSearchInput] = useState(contactSearch);

const [mobileView, setMobileView] = useState<MobileView>(
  initialData.selectedConversationId !== null ? "chat" : "list",
);
  const lastMarkedConversationRef = useRef<number | null>(null);

const [previousSearch, setPreviousSearch] = useState(search);

const [previousContactSearch, setPreviousContactSearch] =
  useState(contactSearch);

if (search !== previousSearch) {
  setPreviousSearch(search);
  setSearchInput(search);
}

if (contactSearch !== previousContactSearch) {
  setPreviousContactSearch(contactSearch);
  setContactSearchInput(contactSearch);
}

  // Debounced URL search updates

  const debouncedSearch = useDebouncedValue(searchInput);

  const debouncedContactSearch = useDebouncedValue(contactSearchInput);

  // URL parameter management

  const updateUrl = useCallback(
    (updates: UrlUpdates) => {
      const nextSearch = updates.search ?? search;

      const nextContactSearch = updates.contactSearch ?? contactSearch;

      const nextConversationId =
        updates.conversationId !== undefined
          ? updates.conversationId
          : selectedConversationId;

      const nextComposeOpen = updates.composeOpen ?? composeOpen;

      const params = new URLSearchParams();

      if (nextSearch.trim()) {
        params.set("search", nextSearch.trim());
      }

      if (nextContactSearch.trim()) {
        params.set("contactSearch", nextContactSearch.trim());
      }

      if (nextConversationId !== null) {
        params.set("conversationId", String(nextConversationId));
      }

      if (nextComposeOpen) {
        params.set("compose", "1");
      }

      const query = params.toString();

      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [
      search,
      contactSearch,
      selectedConversationId,
      composeOpen,
      pathname,
      router,
    ],
  );

  // Update the conversation search after the debounce delay.
  useEffect(() => {
    if (debouncedSearch === search) return;

    updateUrl({ search: debouncedSearch });
  }, [debouncedSearch, search, updateUrl]);

  useEffect(() => {
    if (!composeOpen) return;

    if (debouncedContactSearch === contactSearch) return;

    updateUrl({
      contactSearch: debouncedContactSearch,
    });
  }, [composeOpen, debouncedContactSearch, contactSearch, updateUrl]);

  // Map server-provided API data to UI models

  const conversations = useMemo(
    () =>
      initialData.conversations.data.map((item) =>
        mapConversation(item, locale),
      ),
    [initialData.conversations.data, locale],
  );

  const contacts = useMemo(
    () => initialData.contacts.map(mapContact),
    [initialData.contacts],
  );

  const messages = useMemo(
    () =>
      (initialData.messages?.data ?? [])
        .slice()
        .reverse()
        .map((message) => mapMessage(message, locale)),
    [initialData.messages, locale],
  );

  // Selected conversation

  const selectedConversation = useMemo(
    () =>
      conversations.find(
        (conversation) => Number(conversation.id) === selectedConversationId,
      ) ?? null,
    [conversations, selectedConversationId],
  );

  // Mark selected conversation as read

  useEffect(() => {
    if (!selectedConversation || selectedConversationId === null) {
      return;
    }

    if (!selectedConversation.unreadCount) {
      lastMarkedConversationRef.current = null;
      return;
    }

    if (lastMarkedConversationRef.current === selectedConversationId) {
      return;
    }

    lastMarkedConversationRef.current = selectedConversationId;

    markReadMutation.mutate(selectedConversationId, {
      onSuccess: () => {
        router.refresh();
      },
      onError: () => {
        lastMarkedConversationRef.current = null;
      },
    });
  }, [selectedConversation, selectedConversationId, markReadMutation, router]);

  // Conversation selection

  const handleSelectConversation = (id: string) => {
    const conversationId = Number(id);

    if (!Number.isInteger(conversationId)) return;

    setMobileView("chat");

    updateUrl({
      conversationId,
    });
  };

  // Compose dialog

  const handleComposeOpenChange = (open: boolean) => {
    if (open) {
      updateUrl({
        composeOpen: true,
      });

      return;
    }

    setContactSearchInput("");

    updateUrl({
      composeOpen: false,
      contactSearch: "",
    });
  };

  // Send message

  const handleSendMessage = async (values: { message: string }) => {
    if (selectedConversationId === null) return;

    const body = values.message.trim();

    if (!body) return;

    await sendMessageMutation.mutateAsync({
      conversationId: selectedConversationId,
      payload: { body },
    });

    router.refresh();
  };

  // Start new conversation

  const handleNewMessage = async (values: NewMessageFormValues) => {
    const body = values.message.trim();
    const recipientId = Number(values.teacherId);

    if (!body || !Number.isInteger(recipientId)) return;

    const result = await startConversationMutation.mutateAsync({
      recipient_id: recipientId,
      body,
    });

    setMobileView("chat");

    setContactSearchInput("");

    updateUrl({
      conversationId: result.conversation.id,
      composeOpen: false,
      contactSearch: "",
    });
  };

  // Delete conversation

  const handleDeleteConversation = async () => {
    if (selectedConversationId === null) return;

    await deleteConversationMutation.mutateAsync(selectedConversationId);

    lastMarkedConversationRef.current = null;

    setMobileView("list");

    updateUrl({
      conversationId: null,
    });

    router.refresh();
  };

  // Mutation errors

  const mutationError =
    startConversationMutation.error ||
    sendMessageMutation.error ||
    markReadMutation.error ||
    deleteConversationMutation.error;

  return (
    <>
      <main className="flex h-screen min-h-150 w-full overflow-hidden bg-white">
        {/* Conversation sidebar */}

        <div
          className={`h-full shrink-0 ${
            mobileView === "list" ? "flex w-full" : "hidden"
          } md:flex md:w-106`}
        >
          <ConversationSidebar
            conversations={conversations}
            selectedId={
              selectedConversationId !== null
                ? String(selectedConversationId)
                : ""
            }
            onSelect={handleSelectConversation}
            onCompose={() => handleComposeOpenChange(true)}
            title={title}
            searchValue={searchInput}
            onSearchChange={setSearchInput}
            unreadCount={initialData.unreadCount.unread}
          />
        </div>

        {/* Conversation content */}

        <section
          className={`min-w-0 flex-1 flex-col ${
            mobileView === "chat" ? "flex" : "hidden"
          } md:flex`}
        >
          {selectedConversation ? (
            <>
              <ConversationHeader
                conversation={selectedConversation}
                onBack={() => setMobileView("list")}
                onDelete={handleDeleteConversation}
                isDeleting={deleteConversationMutation.isPending}
              />

              <ConversationMessages
                messages={messages}
                conversation={selectedConversation}
              />

              <MessageComposer
                onSend={handleSendMessage}
                isSending={sendMessageMutation.isPending}
              />
            </>
          ) : (
            <div className="flex min-h-0 flex-1 items-center justify-center px-6">
              <div className="text-center">
                <h2 className="text-base font-medium text-gray-900">
                  {t("empty.title")}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {t("empty.description")}
                </p>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Mutation error notification */}

      {mutationError && (
        <div
          role="alert"
          className="fixed right-4 bottom-4 z-50 max-w-md rounded-md border border-red-200 bg-white px-4 py-3 text-sm text-red-600 shadow-lg"
        >
          {mutationError instanceof Error
            ? mutationError.message
            : t("errors.generic")}
        </div>
      )}

      {/* New message dialog */}

      <NewMessageDialog
        open={composeOpen}
        onOpenChange={handleComposeOpenChange}
        recipients={contacts}
        recipientLabel={recipientLabel}
        onSend={handleNewMessage}
        searchValue={contactSearchInput}
        onSearchChange={setContactSearchInput}
        isSending={startConversationMutation.isPending}
      />
    </>
  );
}
