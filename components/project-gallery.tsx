'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { projects } from '@/lib/content';

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  const screenshots = project.screenshots?.length
    ? project.screenshots
    : [{ src: `/projects/${project.image}.png`, caption: `Tampilan website ${project.name}` }];
  const [photoIndex, setPhotoIndex] = useState(0);
  const hasMultiple = screenshots.length > 1;

  return (
    <div className={`project-visual ${project.color}`}>
      <div className="project-browser" aria-hidden="true"><i/><i/><i/></div>
      <Image
        src={screenshots[photoIndex].src}
        alt={screenshots[photoIndex].caption}
        width={900}
        height={700}
        sizes="(max-width: 767px) 80vw, 430px"
        className="project-image"
      />
      <span className="project-category">{project.category}</span>
      {hasMultiple && (
        <div className="card-photo-controls" onClick={e => { e.preventDefault(); e.stopPropagation(); }}>
          <button
            type="button"
            className="card-photo-btn"
            disabled={photoIndex === 0}
            onClick={() => setPhotoIndex(prev => Math.max(0, prev - 1))}
            aria-label={`Foto sebelumnya untuk ${project.name}`}
          >
            ←
          </button>
          <span className="card-photo-counter">{photoIndex + 1}/{screenshots.length}</span>
          <button
            type="button"
            className="card-photo-btn"
            disabled={photoIndex === screenshots.length - 1}
            onClick={() => setPhotoIndex(prev => Math.min(screenshots.length - 1, prev + 1))}
            aria-label={`Foto berikutnya untuk ${project.name}`}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

export function ProjectGallery() {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const drag = useRef({ x: 0, scroll: 0, active: false, moved: false });
  function finishDrag() {
    const el = track.current;
    if (!el || !drag.current.active) return;
    drag.current.active = false;
    el.classList.remove('is-dragging');
    const cards = el.querySelectorAll<HTMLElement>('.project-card');
    const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 1;
    el.scrollTo({ left: Math.round(el.scrollLeft / step) * step, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const cards = el.querySelectorAll<HTMLElement>('.project-card');
      const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 1;
      const end = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
      setAtEnd(end); setCurrent(end ? projects.length - 1 : Math.round(el.scrollLeft / step));
    };
    el.addEventListener('scroll', update, { passive: true });
    const resize = new ResizeObserver(update); resize.observe(el); update();
    return () => { el.removeEventListener('scroll', update); resize.disconnect(); };
  }, []);
  function move(direction: number) {
    const el = track.current; if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>('.project-card');
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    el.scrollBy({ left: direction * step, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  return <>
    <div className="section-heading project-heading"><div><p className="eyebrow">Selected work</p><h2 id="projects-title">Projects that <em>do the work.</em></h2></div><div className="gallery-controls"><button onClick={() => move(-1)} disabled={current === 0} aria-label="Proyek sebelumnya" aria-controls="project-track">← <span>Prev</span></button><button onClick={() => move(1)} disabled={atEnd} aria-label="Proyek berikutnya" aria-controls="project-track"><span>Next</span> →</button></div></div>
    <div ref={track} id="project-track" className="project-track" role="region" aria-roledescription="carousel" aria-label="Galeri proyek" tabIndex={0}
      onDragStart={event => event.preventDefault()}
      onPointerDown={event => { if (event.pointerType !== 'mouse' || event.button !== 0) return; drag.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft, active: true, moved: false }; }}
      onPointerMove={event => { if (!drag.current.active) return; const delta = event.clientX - drag.current.x; if (Math.abs(delta) > 6) { drag.current.moved = true; event.currentTarget.setPointerCapture(event.pointerId); event.currentTarget.classList.add('is-dragging'); } if (drag.current.moved) event.currentTarget.scrollLeft = drag.current.scroll - delta; }}
      onPointerUp={finishDrag} onPointerCancel={finishDrag} onLostPointerCapture={finishDrag}
      onPointerLeave={() => { if (!drag.current.moved) drag.current.active = false; }}
      onClickCapture={event => { if (drag.current.moved) { event.preventDefault(); event.stopPropagation(); drag.current.moved = false; } }}
      onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } }}>
      {projects.map((project, index) => <article className="project-card" key={project.name} aria-label={`${project.name}, ${index + 1} dari ${projects.length}`}>
        <div className="project-copy"><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{project.name}</h3><p>{project.description}</p><Link className="project-link" href={`/projects/${project.slug}`}>Lihat project <span aria-hidden="true">↗</span><span className="sr-only"> {project.name}</span></Link></div>
        <ProjectVisual project={project} />
      </article>)}
    </div>
    <p className="gallery-status" aria-live="polite" aria-atomic="true">{String(current + 1).padStart(2, '0')} <span>/ {String(projects.length).padStart(2, '0')}</span><span className="gallery-hint">Geser untuk melihat project lainnya</span></p>
  </>;
}
