// inst. layout
import InstructorFooter from "@/features/instructor-dashboard/components/instructor-footer";
import InstructorNavbar from "@/features/instructor-dashboard/components/instructor-navbar";
import InstructorSidebar from "@/features/instructor-dashboard/components/instructor-sidebar";
import { Suspense } from "react";

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <div className="flex min-h-screen">
     <Suspense fallback={<div>Loading...</div>}>
     <InstructorSidebar />
     </Suspense>
    <div className="flex min-w-0 flex-1 flex-col">
      <InstructorNavbar/>
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
       <InstructorFooter/>
    </div>
  </div>
   
 
  </>;
}