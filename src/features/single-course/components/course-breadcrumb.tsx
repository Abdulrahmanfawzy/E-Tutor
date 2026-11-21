'use client'
import Link from "next/link";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CourseBreadcrumbItem } from "../types/course";



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
                        <div
                            key={`${item.label}-${index}`}
                            className="flex items-center gap-2"
                        >
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>
                                        {item.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink >
                                        <Link href={item.href ?? "#"}>
                                            {item.label}
                                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>

                            {!isLast && <BreadcrumbSeparator />}
                        </div>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}