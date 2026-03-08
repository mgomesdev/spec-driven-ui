
'use client';

import { useContent } from '@/hooks/use-content';
import { Header, Hero } from '@/components/organisms';

export default function Home() {
  const content = useContent();

  if (!content) return null;

  return (
    <main className="flex flex-col">
      <Header />
      <Hero data={content.hero} />
    </main>
  );
}
