// src/components/Navbar.jsx
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // trava scroll quando menu abre
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // fechar ao clicar em um link
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Brand */}
        <a href="#top" className="brand" aria-label="Neurops Tattoo" onClick={close}>
          <img
            src="/logo-neurops.svg"
            alt="Neurops Tattoo"
            className="brand-logo"
            draggable={false}
          />
          <div className="brand-text">
            <span className="brand-title">Neurops</span>
            <span className="brand-title accent">Tattoo</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="nav nav-desktop" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#trabalhos">Trabalhos</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
          <a href="#localizacao" className="nav-cta">
            Localização
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? "bar bar1 open" : "bar bar1"} />
          <span className={open ? "bar bar2 open" : "bar bar2"} />
          <span className={open ? "bar bar3 open" : "bar bar3"} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={open ? "mobile-drawer open" : "mobile-drawer"} role="dialog" aria-modal="true">
        <button className="drawer-backdrop" aria-label="Fechar menu" onClick={close} />

        <div className="drawer-panel">
          <div className="drawer-head">
            <div className="drawer-brand">
              <img src="/logo-neurops.svg" alt="" className="drawer-logo" />
              <div className="drawer-brand-text">
                <div className="drawer-title">
                  <span>Neurops</span> <span className="accent">Tattoo</span>
                </div>
                <div className="drawer-sub">Realismo Preto e Branco • Portrait</div>
              </div>
            </div>

            <button className="drawer-close" onClick={close} aria-label="Fechar">
              ✕
            </button>
          </div>

          <nav className="nav-mobile" aria-label="Navegação mobile">
            <a href="#sobre" onClick={close}>Sobre</a>
            <a href="#trabalhos" onClick={close}>Trabalhos</a>
            <a href="#servicos" onClick={close}>Serviços</a>
            <a href="#contato" onClick={close}>Contato</a>
            <a href="#localizacao" onClick={close}>Localização</a>
          </nav>

          <div className="drawer-actions">
            <a
              className="btn primary"
              href="https://wa.me/5581997053551?text=Ol%C3%A1%2C%20Neurops!%20Quero%20agendar%20um%20hor%C3%A1rio."
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
