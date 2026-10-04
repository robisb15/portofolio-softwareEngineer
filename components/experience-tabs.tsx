'use client';

import { useState, useRef } from 'react';
import { education, experience } from '@/lib/content';

export function ExperienceTabs() {
  const [tab, setTab] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  return <div className="history">
    <div role="tablist" aria-label="Riwayat profesional" className="history-tabs">
      {['Experience', 'Education'].map((name, index) => <button key={name} ref={el => { buttons.current[index] = el; }} id={`history-tab-${index}`} type="button" role="tab" aria-selected={tab === index} aria-controls={`history-panel-${index}`} tabIndex={tab === index ? 0 : -1} onClick={() => setTab(index)} onKeyDown={event => {
        if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
          event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : 1 - tab;
          setTab(next); buttons.current[next]?.focus();
        }
      }}>{name}</button>)}
    </div>
    {[experience, education].map((items, index) => <div role="tabpanel" key={index} id={`history-panel-${index}`} aria-labelledby={`history-tab-${index}`} hidden={tab !== index} tabIndex={0}>
      <div className="history-list">{items.map(item => <article className="history-card" key={item.company}>
        <div className="history-top"><span className="company-mark" aria-hidden="true">{item.mark}</span><p>{item.date}</p></div>
        <h3>{item.company}</h3><p className="history-role">{item.role}</p>
        <p className="history-summary">{item.summary}</p><p className="history-stack">{item.stack}</p>
      </article>)}</div>
      {index === 1 && <div className="certification"><p className="small-label">Certifications</p><h3>AWS Certified Cloud Practitioner</h3><p>AWS ReStart Program</p></div>}
    </div>)}
  </div>;
}
