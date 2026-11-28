import { BASE_URL, authHeaders } from "./api";

export interface Socials {
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
  twitter: string | null;
  whatsapp: string | null;
  youtube: string | null;
}

export interface Profile {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar_url: string | null;
  headline: string | null;
  bio: string | null;
  phone: string | null;
  website: string | null;
  socials: Socials;
}

export interface UpdateProfileInput {
  first_name?: string;
  last_name?: string;
  username?: string;
  headline?: string;
  bio?: string;
  phone?: string;
  website?: string;
  socials?: Partial<Record<keyof Socials, string>>;
  avatar?: File | null;
}

interface ApiResponse<T> {
  success: boolean;
  message: string | null;
  data: T;
  errors?: Record<string, string[]>;
}

// fetch that gives up after `ms` instead of loading forever
async function fetchWithTimeout(url: string, init: RequestInit, ms = 15000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } catch (e) {
    if ((e as Error).name === "AbortError") {
      throw new Error("The server took too long to respond. Please try again.");
    }
    throw e;
  } finally {
    clearTimeout(timer);
  }
}

async function loadProfile(): Promise<Profile> {
  const res = await fetchWithTimeout(`${BASE_URL}/api/v1/account/profile`, {
    headers: authHeaders(),
    cache: "no-store",
  });
  const json: ApiResponse<Profile> = await res.json().catch(() => ({} as never));
  console.log("GET profile:", res.status, json);

  if (!res.ok) throw new Error(json.message ?? `Failed to load profile (${res.status})`);
  if (!json.success) throw new Error(json.message ?? "Failed to load profile");
  return json.data;
}

// AccountSettings and SocialProfile both call getProfile(),
// but only one request is sent while it is in progress
let inflight: Promise<Profile> | null = null;

export function getProfile(): Promise<Profile> {
  if (!inflight) {
    inflight = loadProfile().finally(() => {
      inflight = null;
    });
  }
  return inflight;
}

export async function updateProfile(values: UpdateProfileInput): Promise<Profile> {
  const fd = new FormData();
  const { socials, avatar, ...rest } = values;

  // text fields
  Object.entries(rest).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    fd.append(key, value);
  });

  // socials[linkedin], socials[twitter], ...
  if (socials) {
    Object.entries(socials).forEach(([key, value]) => {
      if (value !== undefined) fd.append(`socials[${key}]`, value);
    });
  }

  // image file, same key as Postman
  if (avatar) fd.append("avatar", avatar);

  const res = await fetchWithTimeout(
    `${BASE_URL}/api/v1/account/profile`,
    {
      method: "POST",
      headers: authHeaders(), // no Content-Type for FormData
      body: fd,
    },
    30000 // uploads get more time
  );

  const json: ApiResponse<Profile> = await res.json().catch(() => ({} as never));
  console.log("UPDATE profile:", res.status, json);

  if (!res.ok || !json.success) {
    const firstError = json.errors ? Object.values(json.errors)[0]?.[0] : null;
    throw new Error(firstError ?? json.message ?? `Failed to update profile (${res.status})`);
  }
  return json.data;
}
// notifications
export type NotificationPreferences = {
  course_purchased: boolean;
  review_written: boolean;
  lecture_commented: boolean;
  lecture_file_downloaded: boolean;
  comment_replied: boolean;
  daily_profile_visits: boolean;
  lecture_attachment_downloaded: boolean;
  message_digest: boolean;
};

const NOTIFICATIONS_URL = `${BASE_URL}/api/v1/account/notification-preferences`;

export async function getNotificationPreferences(): Promise<NotificationPreferences> {
  const res = await fetchWithTimeout(NOTIFICATIONS_URL, {
    headers: authHeaders(),
    cache: "no-store",
  });
  const json: ApiResponse<NotificationPreferences> = await res
    .json()
    .catch(() => ({} as never));

  if (!res.ok || !json.success) {
    throw new Error(json.message ?? `Failed to load notification preferences (${res.status})`);
  }
  return json.data;
}

export async function updateNotificationPreferences(
  prefs: Partial<NotificationPreferences>
): Promise<NotificationPreferences> {
  const res = await fetchWithTimeout(NOTIFICATIONS_URL, {
    method: "PUT",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify(prefs),
  });
  const json: ApiResponse<NotificationPreferences> = await res
    .json()
    .catch(() => ({} as never));

  if (!res.ok || !json.success) {
    const firstError = json.errors ? Object.values(json.errors)[0]?.[0] : null;
    throw new Error(
      firstError ?? json.message ?? `Failed to update notification preferences (${res.status})`
    );
  }
  return json.data;
}

// change password
export interface ChangePasswordInput {
  current_password: string;
  password: string;
  password_confirmation: string;
}

// carries the per-field errors from a 422 response
export class ApiError extends Error {
  errors?: Record<string, string[]>;
  constructor(message: string, errors?: Record<string, string[]>) {
    super(message);
    this.errors = errors;
  }
}

export async function changePassword(values: ChangePasswordInput): Promise<void> {
  const res = await fetchWithTimeout(`${BASE_URL}/api/v1/account/password`, {
    method: "PUT",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  const json: ApiResponse<unknown> = await res.json().catch(() => ({} as never));

  if (!res.ok || !json.success) {
    throw new ApiError(
      json.message ?? `Failed to change password (${res.status})`,
      json.errors
    );
  }
}