
import { Button } from "@/components/ui/button";
import type { SocialLink, SocialPlatform } from "../types/instructor-types";
import Link from "next/link";
import Image from "next/image";

const ICONS: Record<SocialPlatform, string> = {
  facebook: "/images/icons/Facebook.svg",
  twitter: "/images/icons/twitter.svg",
  instagram: "/images/icons/instagram.svg",
  youtube: "/images/icons/youtubeicon.svg",
  whatsapp: "/images/icons/whatsapp.svg",
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="flex gap-2">
      {links.map(({ platform, href }) => {
        const Icon = ICONS[platform];
        return (
          <li key={platform}>
            <Button
              variant="secondary"
              size="icon"
              className="size-8 rounded-sm bg-slate-100 text-slate-600 hover:bg-slate-200"
            >
              <Link
                href={href}
                aria-label={platform}
                className="inline-flex size-8 items-center justify-center rounded-sm bg-slate-100 text-slate-600 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <Image src={Icon} alt="" width={14} height={14} />
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
