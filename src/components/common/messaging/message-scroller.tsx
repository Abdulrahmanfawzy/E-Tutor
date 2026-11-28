"use client";

import { useTranslations } from "next-intl";

import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";

import { MessageBubble } from "./message-bubble";

import type { ChatMessage, Conversation } from "@/types/messaging-types";

interface ConversationMessagesProps {
  messages: ChatMessage[];
  conversation: Conversation;
}

export function ConversationMessages({
  messages,
  conversation,
}: ConversationMessagesProps) {
  const t = useTranslations("messages");

  return (
    <MessageScrollerProvider autoScroll defaultScrollPosition="end">
      <MessageScroller className="min-h-0 flex-1">
        <MessageScrollerViewport
          aria-label={t("thread.ariaLabel")}
          className="min-h-0"
        >
          <MessageScrollerContent className="flex flex-col gap-7 px-5 py-7 md:px-12 md:py-10">
            <MessageScrollerItem messageId="today-separator">
              <div className="flex justify-center">
                <span className="rounded-md bg-orange-50 px-4 py-2 text-sm text-gray-700">
                  {t("thread.today")}
                </span>
              </div>
            </MessageScrollerItem>

            {messages.map((message) => (
              <MessageScrollerItem key={message.id} messageId={message.id}>
                <MessageBubble message={message} conversation={conversation} />
              </MessageScrollerItem>
            ))}

            {messages.length === 0 && (
              <MessageScrollerItem messageId="empty-state">
                <div className="flex min-h-50 items-center justify-center">
                  <p className="text-sm text-gray-500">
                    {t("thread.startConversation", {
                      name: conversation.name,
                    })}
                  </p>
                </div>
              </MessageScrollerItem>
            )}
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
