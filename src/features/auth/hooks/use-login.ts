"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { getSession, signIn } from "next-auth/react";
import type { SignInResponse } from "next-auth/react";
import { toast } from "sonner";

import { useRouter } from "@/i18n/navigation";
import type { LoginFormValues } from "@/features/auth/schema/Vaildations";

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

        let session: Awaited<ReturnType<typeof getSession>> = null;

        try {
          session = await getSession();
        } catch (error) {
          console.error(
            "[auth] Sign-in succeeded, but session lookup failed:",
            error,
          );
        }

        toast.success(t("loginSuccess"));
        router.replace(
          session?.user.isAdmin
            ? "/admin/dashboard"
            : session?.user.isInstructor
              ? "/instructor/dashboard"
              : "/student/dashboard",
        );
        router.refresh();
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
