
import Image from "next/image";
import { Star } from "lucide-react";
import instructorImage from '@/assets/images/instructor.svg'

const instructors = [
  {
    id: 1,
    name: "Devon Lane",
    role: "Web Developer",
    rating: 5.0,
    students: "265.7K",
    image: instructorImage,
  },
  {
    id: 2,
    name: "Darrell Steward",
    role: "React Native Developer",
    rating: 5.0,
    students: "265.7K",
    image: instructorImage,
  },
  {
    id: 3,
    name: "Jane Cooper",
    role: "Mobile Developer",
    rating: 5.0,
    students: "205.7K",
    image: instructorImage,
  },
  {
    id: 4,
    name: "Albert Flores",
    role: "Javascript Developer",
    rating: 5.0,
    students: "285.7K",
    image: instructorImage,
  },
  {
    id: 5,
    name: "Kathryn Murphy",
    role: "Lead Developer",
    rating: 5.0,
    students: "285.7K",
    image: instructorImage,
  },
];

export default function PopularInstructors() {
  return (
    <section className="bg-[#F5F7FA] py-8 sm:py-10">
      <div className="mx-auto w-full max-w-285 ">
        <h2 className="mb-6 text-center text-xl font-semibold text-[#1D2026]">
          Popular instructor in Web Development
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="overflow-hidden bg-white transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full h-61 shrink-0 ">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 20vw"
                />
              </div>

              <div className="space-y-1 px-2 py-3 text-center">
                <h3 className="text-base font-medium text-card-foreground">
                  {instructor.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {instructor.role}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 px-2 py-2">
                <div className="flex items-center gap-1">
                  <Star
                    size={15}
                    className="fill-amber-400 text-amber-400"
                  />
                  <span className="text-[14px] text-gray-700 font-medium">
                    {instructor.rating.toFixed(1)}
                  </span>
                </div>

                <span className="text-[14px] text-gray-700 font-medium">
                  {instructor.students} <span className="text-gray-500 font-normal ">students</span>  
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
