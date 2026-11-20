"use client";

import { useState } from "react";
import { ArrowLeft, Ellipsis } from "lucide-react";

import type { Conversation } from "../data/mock-data";

import { ChatAvatar } from "./chat-avatar";

interface ConversationHeaderProps {
  conversation: Conversation;
  onBack: () => void;
}

export function ConversationHeader({
  conversation,
  onBack,
}: ConversationHeaderProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <header className="relative flex h-[104px] shrink-0 items-center justify-between border-b border-gray-100 px-5 md:px-12">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to conversations"
          className="mr-1 rounded-md p-2 text-gray-600 hover:bg-gray-50 md:hidden"
        >
          <ArrowLeft className="size-5" />
        </button>

        <ChatAvatar conversation={conversation} size="lg" />

        <div className="min-w-0">
          <h2 className="truncate text-lg font-medium text-gray-900">
            {conversation.name}
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            {conversation.online ? "Active Now" : "Offline"}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowInfo((previous) => !previous)}
        aria-label="Conversation options"
        aria-expanded={showInfo}
        className="flex size-12 shrink-0 items-center justify-center bg-gray-50 text-gray-900 transition-colors hover:bg-gray-100"
      >
        <Ellipsis className="size-6" />
      </button>

      {showInfo && (
        <div className="absolute top-20 right-5 z-20 rounded-lg border border-gray-100 bg-white p-4 shadow-lg md:right-12">
          <p className="text-sm font-semibold text-gray-900">
            {conversation.name}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {conversation.online ? "Currently online" : "Currently offline"}
          </p>
        </div>
      )}
    </header>
  );
}
