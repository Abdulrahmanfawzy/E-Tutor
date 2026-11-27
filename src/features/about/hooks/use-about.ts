"use client";

import { useQuery } from "@tanstack/react-query";
import { getAboutData } from "../services/about.service";

export function useAbout() {
  return useQuery({
    queryKey: ["about"],
    queryFn: getAboutData,
    staleTime: 5 * 60 * 1000,
  });
}