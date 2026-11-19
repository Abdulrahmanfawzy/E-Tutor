import { ChatAvatar } from "./chat-avatar";

import type { Conversation } from "../data/mock-data";

interface ConversationItemProps {
  conversation: Conversation;
  selected: boolean;
  onClick: () => void;
}

export function ConversationItem({
  conversation,
  selected,
  onClick,
}: ConversationItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 px-6 py-3 text-left transition-colors hover:bg-gray-50 ${
        selected ? "bg-orange-100 hover:bg-orange-100" : ""
      }`}
    >
      <ChatAvatar conversation={conversation} />

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-medium text-gray-900">
            {conversation.name}
          </h3>

          <span className="shrink-0 text-xs text-gray-500">
            {conversation.time}
          </span>
        </div>

        <p className="truncate text-sm text-gray-500">{conversation.preview}</p>
      </div>

      {conversation.unread && (
        <span
          className="size-2 shrink-0 rounded-full bg-orange-400"
          aria-label="Unread messages"
        />
      )}
    </button>
  );
}
