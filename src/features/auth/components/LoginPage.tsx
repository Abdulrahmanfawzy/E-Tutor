import { RegisterForm } from "@/features/auth/components/RegisterForm";
import { RegisterIllustration } from "@/features/auth/components/RegisterIllustration";
import LoginArtWork from "@/assets/Section-Loginpng.png";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="grid w-full  grid-cols-1  bg-white lg:grid-cols-2">
      <RegisterIllustration ImageAuth={LoginArtWork} />
      <section
        aria-labelledby="register-title"
        className="flex  items-center justify-center px-6 py-10 sm:px-10 lg:px-12"
      >
        <div className="w-full max-w-xl ">
          <h1
            id="Login-title"
            className="mb-6 text-center text-[22px] font-semibold leading-tight tracking-[-0.02em] text-gray-900"
          >
            Sign In
          </h1>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
