import { Skill } from '@/types/content';

interface SkillItemProps {
  skill: Skill;
}

export const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-white p-3 transition-all hover:border-neutral-200 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700">
      {skill.icon && (
        <span className="text-xl" aria-hidden="true">
          {skill.icon}
        </span>
      )}
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );
};
