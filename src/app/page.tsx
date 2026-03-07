import { Hero } from "@/components/organisms/Hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Construa o Futuro da Web com Antigravity"
        subtitle="Interfaces modernas, escaláveis e deslumbrantes criadas com inteligência e precisão."
        logoSrc="/logo.png"
        imageSrc="/hero-illustration.png"
        ctaText="Começar Projeto"
      />
    </main>
  );
}
