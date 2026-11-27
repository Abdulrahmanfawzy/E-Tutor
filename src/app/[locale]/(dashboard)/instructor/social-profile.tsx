"use client";
import Image from "next/image";
import { Card, CardTitle, Field, TextInput, SaveButton } from "@/components/ui/form";

const socials = [

  { label: "Facebook", icon: "/images/icons/Facebook.svg", placeholder: "Username" },
  { label: "Instagram", icon: "/images/icons/instagram.svg", placeholder: "Username" },
  { label: "LinkedIn", icon: "/images/icons/linkedin.svg", placeholder: "Username" },
  { label: "Twitter", icon: "/images/icons/twitter.svg", placeholder: "Username" },
  { label: "Whatsapp", icon: "/images/icons/whatsapp.svg", placeholder: "Phone number" },
  { label: "Youtube", icon: "/images/icons/youtubeicon.svg", placeholder: "Username" },
];

function SocialIcon({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} width={16} height={16} />;
}

export default function SocialProfile() {
  return (
    <Card>
      <CardTitle>Social Profile</CardTitle>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <Field label="Personal Website">
          <TextInput
            icon={<SocialIcon src="/images/icons/Globe.svg" alt="Website" />}
            placeholder="Personal website or portfolio url..."
          />
        </Field>

        <div className="grid gap-4 md:grid-cols-3">
          {socials.map(({ label, icon, placeholder }) => (
            <Field key={label} label={label}>
              <TextInput
                icon={<SocialIcon src={icon} alt={label} />}
                placeholder={placeholder}
              />
            </Field>
          ))}
        </div>

        <SaveButton />
      </form>
    </Card>
  );
}