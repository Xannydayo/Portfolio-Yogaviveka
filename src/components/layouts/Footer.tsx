//footer
import { FOOTER_ITEMS } from "@/constants/footer";
import clsx from "clsx";
import Link from "next/link";
import BreakLine from "../elements/BreakLine";

export default function Footer() {
  return (
    <footer className="mb-[104px] px-8 md:mb-6">
      <BreakLine />
      <p className={clsx("mb-2 mt-16", "text-center text-sm font-medium", "md:text-base")}>Reach me out</p>
      <ul className="flex justify-center gap-4">
        {FOOTER_ITEMS.map(({ icon, href, ariaLabel, target, rel }, index) => (
          <li key={index}>
            <Link
              href={href}
              aria-label={ariaLabel}
              target={target}
              rel={rel}
              className={`${target === "_blank" && "cursor-pointer"}`}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-sm">copyright &copy; YogaViveka2025</p>
    </footer>
  );
}
