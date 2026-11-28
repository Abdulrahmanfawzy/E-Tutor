"use client";

import { useTranslations } from "next-intl";
import type { Session } from "next-auth";
import { ChevronDown, LayoutDashboard, LogOut } from "lucide-react";

import { Link, useRouter } from "@/i18n/navigation";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserAccountMenuProps = {
  user: Session["user"];
  dashboardHref: string;
  onLogout: () => void;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export function UserAccountMenu({
  user,
  dashboardHref,
  onLogout,
  onNavigate,
  variant = "desktop",
}: UserAccountMenuProps) {
  const t = useTranslations("auth.nav");
  const router = useRouter();
  const displayName = user.name?.trim() || user.username || user.email || "User";
  const initials = displayName
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
  const roleLabel = user.isAdmin
    ? t("admin")
    : user.isInstructor
      ? t("instructor")
      : t("student");

  const avatar = (
    <Avatar size="sm" className="size-9">
      <AvatarImage src={user.image ?? undefined} alt={displayName} />
      <AvatarFallback>{initials || "U"}</AvatarFallback>
    </Avatar>
  );

  if (variant === "mobile") {
    return (
      <div className="space-y-2 border-t border-border pt-3">
        <div className="flex items-center gap-3 rounded-xl bg-card px-3 py-3 text-card-foreground">
          {avatar}
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">
              {displayName}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {user.email || roleLabel}
            </p>
            {user.username ? (
              <p className="truncate text-xs text-muted-foreground">
                {t("username")}: @{user.username}
              </p>
            ) : null}
          </div>
        </div>
        <Link
          href={dashboardHref}
          onClick={onNavigate}
          className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <LayoutDashboard className="size-4" aria-hidden="true" />
          {t("dashboard")}
        </Link>
        <button
          type="button"
          onClick={() => {
            onNavigate?.();
            void onLogout();
          }}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-3 text-left text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
        >
          <LogOut className="size-4" aria-hidden="true" />
          {t("signOut")}
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={`${displayName}${user.email ? `, ${user.email}` : ""}`}
        className="flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-2 text-left text-card-foreground shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {avatar}
        <span className="hidden max-w-36 sm:block">
          <span className="block truncate text-sm font-semibold text-foreground">
            {displayName}
          </span>
          <span className="block truncate text-xs text-muted-foreground">
            {user.email || roleLabel}
          </span>
        </span>
        <ChevronDown className="size-4 text-muted-foreground" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-72 rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-xl"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2 py-2">
            <div className="flex items-center gap-3">
              {avatar}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {displayName}
                </p>
                {user.email ? (
                  <p className="truncate text-xs font-normal text-muted-foreground">
                    {user.email}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {user.username ? (
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  @{user.username}
                </span>
              ) : null}
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {roleLabel}
              </span>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => router.push(dashboardHref)}
            className="min-h-10 cursor-pointer gap-2 rounded-lg px-2.5 text-sm font-medium transition-colors"
          >
            <LayoutDashboard className="text-primary" aria-hidden="true" />
            {t("dashboard")}
          </DropdownMenuItem>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => void onLogout()}
            className="min-h-10 cursor-pointer gap-2 rounded-lg px-2.5 text-sm font-medium transition-colors"
          >
            <LogOut aria-hidden="true" />
            {t("signOut")}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
