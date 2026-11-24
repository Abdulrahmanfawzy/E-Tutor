"use client";

import { useState } from "react";

import {
  ConversationSidebar,
  ConversationHeader,
  ConversationMessages,
  MessageComposer,
} from "@/components/common/messaging";

import type {
  Conversation,
  ChatMessage,
  MessageFormValues,
} from "@/types/messaging-types";

import {
  conversations as initialConversations,
  initialMessages,
} from "../data/mock-data";

type MobileView = "list" | "chat";

export default function InstructorMessage() {
  const [conversations, setConversations] = useState(initialConversations);

  const [selectedId, setSelectedId] = useState("jane");

  const [messages, setMessages] =
    useState<Record<string, ChatMessage[]>>(initialMessages);

  const [mobileView, setMobileView] = useState<MobileView>("chat");

  const selectedConversation =
    conversations.find((conversation) => conversation.id === selectedId) ??
    conversations[0];

  const activeMessages = messages[selectedId] ?? [];

  const handleSelectConversation = (id: string) => {
    setSelectedId(id);
    setMobileView("chat");

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === id
          ? { ...conversation, unread: false }
          : conversation,
      ),
    );
  };

  const handleCompose = () => {
    const existingDraft = conversations.find(
      (conversation) => conversation.id === "new",
    );

    if (!existingDraft) {
      const newConversation: Conversation = {
        id: "new",
        name: "New conversation",
        avatar: "",
        initials: "NC",
        preview: "Start a conversation",
        time: "now",
      };

      setConversations((previous) => [newConversation, ...previous]);

      setMessages((previous) => ({
        ...previous,
        new: [],
      }));
    }

    setSelectedId("new");
    setMobileView("chat");
  };

  const handleSendMessage = (values: MessageFormValues, attachment: string) => {
    const newMessage: ChatMessage = {
      id: `message-${Date.now()}`,
      text: attachment
        ? `${values.message}\nAttachment: ${attachment}`
        : values.message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "me",
    };

    setMessages((previous) => ({
      ...previous,
      [selectedId]: [...(previous[selectedId] ?? []), newMessage],
    }));

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === selectedId
          ? {
              ...conversation,
              preview: values.message,
              time: "just now",
            }
          : conversation,
      ),
    );
  };

  if (!selectedConversation) {
    return null;
  }

  return (
    <main className="flex h-screen min-h-150 w-full overflow-hidden bg-white">
      <div
        className={`h-full shrink-0 ${
          mobileView === "list" ? "flex w-full" : "hidden"
        } md:flex md:w-106`}
      >
        <ConversationSidebar
          conversations={conversations}
          selectedId={selectedId}
          onSelect={handleSelectConversation}
          onCompose={handleCompose}
          title="Chat"
        />
      </div>

      <section
        className={`min-w-0 flex-1 flex-col ${
          mobileView === "chat" ? "flex" : "hidden"
        } md:flex`}
      >
        <ConversationHeader
          conversation={selectedConversation}
          onBack={() => setMobileView("list")}
        />

        <ConversationMessages
          messages={activeMessages}
          conversation={selectedConversation}
        />

        <MessageComposer onSend={handleSendMessage} />
      </section>
    </main>
  );
}
