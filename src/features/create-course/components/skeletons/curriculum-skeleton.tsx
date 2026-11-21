function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-100 ${className}`} />;
}

export default function CurriculumSkeleton() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[1134px] flex-col bg-white">
        <header className="flex min-h-[82px] items-center justify-between border-b border-gray-100 px-5 sm:px-8">
          <SkeletonBlock className="h-7 w-48" />

          <div className="flex gap-4">
            <SkeletonBlock className="h-11 w-[74px]" />
            <SkeletonBlock className="h-11 w-32" />
          </div>
        </header>

        <div className="space-y-7 px-5 py-8 sm:px-8">
          <section className="space-y-3 bg-gray-50 p-4 sm:p-5">
            <SkeletonBlock className="h-7 w-1/2" />
            <SkeletonBlock className="h-14 w-full" />
            <SkeletonBlock className="h-14 w-full" />
          </section>

          <SkeletonBlock className="h-10 w-full" />
        </div>

        <footer className="mt-auto flex justify-between px-5 pb-8 pt-12 sm:px-8">
          <SkeletonBlock className="h-12 w-32" />
          <SkeletonBlock className="h-12 w-36" />
        </footer>
      </div>
    </main>
  );
}
