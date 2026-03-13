interface BioSectionProps {
  profile: {
    name: string;
    role: string;
    avatar?: string;
  };
  bio: string[];
}

export const BioSection = ({ profile, bio }: BioSectionProps) => (
  <section className="py-16 px-4 md:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {profile.avatar ? (
          <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover rounded-full border-4 border-white/10" />
          </div>
        ) : (
          <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-4xl md:text-6xl font-bold text-white">
            {profile.name.charAt(0)}
          </div>
        )}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">{profile.name}</h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6">{profile.role}</p>
          <div className="space-y-4">
            {bio.map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
