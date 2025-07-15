"use client";
import StackCard from "@/components/cards/StackCard";
import MarqueeElement from "@/components/elements/Marquee";
import { STACKS } from "@/constants/stacks";
import clsx from "clsx";
import { motion } from "framer-motion";
import { HiOutlineCode } from "react-icons/hi";

export default function Stacks() {
  // Bagi stacks menjadi dua bagian untuk dua baris marquee
  const stackEntries = Object.entries(STACKS);
  const half = Math.ceil(stackEntries.length / 2);
  const stacksRow1 = stackEntries.slice(0, half);
  const stacksRow2 = stackEntries.slice(half);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div
        className={clsx(
          "primary",
          "mb-5",
          "flex items-center gap-2",
          "text-lg md:text-xl",
        )}
      >
        <HiOutlineCode />
        <h2 className="font-bold">Stacks</h2>
      </div>

      <div className={clsx("flex w-full flex-wrap justify-center gap-6 px-8")}>
        {Object.entries(STACKS).map(([name, icon], index) => (
          <StackCard key={index} name={name} icon={icon} />
        ))}
      </div>
    </motion.section>
  );
}
