import { CourseBreadcrumb } from "@/components/common/course-breadcrumb"
import { useTranslations } from "next-intl";
interface GiftCourseHeaderProps {

}


const CartPageHeader = ({ }: GiftCourseHeaderProps) => {
    const t = useTranslations("ShoppingCart");
    return (
        <div className="flex flex-col gap-4 bg-gray-50 py-10 items-center w-full mt-7 ">
            <span className="font-semibold text-gray-900 text-center text-2xl">{t('pageTitle')}</span>
            <CourseBreadcrumb items={[
                { label: t('home'), href: '/' },

                { label: t("pageTitle") },
            ]} />
        </div>
    )
}

export default CartPageHeader