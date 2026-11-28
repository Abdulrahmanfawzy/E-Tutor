// API participant

export interface ApiParticipant {
  id: number;
  name: string;
  username: string;
  headline: string | null;
  avatar_url: string | null;
}

export type ApiContact = ApiParticipant;

// API messages

export interface ApiMessage {
  id: number;
  conversation_id: number;
  body: string;
  sender: ApiParticipant;
  is_mine: boolean;
  read_at: string | null;
  created_at: string;
}

// API conversations

export interface ApiConversation {
  id: number;
  participant: ApiParticipant;

  last_message: {
    body: string;
    is_mine: boolean;
    created_at: string;
  } | null;

  last_message_at: string | null;
  unread_count: number;
}

// Pagination

export interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface PaginationMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  per_page: number;
  to: number | null;
  total: number;
}

export interface PaginatedData<T> {
  data: T[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

// API responses

export interface ApiResponse<T> {
  success: boolean;
  message: string | null;
  data: T;
}

export type ConversationListData = PaginatedData<ApiConversation>;

export interface MessagesListData {
  data: ApiMessage[];
  links: PaginationLinks;
  meta: PaginationMeta;
  participant: ApiParticipant;
}

export interface UnreadCountResponse {
  unread: number;
}

export interface MarkReadResponse {
  marked: number;
}

export interface StartConversationResponse {
  conversation: {
    id: number;
    participant: ApiParticipant;
  };
  message: ApiMessage;
}


// Mutation payloads

export interface StartConversationPayload {
  recipient_id: number;
  body: string;
}

export interface SendMessagePayload {
  body: string;
}

// Server page data

export interface MessagingSearchParams {
  search?: string;
  contactSearch?: string;
  conversationId?: string;
  compose?: string;
}

export interface MessagingPageData {
  conversations: ConversationListData;
  contacts: ApiContact[];
  messages: MessagesListData | null;
  unreadCount: UnreadCountResponse;
  selectedConversationId: number | null;
  search: string;
  contactSearch: string;
  composeOpen: boolean;
}

// UI models

export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  initials: string;
  preview: string;
  time: string;
  online?: boolean;
  unread?: boolean;
  unreadCount?: number;
}

export interface ChatMessage {
  id: string;
  text: string;
  time: string;
  sender: "me" | "them";
}

export interface MessageFormValues {
  message: string;
}

export interface NewMessageFormValues {
  teacherId: string;
  message: string;
}
