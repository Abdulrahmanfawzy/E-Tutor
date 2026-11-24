
"use client";

import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../services/wishlist.service";

export function useWishlist() {
  return useQuery({
    queryKey: ["student-wishlist"],
    queryFn: getWishlist,
  });
}
