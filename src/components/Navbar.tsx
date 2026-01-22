import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // fecha menu ao trocar o hash (clicar nos links)
  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <a className="brand" href="#top" aria-label="Ir para o topo">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-text">
              <span className="brand-title">Neurops</span>
              <span className="brand-sub">Tattoo</span>
            </span>
          </a>

          <nav className="nav" aria-label="Navegação">
            <a href="#sobre">Sobre</a>
            <a href="#trabalhos">Trabalhos</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
            <a href="#localizacao">Localização</a>

            <a
              className="nav-cta"
              href="https://wa.me/5581997053551?text=Ol%C3%A1%2C%20Neurops!%20Quero%20fazer%20uma%20tatuagem%20em%20realismo%20preto%20e%20cinza.%20Posso%20te%20enviar%20minha%20refer%C3%AAncia%20para%20or%C3%A7amento%3F"
              target="_blank"
              rel="noreferrer"
            >
              Agendar
            </a>
          </nav>

          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* ícone simples (hambúrguer / X) */}
            <span style={{ fontSize: 18, fontWeight: 900 }}>
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* menu mobile */}
        <nav className={`nav-mobile ${open ? "open" : ""}`} aria-label="Navegação mobile">
          <a href="#sobre">Sobre</a>
          <a href="#trabalhos">Trabalhos</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
          <a href="#localizacao">Localização</a>
          <a
            href="https://wa.me/5581997053551?text=Ol%C3%A1%2C%20Neurops!%20Quero%20fazer%20uma%20tatuagem%20em%20realismo%20preto%20e%20cinza.%20Posso%20te%20enviar%20minha%20refer%C3%AAncia%20para%20or%C3%A7amento%3F"
            target="_blank"
            rel="noreferrer"
          >
            Agendar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
