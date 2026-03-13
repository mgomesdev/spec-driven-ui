import type { SkillCategory } from '@/types/sobre';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <section className="py-16 px-4 md:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category) => (
          <div key={category.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
