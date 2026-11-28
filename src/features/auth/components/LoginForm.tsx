"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/lib/Routes";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RegisterField } from "@/features/auth/components/RegisterField";
import { RegisterPasswordField } from "@/features/auth/components/RegisterPasswordField";
import { SocialSignUpButtons } from "@/features/auth/components/SocialSignUpButtons";
import { useLogin } from "@/features/auth/hooks/use-login";
import {
  createLoginSchema,
  type LoginFormValues,
} from "@/features/auth/schema/Vaildations";

export function LoginForm() {
  const t = useTranslations("auth.login");
  const navT = useTranslations("auth.nav");
  const validation = useTranslations("auth.validation");
  const { login, isPending } = useLogin();
  const loginSchema = useMemo(
    () =>
      createLoginSchema({
        invalidEmail: validation("invalidEmail"),
        passwordMin: validation("passwordMin"),
      }),
    [validation],
  );

  const LoginForm = {
    email: "",
    password: "",
    RememberMe: false,
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: LoginForm,
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(login)}
      className="w-full"
    >
      <div className="space-y-3">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <RegisterField
              htmlFor={field.name}
              label={t("email")}
              error={fieldState.error?.message}
            >
              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder={t("emailPlaceholder")}
                autoComplete="email"
                aria-invalid={fieldState.invalid}
                className="h-7 rounded-sm border-gray-100  py-5 text-[10px] shadow-none placeholder:text-gray-400 focus-visible:ring-2"
              />
            </RegisterField>
          )}
        />

        <div className="grid grid-cols-1 gap-2">
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <RegisterPasswordField
                id={field.name}
                label={t("password")}
                placeholder={t("passwordPlaceholder")}
                field={field}
                error={fieldState.error?.message}
              />
            )}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
          <Controller
            name="RememberMe"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-1.5">
                <Checkbox
                  id="RememberMe"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  onBlur={field.onBlur}
                  aria-invalid={Boolean(errors.RememberMe)}
                  className="size-3 rounded-[2px]"
                />
                <Label
                  htmlFor="RememberMe"
                  className="cursor-pointer text-[12px] font-normal leading-tight text-gray-500"
                >
                  {t("rememberMe")}
                </Label>
              </div>
            )}
          />
          {errors.RememberMe?.message ? (
            <p
              role="alert"
              className="mt-1 text-[10px] leading-tight text-destructive"
            >
              {errors.RememberMe.message}
            </p>
          ) : null}
          <Link
            href={ROUTES.forgotPassword}
            className="text-[12px] text-gray-500 underline-offset-2 hover:text-gray-900 hover:underline"
          >
            {t("forgotPassword")}
          </Link>
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="h-7 shrink-0 gap-2 leading-2.5  text-white py-5 rounded-sm px-10 text-[10px] font-semibold"
        >
          {isPending ? t("submitting") : t("submit")}
          <ArrowRight
            aria-hidden="true"
            className="size-3 rtl:rotate-180"
          />
        </Button>
      </div>

      <div className="my-5 flex items-center gap-2">
        <Separator className="flex-1 bg-gray-100" />
        <span className="shrink-0 text-[9px] text-gray-400">
          {t("socialDivider")}
        </span>
        <Separator className="flex-1 bg-gray-100" />
      </div>

      <SocialSignUpButtons action="signIn" />

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="text-gray-500">{navT("dontHaveAccount")}</span>
        <Link
          href={ROUTES.register}
          className="inline-flex h-9 items-center justify-center rounded-sm bg-[#FFEEE8] px-5 font-semibold text-[#FF6636] transition-colors hover:bg-[#FF6636] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6636]/40"
        >
          {navT("createAccount")}
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
