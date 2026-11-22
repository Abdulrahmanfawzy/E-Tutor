import type { ReactNode } from "react";
import type { ControllerRenderProps } from "react-hook-form";

import type {
  LoginFormValues,
  RegisterFormValues,
} from "../schema/Vaildations";

export type RegisterFieldProps = {
  children: ReactNode;
  error?: string;
  htmlFor: string;
  label: string;
};

export type RegisterPasswordFieldProps = {
  error?: string;
  id: string;
  label: string;
  placeholder: string;
  field:
    | ControllerRenderProps<LoginFormValues, "password">
    | ControllerRenderProps<
      RegisterFormValues,
      "password" | "confirmPassword"
    >;
};
