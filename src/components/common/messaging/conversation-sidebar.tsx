"use client";

import { Plus, Search } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { ConversationItem } from "./conversation-item";

import type { Conversation } from "@/types/messaging-types";

interface ConversationSidebarProps {
  conversations: Conversation[];
  selectedId: string;
  onSelect: (id: string) => void;
  onCompose: () => void;
  title: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  unreadCount: number;
  isLoading?: boolean;
}

export function ConversationSidebar({
  conversations,
  selectedId,
  onSelect,
  onCompose,
  title,
  searchValue,
  onSearchChange,
  unreadCount,
  isLoading = false,
}: ConversationSidebarProps) {
  const t = useTranslations("messages");

  return (
    <aside className="flex h-full w-full shrink-0 flex-col border-r border-gray-100 bg-white md:w-106">
      <div className="flex h-20 shrink-0 items-center justify-between px-6">
        <div className="flex min-w-0 items-center gap-2">
          <h1 className="truncate text-xl font-semibold text-gray-900">
            {title}
          </h1>

          {unreadCount > 0 && (
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-medium text-orange-700">
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          )}
        </div>

        <Button variant="secondary" size="sm" onClick={onCompose}>
          <Plus className="size-4" />
          {t("sidebar.newMessage")}
        </Button>
      </div>

      <div className="shrink-0 px-6 pb-4">
        <div className="flex h-12 items-center gap-3 border border-gray-100 px-4 focus-within:border-orange-400">
          <Search className="size-5 shrink-0 text-gray-800" />

          <input
            type="search"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={t("sidebar.searchPlaceholder")}
            aria-label={t("sidebar.searchAriaLabel")}
            className="h-full min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {isLoading && conversations.length === 0 ? (
          <p className="px-6 py-10 text-center text-sm text-gray-500">
            {t("loading")}
          </p>
        ) : conversations.length > 0 ? (
          conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              selected={conversation.id === selectedId}
              onClick={() => onSelect(conversation.id)}
            />
          ))
        ) : (
          <div className="px-6 py-10 text-center text-sm text-gray-500">
            {t("sidebar.noConversations")}
          </div>
        )}
      </div>
    </aside>
  );
}
