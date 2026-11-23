
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import unknown from "@/assets/images/default-avatar.webp";
import StudentDashboardNavigation from "./student-dashboard-navigation";

interface StudentDashboardHeaderProps {
    name: string;
    subtitle: string;
    avatar: string;
    actionLabel: string;
    actionHref: string;
}

export default function StudentDashboardHeader({
    name,
    subtitle,
    avatar,
    actionLabel,
    actionHref,
}: StudentDashboardHeaderProps) {
    return (
        <section className="w-full bg-white absolute top-[100px] left-0 right-0 mx-auto w-full max-w-285 px-4 py-10">
            {/* Student Info */}
            <div className="flex flex-col justify-between gap-5 px-5 py-6 sm:flex-row sm:items-center sm:px-6 sm:py-7 lg:px-8">
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-gray-100 sm:size-16">
                        <Image
                            src={unknown}
                            alt={name}
                            fill
                            sizes="64px"
                            className="object-cover"
                        />
                    </div>

                    <div className="min-w-0">
                        <h2 className="truncate text-sm font-semibold text-gray-900 sm:text-base">
                            {name}
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Become Instructor */}
                <Link
                    href={actionHref}
                    className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-sm bg-[#FFF0EB] px-5 py-3 text-xs font-medium text-[#FF6636] transition-colors hover:bg-[#FFE3D9] sm:text-sm"
                >
                    {actionLabel}
                    <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
            </div>

            {/* Navigation */}
            <div className="border-t border-gray-100">
                <StudentDashboardNavigation />
            </div>
        </section>
    );
}
