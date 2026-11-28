"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";
import type { SignInResponse } from "next-auth/react";
import { toast } from "sonner";

import { useRouter } from "@/i18n/navigation";
import type { LoginFormValues } from "@/features/auth/schema/Vaildations";
import type { DashboardHref } from "@/features/auth/utils/auth-destination";

type LoginCredentials = Pick<LoginFormValues, "email" | "password">;

export function useLogin() {
  const router = useRouter();
  const t = useTranslations("auth.login");
  const [isPending, setIsPending] = useState(false);

  const login = useCallback(
    async ({ email, password }: LoginCredentials) => {
      setIsPending(true);

      try {
        let result: SignInResponse | undefined;

        try {
          result = await signIn("credentials", {
            login: email,
            password,
            redirect: false,
          });
        } catch (error) {
          console.error("[auth] NextAuth sign-in request failed:", error);
          toast.error(t("loginError"));
          return;
        }

        if (!result?.ok || result.error) {
          console.error("[auth] NextAuth sign-in returned an error:", {
            error: result?.error,
            status: result?.status,
          });
          toast.error(
            result?.error === "CredentialsSignin"
              ? t("invalidCredentials")
              : t("loginError"),
          );
          return;
        }

        const destinationResponse = await fetch(
          "/api/backend/auth/destination",
          { cache: "no-store" },
        );
        const destinationData = (await destinationResponse
          .json()
          .catch(() => null)) as {
          dashboardHref?: unknown;
        } | null;
        const validDashboardHrefs: DashboardHref[] = [
          "/admin/dashboard",
          "/instructor/dashboard",
          "/student/dashboard",
        ];
        const dashboardHref = validDashboardHrefs.find(
          (href) => href === destinationData?.dashboardHref,
        );

        if (!destinationResponse.ok || !dashboardHref) {
          console.error(
            "[auth] Sign-in succeeded, but a dashboard destination could not be resolved.",
            destinationResponse.status,
          );
          toast.error(t("loginError"));
          return;
        }

        toast.success(t("loginSuccess"));
        router.replace(dashboardHref);
      } catch (error) {
        console.error("[auth] Unexpected sign-in flow error:", error);
        toast.error(t("loginError"));
      } finally {
        setIsPending(false);
      }
    },
    [router, t],
  );

  return { login, isPending };
}
