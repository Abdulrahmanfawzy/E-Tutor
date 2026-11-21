import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

// Navigation helpers that keep the active locale in every route change.
export const {
  Link,
  redirect,
  permanentRedirect,
  getPathname,
  usePathname,
  useRouter,
} = createNavigation(routing);
