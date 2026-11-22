import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageHeaderProps {
  title?: string;
  currentPage?: string;
}

export function PageHeader({
  title = "Become an Instructor",
  currentPage = "Become an instructor",
}: PageHeaderProps) {
  return (
    <header className="w-full bg-gray-50 px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h1>

        <Breadcrumb>
          <BreadcrumbList className="justify-center gap-2 text-sm">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-gray-600">
              /
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-normal text-gray-900">
                {currentPage}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
