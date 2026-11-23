import StudentDashboardHeader from "./student-dashboard-header";

interface StudentDashboardLayoutProps {
    children: React.ReactNode;
}

export default function StudentDashboardLayout({
    children,
}: StudentDashboardLayoutProps) {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative h-[320px] bg-orange-50 px-4 pt-8 sm:h-[280px] sm:px-6 lg:h-[260px] lg:px-8">
                <div className="mx-auto max-w-285">
                    <StudentDashboardHeader
                        name="Kevin Gilbert"
                        subtitle="Web Designer & Best-Selling Instructor"
                        avatar="/images/student-avatar.png"
                        actionLabel="Become Instructor"
                        actionHref="/become-instructor"
                    />
                </div>
            </section>

            <section className="mx-auto w-full max-w-285 px-4 pb-8 pt-8 sm:px-6 lg:px-8">
                {children}
            </section>
        </main>
    );
}