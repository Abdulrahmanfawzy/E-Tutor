// inst. layout
import InstructorFooter from "@/features/instructor-dashboard/components/instructor-footer";
import InstructorNavbar from "@/features/instructor-dashboard/components/instructor-navbar";
import InstructorSidebar from "@/features/instructor-dashboard/components/instructor-sidebar";

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <div className="flex min-h-screen">
    <InstructorSidebar />
    <div className="flex min-w-0 flex-1 flex-col">
      <InstructorNavbar/>
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
       <InstructorFooter/>
    </div>
  </div>
   
 
  </>;
}