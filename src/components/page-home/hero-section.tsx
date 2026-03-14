import type { ProfileData } from '@/types/home';

interface HeroSectionProps {
  profile: ProfileData;
}

export const HeroSection = ({ profile }: HeroSectionProps) => (
  <section className="min-h-[80vh] flex items-center justify-center px-4 md:px-8 py-20">
    <div className="max-w-[700px] mx-auto text-center">
      <div className="mb-6">
        <div className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold text-white">
          {profile.name.charAt(0)}
        </div>
      </div>

      <p className="text-sm md:text-base text-indigo-400 font-mono mb-4">
        {profile.identifier}
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        {profile.role}
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-6">
        {profile.subtitle}
      </p>

      <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto">
        {profile.description}
      </p>

      <div className="mb-6">
        <a
          href={profile.ctaSecondaryUrl}
          className="text-indigo-400 hover:text-indigo-300 transition-colors text-lg"
        >
          {profile.ctaPrimary}
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={profile.cvUrl}
          className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 border border-white/20 w-full sm:w-auto"
          aria-label="Download CV"
        >
          Download CV
        </a>

        <a
          href={profile.ctaSecondaryUrl}
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-300 hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-all duration-200 w-full sm:w-auto"
          aria-label="Entre em Contato"
        >
          {profile.ctaSecondary}
        </a>
      </div>
    </div>
  </section>
);
