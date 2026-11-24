
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { StudentProfile } from "../types/wishlist.types";

interface StudentProfileHeaderProps {
  student: StudentProfile;
}

export function StudentProfileHeader({
  student,
}: StudentProfileHeaderProps) {
  return (
    <section className="bg-[#ffeee8] pt-14">
      <div className="mx-auto max-w-5xl bg-white">
        <div className="flex flex-col items-center justify-between gap-5 border-b border-orange-100 px-7 py-7 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gray-100">
              <Image
                src={student.avatar}
                alt={student.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-base font-semibold text-gray-900">
                {student.name}
              </h1>
              <p className="mt-2 text-xs text-gray-500">
                {student.role}
              </p>
            </div>
          </div>

          <Link
            href="/become-instructor"
            className="inline-flex items-center gap-3 bg-orange-50 px-5 py-3 text-xs font-medium text-orange-500 transition hover:bg-orange-100"
          >
            Become Instructor
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
