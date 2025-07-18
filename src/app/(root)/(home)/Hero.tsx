"use client";
import BreakLine from "@/components/elements/BreakLine";
import Ping from "@/components/elements/Ping";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:items-start">
        <img
          src="/1000081371.jpg"
          alt="Yoga Viveka Profile"
          className="mb-4 h-56 w-56 rounded-full border-4 border-red-400 object-cover shadow-lg md:mb-0"
        />
        <div className="flex flex-1 flex-col items-center md:items-start">
          <h1
            className={clsx(
              "primary",
              "mb-4",
              "text-xl font-bold",
              "min-[347px]:text-2xl md:text-3xl",
            )}
          >
            Call me <span className="gradient__text">YogaViveka</span>
            <div className="ml-1 inline-block animate-waving-hand"></div>
          </h1>

          <ul className="secondary mb-4 list-disc space-y-1 pl-4 text-sm md:text-lg">
            <li>Full-Stack Web Developer</li>
            <li>
              I build <span className="gradient__text">website</span>
            </li>
          </ul>

          <p className="secondary mb-4 text-sm leading-relaxed md:text-lg">
            Working within the React ecosystem, transform ideas into digital
            realities that are easily accessible and inclusive for web users.
          </p>

          <div className="mb-4 flex items-center gap-2">
            <Ping />
            <p className="primary text-sm md:text-lg">Available for hire</p>
          </div>

          <Link
            href="/contact"
            aria-label="Contact Me"
            className={clsx(
              "primary border__gradient",
              "flex items-center gap-3",
              "w-fit rounded-md p-3",
              "text-sm font-bold md:text-lg",
              "lg:mb-[39px]",
            )}
          >
            <SiGmail />
            Contact Me
          </Link>
          <BreakLine />
        </div>
      </div>
    </motion.section>
  );
}
