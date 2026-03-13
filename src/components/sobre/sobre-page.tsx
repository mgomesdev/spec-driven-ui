import { ABOUT } from '@/data/sobre';
import { BioSection } from './bio-section';
import { ExperienceSection } from './experience-section';
import { SkillsSection } from './skills-section';
import { ContactSection } from './contact-section';

export const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <BioSection profile={ABOUT.profile} bio={ABOUT.bio} />
    <ExperienceSection experience={ABOUT.experience} />
    <SkillsSection skills={ABOUT.skills} />
    <ContactSection contact={ABOUT.contact} />
  </div>
);

export default AboutPage;
