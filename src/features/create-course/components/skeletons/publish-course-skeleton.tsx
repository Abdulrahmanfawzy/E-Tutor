function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-100 ${className}`} />;
}

export default function PublishCourseSkeleton() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <header className="flex min-h-24 items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-10">
        <SkeletonBlock className="h-7 w-44" />

        <div className="flex gap-4">
          <SkeletonBlock className="h-12 w-24" />
          <SkeletonBlock className="h-12 w-36" />
        </div>
      </header>

      <div className="flex-1 space-y-10 px-5 py-10 sm:px-10">
        <section>
          <SkeletonBlock className="mb-7 h-5 w-24" />

          <div className="grid gap-6 lg:grid-cols-2">
            <SkeletonBlock className="h-[120px] w-full" />
            <SkeletonBlock className="h-[120px] w-full" />
          </div>
        </section>

        <section>
          <SkeletonBlock className="mb-6 h-5 w-40" />

          <SkeletonBlock className="h-12 w-full max-w-[608px]" />

          <div className="mt-6 grid max-w-[648px] gap-6 sm:grid-cols-2">
            <SkeletonBlock className="h-20 w-full" />
            <SkeletonBlock className="h-20 w-full" />
          </div>
        </section>
      </div>

      <footer className="flex justify-between px-5 pb-10 pt-12 sm:px-10">
        <SkeletonBlock className="h-14 w-36" />
        <SkeletonBlock className="h-14 w-56" />
      </footer>
    </main>
  );
}
