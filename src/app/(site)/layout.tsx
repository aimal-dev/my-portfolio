
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ui/ChatBot";
import "@/app/layout.scss";
import { getFooter } from "@/lib/actions";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerData = await getFooter();

  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer data={footerData} />
      <ChatBot />
    </div>
  );
}
