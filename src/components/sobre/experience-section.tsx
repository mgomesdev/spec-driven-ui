import type { Experience } from '@/types/sobre';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => (
  <section className="py-16 px-4 md:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Experiência Profissional</h2>
      <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-6 space-y-8">
        {experience.map((exp) => (
          <div key={exp.id} className="relative pl-6 md:pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/30" />
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
              <h3 className="text-lg md:text-xl font-semibold text-white">{exp.role}</h3>
              <span className="text-indigo-400 text-sm">{exp.period}</span>
            </div>
            <p className="text-gray-400 mb-2">{exp.company}</p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
