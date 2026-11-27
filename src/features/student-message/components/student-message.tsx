"use client";

import { useState } from "react";

import {
  ConversationSidebar,
  ConversationHeader,
  ConversationMessages,
  MessageComposer,
  NewMessageDialog,
} from "@/components/common/messaging";

import type {
  ChatMessage,
  MessageFormValues,
} from "@/types/messaging-types";

import {
  studentConversations,
  studentInitialMessages,
} from "../data/mock-data";
import { NewMessageFormValues } from "@/schema/message-schema";

type MobileView = "list" | "chat";

export default function StudentMessage() {
  const [conversations, setConversations] = useState(studentConversations);

  const [selectedId, setSelectedId] = useState("jane");

  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>(
    studentInitialMessages,
  );

  const [mobileView, setMobileView] = useState<MobileView>("chat");

  const [isComposeOpen, setIsComposeOpen] = useState(false);

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

  // Open the New Message dialog.
  const handleCompose = () => {
    setIsComposeOpen(true);
  };

  // Send a new message to the selected teacher.
  const handleNewMessage = (values: NewMessageFormValues) => {
    const recipient = conversations.find(
      (conversation) => conversation.id === values.teacherId,
    );

    if (!recipient) {
      return;
    }

    const newMessage: ChatMessage = {
      id: `student-message-${Date.now()}`,
      text: values.message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "me",
    };

    // Add the message to the selected teacher's history.
    setMessages((previous) => ({
      ...previous,
      [recipient.id]: [...(previous[recipient.id] ?? []), newMessage],
    }));

    // Update the conversation preview.
    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === recipient.id
          ? {
              ...conversation,
              preview: values.message,
              time: "just now",
              unread: false,
            }
          : conversation,
      ),
    );

    // Open the selected teacher's conversation.
    setSelectedId(recipient.id);
    setMobileView("chat");
  };

  // Handle messages from the bottom composer.
  const handleSendMessage = (values: MessageFormValues, attachment: string) => {
    const newMessage: ChatMessage = {
      id: `student-message-${Date.now()}`,
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
    <>
      <main className="flex h-screen min-h-150 w-full overflow-hidden bg-white">
        {/* Conversations sidebar */}
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
            title="Message"
          />
        </div>

        {/* Active conversation */}
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

      {/* New Message dialog */}
      <NewMessageDialog
        open={isComposeOpen}
        onOpenChange={setIsComposeOpen}
        recipients={conversations}
        recipientLabel="Teacher"
        onSend={handleNewMessage}
      />
    </>
  );
}
