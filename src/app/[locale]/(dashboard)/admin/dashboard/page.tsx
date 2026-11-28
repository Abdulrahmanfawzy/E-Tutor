import { getTranslations } from "next-intl/server";

export default async function AdminDashboardPage() {
  const t = await getTranslations("auth.nav");

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-muted/30 p-4 sm:p-8">
      <section className="mx-auto max-w-7xl rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          E-Tutor
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t("adminDashboard")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          {t("adminDashboardDescription")}
        </p>
      </section>
    </main>
  );
}
