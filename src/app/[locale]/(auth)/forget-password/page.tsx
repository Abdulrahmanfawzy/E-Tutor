import { getTranslations } from "next-intl/server";
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";

export default async function ForgetPasswordPage() {
  const t = await getTranslations("auth.forgotPassword");
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-xl flex-col justify-center px-6 py-10">
      <h1 className="mb-2 text-center text-2xl font-semibold text-slate-900">
        {t("title")}
      </h1>
      <p className="mb-8 text-center text-sm text-slate-500">
        {t("description")}
      </p>
      <ForgotPasswordForm />
    </main>
  );
}
