// components/navbar.tsx
import Link from "next/link";
import { GraduationCap } from "lucide-react";


export default function Navbar() {
  return (
    <header className="w-full shadow-sm bg-white">
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <GraduationCap
            className="size-9 text-[#FF6636]"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span className="text-2xl font-semibold tracking-tight text-[#1D2026]">
            E-tutor
          </span>
        </Link>

        {/* Auth call to action */}
        <div className="flex items-center gap-4 sm:gap-5">
          <span className="hidden text-sm text-[#4E5566] sm:inline">
            Don&apos;t have account?
          </span>
          <Link
            href="/register"
            className="inline-flex h-12 items-center justify-center rounded-none bg-[#FFEEE8] px-6 text-sm font-semibold text-[#FF6636] shadow-none transition-colors hover:bg-[#FF6636] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6636]/40"
          >
            Create Account
          </Link>
        </div>
      </nav>
    </header>
  );
}
