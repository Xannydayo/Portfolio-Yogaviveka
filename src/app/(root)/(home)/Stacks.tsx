"use client";
import StackCard from "@/components/cards/StackCard";
import MarqueeElement from "@/components/elements/Marquee";
import { STACKS } from "@/constants/stacks";
import clsx from "clsx";
import { motion } from "framer-motion";
import { HiOutlineCode } from "react-icons/hi";

export default function Stacks() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS,
  ).sort(() => Math.random() - 0.5);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
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
