// src/sections/Trabalho.jsx

const works = [
  {
    src: "/portfolio/work-1.jpg",
    title: "Realismo Preto e Cinza",
  },
  {
    src: "/portfolio/work-2.jpg",
    title: "Portrait (Rosto)",
  },
  {
    src: "/portfolio/work-3.jpg",
    title: "Contraste e Profundidade",
  },
  {
    src: "/portfolio/work-4.jpg",
    title: "Projeto Autoral",
  },
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
