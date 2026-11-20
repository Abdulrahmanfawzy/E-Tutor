export default function InstructorMessageSkeleton() {
  return (
    <main className="flex h-screen min-h-[600px] w-full overflow-hidden bg-white">
      <aside className="hidden w-[424px] shrink-0 flex-col border-r border-gray-100 md:flex">
        <div className="flex items-center justify-between px-6 py-7">
          <div className="h-6 w-20 animate-pulse rounded bg-gray-100" />
          <div className="h-10 w-28 animate-pulse rounded bg-gray-100" />
        </div>

        <div className="mx-6 mb-4 h-12 animate-pulse rounded border border-gray-100 bg-gray-50" />

        <div className="flex flex-col gap-5 px-6 py-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="size-12 shrink-0 animate-pulse rounded-full bg-gray-100" />
              <div className="flex flex-1 flex-col gap-2">
                <div className="h-3 w-28 animate-pulse rounded bg-gray-100" />
                <div className="h-3 w-40 animate-pulse rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[104px] items-center gap-4 border-b border-gray-100 px-6 md:px-12">
          <div className="size-14 animate-pulse rounded-full bg-gray-100" />
          <div className="flex flex-col gap-2">
            <div className="h-4 w-32 animate-pulse rounded bg-gray-100" />
            <div className="h-3 w-20 animate-pulse rounded bg-gray-100" />
          </div>
        </header>

        <div className="flex flex-1 flex-col justify-end gap-7 overflow-hidden p-8 md:p-12">
          <div className="h-20 w-2/3 animate-pulse rounded bg-gray-100" />
          <div className="ml-auto h-12 w-1/3 animate-pulse rounded bg-gray-100" />
          <div className="ml-auto h-16 w-1/2 animate-pulse rounded bg-gray-100" />
          <div className="h-12 w-1/4 animate-pulse rounded bg-gray-100" />
        </div>

        <footer className="border-t border-gray-100 p-6">
          <div className="h-12 w-full animate-pulse rounded bg-gray-100" />
        </footer>
      </section>
    </main>
  );
}
