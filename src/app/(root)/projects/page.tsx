import ProjectCard from "@/components/cards/ProjectCard";
import PageTitle from "@/components/elements/PageTitle";
import { PROJECTCARD_CONTENTS } from "@/constants/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Yoga Viveka",
  description:
    "Discover my portfolio of frontend development projects, a curated collection showcasing my skills and creativity in web design and development. Immerse yourself in a diverse range of web solutions and innovative designs.",
  alternates: {
    canonical: "#",
  },
};

export default function Projects() {
  return (
    <div className="p-8">
      <PageTitle
        title="Projects"
        description="Showcase of my works on Web development."
      />

      <section className="lg:mb-20">
        <ul className="grid gap-8 sm:grid-cols-2">
          {PROJECTCARD_CONTENTS.map((content, index) => (
            <ProjectCard
              key={index}
              url={content.url}
              title={content.name}
              description={content.description}
              techStack={content.techStack}
              image={content.image}
              imageAlt={content.imageAlt}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
