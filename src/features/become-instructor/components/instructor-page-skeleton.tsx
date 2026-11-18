function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-lg bg-gray-200 ${className}`} />
  );
}

export function InstructorPageSkeleton() {
  return (
    <main aria-label="Loading instructor page">
      {/* Hero */}
      <section className="mx-auto grid min-h-145 max-w-300 items-center gap-12 px-5 py-16 
      sm:px-8 lg:grid-cols-2 lg:px-10">
        <div className="space-y-6">
          <SkeletonBlock className="h-8 w-40 rounded-full" />
          <SkeletonBlock className="h-14 w-full max-w-120" />
          <SkeletonBlock className="h-14 w-4/5 max-w-100" />
          <SkeletonBlock className="h-5 w-full max-w-117.5" />
          <SkeletonBlock className="h-5 w-4/5 max-w-100" />
          <SkeletonBlock className="h-14 w-40" />
        </div>

        <SkeletonBlock className="mx-auto h-105 w-full max-w-120 rounded-[40px]" />
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 px-5 py-12">
        <div className="mx-auto grid max-w-300 grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <SkeletonBlock className="mx-auto h-10 w-24" />
              <SkeletonBlock className="mx-auto h-4 w-32" />
            </div>
          ))}
        </div>
      </section>

      {/* Main content sections */}
      {Array.from({ length: 5 }).map((_, index) => (
        <section key={index} className="px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-300 items-center gap-12 lg:grid-cols-2">
            <SkeletonBlock className="aspect-square w-full rounded-2xl" />
            <div className="space-y-5">
              <SkeletonBlock className="h-5 w-36" />
              <SkeletonBlock className="h-10 w-full max-w-112.5" />
              <SkeletonBlock className="h-5 w-full" />
              <SkeletonBlock className="h-5 w-4/5" />
              <SkeletonBlock className="h-20 w-full" />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
