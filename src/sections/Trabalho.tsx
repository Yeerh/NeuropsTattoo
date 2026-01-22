import { useMemo, useState } from "react";
import { works } from "../data/works";

export default function Trabalhos() {
  const items = useMemo(() => works, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const open = (index) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section id="trabalhos" className="section section-dark">
      <div className="container">
        <div className="section-head">
  <h2 className="section-title">Trabalhos</h2>
          <p className="muted">Seleção de 4 peças em destaque. Clique para ampliar.</p>
        </div>

        <div className="works-grid">
          {items.map((work, index) => (
            <button
              key={work.id}
              className="work"
              onClick={() => open(index)}
              aria-label={`Abrir trabalho: ${work.title}`}
            >
              <img src={work.src} alt={work.title} loading="lazy" />
              <div className="work-overlay">
                <span className="work-title">{work.title}</span>
                <span className="work-hint">Clique para ampliar</span>
              </div>
            </button>
          ))}
        </div>

        {activeIndex !== null && (
          <div className="lightbox" role="dialog" aria-modal="true">
            <div className="lightbox-backdrop" onClick={close} />

            <div className="lightbox-content">
              <button className="icon-btn" onClick={close} aria-label="Fechar">
                ✕
              </button>

              <button className="icon-btn left" onClick={prev} aria-label="Anterior">
                ‹
              </button>

              <img
                className="lightbox-img"
                src={items[activeIndex].src}
                alt={items[activeIndex].title}
              />

              <button className="icon-btn right" onClick={next} aria-label="Próximo">
                ›
              </button>

              <div className="lightbox-caption">
                <span className="accent">{items[activeIndex].title}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
