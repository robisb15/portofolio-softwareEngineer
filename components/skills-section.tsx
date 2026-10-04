'use client';

import { useEffect, useRef } from 'react';
import { skillCategories, type SkillSymbol } from '@/lib/skill-categories';
import './skills-section.css';

function CategoryIcon({ kind }: { kind: SkillSymbol }) {
  const paths: Record<SkillSymbol, string> = {
    browser: 'M3 7h18M7 4v0M10 4v0M8 11l-3 3 3 3m8-6 3 3-3 3m-3-7-2 8M3 2h18v20H3Z',
    server: 'M3 3h18v7H3Zm0 11h18v7H3ZM6 6.5h.01M6 17.5h.01M11 6.5h7m-7 11h7',
    database: 'M3 5c0-4 18-4 18 0s-18 4-18 0Zm0 0v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0',
    phone: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm3 3h4m-3 14h2',
    cloud: 'M7 17H5a4 4 0 0 1-1-8 7 7 0 0 1 13-3 5.5 5.5 0 0 1 2 11h-2m-5 5V12m-4 4 4-4 4 4',
    tools: 'm14 6 4 4 4-4a7 7 0 0 1-9 9L6 22l-4-4 7-7a7 7 0 0 1 9-9Z',
    shield: 'M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6Zm-5 10 3 3 7-7',
    network: 'M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0m-4 4h.01',
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>;
}

export function SkillsSection() {
  const grid = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!grid.current || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.animate([{ opacity: .35, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 480, easing: 'cubic-bezier(.2,.7,.3,1)' });
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    grid.current.querySelectorAll('article').forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return <section id="skills" className="screen skills-section toolkit" aria-labelledby="skills-title">
    <div className="section-inner">
      <div className="section-heading toolkit-heading"><div><p className="eyebrow">My toolkit</p><h2 id="skills-title">Skills &amp; <em>tools.</em></h2></div><p className="section-description">Dari interface hingga infrastructure.<br/>Teknologi yang saya gunakan untuk membangun dan menjalankan aplikasi.</p></div>
      <div className="toolkit-grid" ref={grid}>
        {skillCategories.map(category => <article className="toolkit-card" key={category.title} aria-labelledby={`skill-${category.icon}`}>
          <header className="toolkit-card-heading"><span className="toolkit-category-icon"><CategoryIcon kind={category.icon} /></span><div><h3 id={`skill-${category.icon}`}>{category.title}</h3><p>{category.skills.length} teknologi</p></div></header>
          <ul className="toolkit-technologies">{category.skills.map(skill => <li className="toolkit-chip" key={skill.name}>
            <span className="toolkit-logo">{skill.logo ? <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={skill.logo.path}/></svg> : <CategoryIcon kind={skill.symbol || category.icon}/>}</span><span>{skill.name}</span>
          </li>)}</ul>
          {category.icon === 'phone' && <p className="toolkit-mobile-note">Pengembangan aplikasi mobile<br/>dengan Flutter &amp; Dart.</p>}
        </article>)}
      </div>
      <p className="toolkit-footnote"><strong>Beyond the code</strong><span>Problem solving, analytical thinking, komunikasi, kolaborasi tim, dan troubleshooting jaringan.</span></p>
    </div>
  </section>;
}
