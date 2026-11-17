import { RegisterForm } from "@/features/auth/components/RegisterForm";
import { RegisterIllustration } from "@/features/auth/components/RegisterIllustration";

export function RegisterPage() {
  return (
    <main className="grid min-h-svh grid-cols-1 bg-white lg:grid-cols-[43.4%_56.6%]">
      <RegisterIllustration />
      <section
        aria-labelledby="register-title"
        className="flex min-h-svh items-center justify-center px-6 py-10 sm:px-10 lg:px-12"
      >
        <div className="w-full max-w-[22rem]">
          <h1
            id="register-title"
            className="mb-6 text-center text-[22px] font-semibold leading-tight tracking-[-0.02em] text-gray-900"
          >
            Create your account
          </h1>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}
