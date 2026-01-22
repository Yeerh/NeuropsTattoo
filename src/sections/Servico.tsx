export default function Servicos() {
  return (
    <section className="section section-dark" id="servicos">
      <div className="container">
        <div className="section-head">
          <h2>Serviços</h2>
          <p className="text-editorial">
            Trabalhos autorais e personalizados, com foco em{" "}
            <strong>realismo preto e cinza</strong>, leitura visual e acabamento
            preciso.
          </p>
        </div>

        <div className="services-grid">
          <div className="card service">
            <h3>Realismo Preto e Cinza</h3>
            <p className="text-editorial">
              Tatuagens realistas com alto nível de detalhe, contraste controlado
              e durabilidade estética ao longo do tempo.
            </p>
          </div>

          <div className="card service">
            <h3>Portrait (Realismo de Rosto)</h3>
            <p className="text-editorial">
              Retratos fiéis, respeitando proporções, expressão e identidade,
              com leitura clara mesmo à distância.
            </p>
          </div>

          <div className="card service">
            <h3>Projetos Autorais</h3>
            <p className="text-editorial">
              Criação de artes exclusivas, desenvolvidas a partir de referências
              e conceito do cliente.
            </p>
          </div>

          <div className="card service">
            <h3>Consultoria & Orçamento</h3>
            <p className="text-editorial">
              Atendimento direto para definição de tamanho, aplicação,
              posicionamento e orçamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
