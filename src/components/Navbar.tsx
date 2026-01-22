export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="logo" aria-label="Ir para o topo">
          NEUROPS
          <span className="logo-dot">•</span>
        </a>

        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#trabalhos">Trabalhos</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
          <a href="#localizacao">Localização</a>
        </nav>

        <a
          className="nav-cta"
          href="https://wa.me/5581997053551"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
