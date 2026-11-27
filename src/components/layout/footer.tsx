
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
    ArrowRight,
    GraduationCap,
} from "lucide-react";

import LanguageSwitcher from "@/components/common/language-switcher";

const categories = [
    "Development",
    "Finance & Accounting",
    "Design",
    "Business",
];

const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Become Instructor", href: "/become-instructor" },
    { label: "Contact", href: "/contact-us" },
    { label: "Career", href: "/career" },
];

const supportLinks = [
    { label: "Help Center", href: "/help-center" },
    { label: "FAQs", href: "/faqs" },
    { label: "Terms & Condition", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks = [
    { label: "Facebook", src: "/images/social/facebook.png" },
    { label: "Instagram", src: "/images/social/instagram.png" },
    { label: "LinkedIn", src: "/images/social/linkedin.png" },
    { label: "Twitter", src: "/images/social/twitter.png" },
    { label: "YouTube", src: "/images/social/youtube.png" },
];

export default function Footer() {
    return (
        <footer className="bg-[#1D2026] text-white">
<div className="website-container grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr_1fr] lg:gap-12">                {/* Brand */}
                <div>
                    <Link href="/" className="mb-6 flex items-center gap-2">
                        <GraduationCap
                            size={44}
                            className="text-[#FF6636]"
                            strokeWidth={1.8}
                        />
                        <span className="text-4xl font-semibold tracking-tight">
                            E-tutor
                        </span>
                    </Link>

                    <p className="mb-7 max-w-[300px] text-sm leading-6 text-[#8C94A3]">
                        Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
                        Donec mattis odio at.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {socialLinks.map((social) => (
                            <div
                                key={social.label}
                                aria-label={social.label}
                                title={social.label}
                                className={`flex size-12 items-center justify-center bg-[#272B34] text-lg font-semibold transition-colors ${social.label === "LinkedIn"
                                        ? "bg-[#FF6636] text-white shadow-lg shadow-orange-500/20"
                                        : "text-white hover:bg-[#FF6636]"
                                    }`}
                            >
                                <Image
                                    src={social.src}
                                    alt={social.label}
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="mb-6 text-sm font-medium uppercase">
                        Top 4 Category
                    </h3>
                    <ul className="space-y-4">
                        {categories.map((category) => (
                            <li
                                key={category}
                                className="text-sm text-[#8C94A3] transition-colors hover:text-white"
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-6 text-sm font-medium uppercase">
                        Quick Links
                    </h3>
                    <ul className="space-y-4">
                        {quickLinks.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="group flex items-center gap-2 text-sm text-[#8C94A3] transition-colors hover:text-white"
                                >
                                    <span>{item.label}</span>
                                    {item.label === "Become Instructor" && (
                                        <ArrowRight
                                            size={16}
                                            className="text-white transition-transform group-hover:translate-x-1"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="mb-6 text-sm font-medium uppercase">
                        Support
                    </h3>
                    <ul className="space-y-4">
                        {supportLinks.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="text-sm text-[#8C94A3] transition-colors hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Download App */}
                <div>
                    <h3 className="mb-6 text-sm font-medium uppercase">
                        Download Our App
                    </h3>

                    <div className="flex flex-col gap-3">
                        <a
                            href="#"
                            className="flex h-[62px] items-center gap-4 bg-[#272B34] px-5 transition-colors hover:bg-[#343945]"
                        >
                            <Image
  src="/images/social/apple.png"
  alt="App Store"
  width={34}
  height={34}
  className="object-contain"
/>
                            <span>
                                <span className="block text-[10px] text-[#A1A7B2]">
                                    Download now
                                </span>
                                <span className="text-base font-medium">App Store</span>
                            </span>
                        </a>

                        <a
                            href="#"
                            className="flex h-[62px] items-center gap-4 bg-[#272B34] px-5 transition-colors hover:bg-[#343945]"
                        >
                           <Image
  src="/images/social/googleplay.png"
  alt="Play Store"
  width={34}
  height={34}
  className="object-contain"
/>
                            <span>
                                <span className="block text-[10px] text-[#A1A7B2]">
                                    Download now
                                </span>
                                <span className="text-base font-medium">Play Store</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-[#2B303A]">
                <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-5 px-6 py-6 sm:flex-row lg:px-8">
                    <p className="text-center text-sm text-[#8C94A3]">
                        © 2021 - Eduflex. Designed by{" "}
                        <span className="text-white">Templatecookie.</span>{" "}
                        All rights reserved
                    </p>

                    <div className="w-[180px]">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </footer>
    );
}
