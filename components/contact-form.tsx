'use client';

import { useState, useEffect, useRef } from 'react';
import { profile } from '@/lib/content';

type Draft = { subject: string; body: string };
export function ContactForm() {
  const [draft, setDraft] = useState<Draft | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [download, setDownload] = useState('');
  useEffect(() => {
    if (!draft) return;
    const url = URL.createObjectURL(new Blob([`Subjek: ${draft.subject}\n\n${draft.body}`], { type: 'text/plain;charset=utf-8' }));
    setDownload(url); dialog.current?.showModal();
    return () => URL.revokeObjectURL(url);
  }, [draft]);
  return <>
    <form className="contact-form" onSubmit={event => {
      event.preventDefault(); const form = event.currentTarget;
      const values = new FormData(form); const name = String(values.get('name')).trim(); const message = String(values.get('message')).trim();
      if (!name || !message) return;
      const service = String(values.get('service')) || 'Diskusi proyek';
      setDraft({ subject: `${service} - ${name}`, body: `Halo Robi,\n\n${message}\n\nJenis proyek: ${service}\nNama: ${name}\nEmail: ${values.get('email')}` });
    }}>
      <h3>Ceritakan proyek Anda</h3><p className="form-help">Mulai dari ide, kebutuhan, atau masalah yang ingin diselesaikan.</p>
      <div className="form-fields">
        <div><label htmlFor="contact-name">Nama</label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="Nama Anda" onInput={event => event.currentTarget.setCustomValidity(event.currentTarget.value.trim() ? '' : 'Tuliskan nama Anda.')} /></div>
        <div><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="nama@domain.com" /></div>
        <div className="wide"><label htmlFor="contact-service">Jenis proyek <span>(opsional)</span></label><select id="contact-service" name="service"><option value="">Pilih jenis proyek</option><option>Web Development</option><option>Mobile Development</option><option>Backend & API</option><option>Kolaborasi lainnya</option></select></div>
        <div className="wide"><label htmlFor="contact-message">Tentang proyek Anda</label><textarea id="contact-message" name="message" required maxLength={3000} placeholder="Saya ingin membuat…" onInput={event => event.currentTarget.setCustomValidity(event.currentTarget.value.trim() ? '' : 'Ceritakan kebutuhan proyek Anda.')} /></div>
      </div>
      <button className="button primary form-submit" type="submit" ref={trigger}>Siapkan pesan <span aria-hidden="true">↗</span></button>
      <p className="form-note">Draf dibuka di aplikasi email Anda. Data formulir tidak disimpan ke server.</p>
    </form>
    <dialog ref={dialog} className="draft-dialog" aria-labelledby="draft-title" onClose={() => { setDraft(null); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close(); } }}>
      <button className="dialog-close" type="button" aria-label="Tutup draf" onClick={() => dialog.current?.close()}>×</button><h2 id="draft-title">Pesan Anda siap.</h2><p>Untuk {profile.email}. Pesan belum terkirim.</p><pre>{draft?.body}</pre><div className="draft-actions"><a className="button primary" href={draft ? `mailto:${profile.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}` : undefined}>Buka aplikasi email</a><a className="button secondary" href={download || undefined} download="pesan-untuk-robi.txt">Unduh draf</a></div>
    </dialog>
  </>;
}
