"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { useResetPassword } from "@/features/auth/hooks/use-reset-password";
import {
  createResetPasswordSchema,
  type ResetPasswordFormValues,
} from "@/features/auth/schema/Vaildations";
import { FormField } from "@/features/auth/ui/FormFIeld";
import { TextInput } from "@/features/auth/ui/TextInput";

type ResetPasswordFormProps = {
  token: string;
  initialEmail: string;
};

export function ResetPasswordForm({
  token,
  initialEmail,
}: ResetPasswordFormProps) {
  const t = useTranslations("auth.resetPassword");
  const validation = useTranslations("auth.validation");
  const { reset, isPending } = useResetPassword(token);
  const schema = useMemo(
    () =>
      createResetPasswordSchema({
        invalidEmail: validation("invalidEmail"),
        passwordMin: validation("passwordMin"),
        confirmPasswordRequired: validation("confirmPasswordRequired"),
        passwordsMismatch: validation("passwordsMismatch"),
      }),
    [validation],
  );
  const { control, handleSubmit } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      email: initialEmail,
      password: "",
      password_confirmation: "",
    },
  });

  return (
    <form noValidate onSubmit={handleSubmit(reset)} className="space-y-5">
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label={t("email")}
            htmlFor="reset-email"
            error={fieldState.error?.message}
          >
            <TextInput
              {...field}
              id="reset-email"
              type="email"
              autoComplete="email"
              aria-invalid={fieldState.invalid}
            />
          </FormField>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label={t("password")}
            htmlFor="reset-password"
            error={fieldState.error?.message}
          >
            <TextInput
              {...field}
              id="reset-password"
              type="password"
              autoComplete="new-password"
              aria-invalid={fieldState.invalid}
            />
          </FormField>
        )}
      />

      <Controller
        name="password_confirmation"
        control={control}
        render={({ field, fieldState }) => (
          <FormField
            label={t("confirmPassword")}
            htmlFor="reset-password-confirmation"
            error={fieldState.error?.message}
          >
            <TextInput
              {...field}
              id="reset-password-confirmation"
              type="password"
              autoComplete="new-password"
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
    </form>
  );
}
