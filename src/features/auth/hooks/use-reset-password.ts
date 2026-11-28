"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { useRouter } from "@/i18n/navigation";
import type { ResetPasswordFormValues } from "@/features/auth/schema/Vaildations";

type PasswordRequestResponse = { success?: boolean; message?: string } | null;

function resolveResetToken(token: string) {
  if (token.trim()) return token;

  const currentUrl = new URL(window.location.href);
  const queryParams = currentUrl.searchParams;
  const hashParams = new URLSearchParams(currentUrl.hash.slice(1));

  return (
    queryParams.get("token") ||
    queryParams.get("reset_token") ||
    hashParams.get("token") ||
    hashParams.get("reset_token") ||
    ""
  );
}

export function useResetPassword(token: string) {
  const router = useRouter();
  const t = useTranslations("auth.resetPassword");
  const [isPending, setIsPending] = useState(false);

  const reset = useCallback(
    async (values: ResetPasswordFormValues) => {
      const resetToken = resolveResetToken(token);

      if (!resetToken) {
        toast.error(t("missingToken"));
        return;
      }

      setIsPending(true);

      try {
        const response = await fetch("/api/password/reset", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...values, token: resetToken }),
        });
        const result = (await response.json().catch(() => null)) as
          | PasswordRequestResponse;

        if (!response.ok || !result?.success) {
          toast.error(result?.message || t("error"));
          return;
        }

        toast.success(result.message || t("success"));
        router.replace("/login");
      } catch (error) {
        console.error("[auth] Reset-password request failed:", error);
        toast.error(t("error"));
      } finally {
        setIsPending(false);
      }
    },
    [router, t, token],
  );

  return { reset, isPending };
}
