import Link from "next/link";
import {  Search, Bell, Heart, ShoppingCart, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className=" border-gray-100 bg-white">
      <div className="container flex h-20 items-center gap-4 md:gap-6 px-10">
        {/* Logo */}
      <Link
    href="/"
    className="flex shrink-0 items-center gap-2 text-heading-7 text-gray-900 md:-ml-12"
  >
    <Image src="/images/GraduationCap.svg" alt="E-tutor logo" width={32} height={32} />
    E-tutor
  </Link>

        {/* Browse dropdown */}
        <div className="relative hidden md:block">
          <select
            defaultValue="browse"
            className="h-12 w-36 appearance-none border border-gray-100 bg-white pl-4 pr-10 text-sm text-gray-700 outline-none focus:border-orange-400"
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
        <div className="relative hidden flex-1 md:block">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-900"
          />
          <input
            type="text"
            placeholder="What do you want learn..."
            className="h-12 w-100 border border-gray-100 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:border-orange-400"
          />
        </div>

        {/* Spacer on mobile */}
        <div className="flex-1 md:hidden" />

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-900 md:gap-5">
          <button aria-label="Notifications" className="hover:text-orange-400"><Bell size={20} /></button>
          <button aria-label="Wishlist" className="hover:text-orange-400"><Heart size={20} /></button>
          <button aria-label="Cart" className="hover:text-orange-400"><ShoppingCart size={20} /></button>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/register"
            className="hidden h-12 items-center bg-button-primary-soft px-6 text-button-sm text-button-primary-soft-foreground transition-colors hover:bg-button-primary hover:text-white sm:flex"
          >
            Create Account
          </Link>
          <Link
            href="/login"
            className="flex h-12 items-center bg-button-primary px-6 text-button-sm text-button-primary-foreground transition-colors hover:bg-button-primary-hover"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}