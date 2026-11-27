import createMiddleware from "next-intl/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

import { routing } from "./i18n/routing";

const handleLocale = createMiddleware(routing);

function isPathUnder(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

function redirectTo(request: NextRequest, locale: string, pathname: string) {
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url),
  );
}

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const matchedLocale = routing.locales.find(
    (supportedLocale) =>
      pathname === `/${supportedLocale}` ||
      pathname.startsWith(`/${supportedLocale}/`),
  );
  const locale = matchedLocale ?? routing.defaultLocale;
  const localizedPath = matchedLocale
    ? pathname.slice(matchedLocale.length + 1) || "/"
    : pathname;
  const isAdminRoute = isPathUnder(localizedPath, "/admin");
  const isInstructorRoute =
    isPathUnder(localizedPath, "/instructor") ||
    isPathUnder(localizedPath, "/instructor-message");
  const isStudentRoute = isPathUnder(localizedPath, "/student");

  if (!isAdminRoute && !isInstructorRoute && !isStudentRoute) {
    return handleLocale(request);
  }

  const secret = process.env.NEXTAUTH_SECRET;
  const token = secret ? await getToken({ req: request, secret }) : null;

  if (!token) {
    return redirectTo(request, locale, "/login");
  }

  const roles = token.roles ?? [];
  const normalizedRoles = roles.map((role) => role.toLowerCase());
  const isAdmin = token.isAdmin === true || normalizedRoles.includes("admin");
  const isInstructor =
    token.isInstructor === true || normalizedRoles.includes("instructor");
  const homePath = isAdmin
    ? "/admin/dashboard"
    : isInstructor
      ? "/instructor/dashboard"
      : "/student/dashboard";

  if (isAdminRoute && !isAdmin) {
    return redirectTo(request, locale, homePath);
  }

  if (isInstructorRoute && !isInstructor && !isAdmin) {
    return redirectTo(request, locale, homePath);
  }

  return handleLocale(request);
}

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
