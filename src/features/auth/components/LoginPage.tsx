import { getTranslations } from "next-intl/server";

import { RegisterIllustration } from "@/features/auth/components/RegisterIllustration";
import LoginArtWork from "@/assets/Section-Loginpng.png";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const t = await getTranslations("auth.login");

  return (
    <main className="grid w-full  grid-cols-1  bg-white lg:grid-cols-2">
      <RegisterIllustration ImageAuth={LoginArtWork} />
      <section
        aria-labelledby="login-title"
        className="flex  items-center justify-center px-6 py-10 sm:px-10 lg:px-12"
      >
        <div className="w-full max-w-xl ">
          <h1
            id="login-title"
            className="mb-6 text-center text-[22px] font-semibold leading-tight tracking-[-0.02em] text-gray-900"
          >
            {t("title")}
          </h1>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
