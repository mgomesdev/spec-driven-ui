import { Hero } from "@/components/organisms/hero/hero";
import { ProjectsSection } from "@/components/organisms/projects-section/projects-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero
        title="Desenvolvedor Frontend Sênior & Especialista em Design Systems"
        subtitle="Construindo experiências digitais memoráveis com Next.js, TypeScript e alto desempenho."
        imageSrc="/hero.png"
        ctaText="Me Contrate"
      />
      <ProjectsSection />
    </main>
  );
}
