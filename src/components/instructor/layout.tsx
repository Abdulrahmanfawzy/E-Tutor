import Sidebar from "./sidebar";

export default function InstructorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Sidebar />
      <div className="ml-60 flex min-h-screen flex-col">{children}</div>
    </div>
  );
}