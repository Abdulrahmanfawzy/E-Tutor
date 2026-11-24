import StudentDashboardLayout from "@/features/student-dashboard/components/student-dashboard-layout";

interface StudentLayoutProps {
    children: React.ReactNode;
}

export default function StudentLayout({
    children,
}: StudentLayoutProps) {
    return (
        <StudentDashboardLayout>
            {children}
        </StudentDashboardLayout>
    );
}