import type { Skill } from '../../generated/types';
import { Section } from '../ui/section';

export interface ExpertiseProps {
  skills: Skill[];
}

export function Expertise({ skills }: ExpertiseProps) {
  const categories = Object.keys(categoryTitles) as Array<keyof typeof categoryTitles>;
  
  return (
    <Section id="expertise" className={sectionStyles}>
      <div className={headerStyles}>
        <h2 className={titleStyles}>Tecnologias & Expertise</h2>
        <p className={subtitleStyles}>Ferramentas e linguagens que utilizo para construir soluções escaláveis</p>
      </div>
      
      <div className={gridStyles}>
        {categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category);
          
          if (categorySkills.length === 0) return null;
          
          return (
            <div key={category} className={categoryCardStyles}>
              <h3 className={categoryTitleStyles}>{categoryTitles[category]}</h3>
              <ul className={skillListStyles}>
                {categorySkills.map((skill) => (
                  <li key={skill.name} className={skillItemStyles}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const categoryTitles = {
  languages: 'Linguagens',
  frameworks: 'Frameworks & Libs',
  tools: 'Ferramentas'
};

const sectionStyles = 'bg-slate-50 dark:bg-slate-900/50';
const headerStyles = 'mb-12 md:mb-16 text-center mx-auto max-w-2xl';
const titleStyles = 'text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white';
const subtitleStyles = 'text-lg text-slate-600 dark:text-slate-400';
const gridStyles = 'grid grid-cols-1 md:grid-cols-3 gap-8';
const categoryCardStyles = 'bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-1 hover:shadow-md';
const categoryTitleStyles = 'text-xl font-semibold mb-6 text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800';
const skillListStyles = 'flex flex-wrap gap-3';
const skillItemStyles = 'px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium transition-colors hover:bg-slate-200 dark:hover:bg-slate-700';
