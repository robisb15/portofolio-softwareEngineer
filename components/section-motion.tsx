'use client';

import { useEffect } from 'react';
import './section-motion.css';

export function SectionMotion() {
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        if (!preference.matches) animations.push(entry.target.animate([{ opacity: .25, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 600, easing: 'cubic-bezier(.2,.7,.3,1)' }));
        observer.unobserve(entry.target);
      });
    }, { threshold: .15 });
    document.querySelectorAll('.ref-about-inner, .experience-grid, .project-heading, .contact-copy, .contact-form, .collaboration-footer-top').forEach(element => observer.observe(element));
    const stop = () => { if (preference.matches) animations.forEach(animation => animation.cancel()); };
    preference.addEventListener('change', stop);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); preference.removeEventListener('change', stop); };
  }, []);
  return null;
}
