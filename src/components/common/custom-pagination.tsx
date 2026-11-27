
"use client";

import { useTranslations } from "next-intl";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function CustomPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CustomPaginationProps) {
  const t = useTranslations("courseListing");

  if (totalPages <= 1) return null;

 const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <Pagination>
      <PaginationContent className="gap-2">

        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-label={t("previousPage")}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage - 1);
            }}
            className="h-8 w-8 flex justify-center items-center! rounded-full border-0 p-0 text-[#FF6636] hover:bg-orange-50 hover:text-[#FF6636] [&>span]:hidden"
          />
        </PaginationItem>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
                className={`
                  h-8 w-8 rounded-full p-0 text-xs font-medium
                  transition-colors
                  ${
                    currentPage === page
                      ? "border-[#FF6636] bg-[#FF6636] text-white hover:bg-[#FF6636] hover:text-white"
                      : "border-transparent bg-transparent text-[#1D2026] hover:bg-orange-50 hover:text-[#FF6636]"
                  }
                `}
              >
                {String(page).padStart(2, "0")}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            aria-label={t("nextPage")}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
            className="h-8 w-8 justify-center items-center rounded-full border-0 bg-[#FFF0EB] p-0 text-[#FF6636] hover:bg-[#FFE0D5] hover:text-[#FF6636] [&>span]:hidden"
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}
