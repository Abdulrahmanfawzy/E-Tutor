import { Fragment } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@/i18n/navigation";
import type { CourseBreadcrumbItem } from "../../features/single-course/types/course";

interface CourseBreadcrumbProps {
    items: CourseBreadcrumbItem[];
}

export function CourseBreadcrumb({
    items,
}: CourseBreadcrumbProps) {
    return (
        <Breadcrumb>
            <BreadcrumbList className="flex-wrap text-xs text-muted-foreground">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <Fragment key={`${item.label}-${index}`}>
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="break-words">
                                        {item.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink
                                        render={
                                            <Link href={item.href ?? "#"} />
                                        }
                                        className="break-words"
                                    >
                                        {item.label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>

                            {!isLast && (
                                <BreadcrumbSeparator className="rtl:rotate-180" />
                            )}
                        </Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}