import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/lib/content';
import { Navigation } from '@/components/navigation';
import { ProjectLightbox } from '@/components/project-lightbox';
import { CollaborationFooter } from '@/components/contact-section';
import './project-detail.css';
import './project-compact.css';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) return { title: 'Project tidak ditemukan' };
  return { title: `${project.name} | Robi Aulia Kurniawan`, description: project.description, openGraph: { title: project.name, description: project.description } };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex(project => project.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const screenshots = project.screenshots?.length ? project.screenshots : [{ src: `/projects/${project.image}.png`, caption: `Tampilan website ${project.name}` }];
  return <><Navigation projectPage/><main id="main" className="compact-case">
    <div className="compact-project">
      <section className="compact-copy" aria-labelledby="project-title">
        <Link className="compact-back" href="/#projects">← Back to Projects</Link>
        <p className="eyebrow">{project.category}</p>
        <h1 id="project-title">{project.name}<span>.</span></h1>
        <p className="compact-description">{project.description}</p>
        <ul className="compact-features" aria-label="Fitur utama">{project.features.map(feature => <li key={feature.title}>{feature.title}</li>)}</ul>
        {!!project.technologies?.length && <ul className="compact-stack" aria-label="Teknologi">{project.technologies.flatMap(group => group.names).map(name => <li key={name}>{name}</li>)}</ul>}
        <div className="compact-actions"><a className="button primary" href={project.url} target="_blank" rel="noreferrer">Live Demo <span aria-hidden="true">↗</span><span className="sr-only">(tab baru)</span></a>{project.repositoryUrl && <a className="button secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer">Repository</a>}</div>
      </section>
      <section className={`compact-media ${project.color}`} aria-label="Screenshot project"><ProjectLightbox images={screenshots}/></section>
    </div>
    <nav className="compact-navigation" aria-label="Project lainnya"><Link href={`/projects/${previous.slug}`}><span>← Previous project</span><strong>{previous.name}</strong></Link><p>{String(index + 1).padStart(2, '0')} <span>/ {String(projects.length).padStart(2, '0')}</span></p><Link href={`/projects/${next.slug}`}><span>Next project →</span><strong>{next.name}</strong></Link></nav>
  </main><CollaborationFooter projectPage/></>;
}
