import { MarkAllNotificationsReadResponse, NotificationResponse } from "../types/notifications";

// Get Notifications
export async function getNotifications(
  unread?: boolean
): Promise<NotificationResponse> {
  const query = unread ? "?unread=1" : "";

  const response = await fetch(`/api/instructor/notifications${query}`);

  const data: NotificationResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Something went wrong");
  }

  return data;
}

// Mark One Notification As Read
export async function markNotificationAsRead(
  id: string
): Promise<NotificationResponse> {
  const response = await fetch(`/api/instructor/notifications/${id}/read`, {
    method: "PATCH",
  });

  const data: NotificationResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Something went wrong");
  }

  return data;
}

// Mark All Notifications As Read
export async function markAllNotificationsAsRead(): Promise<MarkAllNotificationsReadResponse> {
  const response = await fetch("/api/instructor/notifications/read-all", {
    method: "PATCH",
  });

  const data: MarkAllNotificationsReadResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Something went wrong");
  }

  return data;
}