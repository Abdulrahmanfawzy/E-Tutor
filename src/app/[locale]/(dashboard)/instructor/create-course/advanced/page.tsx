import { AdvanceInformationForm } from "@/features/create-course/components/advanced-information";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Create Course | Eduguard",
  description: "Add advanced information to your course.",
};


export default function AdvanceInformationPage() {
  return <AdvanceInformationForm />;
}