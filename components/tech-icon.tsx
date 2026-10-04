import type { SimpleIcon } from 'simple-icons';

export function TechIcon({ icon, label }: { icon: SimpleIcon; label?: string }) {
  return <span className="tech-item"><span className="tech-symbol" style={{ color: `#${icon.hex}` }}><svg role="img" aria-label={label || icon.title} viewBox="0 0 24 24" fill="currentColor"><path d={icon.path} /></svg></span><span>{label || icon.title}</span></span>;
}
