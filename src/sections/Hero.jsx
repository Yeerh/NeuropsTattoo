// src/sections/Hero.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import SplitText from "../components/SplitText";
import valdirImg from "../assets/valdir.jpg";
import DarkVeil from "../components/DarkVeil";

export default function Hero() {
  const scopeRef = useRef(null);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // garante estado inicial (evita flash)
      gsap.set(
        [
          ".pill",
          ".hero-subtitle",
          ".hero-actions",
          ".stats .stat",
          ".hero-photo-frame",
          ".hero-badge",
        ],
        { opacity: 0 }
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".pill",
        { y: 14, opacity: 0, filter: "blur(4px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.7 }
      )
        .fromTo(
          ".hero-subtitle",
          { y: 18, opacity: 0, filter: "blur(6px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
          "-=0.35"
        )
        .fromTo(
          ".hero-actions .btn",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.10 },
          "-=0.45"
        )
        .fromTo(
          ".stats .stat",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.10 },
          "-=0.35"
        )
        .fromTo(
          ".hero-photo-frame",
          { y: 18, opacity: 0, scale: 0.985, filter: "blur(6px)" },
          { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.95 },
          "-=0.55"
        )
        .fromTo(
          ".hero-badge",
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          "-=0.65"
        );
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scopeRef}
      className="hero"
      id="top"
      aria-label="Apresentação"
      style={{ position: "relative" }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
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

      {/* Conteúdo */}
      <div
        className="container hero-content hero-grid"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ESQUERDA */}
        <div className="hero-left">
          <div className="pill">Realismo Preto e Cinza • Portrait</div>

          <div className="hero-title">
            {/* NEUROPS (branco) */}
              <img
    src="/logo-neurops-symbol.svg"
    alt="Símbolo Neurops Tattoo"
    className="hero-logo"
    loading="eager"
    draggable={false}
  />
            <SplitText
              text="Neurops"
              tag="h1"
              className="hero-h1"
              delay={42}
              duration={1.1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 34 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-120px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />

            {/* TATTOO (laranja) */}
            <SplitText
              text="Tattoo"
              tag="h1"
              className="hero-h1 accent"
              delay={36}
              duration={1.05}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 34 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-120px"
              textAlign="left"
            />
          </div>

          <p className="hero-subtitle">
            <strong>Valdir Neto</strong> — tatuador desde <strong>2015</strong>,
            com base artística no <strong>graffiti (2010–2013)</strong>. Foco em{" "}
            <strong>realismo Preto e Cinza</strong> com precisão,{" "}
            <strong>contraste</strong> e <strong>leitura</strong>.
          </p>

          <div className="hero-actions">
            <a
              className="btn primary"
              href="https://wa.me/5581997053551?text=Ol%C3%A1%2C%20Neurops!%20Quero%20agendar%20um%20hor%C3%A1rio.%20Posso%20te%20enviar%20minha%20refer%C3%AAncia%20e%20medidas%3F"
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
              <div className="stat-value">Especialista</div>
              <div className="stat-label">realismo e portrait</div>
            </div>
          </div>
        </div>

        {/* DIREITA */}
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
            <div className="hero-badge-title">NEUROPS</div>
            <div className="hero-badge-sub">
              Realismo Preto e Cinza • Portrait
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
