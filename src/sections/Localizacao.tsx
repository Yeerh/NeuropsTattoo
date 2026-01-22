export default function Localizacao() {
  return (
    <section id="localizacao" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Localização</h2>
          <p className="muted">
            Atendimento em estúdio. A localização completa pode ser enviada após confirmação do agendamento.
          </p>
        </div>

        <div className="card location">
          <div>
            <strong>Atendimento sob agendamento</strong>
            <p className="muted">
              Para receber o endereço e disponibilidade, chame no WhatsApp.
            </p>

            <a
              className="btn primary"
              href="https://wa.me/5581997053551"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar localização
            </a>
          </div>

          {/* Opcional: quando tiver o link, você pode colocar um embed aqui */}
          <div className="map-placeholder">
            <div className="muted small">
              Embed do Google Maps (opcional). Quando você tiver o link do estúdio,
              eu deixo isso integrado.
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="muted small">
            © {new Date().getFullYear()} Neurops — Valdir Neto
          </div>
        </footer>
      </div>
    </section>
  );
}
