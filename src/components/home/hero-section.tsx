import type { Profile } from '@/types/home';

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {profile.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6">{profile.role}</p>
        
        <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          {profile.bio}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full transition-all duration-200 hover:scale-105"
            aria-label="Ver projetos em destaque"
          >
            Ver projetos
          </a>
          
          {profile.ctaLinkedIn && (
            <a
              href={profile.ctaLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all duration-200 border border-white/20"
              aria-label="Falar comigo no LinkedIn"
            >
              Falar comigo
            </a>
          )}
          
          {profile.ctaEmail && !profile.ctaLinkedIn && (
            <a
              href={`mailto:${profile.ctaEmail}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all duration-200 border border-white/20"
              aria-label="Enviar email"
            >
              Falar comigo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
