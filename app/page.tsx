import { ReferenceHero, ReferenceAbout } from '@/components/reference-sections';
import { siNextdotjs, siReact, siLaravel, siNestjs, siFlutter, siDocker } from 'simple-icons';
import { Navigation } from '@/components/navigation';
import { ExperienceTabs } from '@/components/experience-tabs';
import { ProjectGallery } from '@/components/project-gallery';
import { ContactSection, CollaborationFooter } from '@/components/contact-section';
import { TechIcon } from '@/components/tech-icon';
import { SkillsSection } from '@/components/skills-section';
import { SectionMotion } from '@/components/section-motion';

export default function Home() {
  return <>
    <SectionMotion />
    <Navigation />
    <main id="main">
      <ReferenceHero />
      <ReferenceAbout />

      <section id="experience" className="screen experience-section" aria-labelledby="experience-title">
        <div className="section-inner experience-grid">
          <div><p className="eyebrow">The journey so far</p><h2 id="experience-title">Education &amp;<br /><em>experience.</em></h2><p className="section-description">Membangun sistem untuk layanan publik dan kebutuhan bisnis, melalui kerja tim dan pengembangan yang berkelanjutan.</p><div className="experience-tech">{[siNextdotjs, siLaravel, siNestjs, siFlutter, siReact, siDocker].map(icon => <TechIcon key={icon.slug} icon={icon} />)}</div></div>
          <ExperienceTabs />
        </div>
      </section>

      <section id="projects" className="screen projects-section" aria-labelledby="projects-title"><div className="projects-inner"><ProjectGallery /></div></section>

      <SkillsSection />

      <ContactSection />
    </main>
    <CollaborationFooter />
  </>;
}
