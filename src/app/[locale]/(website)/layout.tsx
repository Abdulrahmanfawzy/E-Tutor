import TopHeader from "@/components/layout/top-header";
import Navbar from "@/components/layout/nav-bar";
import Footer from "@/components/layout/footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopHeader />
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </>
  );
}