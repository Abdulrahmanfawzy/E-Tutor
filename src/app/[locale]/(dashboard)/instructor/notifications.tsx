"use client";

import { useEffect, useState } from "react";
import { Card, CardTitle, SaveButton } from "@/components/ui/form";
import {
  getNotificationPreferences,
  updateNotificationPreferences,
  type NotificationPreferences,
} from "./settings/profile";

const options: { key: keyof NotificationPreferences; label: string }[] = [
  { key: "course_purchased", label: "I want to know who buy my course." },
  { key: "review_written", label: "I want to know who write a review on my courses." },
  { key: "lecture_commented", label: "I want to know who commented on my lecture." },
  { key: "lecture_file_downloaded", label: "I want to know who download my lecture notes." },
  { key: "comment_replied", label: "I want to know who replied on my comment." },
  { key: "daily_profile_visits", label: "I want to know daily how many people visited my profile." },
  { key: "lecture_attachment_downloaded", label: "I want to know who download my lecture attach file." },
];

export default function Notifications() {
  const [prefs, setPrefs] = useState<NotificationPreferences | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Load current preferences
  useEffect(() => {
    getNotificationPreferences()
      .then(setPrefs)
      .catch((e) => setMessage({ type: "error", text: e.message }))
      .finally(() => setLoading(false));
  }, []);

  const toggle = (key: keyof NotificationPreferences) => {
    setMessage(null);
    setPrefs((p) => (p ? { ...p, [key]: !p[key] } : p));
  };

  // Save preferences (PUT)
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prefs) return;

    setSaving(true);
    setMessage(null);
    try {
      const saved = await updateNotificationPreferences(prefs);
      // merge so a partial/empty response never wipes the other checkboxes
      setPrefs((p) => (p ? { ...p, ...saved } : p));
      setMessage({ type: "success", text: "Notification preferences saved." });
    } catch (err) {
      setMessage({ type: "error", text: (err as Error).message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card className="h-full">
      <CardTitle>Notifications</CardTitle>

      <form onSubmit={onSubmit}>
        {loading ? (
          <p className="mb-6 text-xs text-[#4E5566]">Loading...</p>
        ) : (
          <ul className="mb-6 space-y-3">
            {options.map((o) => (
              <li key={o.key}>
                <label className="flex cursor-pointer items-center gap-3 text-xs text-[#4E5566]">
                  <input
                    type="checkbox"
                    checked={prefs?.[o.key] ?? false}
                    onChange={() => toggle(o.key)}
                    disabled={!prefs || saving}
                    className="h-4 w-4 accent-[#FF6636]"
                  />
                  {o.label}
                </label>
              </li>
            ))}
          </ul>
        )}

        {message && (
          <p
            className={`mb-4 text-xs ${
              message.type === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}

        <SaveButton disabled={loading || saving || !prefs}>
          {saving ? "Saving..." : "Save Changes"}
        </SaveButton>
      </form>
    </Card>
  );
}