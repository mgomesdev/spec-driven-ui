import { Hero } from '@/components/home/hero';
import { Expertise } from '@/components/home/expertise';
import { Projects } from '@/components/home/projects';
import { About } from '@/components/home/about';
import { skillsData, socialProofData } from '@/data/home-data';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero
        name="Matheus"
        title="Engenharia Frontend & Design de Sistemas"
        subtitle="Construindo experiências digitais premium que combinam performance técnica e design refinado para criar produtos de alto impacto."
        ctaText="Ver Projetos"
      />
      <Expertise skills={skillsData} />
      <Projects />
      <About
        biography={"Com experiência em engenharia frontend avançada, crio aplicações escaláveis utilizando Next.js, React e TypeScript.\n\nMeu foco é entregar soluções que unam código limpo, arquitetura robusta e interfaces premium pixel-perfect."}
        proofs={socialProofData}
      />
    </main>
  );
}
