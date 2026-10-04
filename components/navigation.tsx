'use client';

import { useEffect, useState } from 'react';

const links = [ ['hero', 'Home'], ['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills'], ['contact', 'Contact'] ];

export function Navigation({ projectPage = false }: { projectPage?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(projectPage ? 'projects' : 'hero');
  useEffect(() => {
    if (projectPage) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-35% 0px -45% 0px' });
    document.querySelectorAll('main > section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [projectPage]);
  return <>
    <a className="skip-link" href="#main">Lewati navigasi</a>
    <header className="site-header">
      <a className="wordmark" href={projectPage ? '/#hero' : '#hero'} onClick={() => setOpen(false)} aria-label="Robi Aulia, beranda">robi<span>.</span></a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Tutup' : 'Menu'} <span aria-hidden="true">{open ? '×' : '+'}</span></button>
      <nav id="main-nav" aria-label="Navigasi utama" className={open ? 'navigation is-open' : 'navigation'} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } }}>
        {links.map(([id, label]) => <a href={`${projectPage ? '/' : ''}#${id}`} key={id} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-contact" href={projectPage ? '/#contact' : '#contact'}>Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
  </>;
}
