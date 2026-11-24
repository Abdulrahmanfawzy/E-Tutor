"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ConversationItem } from "./conversation-item";

import type { Conversation } from "@/types/messaging-types";

interface ConversationSidebarProps {
  conversations: Conversation[];
  selectedId: string;
  onSelect: (id: string) => void;
  onCompose: () => void;
  title?: string;
}

export function ConversationSidebar({
  conversations,
  selectedId,
  onSelect,
  onCompose,
  title = "Chat",
}: ConversationSidebarProps) {
  const [search, setSearch] = useState("");

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <aside className="flex h-full w-full shrink-0 flex-col border-r border-gray-100 bg-white md:w-106">
      <div className="flex h-20 shrink-0 items-center justify-between px-6">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

        <Button variant="secondary-soft" size="sm" onClick={onCompose}>
          <Plus className="size-4" />
          Compose
        </Button>
      </div>

      <div className="shrink-0 px-6 pb-4">
        <div className="flex h-12 items-center gap-3 border border-gray-100 px-4 focus-within:border-orange-400">
          <Search className="size-5 shrink-0 text-gray-800" />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search"
            aria-label="Search conversations"
            className="h-full min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              selected={conversation.id === selectedId}
              onClick={() => onSelect(conversation.id)}
            />
          ))
        ) : (
          <div className="px-6 py-10 text-center text-sm text-gray-500">
            No conversations found.
          </div>
        )}
      </div>
    </aside>
  );
}
