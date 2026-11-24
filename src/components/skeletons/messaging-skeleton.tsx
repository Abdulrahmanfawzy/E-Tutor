import { Skeleton } from "@/components/ui/skeleton";

interface MessagingSkeletonProps {
  title?: string;
}

export function MessagingSkeleton({
  title = "Message",
}: MessagingSkeletonProps) {
  return (
    <main className="flex h-screen min-h-150 w-full overflow-hidden bg-white">
      <aside className="hidden w-106 shrink-0 flex-col border-r border-gray-100 md:flex">
        <div className="flex h-20 items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

          <Skeleton className="h-9 w-28" />
        </div>

        <div className="px-6 pb-4">
          <Skeleton className="h-12 w-full rounded-none" />
        </div>

        <div className="flex flex-col gap-5 px-6 py-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              <Skeleton className="size-12 shrink-0 rounded-full" />

              <div className="flex flex-1 flex-col gap-2">
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-3 w-40" />
              </div>
            </div>
          ))}
        </div>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[104px] items-center gap-4 border-b border-gray-100 px-6 md:px-12">
          <Skeleton className="size-16 shrink-0 rounded-full" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
        </header>

        <div className="flex flex-1 flex-col justify-end gap-7 overflow-hidden p-8 md:p-12">
          <Skeleton className="h-20 w-2/3" />
          <Skeleton className="ml-auto h-12 w-1/3" />
          <Skeleton className="ml-auto h-16 w-1/2" />
          <Skeleton className="h-12 w-1/4" />
        </div>

        <footer className="border-t border-gray-100 p-6">
          <Skeleton className="h-12 w-full rounded-none" />
        </footer>
      </section>
    </main>
  );
}
