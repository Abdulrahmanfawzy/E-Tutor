"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RegisterField } from "@/features/auth/components/RegisterField";
import { RegisterPasswordField } from "@/features/auth/components/RegisterPasswordField";
import { SocialSignUpButtons } from "@/features/auth/components/SocialSignUpButtons";
import {
  LoginFormValues,
  LoginSchema,  
} from "@/features/auth/schema/Vaildations";

export function LoginForm() {
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
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
    defaultValues: LoginForm,
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit((valu) => console.log(valu))}
      className="w-full"
    >
      <div className="space-y-3">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <RegisterField
              htmlFor={field.name}
              label="Email"
              error={fieldState.error?.message}
            >
              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="Email address"
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
                label="Password"
                placeholder="Create password"
                field={field}
                error={fieldState.error?.message}
              />
            )}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
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
                  htmlFor="termsAccepted"
                  className="cursor-pointer text-[12px] font-normal leading-tight text-gray-500"
                >
                  RememberMe
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
        </div>
        <Button
          type="submit"
          className="h-7 shrink-0 gap-2 leading-2.5  text-white py-5 rounded-sm px-10 text-[10px] font-semibold"
        >
          Sign In
          <ArrowRight aria-hidden="true" className="size-3" />
        </Button>
      </div>

      <div className="my-5 flex items-center gap-2">
        <Separator className="flex-1 bg-gray-100" />
        <span className="shrink-0 text-[9px] text-gray-400">SIGN IN WITH</span>
        <Separator className="flex-1 bg-gray-100" />
      </div>

      <SocialSignUpButtons />
    </form>
  );
}

export default LoginForm;
