const ADDRESS =
  "Rua Sessenta e Quatro, 135, Jardim Paulista, Paulista - PE, 53409-150, Brasil";

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

export default function Localizacao() {
  return (
    <section className="section" id="localizacao">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Localização</h2>
          <p className="text-editorial">
            Atendimento com horário marcado. Confirme disponibilidade e envie sua
            referência para orçamento pelo WhatsApp.
          </p>
        </div>

        <div className="location-grid">
          {/* Mapa */}
          <div className="map-wrap">
            <iframe
              className="map-iframe"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Localização do estúdio"
              allowFullScreen
            />
          </div>

          {/* Info lateral */}
          <div className="panel">
            <div className="panel-inner">
              <div className="panel-title">
                <h3>Endereço</h3>
                <span className="badge">Jardim Paulista</span>
              </div>

              <div className="kv">
             <div className="kv-row">
  <div className="kv-label">CEP</div>
  <div className="kv-value">53409-150</div>
</div>
<div className="kv-row">
  <div className="kv-label">Rua</div>
  <div className="kv-value">Rua Sessenta e Quatro, 135</div>
</div>

                <div className="kv-row">
                  <div className="kv-label">Bairro</div>
                  <div className="kv-value">Jardim Paulista</div>
                </div>

                <div className="kv-row">
                  <div className="kv-label">Atendimento</div>
                  <div className="kv-value">Somente com agendamento</div>
                </div>
              </div>

              <div className="contact-actions">
                <a
                  className="btn primary"
                  href="https://wa.me/5581997053551?text=Ol%C3%A1%2C%20Neurops!%20Quero%20agendar%20um%20hor%C3%A1rio.%20Posso%20te%20enviar%20minha%20refer%C3%AAncia%20e%20medidas%3F"
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar pelo WhatsApp
                </a>

                <a
                  className="btn secondary"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    ADDRESS
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir no Google Maps
                </a>
              </div>

              <p className="form-hint" style={{ marginTop: 10 }}>
                Para orçamento mais rápido: envie <strong>referência</strong>,{" "}
                <strong>tamanho</strong> e <strong>local do corpo</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
