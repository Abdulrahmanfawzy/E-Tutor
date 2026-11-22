import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

const GiftCourseHeader = () => {
    return (
        <div className="flex flex-col gap-4 bg-gray-50 py-10 items-center w-full mt-7 ">
            <span className="font-semibold text-gray-900 text-center text-2xl">Gift Course</span>

            <Breadcrumb>
                <BreadcrumbList>

                    <BreadcrumbItem>
                        <BreadcrumbLink render={<Link href="/" />} className="text-sm font-normal text-gray-600">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <span className="w-1 h-5 mx-2">/</span>

                    <BreadcrumbItem>
                        <BreadcrumbLink render={<Link href="/" />} className="text-sm font-normal text-gray-600">
                            Course
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <span className="w-1 h-5 mx-2">/</span>

                    <BreadcrumbItem>
                        <BreadcrumbLink render={<Link href="/" />} className="text-sm font-normal text-gray-600">
                            Complete Web Design
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <span className="w-1 h-5 mx-2">/</span>

                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-sm font-normal text-gray-900">Gift Course</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>

            </Breadcrumb>
        </div>
    )
}

export default GiftCourseHeader