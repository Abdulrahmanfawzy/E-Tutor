"use client";

import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";

import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/lib/Routes";
import { Button } from "@/components/ui/button";
import { FormField } from "@/features/auth/ui/FormFIeld";
import { TextInput } from "@/features/auth/ui/TextInput";
import { useForgotPassword } from "@/features/auth/hooks/use-forgot-password";

type ForgotPasswordFormValues = { email: string };

export function ForgotPasswordForm() {
  const t = useTranslations("auth.forgotPassword");
  const validation = useTranslations("auth.validation");
  const { requestResetLink, isPending } = useForgotPassword();
  const form = useForm<ForgotPasswordFormValues>({
    defaultValues: { email: "" },
    mode: "onBlur",
  });

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(requestResetLink)}
      className="space-y-5"
    >
      <Controller
        name="email"
        control={form.control}
        rules={{
          required: validation("invalidEmail"),
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: validation("invalidEmail"),
          },
        }}
        render={({ field, fieldState }) => (
          <FormField
            label={t("email")}
            htmlFor="email"
            error={fieldState.error?.message}
          >
            <TextInput
              {...field}
              id="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              autoComplete="email"
              aria-invalid={fieldState.invalid}
            />
          </FormField>
        )}
      />

      <Button
        type="submit"
        disabled={isPending}
        className="h-10 w-full rounded-sm bg-orange-500 text-sm font-medium text-white hover:bg-orange-600"
      >
        {isPending ? t("submitting") : t("submit")}
      </Button>

      <Link
        href={ROUTES.login}
        className="flex items-center justify-center text-sm text-slate-500 hover:text-slate-900"
      >
        {t("backToLogin")}
      </Link>
    </form>
  );
}
