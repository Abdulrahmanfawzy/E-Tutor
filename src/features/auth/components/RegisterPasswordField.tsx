"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterField } from "@/features/auth/components/RegisterField";
import { RegisterPasswordFieldProps } from "../types/register";


export function RegisterPasswordField({
  error,
  id,
  label,
  placeholder,
  field,
}: RegisterPasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <RegisterField error={error} htmlFor={id} label={label}>
      <div className="relative ">
        <Input
          {...field}
          id={id}
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          autoComplete="new-password"
          className="h-7 rounded-sm border-gray-100  py-5 pr-9 text-[10px] shadow-none placeholder:text-gray-400 focus-visible:ring-2"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          onClick={() => setIsVisible((visible) => !visible)}
          className="absolute right-0 top-2   h-7 w-8 rounded-sm text-gray-500 hover:bg-transparent hover:text-gray-800"
        >
          {isVisible ? (
            <EyeOff aria-hidden="true" />
          ) : (
            <Eye aria-hidden="true" />
          )}
        </Button>
      </div>
    </RegisterField>
  );
}
