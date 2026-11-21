"use client";

import { useState } from "react";
import { Upload, User } from "lucide-react";
import { Card, CardTitle, Field, TextInput, SaveButton } from "@/components/ui/form";

export default function AccountSettings() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [title, setTitle] = useState("");

  return (
    <Card>
      <CardTitle>Account Settings</CardTitle>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-6 lg:flex-row"
      >
        <div className="flex-1 space-y-4">
          <Field label="Full name">
            <div className="grid grid-cols-2 gap-4">
              <TextInput placeholder="First name" />
              <TextInput placeholder="Last name" />
            </div>
          </Field>

          <Field label="Username">
            <TextInput placeholder="Enter your username" />
          </Field>

          <Field label="Phone Number">
            <TextInput
              type="tel"
              placeholder="Your Phone number..."
              icon={<span className="text-sm">+880</span>}
            />
          </Field>

          <Field label="Title" hint={`${title.length}/50`}>
            <TextInput
              maxLength={50}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Your title, profession or small biography"
            />
          </Field>

          <Field label="Biography">
            <textarea
              rows={5}
              placeholder="Your title, profession or small biography"
              className="w-full resize-none border border-[#E9EAF0] p-4 text-sm outline-none placeholder:text-[#8C94A3] focus:border-[#FF6636]"
            />
          </Field>

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
                  if (file) setPhoto(URL.createObjectURL(file));
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