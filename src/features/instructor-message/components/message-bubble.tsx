import { Bubble, BubbleContent } from "@/components/ui/bubble";

import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";

import type { ChatMessage, Conversation } from "../data/mock-data";

import { ChatAvatar } from "./chat-avatar";

interface MessageBubbleProps {
  message: ChatMessage;
  conversation: Conversation;
}

export function MessageBubble({ message, conversation }: MessageBubbleProps) {
  const isMine = message.sender === "me";

  if (isMine) {
    return (
      <Message align="end" className="flex flex-col items-end gap-2">
        <MessageContent className="flex max-w-[85%] flex-col items-end gap-2 sm:max-w-[75%]">
          <span className="text-xs text-gray-500">{message.time}</span>

                <Bubble className="max-w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-none
           border-0 bg-orange-400 px-4 py-3 text-sm leading-relaxed text-white shadow-none">
            <BubbleContent className="whitespace-pre-wrap wrap-break-word">
              {message.text}
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    );
  }

  return (
    <Message align="start" className="flex items-end gap-2">
      <MessageAvatar className="shrink-0">
        <ChatAvatar conversation={conversation} size="sm" />
      </MessageAvatar>

      <MessageContent className="flex max-w-[85%] flex-col gap-2 sm:max-w-[70%]">
        <span className="text-xs text-gray-500">{message.time}</span>

              <Bubble className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-none border-0
         bg-orange-50 px-3 py-2.5 text-sm leading-relaxed text-gray-900 shadow-none">
          <BubbleContent className="whitespace-pre-wrap wrap-break-word">
            {message.text}
          </BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  );
}
