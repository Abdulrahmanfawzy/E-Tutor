export { ChatAvatar } from "./chat-avatar";
export { ConversationItem } from "./conversation-item";
export { ConversationSidebar } from "./conversation-sidebar";
export { ConversationHeader } from "./conversation-header";
export { MessageBubble } from "./message-bubble";
export { ConversationMessages } from "./message-scroller";
export { MessageComposer } from "./message-composer";
export { MessagingSkeleton } from "@/components/skeletons/messaging-skeleton";
export { NewMessageDialog } from "./new-message-dialog";

export { messageSchema, newMessageSchema } from "@/schema/message-schema";

export type {
  Conversation,
  ChatMessage,
  MessageFormValues,
  NewMessageFormValues,
} from "@/types/messaging-types";
