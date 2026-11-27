export interface NotificationResponse {
  success: boolean;
  message: string | null;
  data: {
    items: Notification[];
    unread_count: number;
  };
}
export interface NotificationData {
  type: string;
  course_id?: number;
  course_title?: string;
  decision?: string;
  reason?: string | null;
  comment_id?: number;
  parent_id?: number | null;
  lecture_id?: number;
  lecture_title?: string;
  author?: {
    id: number;
    name: string;
  };
  excerpt?: string;
  application_id?: number;
  status?: string;
}

export interface Notification {
  id: string;
  type: string;
  title: string | null;
  message: string | null;
  data: NotificationData;
  is_read: boolean;
  read_at: string | null;
  created_at: string;
}


export interface MarkAllNotificationsReadResponse {
  success: boolean;
  message: string | null;
  data: {
    updated: number;
    unread_count: number;
  };
}