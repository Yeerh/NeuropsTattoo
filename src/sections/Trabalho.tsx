// src/sections/Trabalho.jsx
import { useEffect, useState } from "react";

const works = [
  { src: "/portfolio/work-1.jpg", title: "Realismo Preto e Branco" },
  { src: "/portfolio/work-3.jpg", title: "Portrait (Rosto)" }, // trocada
  { src: "/portfolio/work-2.jpg", title: "Contraste e Textura" },
  { src: "/portfolio/work-4.jpg", title: "Projeto Autoral" },
];

export default function Trabalhos() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const closeLightbox = () => setOpen(false);

  const next = () => setIndex((i) => (i + 1) % works.length);
  const prev = () => setIndex((i) => (i - 1 + works.length) % works.length);

  // Fechar com ESC
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <section className="section" id="trabalhos" aria-label="Trabalhos">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Trabalhos</h2>
            <p className="text-editorial">
              Seleção de tatuagens em{" "}
              <strong>realismo preto e cinza</strong>, com foco em textura,
              contraste e fidelidade à referência.
            </p>
          </div>

          <div className="works-grid">
            {works.map((work, i) => (
              <button
                key={work.src}
                type="button"
                className="work"
                aria-label={`Ampliar ${work.title}`}
                onClick={() => openLightbox(i)}
              >
                <img src={work.src} alt={work.title} loading="lazy" />
                <div className="work-overlay">
                  <div className="work-title">{work.title}</div>
                  <div className="work-hint">Clique para ampliar</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button
            className="lightbox-backdrop"
            aria-label="Fechar"
            onClick={closeLightbox}
          />

          <div className="lightbox-content">
            <img
              src={works[index].src}
              alt={works[index].title}
              className="lightbox-img"
            />

            <div className="lightbox-caption">
              {works[index].title}
            </div>

            <button
              className="icon-btn left"
              aria-label="Imagem anterior"
              onClick={prev}
            >
              ‹
            </button>

            <button
              className="icon-btn right"
              aria-label="Próxima imagem"
              onClick={next}
            >
              ›
            </button>

            <button
              className="icon-btn close"
              aria-label="Fechar"
              onClick={closeLightbox}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
