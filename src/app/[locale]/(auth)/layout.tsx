import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Navbar from "./layout/Navbar";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("authTitle"),
    description: t("authDescription"),
  };
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
