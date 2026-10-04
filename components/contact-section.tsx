import { profile } from '@/lib/content';
import { ContactForm } from './contact-form';
import './contact-section.css';

const channels = [
  { label: 'Location', text: profile.location, path: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' },
  { label: 'Email', text: profile.email, href: `mailto:${profile.email}`, path: 'M3 5h18v14H3Zm0 0 9 8 9-8' },
  { label: 'GitHub', text: 'robisb15', href: profile.github, path: 'm8 5-6 7 6 7m8-14 6 7-6 7m-3-16-2 18' },
  { label: 'LinkedIn', text: 'Robi Aulia Kurniawan', href: profile.linkedin, path: 'M4 9v12M4 3v1m6 17V9m0 5a5 5 0 0 1 10 0v7' },
];

export function ContactSection() {
  return <section id="contact" className="screen contact-section contact-refresh" aria-labelledby="contact-title"><div className="section-inner contact-grid">
    <div className="contact-copy"><p className="eyebrow">Let’s collaborate</p><h2 id="contact-title">Work <em>with me.</em></h2><p className="section-description">Punya ide atau butuh bantuan untuk project Anda? Ceritakan kebutuhan web, mobile, atau sistem yang ingin dibangun.</p>
      <dl className="contact-channels">{channels.map(channel => <div key={channel.label}><span className="contact-channel-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={channel.path}/></svg></span><div><dt>{channel.label}</dt><dd>{channel.href ? <a href={channel.href} target={channel.href.startsWith('https') ? '_blank' : undefined} rel={channel.href.startsWith('https') ? 'noreferrer' : undefined}>{channel.text}{channel.href.startsWith('https') && <span className="sr-only"> (tab baru)</span>}</a> : channel.text}</dd></div></div>)}</dl>
    </div><ContactForm/>
  </div></section>;
}

export function CollaborationFooter({ projectPage = false }: { projectPage?: boolean }) {
  return <footer className="collaboration-footer"><div className="footer-circle" aria-hidden="true"/><div className="collaboration-footer-top">
    <div className="footer-contact"><p className="footer-label">Contact</p><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub / robisb15<span className="sr-only"> (tab baru)</span></a></div>
    <div className="footer-invitation"><h2>Punya project? Mari berkolaborasi.</h2><a className="button dark" href={projectPage ? '/#contact' : '#contact'}>Diskusikan project Anda <span aria-hidden="true">↗</span></a></div>
    <div className="footer-location"><p className="footer-label">Based in</p><p>Jambi, Indonesia</p><a href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗<span className="sr-only"> (tab baru)</span></a></div>
  </div><div className="footer-meta"><p>© {new Date().getFullYear()} Robi Aulia Kurniawan</p><a href={projectPage ? '#main' : '#hero'}>Kembali ke atas ↑</a></div><p className="footer-statement" aria-label="Let’s work together">LET’S WORK TOGETHER</p></footer>;
}
