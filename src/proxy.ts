import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

/**
 * Next.js 16 renamed `middleware` to `proxy`; next-intl's middleware factory
 * returns a plain request handler, so we expose it under the `proxy` export.
 */
export const proxy = createMiddleware(routing);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api, trpc (API routes)
     * - _next, _vercel (internal routes)
     * - any path containing a dot (static files such as favicon.ico)
     */
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
