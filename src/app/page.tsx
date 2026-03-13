import { Header } from '@/components/page-home/header';
import { HeroSection } from '@/components/page-home/hero-section';
import { Footer } from '@/components/page-home/footer';
import { profileData } from '@/data/profile';

export const metadata = {
  title: 'MatheusGomesDev - Programador Frontend',
  description: 'Desenvolvedor frontend com experiência em React, Next.js e TypeScript. Criando experiências digitais que combinam performance, acessibilidade e design.',
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#101828]">
      <Header />
      <HeroSection profile={profileData} />
      <Footer />
    </main>
  );
}
