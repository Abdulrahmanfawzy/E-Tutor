
"use client";

import { useQuery } from "@tanstack/react-query";
import { getFaqsData } from "../services/faqs.service";

export function useFaqs() {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: getFaqsData,
  });
}
