"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

type ForgotPasswordValues = { email: string };
type PasswordRequestResponse = { success?: boolean; message?: string } | null;

export function useForgotPassword() {
  const t = useTranslations("auth.forgotPassword");
  const [isPending, setIsPending] = useState(false);

  const requestResetLink = useCallback(
    async ({ email }: ForgotPasswordValues) => {
      setIsPending(true);

      try {
        const response = await fetch("/api/password/forgot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        });
        const result = (await response.json().catch(() => null)) as
          | PasswordRequestResponse;

        if (!response.ok || !result?.success) {
          toast.error(result?.message || t("error"));
          return;
        }

        toast.success(result.message || t("success"));
      } catch (error) {
        console.error("[auth] Forgot-password request failed:", error);
        toast.error(t("error"));
      } finally {
        setIsPending(false);
      }
    },
    [t],
  );

  return { requestResetLink, isPending };
}
