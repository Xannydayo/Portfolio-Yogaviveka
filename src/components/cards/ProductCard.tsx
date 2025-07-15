import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  image?: string;
  publishedAt: string;
  summary: string;
  slug: string;
  tags?: string[];
}

export default function ProductCard({
  title,
  image,
  publishedAt,
  summary,
  slug,
  tags,
}: ProductCardProps) {
  return (
    <motion.li
      style={{ listStyle: "none" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className={clsx(
        "border border-red-200 bg-white/70 backdrop-blur-lg",
        "rounded-3xl p-6 shadow-2xl transition-transform duration-200 hover:scale-105 hover:shadow-red-200",
        "w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2",
      )}
    >
      <Link href={`/products/${slug}`} legacyBehavior>
        <a className={clsx("group flex h-full flex-col", "overflow-hidden")}>
          {image && (
            <Image
              src={image}
              alt={title}
              width={1200}
              height={600}
              className="mb-4 w-full rounded-2xl border-2 border-red-100 object-cover"
            />
          )}
          <div className="flex-grow">
            <div className="mb-2 flex flex-wrap gap-2">
              {tags?.map((tag: any) => (
                <span
                  key={tag}
                  className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mb-1 text-xl font-extrabold text-red-700 group-hover:underline">
              {title}
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              {format(new Date(publishedAt), "MMMM dd, yyyy")}
            </p>
            <p className="mt-2 flex-grow text-base text-gray-700">{summary}</p>
          </div>
        </a>
      </Link>
    </motion.li>
  );
}
