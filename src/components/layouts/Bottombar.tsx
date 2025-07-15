"use client";
import { BOTTOMBAR_ITEMS } from "@/constants/bottombar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Bottombar() {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "border__gradient backdrop-blur-3xl",
        "fixed bottom-4 left-1/2 z-20 -translate-x-1/2",
        "flex items-center justify-evenly",
        "w-[85vw] max-w-md rounded-full p-2",
        "md:hidden",
      )}
    >
      {BOTTOMBAR_ITEMS.map((item, index) => {
        const isActivePage =
          pathname === item.pathname ||
          (item.pathname === "/blog" && pathname.startsWith("/blog/"));

        return (
          <Link
            key={index}
            href={item.pathname}
            className={clsx(
              isActivePage && "bg-gradient-linear ",
              "h-10 w-10 rounded-full",
              "grid place-items-center",
            )}
            aria-label={`Go to ${item.pathname}`}
          >
            <span className={isActivePage ? "text-primary-light" : "primary"}>
              {item.icon}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
