export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  initials: string;
  preview: string;
  time: string;
  online?: boolean;
  unread?: boolean;
}

export interface ChatMessage {
  id: string;
  text: string;
  time: string;
  sender: "me" | "them";
}

export type MessageFormValues = {
  message: string;
};