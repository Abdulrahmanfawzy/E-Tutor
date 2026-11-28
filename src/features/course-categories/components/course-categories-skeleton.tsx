import { Skeleton } from "@/components/ui/skeleton";

const CourseCategoriesSkeleton = () => {
    return (
        <main className="min-h-screen bg-white" aria-busy="true">
            <div className="mx-auto flex w-full max-w-285 flex-col gap-10 px-4 py-10">
                <section className="space-y-7">
                    <Skeleton className="mx-auto h-10 w-3/4 max-w-xl rounded-sm" />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {Array.from({ length: 5 }, (_, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-sm border border-gray-100"
                            >
                                <Skeleton className="aspect-16/10 w-full rounded-none" />
                                <div className="space-y-4 p-4">
                                    <div className="flex justify-between">
                                        <Skeleton className="h-5 w-20" />
                                        <Skeleton className="h-5 w-12" />
                                    </div>
                                    <Skeleton className="h-10 w-full" />
                                    <div className="flex justify-between">
                                        <Skeleton className="h-4 w-12" />
                                        <Skeleton className="h-4 w-20" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <Skeleton className="h-6 w-36" />
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                        {Array.from({ length: 6 }, (_, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-2 rounded-sm border border-gray-100 px-2 py-4"
                            >
                                <Skeleton className="h-5 w-24" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-wrap items-center gap-3">
                    <Skeleton className="h-6 w-36" />
                    {Array.from({ length: 7 }, (_, index) => (
                        <Skeleton key={index} className="h-8 w-24 rounded-sm" />
                    ))}
                </section>
            </div>

            <section className="bg-[#F5F7FA] py-8 sm:py-10">
                <div className="mx-auto w-full max-w-285 px-4">
                    <Skeleton className="mx-auto mb-6 h-7 w-64" />
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                        {Array.from({ length: 5 }, (_, index) => (
                            <div key={index} className="overflow-hidden bg-white">
                                <Skeleton className="h-61 w-full rounded-none" />
                                <div className="space-y-2 px-2 py-3">
                                    <Skeleton className="mx-auto h-5 w-3/4" />
                                    <Skeleton className="mx-auto h-4 w-2/3" />
                                </div>
                                <div className="flex justify-between rounded-sm border-t border-gray-100 px-2 py-2">
                                    <Skeleton className="h-4 w-10" />
                                    <Skeleton className="h-4 w-20" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CourseCategoriesSkeleton;