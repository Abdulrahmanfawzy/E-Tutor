import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/Ellipse 300.svg";
import { Progress } from "@/components/ui/progress";

const INSTRUCTOR = {
  name: "Vako Shvili",
  email: "vako.shvili@gmail.com",
  currentStep: 1,
  totalSteps: 4,
};
export default function ProfileBanner() {
     const { name, email, currentStep, totalSteps } = INSTRUCTOR;
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <>
     <section className="flex flex-col gap-6 bg-purple-800 p-6 text-white md:flex-row md:items-center md:justify-between rounded-lg">
      {/* Profile info */}
      <div className="flex items-center gap-4">
        <Image
          src={profile}
          alt={name}
          width={56}
          height={56}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-label-lg font-semibold">{name}</h3>
          <p className="text-label-sm text-gray-300">{email}</p>
        </div>
      </div>

     
<Progress
  value={percentage}
  className="flex-1"
  trackClassName="h-2 bg-gray-700"
  indicatorClassName="bg-green-400"
/>


      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button className="bg-button-primary px-6 text-white hover:bg-button-primary-hover">
          Edit Biography
        </Button>
        <Button
          type="button"
          aria-label="Expand"
          className="bg-white/10 text-white hover:bg-white/20"
        >
          <ArrowDown size={18} />
        </Button>
      </div>
    </section>
    
    </>
  )
}
