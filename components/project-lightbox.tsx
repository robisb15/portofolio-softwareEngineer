'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

export function ProjectLightbox({ images }: { images: { src: string; caption: string }[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  function scrollToSlide(index: number) {
    const el = galleryRef.current;
    if (!el) return;
    const figure = el.querySelectorAll<HTMLElement>('figure')[index];
    if (figure) {
      figure.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
    setCurrentSlide(index);
  }

  function handleScroll() {
    const el = galleryRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / (el.clientWidth || 1));
    setCurrentSlide(Math.min(Math.max(0, index), images.length - 1));
  }

  return <>
    <div className="case-media-container">
      <div ref={galleryRef} onScroll={handleScroll} className="case-gallery">
        {images.map((image, index) => <figure key={image.src}>
          <button className="case-screenshot" onClick={() => { setActive(index); dialog.current?.showModal(); }} aria-label={`Perbesar: ${image.caption}`}>
            <Image src={image.src} alt={image.caption} width={1440} height={1000} sizes="(max-width: 767px) 88vw, 1000px" priority={index === 0}/>
            <span className="case-zoom" aria-hidden="true">Perbesar gambar ↗</span>
          </button>
          <figcaption>{String(index + 1).padStart(2, '0')} / {image.caption}</figcaption>
        </figure>)}
      </div>
      {images.length > 1 && (
        <div className="case-gallery-nav" aria-label="Navigasi carousel foto">
          <button
            type="button"
            className="case-nav-btn"
            disabled={currentSlide === 0}
            onClick={() => scrollToSlide(currentSlide - 1)}
            aria-label="Foto sebelumnya"
          >
            ←
          </button>
          <div className="case-nav-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`case-dot ${i === currentSlide ? 'active' : ''}`}
                onClick={() => scrollToSlide(i)}
                aria-label={`Lihat foto ${i + 1}`}
                aria-current={i === currentSlide}
              />
            ))}
          </div>
          <button
            type="button"
            className="case-nav-btn"
            disabled={currentSlide === images.length - 1}
            onClick={() => scrollToSlide(currentSlide + 1)}
            aria-label="Foto berikutnya"
          >
            →
          </button>
        </div>
      )}
    </div>
    <dialog ref={dialog} className="case-lightbox" aria-labelledby="screenshot-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="case-lightbox-bar"><p id="screenshot-title">{images[active].caption}</p><button autoFocus onClick={() => dialog.current?.close()} aria-label="Tutup gambar">×</button></div>
      <img src={images[active].src} alt={images[active].caption}/>
      {images.length > 1 && <div className="case-lightbox-controls"><button className="button secondary" disabled={active === 0} onClick={() => setActive(active - 1)}>Sebelumnya</button><span>{active + 1} / {images.length}</span><button className="button secondary" disabled={active === images.length - 1} onClick={() => setActive(active + 1)}>Berikutnya</button></div>}
    </dialog>
  </>;
}
