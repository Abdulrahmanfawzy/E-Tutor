import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "../services/home.service";

export function useHomeData() {
  return useQuery({
    queryKey: ["home"],
    queryFn: getHomeData,
    staleTime: 5 * 60 * 1000,
  });
}