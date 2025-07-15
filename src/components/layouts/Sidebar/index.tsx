import BreakLine from "@/components/elements/BreakLine";
import clsx from "clsx";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import Callsign from "@/components/cards/Callsign";

export default function Sidebar() {
  return (
    <div
      className={clsx(
        "sidebar", // tambahkan class sidebar
        "sticky top-0 hidden",
        "ml-8 h-screen w-fit pt-8",
        "md:block",
        "lg:w-52",
      )}
    >
      <SidebarHeader />
      <BreakLine decoration="border-dashed" />
      <SidebarNav menuItemClass="menu-item" iconClass="icon" />
      <BreakLine classname="md:hidden lg:block" />
      <Callsign display="md:hidden lg:flex" />
    </div>
  );
}
