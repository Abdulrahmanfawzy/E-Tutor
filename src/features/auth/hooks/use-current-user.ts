"use client";

import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";

import { useRouter } from "@/i18n/navigation";
import { resolveAuthDestination } from "@/features/auth/utils/auth-destination";

export function useCurrentUser() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const t = useTranslations("auth.nav");
  const user = session?.user;
  const { dashboardHref } = resolveAuthDestination(user);

  const logout = useCallback(async () => {
    try {
      const response = await fetch("/api/backend/auth/logout", {
        method: "POST",
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        console.warn(
          "[auth] Backend logout was rejected; clearing the local session anyway.",
          response.status,
        );
      }
    } catch (error) {
      console.error(
        "[auth] Backend logout request failed; clearing the local session anyway.",
        error,
      );
    } finally {
      try {
        await signOut({ redirect: false });
        toast.success(t("logoutSuccess"));
      } catch (error) {
        console.error("[auth] Local sign-out failed:", error);
      }
      router.replace("/login");
      router.refresh();
    }
  }, [router, t]);

  return {
    user,
    status,
    dashboardHref,
    logout,
  };
}
