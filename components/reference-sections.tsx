import { profile, projects } from '@/lib/content';
import './reference-sections.css';

function Portrait({ about = false }: { about?: boolean }) {
  return about ? <img className="ref-photo" src="/foto.png" alt="Robi Aulia Kurniawan" /> : <div className="ref-portrait"><img className="ref-portrait-image" src="/foto.png" alt="Robi Aulia Kurniawan" /></div>;
}

export function ReferenceHero() {
  return <section id="hero" className="screen ref-hero" aria-labelledby="hero-title">
    <div className="ref-hero-stage">
      <p className="ref-top-name">ROBI AULIA KURNIAWAN</p>
    <h1 id="hero-title" className="ref-headline"><span>SOFTWARE</span><span className="ref-outline">ENGINEER</span></h1>
    <div className="ref-glow" aria-hidden="true" />
    <svg className="ref-scribble" viewBox="0 0 250 160" aria-hidden="true"><defs><linearGradient id="ref-orange" x2="0" y2="1"><stop stopColor="#ff9646"/><stop offset=".5" stopColor="#eb5c14"/><stop offset="1" stopColor="#bf3406"/></linearGradient></defs><path d="M-10 80 C20 15 50 -5 60 72 S85 125 110 70 S147 30 155 87 S187 140 219 95" fill="none" stroke="url(#ref-orange)" strokeWidth="17" strokeLinecap="round"/></svg>
    <div className="ref-orb one" aria-hidden="true"/><div className="ref-orb two" aria-hidden="true"/>
    <Portrait />
    <div className="ref-services"><p>Web, Mobile &amp; API</p><span>Frontend, backend,<br/>hingga deployment.</span></div>
    <div className="ref-identity"><p className="ref-name">ROBI AULIA KURNIAWAN</p><p className="ref-role">Software Engineer</p></div>
    <div className="ref-portfolio"><svg className="ref-arrow" viewBox="0 0 55 65" aria-hidden="true"><path d="M26 3 L26 49 L9 32 L5 36 L28 60 L51 36 L47 32 L30 49 L30 3Z" fill="none" stroke="#777" strokeWidth="1.6"/></svg><a className="ref-button" href="#projects">PORTFOLIO</a></div>
    <svg className="ref-coil" viewBox="0 0 290 220" aria-hidden="true"><path d="M15 205 C108 183 182 126 161 80 C138 30 100 81 124 127 C156 185 232 134 216 73 C204 16 160 38 175 86 C191 143 268 154 275 97" fill="none" stroke="url(#ref-orange)" strokeWidth="25" strokeLinecap="round"/></svg>
    </div>
  </section>;
}

export function ReferenceAbout() {
  return <section id="about" className="screen ref-about" aria-labelledby="about-title">
    <svg className="ref-contours" aria-hidden="true"><defs><pattern id="ref-topography" width="400" height="360" patternUnits="userSpaceOnUse"><g fill="none" stroke="#e6e6e1" strokeWidth="1"><path d="M-50 30C90-50 105 95 220 50S370-20 440 85 M-50 43C85-37 110 109 220 64S375-7 440 99 M-50 56C80-24 115 123 220 78S380 6 440 113 M-50 69C75-11 120 137 220 92S385 19 440 127 M-50 82C70 2 125 151 220 106S390 32 440 141 M-50 95C65 15 130 165 220 120S395 45 440 155 M-50 108C60 28 135 179 220 134S400 58 440 169 M-50 121C55 41 140 193 220 148S405 71 440 183 M-50 134C50 54 145 207 220 162S410 84 440 197 M-50 147C45 67 150 221 220 176S415 97 440 211 M-50 160C40 80 155 235 220 190S420 110 440 225 M-50 173C35 93 160 249 220 204S425 123 440 239 M-50 186C30 106 165 263 220 218S430 136 440 253 M-50 199C25 119 170 277 220 232S435 149 440 267 M-50 212C20 132 175 291 220 246S440 162 440 281 M-50 225C15 145 180 305 220 260S445 175 440 295 M-50 238C10 158 185 319 220 274S450 188 440 309 M-50 251C5 171 190 333 220 288S455 201 440 323 M-50 264C0 184 195 347 220 302S460 214 440 337 M-50 277C-5 197 200 361 220 316S465 227 440 351"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#ref-topography)"/></svg>
    <svg className="ref-doodle" viewBox="0 0 110 76" fill="none" stroke="#36363b" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M80-14Q40 12 24 51L64 31M24 51L31 15M40 56Q68 46 92 51"/></svg>
    <div className="ref-about-inner">
      <div className="ref-profile-summary"><div className="ref-visual">
        <div className="ref-circle" aria-hidden="true"/>
        <svg className="ref-rings" viewBox="0 0 400 400" fill="none" aria-hidden="true"><circle cx="200" cy="200" r="193" stroke="#6b56b6" strokeWidth="2" strokeDasharray="12 9"/><circle cx="200" cy="200" r="193" stroke="#6b56b6" strokeWidth="6" strokeDasharray="220 210 130 653" transform="rotate(-170 200 200)" strokeLinecap="round"/></svg>
        <svg className="ref-shape ref-triangles" viewBox="0 0 85 65" fill="#ffc332" aria-hidden="true"><path d="M46 0L66 34H26Z M13 35L23 53H3Z"/></svg>
        <svg className="ref-shape ref-small-triangles" viewBox="0 0 75 30" stroke="#e7c961" strokeWidth="2" aria-hidden="true"><path d="M3 15L16 6V24Z" fill="#ffc332"/><path d="M28 15L41 6V24Z M53 15L66 6V24Z" fill="none"/></svg>
        <span className="ref-shape ref-dot a" aria-hidden="true"/><span className="ref-shape ref-dot b" aria-hidden="true"/><span className="ref-shape ref-dot c" aria-hidden="true"/><span className="ref-shape ref-dot d" aria-hidden="true"/>
        <Portrait about />
      </div>
      <dl className="ref-highlights" aria-label="Highlight profil">
        <div><dt>Tahun pengalaman</dt><dd>2<span>+</span></dd></div>
        <div><dt>Project</dt><dd>{projects.length}</dd></div>
        <div><dt>Cloud Practitioner</dt><dd>AWS<span className="ref-certified">Certified</span></dd></div>
      </dl></div>
      <div className="ref-content"><p className="eyebrow">About me</p><h2 id="about-title">Building Solutions,<br/><em>One Line at a Time</em></h2>
        <p className="ref-intro">Saya Robi, Full Stack Developer dengan pengalaman lebih dari 2 tahun membangun dan memelihara aplikasi web. Saya menangani frontend, backend, hingga deployment di Linux.</p>
        <div className="ref-cards"><article className="ref-card"><svg className="ref-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12L11 15L16 9"/></svg><div><h3>Proyek &amp; Solusi Digital</h3><p>Web, mobile, dan RESTful API untuk kebutuhan operasional serta pelayanan publik.</p></div></article>
        <article className="ref-card purple"><svg className="ref-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 6V12L16 14"/></svg><div><h3>Terus Belajar &amp; Berkembang</h3><p>Mengembangkan keterampilan melalui AWS ReStart Program dan sertifikasi AWS Cloud Practitioner.</p></div></article></div>
        <a className="ref-download" href={profile.cv} download>Download CV<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 12H20M14 6L20 12L14 18"/></svg></a>
      </div>
    </div>
  </section>;
}
