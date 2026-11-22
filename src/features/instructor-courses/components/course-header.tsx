import Image, { type StaticImageData } from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import CourseHeaderMenu from "./course-header-menu";


type Instructor = { name: string; avatar: string | StaticImageData };

type CourseHeaderData = {
  image: string | StaticImageData;
  uploadedAt: string;
  updatedAt: string;
  title: string;
  subtitle: string;
  instructors: Instructor[];
  rating: number;
  ratingCount: number;
  price: number;
  revenue: number;
};

export default function CourseHeader({ course }: { course: CourseHeaderData }) {
  const t = useTranslations("courseDetails.header");

  return (
    <section className="flex flex-col gap-6 rounded-lg bg-white p-5 md:flex-row">
      <div className="relative aspect-video w-full shrink-0 overflow-hidden md:w-72">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap gap-4 text-label-sm text-gray-500">
          <span>{t("uploaded")} {course.uploadedAt}</span>
          <span>{t("lastUpdated")} {course.updatedAt}</span>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-heading-7">{course.title}</h1>
          <p className="text-label-md text-gray-600">{course.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {course.instructors.map(({ name, avatar }) => (
                <Image
                  key={name}
                  src={avatar}
                  alt={name}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-label-sm">
              <p className="text-gray-500">{t("createdBy")}</p>
              <p className="font-medium">
                {course.instructors.map((i) => i.name).join(" • ")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-label-md">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            <span className="font-semibold">{course.rating.toFixed(1)}</span>
            <span className="text-gray-500">
              ({course.ratingCount.toLocaleString()} {t("rating")})
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-6">
            <div>
              <p className="font-semibold">${course.price.toFixed(2)}</p>
              <p className="text-label-sm text-gray-500">{t("coursePrice")}</p>
            </div>
            <div>
              <p className="font-semibold">${course.revenue.toLocaleString()}</p>
              <p className="text-label-sm text-gray-500">{t("revenue")}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-button-primary px-6 text-white hover:bg-button-primary-hover">
              {t("withdraw")}
            </Button>
            <CourseHeaderMenu />
          </div>
        </div>
      </div>
    </section>
  );
}