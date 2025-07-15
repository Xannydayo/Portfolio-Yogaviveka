"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import Ping from "../elements/Ping";
import Tooltip from "../elements/Tooltip";

export default function ProjectCard({
  url,
  title,
  description,
  techStack,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={clsx(
        "border border-red-200 bg-white/70 backdrop-blur-lg",
        "rounded-3xl p-6 shadow-2xl transition-transform duration-200 hover:scale-105 hover:shadow-red-200",
        "w-full",
      )}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title} live production demo`}
        className={clsx(
          "group flex h-full cursor-pointer flex-col overflow-hidden",
        )}
        legacyBehavior
      >
        <div>
          <Image
            className="mb-4 h-auto w-auto rounded-2xl border-2 border-red-100 object-cover"
            width={1920}
            height={1080}
            src={image}
            alt={imageAlt}
            loading="lazy"
            aria-label={`Live ${title} Production Screenshot`}
            layout="responsive"
            objectFit="cover"
          />
          <div className="flex-grow">
            <h2 className="mb-1 text-xl font-extrabold text-red-700 group-hover:underline">
              {title}
            </h2>
            <p className="mt-2 text-base text-gray-700">{description}</p>
          </div>
        </div>
      </Link>
    </motion.li>
  );
}

interface TechStackItem {
  label: string;
  icon: React.ReactElement;
}

interface ProjectCardProps {
  url: string;
  title: string;
  description: string;
  techStack: Array<TechStackItem>;
  image: string | StaticImageData;
  imageAlt: string;
}
