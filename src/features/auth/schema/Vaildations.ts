import { z } from "zod";

export type AuthValidationMessages = {
  firstNameRequired: string;
  lastNameRequired: string;
  usernameMin: string;
  usernamePattern: string;
  invalidEmail: string;
  passwordMin: string;
  confirmPasswordRequired: string;
  termsRequired: string;
  passwordsMismatch: string;
};

export const createRegisterSchema = (messages: AuthValidationMessages) =>
  z
    .object({
      firstName: z.string().trim().min(1, messages.firstNameRequired),
      lastName: z.string().trim().min(1, messages.lastNameRequired),
      username: z
        .string()
        .trim()
        .min(3, messages.usernameMin)
        .regex(/^[a-zA-Z0-9_]+$/, messages.usernamePattern),
      email: z.string().trim().email(messages.invalidEmail),
      password: z.string().min(8, messages.passwordMin),
      confirmPassword: z.string().min(1, messages.confirmPasswordRequired),
      termsAccepted: z.boolean().refine(Boolean, messages.termsRequired),
    })
    .refine((values) => values.password === values.confirmPassword, {
      path: ["confirmPassword"],
      message: messages.passwordsMismatch,
    });

export type RegisterFormValues = z.infer<
  ReturnType<typeof createRegisterSchema>
>;

export const createLoginSchema = (
  messages: Pick<AuthValidationMessages, "invalidEmail" | "passwordMin">,
) =>
  z.object({
    email: z.string().trim().email(messages.invalidEmail),
    password: z.string().min(8, messages.passwordMin),
    RememberMe: z.boolean(),
  });

export type LoginFormValues = z.infer<ReturnType<typeof createLoginSchema>>;
