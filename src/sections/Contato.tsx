export default function Contato() {
  return (
    <section id="contato" className="section section-dark">
      <div className="container">
        <div className="section-head">
          <h2>Contato</h2>
          <p className="muted">
            Envie sua ideia e referência para orçamento e agendamento.
          </p>
        </div>

        <div className="contact-card">
          <div>
            <div className="contact-title">WhatsApp</div>
            <div className="contact-value">(81) 99705-3551</div>

            <div className="contact-actions">
              <a
                className="btn primary"
                href="https://wa.me/5581997053551?text=Ol%C3%A1%2C%20Neurops!%20Quero%20fazer%20uma%20tatuagem%20em%20realismo%20preto%20e%20cinza.%20Posso%20te%20enviar%20minha%20refer%C3%AAncia%20para%20or%C3%A7amento%3F"
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>

              <a
                className="btn ghost"
                href="https://instagram.com/neurops_tattooist"
                target="_blank"
                rel="noreferrer"
              >
                Ver Instagram
              </a>
            </div>

            <p className="muted small">
              Dica: envie a referência, tamanho aproximado e local do corpo. Isso acelera o orçamento.
            </p>
          </div>

          <div className="contact-highlight">
            <div className="pill">Instagram</div>
            <div className="ig">@neurops_tattooist</div>
            <div className="muted small">
              Acompanhe trabalhos recentes e bastidores.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
