
"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import {
  Search,
  Bell,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import GraduationCap from "@/assets/images(1)/GraduationCap.svg";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-100 bg-white">
<div className="website-container flex h-14 items-center gap-2 sm:h-16 sm:gap-3 md:h-20 md:gap-6">
    <Link
          href="/"
         className="flex shrink-0 items-center gap-1.5 text-heading-7 text-gray-900 sm:gap-2"
        >
          <Image
            src={GraduationCap}
            alt="E-tutor logo"
            width={32}
            height={32}
          />
        
        </Link>

        {/* Browse dropdown */}
        <div className="relative hidden md:block">
          <select
            defaultValue="browse"
            className="h-12 w-32 appearance-none border border-gray-100 bg-white pl-4 pr-10 text-sm text-gray-700 outline-none focus:border-orange-400"
          >
            <option value="browse">Browse</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
          />
        </div>

        {/* Search */}
        <div className="relative hidden min-w-0 flex-1 md:block">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-900"
          />
          <input
            type="text"
            placeholder="What do you want learn..."
            className="h-12 w-full border border-gray-100 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:border-orange-400"
          />
        </div>

        {/* Spacer */}
        <div className="flex-1 md:hidden" />

        {/* Icons */}
<div className="flex shrink-0 items-center gap-2 text-gray-900 sm:gap-3 md:gap-5">          <button aria-label="Notifications" className="hover:text-orange-400">
            <Bell size={20} />
          </button>

          <button aria-label="Wishlist" className="hover:text-orange-400">
            <Heart size={20} />
          </button>

          <button aria-label="Cart" className="hover:text-orange-400">
            <ShoppingCart size={20} />
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <Link
            href="/register"
            className="flex h-10 items-center bg-button-primary-soft px-4 text-button-sm text-button-primary-soft-foreground transition-colors hover:bg-button-primary hover:text-white md:h-12 md:px-6"
          >
            Create Account
          </Link>

          <Link
            href="/login"
            className="flex h-10 items-center bg-button-primary px-4 text-button-sm text-button-primary-foreground transition-colors hover:bg-button-primary-hover md:h-12 md:px-6"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="shrink-0 text-gray-900 sm:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white p-4 shadow-lg sm:hidden">

          {/* Mobile Search */}
          <div className="relative mb-4">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="What do you want to learn..."
              className="h-11 w-full border border-gray-200 pl-10 pr-3 text-sm outline-none focus:border-orange-400"
            />
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-3">
            <Link
              href="/register"
              onClick={() => setIsMenuOpen(false)}
              className="bg-button-primary-soft py-3 text-center text-button-primary-soft-foreground"
            >
              Create Account
            </Link>

            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="bg-button-primary py-3 text-center text-button-primary-foreground"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
