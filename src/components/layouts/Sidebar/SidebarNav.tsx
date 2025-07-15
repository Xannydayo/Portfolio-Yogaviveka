"use client";
import { SIDEBAR_ITEMS } from "@/constants/sidebar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({ menuItemClass = "", iconClass = "" }) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="space-y-4">
        {SIDEBAR_ITEMS.map((item, index) => {
          const isActivePage =
            pathname === item.pathname ||
            (item.pathname === "/blog" && pathname.startsWith("/blog/"));

          return (
            <li key={index}>
              <Link href={item.pathname} legacyBehavior>
                <div
                  className={clsx(
                    menuItemClass,
                    isActivePage
                      ? "bg-white text-primary-light hover:scale-100"
                      : "primary hover:scale-[1.08]",
                    "flex w-fit items-center gap-4 rounded-md px-4 py-3 font-bold hover:bg-neutral-200 dark:hover:bg-neutral-800 lg:w-full",
                  )}
                >
                  <span className={iconClass}>{item.icon}</span>
                  <span className="hidden lg:block">{item.label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
