"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RegisterField } from "@/features/auth/components/RegisterField";
import { RegisterPasswordField } from "@/features/auth/components/RegisterPasswordField";
import { SocialSignUpButtons } from "@/features/auth/components/SocialSignUpButtons";
import { useRegister } from "@/features/auth/hooks/use-register";
import {
  createRegisterSchema,
  type RegisterFormValues,
} from "@/features/auth/schema/Vaildations";

export function RegisterForm() {
  const t = useTranslations("auth.register");
  const validation = useTranslations("auth.validation");
  const { register, isPending } = useRegister();
  const registerSchema = useMemo(
    () =>
      createRegisterSchema({
        firstNameRequired: validation("firstNameRequired"),
        lastNameRequired: validation("lastNameRequired"),
        usernameMin: validation("usernameMin"),
        usernamePattern: validation("usernamePattern"),
        invalidEmail: validation("invalidEmail"),
        passwordMin: validation("passwordMin"),
        confirmPasswordRequired: validation("confirmPasswordRequired"),
        termsRequired: validation("termsRequired"),
        passwordsMismatch: validation("passwordsMismatch"),
      }),
    [validation],
  );

  const registerForm = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: registerForm,
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(register)}
      className="w-full"
    >
      <div className="space-y-3">
        <Field className="w-full gap-1 ">
          <FieldLabel
            htmlFor="firstName"
            className="text-[10px] font-normal leading-none text-gray-800"
          >
            {t("fullName")}
          </FieldLabel>
          <div className="flex justify-between gap-2">
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  id="firstName"
                  placeholder={t("firstNamePlaceholder")}
                  autoComplete="given-name"
                  aria-label={t("firstName")}
                  aria-invalid={fieldState.invalid}
                  className="h-7 rounded-sm border-gray-100 py-5 w-80 text-[10px] shadow-none placeholder:text-gray-400 focus-visible:ring-2"
                />
              )}
            />

            <Controller
              name="lastName"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  id="lastName"
                  placeholder={t("lastNamePlaceholder")}
                  autoComplete="family-name"
                  aria-label={t("lastName")}
                  aria-invalid={fieldState.invalid}
                  className="h-7 rounded-sm border-gray-100 py-5 w-80  text-[10px] shadow-none placeholder:text-gray-400 focus-visible:ring-2"
                />
              )}
            />
          </div>
          {(errors.firstName || errors.lastName) && (
            <div className="grid grid-cols-2 gap-2">
              <FieldError className="text-[10px] leading-tight">
                {errors.firstName?.message}
              </FieldError>
              <FieldError className="text-[10px] leading-tight ">
                {errors.lastName?.message}
              </FieldError>
            </div>
          )}
        </Field>
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => (
            <RegisterField
              htmlFor={field.name}
              label={t("username")}
              error={fieldState.error?.message}
            >
              <Input
                {...field}
                id={field.name}
                placeholder={t("usernamePlaceholder")}
                autoComplete="username"
                aria-invalid={fieldState.invalid}
                className="h-7 rounded-sm border-gray-100  py-5 w-80  text-[10px] shadow-none placeholder:text-gray-400 focus-visible:ring-2"
              />
            </RegisterField>
          )}
        />
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

        <div className="grid grid-cols-2 gap-2">
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <RegisterPasswordField
                id={field.name}
                label={t("confirmPassword")}
                placeholder={t("confirmPasswordPlaceholder")}
                field={field}
                error={fieldState.error?.message}
              />
            )}
          />
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Controller
            name="termsAccepted"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-1.5">
                <Checkbox
                  id="termsAccepted"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  onBlur={field.onBlur}
                  aria-invalid={Boolean(errors.termsAccepted)}
                  className="size-3 rounded-[2px]"
                />
                <Label
                  htmlFor="termsAccepted"
                  className="cursor-pointer text-[9px] font-normal leading-tight text-gray-500"
                >
                  {t("agreeWith")}{" "}
                  <span className="text-purple-400">
                    {t("terms")}
                  </span>
                </Label>
              </div>
            )}
          />
          {errors.termsAccepted?.message ? (
            <p
              role="alert"
              className="mt-1 text-[10px] leading-tight text-destructive"
            >
              {errors.termsAccepted.message}
            </p>
          ) : null}
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="h-7 shrink-0 gap-2 text-white py-5 rounded-sm px-3 text-[10px] font-semibold"
        >
          {isPending ? t("registering") : t("submit")}
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

      <SocialSignUpButtons action="signUp" />
    </form>
  );
}

export default RegisterForm;
