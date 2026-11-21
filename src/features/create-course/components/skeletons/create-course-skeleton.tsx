import { Skeleton } from "@/components/ui/skeleton";

export default function CreateCourseSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Wizard navigation */}
      <div className="grid grid-cols-2 border-b border-gray-100 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex min-h-16 items-center gap-3 px-5 py-4"
          >
            <Skeleton className="size-5 rounded-sm" />
            <Skeleton className="h-4 w-28" />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-6 lg:px-10">
        <Skeleton className="h-7 w-52" />

        <div className="flex gap-3">
          <Skeleton className="h-12 w-24 rounded-none" />
          <Skeleton className="h-12 w-36 rounded-none" />
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-6 px-6 py-8 lg:px-10 lg:py-9">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-12 w-full rounded-none" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full rounded-none" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-12 w-full rounded-none" />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full rounded-none" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-12 w-full rounded-none" />
            </div>
          ))}
        </div>

        <div className="flex justify-between pt-2">
          <Skeleton className="h-14 w-32 rounded-none" />
          <Skeleton className="h-14 w-40 rounded-none" />
        </div>
      </div>
    </div>
  );
}
