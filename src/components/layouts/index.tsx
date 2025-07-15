import clsx from "clsx";
import NextTopLoader from "nextjs-toploader";
import Bottombar from "./Bottombar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SidebarNav from "./Sidebar/SidebarNav";
import SidebarHeader from "./Sidebar/SidebarHeader";
import Callsign from "../cards/Callsign";

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-red-100 bg-white/80 px-8 py-4 shadow-lg backdrop-blur-lg">
      <div className="flex items-center gap-8">
        <SidebarNav
          menuItemClass="flex flex-col items-center px-4"
          iconClass="text-2xl mb-1"
        />
      </div>
      <div className="flex items-center gap-4">
        <SidebarHeader />
        <Callsign display="" />
      </div>
    </nav>
  );
}

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader
        color="#B3FFAB"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #B3FFAB,0 0 5px #12FFF7"
      />
      <div className="flex min-h-screen w-full bg-gradient-to-br from-white via-red-50 to-red-100 lg:gap-12 xl:gap-20">
        <Sidebar />
        <main className="flex-1 px-0 py-10 md:px-10 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-6xl">{children}</div>
          <Bottombar />
          <Footer />
        </main>
      </div>
    </>
  );
}
