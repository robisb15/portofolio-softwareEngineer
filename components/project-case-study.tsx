import Image from 'next/image';
import Link from 'next/link';
import { siReact, siNextdotjs, siTailwindcss, siFramer } from 'simple-icons';
import type { PortfolioProject } from '@/lib/content';
import { TechIcon } from './tech-icon';
import { ProjectLightbox } from './project-lightbox';

type Props = { project: PortfolioProject };
const technologyIcons = { React: siReact, 'Next.js': siNextdotjs, 'Tailwind CSS': siTailwindcss, 'Framer Motion': siFramer };

export function ProjectHero({ project }: Props) {
  return <section className="case-hero case-wrap">
    <nav className="case-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#projects">Projects</Link><span aria-hidden="true">/</span><span aria-current="page">{project.name}</span></nav>
    <div className="case-hero-grid"><div className="case-hero-copy"><p className="eyebrow">{project.category}</p><h1>{project.name}<span>.</span></h1><p className="case-lead">{project.description}</p>
      <div className="case-hero-meta"><span>{project.projectType}</span>{project.year && <span>{project.year}</span>}{project.status && <span>{project.status}</span>}{project.role && <span>{project.role}</span>}</div>
      {project.technologies && <div className="case-hero-tags">{project.technologies.flatMap(group => group.names).map(name => <span key={name}>{name}</span>)}</div>}
      <div className="case-actions">{project.url && <a className="button primary" href={project.url} target="_blank" rel="noreferrer">Live Demo <span aria-hidden="true">↗</span><span className="sr-only">(tab baru)</span></a>}{project.repositoryUrl && <a className="button secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer">Repository <span className="sr-only">(tab baru)</span></a>}</div>
      <Link className="case-back" href="/#projects">← Back to Projects</Link>
    </div><div className={`case-cover ${project.color}`}><div className="case-browser" aria-hidden="true"><i/><i/><i/><span>{new URL(project.url).hostname}</span></div><Image priority src={`/projects/${project.image}.png`} alt={`Halaman utama ${project.name}`} width={1440} height={1000} sizes="(max-width: 850px) 88vw, 55vw"/><p>{project.name} <span>{project.platform.join(' / ')}</span></p></div></div>
  </section>;
}

export function ProjectOverview({ project }: Props) {
  const items = [['Project type', project.projectType], ['Platform', project.platform.join(' & ')], ['Role', project.role], ['Timeline', project.timeline || project.year], ['Status', project.status]].filter(([, value]) => value);
  return <section className="case-overview case-wrap" aria-label="Project overview"><dl>{items.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>;
}

export function ProjectContext({ project }: Props) {
  return <section className="case-section case-wrap" aria-labelledby="case-about"><div className="case-split"><div><p className="eyebrow">The context</p><h2 id="case-about">About the <em>project.</em></h2></div><div className="case-reading"><p className="case-intro">{project.objective}</p><p>{project.description}</p><h3>Untuk siapa?</h3><p>{project.audience}</p></div></div>
    <div className="case-problem-grid"><article><span className="case-symbol" aria-hidden="true">?</span><p className="eyebrow">Problem</p><h3>Kebutuhan yang dijawab</h3><p>{project.problem}</p></article><article className="case-solution"><span className="case-symbol" aria-hidden="true">✓</span><p className="eyebrow">Solution</p><h3>Pendekatan aplikasi</h3><p>{project.solution}</p></article></div>
  </section>;
}

export function ProjectFeatures({ project }: Props) {
  const paths = ['M4 3h16v18H4Zm4 5h8m-8 4h8m-8 4h5', 'M3 3h7v7H3Zm11 0h7v7h-7ZM3 14h7v7H3Zm11 0h7v7h-7Z', 'M4 4h16v16H4Zm3 9 3 3 7-8', 'M3 12h18M12 3v18M5 5l14 14M5 19 19 5'];
  return <section className="case-band"><div className="case-wrap case-section"><p className="eyebrow">What it does</p><h2>Key <em>features.</em></h2><div className="case-features">{project.features.map((feature, index) => <article key={feature.title}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[index % paths.length]}/></svg><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div></div></section>;
}

export function ProjectTechStack({ project }: Props) {
  if (!project.technologies?.length) return null;
  return <section className="case-section case-wrap case-split" aria-labelledby="case-stack"><div><p className="eyebrow">Built with</p><h2 id="case-stack">Technology <em>stack.</em></h2></div><div className="case-stack">{project.technologies.map(group => <div key={group.category}><h3>{group.category}</h3><ul>{group.names.map(name => { const icon = technologyIcons[name as keyof typeof technologyIcons]; return <li key={name}>{icon ? <TechIcon icon={icon} label={name}/> : <span>{name}</span>}</li>; })}</ul></div>)}</div></section>;
}

export function ProjectScreenshots({ project }: Props) {
  const images = project.screenshots?.length ? project.screenshots : [{ src: `/projects/${project.image}.png`, caption: `Tampilan website ${project.name}` }];
  return <section className="case-section case-wrap" aria-labelledby="case-screens"><div className="case-section-heading"><div><p className="eyebrow">A closer look</p><h2 id="case-screens">Project <em>screenshots.</em></h2></div><p>Klik gambar untuk melihat detail.</p></div><ProjectLightbox images={images}/></section>;
}

export function ProjectEngineering({ project }: Props) {
  return <>
    {!!project.process?.length && <section className="case-section case-wrap"><p className="eyebrow">From idea to delivery</p><h2>Development <em>process.</em></h2><ol className="case-process">{project.process.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol></section>}
    {!!project.challenges?.length && <section className="case-section case-wrap"><h2>Challenges &amp; <em>solutions.</em></h2><div className="case-challenges">{project.challenges.map(item => <details key={item.challenge}><summary>{item.challenge}</summary><p>{item.solution}</p></details>)}</div></section>}
    {!!project.architecture?.length && <section className="case-section case-wrap"><h2>Project <em>architecture.</em></h2><ol className="case-process">{project.architecture.map(item => <li key={item.title}><h3>{item.title}</h3><p>{item.description}</p></li>)}</ol></section>}
    {!!project.contributions?.length && <section className="case-section case-wrap case-split"><div><p className="eyebrow">My role</p><h2>My <em>contribution.</em></h2></div><ul className="case-contributions">{project.contributions.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></section>}
  </>;
}

export function ProjectNavigation({ previous, next }: { previous: PortfolioProject; next: PortfolioProject }) {
  return <section className="case-band"><div className="case-section case-wrap"><p className="eyebrow">Keep exploring</p><h2>More <em>projects.</em></h2><nav className="case-related" aria-label="Project lainnya">{[{ project: previous, label: 'Previous project', arrow: '←' }, { project: next, label: 'Next project', arrow: '→' }].map(({ project, label, arrow }) => <Link href={`/projects/${project.slug}`} key={label}><div><p>{label}</p><h3>{project.name}</h3><span>{project.category}</span></div><span className="case-related-arrow" aria-hidden="true">{arrow}</span><Image src={`/projects/${project.image}.png`} alt="" width={400} height={250} sizes="(max-width: 600px) 80vw, 40vw"/></Link>)}</nav></div></section>;
}
