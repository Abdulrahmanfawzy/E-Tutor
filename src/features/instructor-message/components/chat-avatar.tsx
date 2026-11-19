import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import type { Conversation } from "../data/mock-data";

interface ChatAvatarProps {
  conversation: Conversation;
  size?: "sm" | "md" | "lg";
}

export function ChatAvatar({ conversation, size = "md" }: ChatAvatarProps) {
  const sizes = {
    sm: "size-7",
    md: "size-12",
    lg: "size-16",
  };

  return (
    <div className={`relative shrink-0 ${sizes[size]}`}>
      <Avatar className="size-full">
        {conversation.avatar && (
          <AvatarImage src={conversation.avatar} alt={conversation.name} />
        )}

        <AvatarFallback className="bg-orange-100 text-sm font-semibold text-orange-600">
          {conversation.initials}
        </AvatarFallback>
      </Avatar>

      {conversation.online && (
        <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-white bg-green-400" />
      )}
    </div>
  );
}
