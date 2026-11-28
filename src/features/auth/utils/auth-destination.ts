type AuthRoleData = {
  isAdmin?: unknown;
  isInstructor?: unknown;
  is_admin?: unknown;
  is_instructor?: unknown;
  role?: unknown;
  roles?: unknown;
};

export type DashboardHref =
  | "/admin/dashboard"
  | "/instructor/dashboard"
  | "/student/dashboard";

function isEnabled(value: unknown) {
  return (
    value === true ||
    value === 1 ||
    (typeof value === "string" &&
      ["true", "1", "yes"].includes(value.trim().toLowerCase()))
  );
}

function normalizeRole(value: unknown, depth = 0): string[] {
  if (depth > 4) return [];

  if (typeof value === "string") {
    return [value.trim().toLowerCase().replace(/[\s-]+/g, "_")];
  }

  if (Array.isArray(value)) {
    return value.flatMap((role) => normalizeRole(role, depth + 1));
  }

  if (value && typeof value === "object") {
    const role = value as Record<string, unknown>;
    return ["name", "slug", "role", "key"].flatMap((key) =>
      normalizeRole(role[key], depth + 1),
    );
  }

  return [];
}

export function resolveAuthDestination(user: AuthRoleData | null | undefined) {
  const roles = normalizeRole([user?.roles, user?.role]);
  const isAdmin =
    isEnabled(user?.isAdmin) ||
    isEnabled(user?.is_admin) ||
    roles.some(
      (role) =>
        role === "administrator" ||
        role === "super_admin" ||
        role === "admin" ||
        role.startsWith("admin_") ||
        role.endsWith("_admin"),
    );
  const isInstructor =
    isEnabled(user?.isInstructor) ||
    isEnabled(user?.is_instructor) ||
    roles.some(
      (role) =>
        role === "instructor" ||
        role === "teacher" ||
        role === "tutor" ||
        role.endsWith("_instructor"),
    );

  return {
    isAdmin,
    isInstructor,
    dashboardHref: (isAdmin
      ? "/admin/dashboard"
      : isInstructor
        ? "/instructor/dashboard"
        : "/student/dashboard") as DashboardHref,
  };
}
