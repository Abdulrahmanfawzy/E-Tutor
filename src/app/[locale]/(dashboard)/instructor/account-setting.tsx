"use client";

import { useEffect, useState } from "react";
import { Upload, User } from "lucide-react";
import { Card, CardTitle, Field, TextInput, SaveButton } from "@/components/ui/form";
import { getProfile, updateProfile, type Profile } from "../instructor/settings/profile"

export default function AccountSettings() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    phone: "",
    headline: "",
    bio: "",
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // helper: put profile data into the form
  const fillForm = (p: Profile) =>
    setForm({
      first_name: p.first_name ?? "",
      last_name: p.last_name ?? "",
      username: p.username ?? "",
      phone: p.phone ?? "",
      headline: p.headline ?? "",
      bio: p.bio ?? "",
    });

  // load on mount
  useEffect(() => {
    getProfile()
      .then((p) => {
        setProfile(p);
        fillForm(p);
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSaved(false);
      setForm((f) => ({ ...f, [key]: e.target.value }));
    };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSaved(false);
    try {
      const updated = await updateProfile({ ...form, avatar: avatarFile });
      setProfile(updated);
      fillForm(updated);
      setAvatarFile(null);
      setPreview(null);
      setSaved(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }

  const photo = preview ?? profile?.avatar_url ?? null;

  if (loading) return <Card>Loading...</Card>;

  return (
    <Card>
      <CardTitle>Account Settings</CardTitle>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-4">
          <Field label="Full name">
            <div className="grid grid-cols-2 gap-4">
              <TextInput placeholder="First name" value={form.first_name} onChange={set("first_name")} />
              <TextInput placeholder="Last name" value={form.last_name} onChange={set("last_name")} />
            </div>
          </Field>

          <Field label="Username">
            <TextInput placeholder="Enter your username" value={form.username} onChange={set("username")} />
          </Field>

          <Field label="Phone Number">
            <TextInput
              type="tel"
              placeholder="Your Phone number..."
              icon={<span className="text-sm">+20</span>}
              value={form.phone}
              onChange={set("phone")}
            />
          </Field>

          <Field label="Title" hint={`${form.headline.length}/50`}>
            <TextInput
              maxLength={50}
              value={form.headline}
              onChange={set("headline")}
              placeholder="Your title, profession or small biography"
            />
          </Field>

          <Field label="Biography">
            <textarea
              rows={5}
              value={form.bio}
              onChange={set("bio")}
              placeholder="Your title, profession or small biography"
              className="w-full resize-none border border-[#E9EAF0] p-4 text-sm outline-none placeholder:text-[#8C94A3] focus:border-[#FF6636]"
            />
          </Field>

          {error && <p className="text-sm text-red-500">{error}</p>}
          {saved && <p className="text-sm text-green-600">Changes saved.</p>}

          <SaveButton />
        </div>

        {/* Photo upload */}
        <div className="w-full lg:w-[260px]">
          <div className="relative aspect-square overflow-hidden bg-[#E9EAF0]">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt="Profile" className="h-full w-full object-cover" />
            ) : (
              <User className="absolute inset-0 m-auto text-[#8C94A3]" size={64} />
            )}
            <label className="absolute inset-x-0 bottom-0 flex cursor-pointer items-center justify-center gap-2 bg-black/60 py-2 text-xs text-white">
              <Upload size={14} /> Upload Photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  setSaved(false);
                  setAvatarFile(file);
                  setPreview(URL.createObjectURL(file));
                }}
              />
            </label>
          </div>
          <p className="mt-3 text-center text-[11px] text-[#6E7485]">
            Image size should be under 1MB and image ratio needs to be 1:1
          </p>
        </div>
      </form>
    </Card>
  );
}