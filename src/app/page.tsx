import { HeroSection } from '@/components/home/hero-section';
import { ProjectsSection } from '@/components/home/projects-section';
import { PROFILE } from '@/data/profile';
import { PROJECTS } from '@/data/projects';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900">
      <HeroSection profile={PROFILE} />
      <ProjectsSection projects={PROJECTS} />
    </main>
  );
}
