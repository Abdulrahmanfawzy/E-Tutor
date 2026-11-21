function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-sm bg-gray-100 ${className}`}
    />
  );
}

function RepeatedSectionSkeleton() {
  return (
    <section className="border-b border-gray-100 px-5 py-6 sm:px-7">
      <div className="mb-5 flex items-center justify-between">
        <SkeletonBlock className="h-4 w-56" />
        <SkeletonBlock className="h-4 w-16" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <SkeletonBlock className="h-3 w-5" />
            <SkeletonBlock className="h-9 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function AdvanceInformationSkeleton() {
  return (
    <main
      aria-label="Loading course advance information"
      className="min-h-screen bg-white"
    >
      {/* Progress navigation */}
      <div className="flex h-12 gap-4 overflow-hidden border-b border-gray-100 px-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonBlock key={index} className="my-4 h-4 min-w-40 flex-1" />
        ))}
      </div>

      {/* Page heading */}
      <header className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-7">
        <SkeletonBlock className="h-5 w-48" />
        <SkeletonBlock className="h-9 w-36" />
      </header>

      {/* Media uploads */}
      <section className="grid gap-7 border-b border-gray-100 px-5 py-6 sm:px-7 lg:grid-cols-2">
        {[0, 1].map((item) => (
          <div key={item} className="space-y-4">
            <SkeletonBlock className="h-4 w-32" />

            <div className="flex gap-4">
              <SkeletonBlock className="h-28 w-40 shrink-0" />

              <div className="flex-1 space-y-3">
                <SkeletonBlock className="h-12 w-full" />
                <SkeletonBlock className="h-9 w-32" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Description */}
      <section className="space-y-3 border-b border-gray-100 px-5 py-6 sm:px-7">
        <SkeletonBlock className="h-4 w-40" />
        <SkeletonBlock className="h-40 w-full" />
      </section>

      {/* Repeatable sections */}
      <RepeatedSectionSkeleton />
      <RepeatedSectionSkeleton />
      <RepeatedSectionSkeleton />
    </main>
  );
}
