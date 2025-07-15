import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import Header from "./Header";
import Hero from "./Hero";
import Stacks from "./Stacks";

export const metadata: Metadata = {
  title: "Yoga Viveka - Portofolio dan Blog",
  description:
    "Yoga Viveka, seorang web developer yang berdedikasi pada pengembangan website modern & berkualitas. Pelajari lebih lanjut tentang proyek, keterampilan, dan pemikiran saya di sini.",
  alternates: {
    canonical: "https://yusufs.me/",
  },
  keywords: [
    "Yoga Viveka",
    "Siapa Yoga Viveka",
    "web developer Indonesia",
    "portofolio Yoga Viveka",
    "tentang Yoga Viveka",
  ],
  openGraph: {
    title: "Yoga Viveka - Web Developer",
    description:
      "Selamat datang di situs pribadi Yoga Viveka. Temukan proyek, blog, dan pemikiran saya seputar pengembangan website.",
    url: "https://yusufs.me/",
    siteName: "Yoga Viveka",
    images: [
      {
        url: "https://res.cloudinary.com/djsdnb4td/image/upload/v1726242676/Ryo_Yamada_1_vflkls.jpg",
        width: 800,
        height: 600,
        alt: "Yoga Viveka",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Viveka",
    description:
      "Situs pribadi Yoga Viveka. Proyek, keterampilan, dan blog pengembangan web.",
    images: [
      "https://res.cloudinary.com/djsdnb4td/image/upload/v1726242676/Ryo_Yamada_1_vflkls.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="px-8 pb-5 pt-8">
        <PageTitle title="Home" description="introduction to myself" />
        <Header />
        <Hero />
        <Stacks />
      </div>
    </>
  );
}
