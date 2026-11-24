
import { wishlistMockData } from "../data/wishlist.mock";
import type { WishlistData } from "../types/wishlist.types";

export async function getWishlist(): Promise<WishlistData> {
  return wishlistMockData;
}
