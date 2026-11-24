import { CourseBreadcrumb } from "@/components/common/course-breadcrumb"
import { useTranslations } from "next-intl";
interface GiftCourseHeaderProps {
    courseTitle: string;
    slug: string;
}


const GiftCourseHeader = ({ courseTitle, slug }: GiftCourseHeaderProps) => {
    const t = useTranslations("giftCourse");
    return (
        <div className="flex flex-col gap-4 bg-gray-50 py-10 items-center w-full mt-7 ">
            <span className="font-semibold text-gray-900 text-center text-2xl">{t('title')}</span>
            <CourseBreadcrumb items={[
                { label: t('home'), href: '/' },
                { label: t('courses'), href: '/course-listing' },
                {
                    label: courseTitle,
                    href: `/course-listing/${slug}`,
                },
                { label: t("title") },
            ]} />
        </div>
    )
}

export default GiftCourseHeader