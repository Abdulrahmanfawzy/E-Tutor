import { ControllerRenderProps } from "react-hook-form";
import { RegisterFormValues } from "../schema/Vaildations";

export type RegisterPasswordFieldProps = {
    error?: string;
    id: string;
    label: string;
    placeholder: string;
    field: ControllerRenderProps<
      RegisterFormValues,
      "password" | "confirmPassword"
    >;
  };
  