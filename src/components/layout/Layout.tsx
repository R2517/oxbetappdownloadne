import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BackToTop from "@/components/BackToTop";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <div className="flex-1 flex w-full">
      {/* Left sidebar banner — desktop only */}
      <aside className="hidden xl:block w-[160px] shrink-0 pl-2 pt-5">
        <div className="sticky top-[96px]">
          <SidebarBanner />
        </div>
      </aside>

      <main className="flex-1 min-w-0">{children}</main>

      {/* Right sidebar banner — desktop only */}
      <aside className="hidden xl:block w-[160px] shrink-0 pr-2 pt-5">
        <div className="sticky top-[96px]">
          <SidebarBanner />
        </div>
      </aside>
    </div>
    <Footer />
    <FloatingCTA />
    <BackToTop />
  </div>
);

export default Layout;
