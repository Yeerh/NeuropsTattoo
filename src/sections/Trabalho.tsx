// src/sections/Trabalho.jsx

const works = [
  { src: "/portfolio/work-1.jpg", title: "Realismo Preto e Cinza" },

  // Foto 3 -> Foto 2 (Portrait)
  { src: "/portfolio/work-3.jpg", title: "Portrait (Rosto)" },

  // Foto 2 -> Foto 3
  { src: "/portfolio/work-2.jpg", title: "Contraste e Textura" },

  { src: "/portfolio/work-4.jpg", title: "Projeto Autoral" },
];
export default function Trabalhos() {
  return (
    <section className="section" id="trabalhos" aria-label="Trabalhos">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Trabalhos</h2>
          <p className="text-editorial">
            Trabalhos em <strong>realismo preto e cinza</strong>, com foco em
            leitura, contraste e fidelidade à referência.
          </p>
        </div>

        <div className="works-grid">
          {works.map((work) => (
            <button
              key={work.src}
              type="button"
              className="work"
              aria-label={work.title}
            >
              <img
                src={work.src}
                alt={work.title}
                loading="lazy"
                draggable={false}
              />

              <div className="work-overlay">
                <div className="work-title">{work.title}</div>
                <div className="work-hint">Clique para ampliar</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
