"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardTitle, Field, TextInput, SaveButton } from "@/components/ui/form";
import { getProfile, updateProfile, type Profile, type Socials } from "../instructor/settings/profile";

const socialFields: {
  key: keyof Socials;
  label: string;
  icon: string;
  placeholder: string;
}[] = [
  { key: "facebook", label: "Facebook", icon: "/images/icons/Facebook.svg", placeholder: "Username" },
  { key: "instagram", label: "Instagram", icon: "/images/icons/instagram.svg", placeholder: "Username" },
  { key: "linkedin", label: "LinkedIn", icon: "/images/icons/linkedin.svg", placeholder: "Username" },
  { key: "twitter", label: "Twitter", icon: "/images/icons/twitter.svg", placeholder: "Username" },
  { key: "whatsapp", label: "Whatsapp", icon: "/images/icons/whatsapp.svg", placeholder: "Phone number" },
  { key: "youtube", label: "Youtube", icon: "/images/icons/youtubeicon.svg", placeholder: "Username" },
];

const EMPTY: Record<keyof Socials, string> = {
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",
  whatsapp: "",
  youtube: "",
};

function SocialIcon({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} width={16} height={16} />;
}

export default function SocialProfile() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const [website, setWebsite] = useState("");
  const [links, setLinks] = useState<Record<keyof Socials, string>>(EMPTY);

  // put API data into the inputs
  const fill = (p: Profile) => {
    setWebsite(p.website ?? "");
    setLinks({
      facebook: p.socials?.facebook ?? "",
      instagram: p.socials?.instagram ?? "",
      linkedin: p.socials?.linkedin ?? "",
      twitter: p.socials?.twitter ?? "",
      whatsapp: p.socials?.whatsapp ?? "",
      youtube: p.socials?.youtube ?? "",
    });
  };

  // load on mount
  useEffect(() => {
    getProfile()
      .then(fill)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const setLink =
    (key: keyof Socials) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSaved(false);
      setLinks((l) => ({ ...l, [key]: e.target.value }));
    };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSaved(false);
    try {
      const updated = await updateProfile({
        website: website.trim(),
        socials: {
          facebook: links.facebook.trim(),
          instagram: links.instagram.trim(),
          linkedin: links.linkedin.trim(),
          twitter: links.twitter.trim(),
          whatsapp: links.whatsapp.trim(),
          youtube: links.youtube.trim(),
        },
      });
      fill(updated); // show what the server saved
      setSaved(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <Card>Loading...</Card>;

  return (
    <Card>
      <CardTitle>Social Profile</CardTitle>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Personal Website">
          <TextInput
            icon={<SocialIcon src="/images/icons/Globe.svg" alt="Website" />}
            placeholder="Personal website or portfolio url..."
            value={website}
            onChange={(e) => {
              setSaved(false);
              setWebsite(e.target.value);
            }}
          />
        </Field>

        <div className="grid gap-4 md:grid-cols-3">
          {socialFields.map(({ key, label, icon, placeholder }) => (
            <Field key={key} label={label}>
              <TextInput
                icon={<SocialIcon src={icon} alt={label} />}
                placeholder={placeholder}
                value={links[key]}
                onChange={setLink(key)}
              />
            </Field>
          ))}
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
        {saved && <p className="text-sm text-green-600">Social links saved.</p>}

        <SaveButton />
      </form>
    </Card>
  );
}