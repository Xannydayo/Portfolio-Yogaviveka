import {
  SiLaravel,
  SiVite,
  SiTailwindcss,
  SiMysql,
  SiAlpinedotjs,
  SiLivewire,
  SiVuedotjs,
} from "react-icons/si";

const ICON_SIZE: number = 24;

const TECH_STACK_SAYURID = [
  { label: "Laravel", icon: <SiLaravel size={ICON_SIZE} color="#FF2D20" /> },
  { label: "Vite", icon: <SiVite size={ICON_SIZE} color="#646CFF" /> },
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  },
  { label: "Vue.js", icon: <SiVuedotjs size={ICON_SIZE} color="#42B883" /> },
  { label: "MySQL", icon: <SiMysql size={ICON_SIZE} color="#00758F" /> },
];

const TECH_STACK_ANIMEHUB = [
  { label: "Laravel", icon: <SiLaravel size={ICON_SIZE} color="#FF2D20" /> },
  { label: "MySQL", icon: <SiMysql size={ICON_SIZE} color="#00758F" /> },
];

const TECH_STACK_TALLCASH = [
  {
    label: "Tailwind CSS",
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
  },
  {
    label: "Alpine.js",
    icon: <SiAlpinedotjs size={ICON_SIZE} color="#8BC0D0" />,
  },
  { label: "Laravel", icon: <SiLaravel size={ICON_SIZE} color="#FF2D20" /> },
  { label: "Livewire", icon: <SiLivewire size={ICON_SIZE} color="#4E1AFA" /> },
  { label: "MySQL", icon: <SiMysql size={ICON_SIZE} color="#00758F" /> },
];

const TECH_STACK_TOKOONLINE = [
  { label: "Laravel", icon: <SiLaravel size={ICON_SIZE} color="#FF2D20" /> },
  { label: "MySQL", icon: <SiMysql size={ICON_SIZE} color="#00758F" /> },
];

export const PROJECTCARD_CONTENTS = [
  {
    url: "https://github.com/Xannydayo/Animehub.github.io",
    techStack: TECH_STACK_ANIMEHUB,
    name: "AnimeHub",
    description: "Platform streaming anime dengan Laravel dan MySQL.",
    image: "/animehub.png",
    imageAlt: "AnimeHub",
  },
  {
    url: "https://github.com/Xannydayo/tallstash",
    techStack: TECH_STACK_TALLCASH,
    name: "TallCash",
    description:
      "Aplikasi keuangan dengan Tailwind, Alpine.js, Laravel, Livewire, dan MySQL.",
    image: "/tallcash.png",
    imageAlt: "TallCash",
  },
  {
    url: "https://github.com/Xannydayo/Toko-online",
    techStack: TECH_STACK_TOKOONLINE,
    name: "TokoOnline",
    description: "Sistem toko online berbasis MySQL.",
    image: "/tokoonline.png",
    imageAlt: "TokoOnline",
  },
  {
    url: "https://github.com/Xannydayo/Sayur-id_laravel",
    techStack: TECH_STACK_SAYURID,
    name: "Sayurid",
    description:
      "Aplikasi Sayurid dengan Laravel, Vite, Tailwind, Vue, dan MySQL.",
    image: "/sayurid.png",
    imageAlt: "Sayurid",
  }, 
];
