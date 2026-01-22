// src/sections/Hero.jsx
import SplitText from "../components/SplitText";
import valdirImg from "../assets/valdir.jpg";
import DarkVeil from "@/components/DarkVeilBackground";


export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
      <section className="hero" id="top" aria-label="Apresentação" style={{ position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <DarkVeil
          hueShift={183}
          noiseIntensity={0.12}
          scanlineIntensity={0.1}
          speed={1}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1.5}
        />
      </div>

      <div className="container hero-content hero-grid">
        {/* LADO ESQUERDO */}
        <div className="hero-left">
          <div className="pill">Realismo Preto e Cinza • Portrait</div>

          <div className="hero-title">
            <SplitText
              text="Neurops"
              tag="h1"
              className="hero-h1 hero-h1-brotheric"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
              showCallback
            />

            <SplitText
              text="Tattoo"
              tag="h1"
              className="hero-h1 hero-h1-brotheric accent"
              delay={35}
              duration={1.1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

         <p className="hero-subtitle">
  <strong>Valdir Neto</strong> — tatuador desde <strong>2015</strong>,
  com base artística no <strong>graffiti (2010–2013)</strong>. Foco em{" "}
  <strong>realismo preto e cinza</strong> com precisão,{" "}
  <strong>contraste</strong> e <strong>leitura</strong>.
</p>


          <div className="hero-actions">
            <a
              className="btn primary"
              href="https://wa.me/5581997053551?text=Ol%C3%A1%2C%20Neurops!%20Quero%20fazer%20uma%20tatuagem%20em%20realismo%20preto%20e%20cinza.%20Posso%20te%20enviar%20minha%20refer%C3%AAncia%20para%20or%C3%A7amento%3F"
              target="_blank"
              rel="noreferrer"
            >
              Agendar pelo WhatsApp
            </a>

            <a className="btn ghost" href="#trabalhos">
              Ver Trabalhos
            </a>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-value">10</div>
              <div className="stat-label">anos de profissão</div>
            </div>
            <div className="stat">
              <div className="stat-value">2015</div>
              <div className="stat-label">início na tattoo</div>
            </div>
            <div className="stat">
              <div className="stat-value">Preto e Cinza</div>
              <div className="stat-label">realismo e portrait</div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="hero-right">
          <div className="hero-photo-frame">
            <img
              src={valdirImg}
              alt="Valdir Neto (Neurops) - Tatuador"
              className="hero-photo"
              loading="eager"
            />
            <div className="hero-photo-glow" />
          </div>

          <div className="hero-badge">
            <div className="hero-badge-title">Neurops</div>
            <div className="hero-badge-sub">Realismo Preto e Cinza • Portrait</div>
          </div>
        </div>
      </div>
    </section>
  );
}
