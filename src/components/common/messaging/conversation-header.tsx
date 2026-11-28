"use client";

import { useState } from "react";
import { ArrowLeft, Ellipsis, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { ChatAvatar } from "./chat-avatar";

import type { Conversation } from "@/types/messaging-types";

interface ConversationHeaderProps {
  conversation: Conversation;
  onBack: () => void;
  onDelete: () => Promise<void>;
  isDeleting?: boolean;
}

export function ConversationHeader({
  conversation,
  onBack,
  onDelete,
  isDeleting = false,
}: ConversationHeaderProps) {
  const t = useTranslations("messages");
  const [showInfo, setShowInfo] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(t("delete.confirm"));

    if (!confirmed) return;

    try {
      await onDelete();
      setShowInfo(false);
    } catch {
      // The workspace displays the mutation error.
    }
  };

  return (
    <header className="relative flex h-26 shrink-0 items-center justify-between border-b border-gray-100 px-5 md:px-12">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label={t("header.back")}
          className="mr-1 rounded-md p-2 text-gray-600 hover:bg-gray-50 md:hidden"
        >
          <ArrowLeft className="size-5" />
        </button>

        <ChatAvatar
          name={conversation.name}
          avatar={conversation.avatar}
          initials={conversation.initials}
          online={conversation.online}
          size="lg"
        />

        <div className="min-w-0">
          <h2 className="truncate text-lg font-medium text-gray-900">
            {conversation.name}
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            {conversation.online ? t("header.online") : t("header.offline")}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowInfo((previous) => !previous)}
        aria-label={t("header.options")}
        aria-expanded={showInfo}
        className="flex size-12 shrink-0 items-center justify-center bg-gray-50 text-gray-900 transition-colors hover:bg-gray-100"
      >
        <Ellipsis className="size-6" />
      </button>

      {showInfo && (
        <div className="absolute top-20 right-5 z-20 min-w-52 rounded-lg border border-gray-100 bg-white p-4 shadow-lg md:right-12">
          <p className="truncate text-sm font-semibold text-gray-900">
            {conversation.name}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {conversation.online ? t("header.online") : t("header.offline")}
          </p>

          <div className="my-3 border-t border-gray-100" />

          <Button
            type="button"
            variant="ghost"
            disabled={isDeleting}
            onClick={handleDelete}
            className="h-9 w-full justify-start px-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <Trash2 className="size-4" />
            {isDeleting ? t("delete.deleting") : t("delete.action")}
          </Button>
        </div>
      )}
    </header>
  );
}
