import { useMemo, useState } from "react";

const PHONE_E164 = "5581997053551";
const INSTAGRAM = "neurops_tattooist";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [estilo, setEstilo] = useState("Realismo PB e Cinza");
  const [tamanho, setTamanho] = useState("");
  const [local, setLocal] = useState("");
  const [mensagem, setMensagem] = useState("");

  const whatsappLink = useMemo(() => {
    const base = `https://wa.me/${PHONE_E164}`;
    const text =
      `Olá, Neurops! Meu nome é ${nome || "[seu nome]"}. ` +
      `Quero um orçamento para ${estilo}. ` +
      (tamanho ? `Tamanho/medidas: ${tamanho}. ` : "") +
      (local ? `Local do corpo: ${local}. ` : "") +
      (mensagem ? `Detalhes: ${mensagem}` : "Posso te enviar minhas referências?");
    return `${base}?text=${encodeURIComponent(text)}`;
  }, [nome, estilo, tamanho, local, mensagem]);

  return (
    <section className="section section-dark" id="contato">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Contato</h2>
          <p className="text-editorial">
            Atendimento direto para orçamento e agendamento. Envie referências, tamanho aproximado e local do corpo.
          </p>
        </div>

        <div className="contact-grid">
          {/* Card: informações */}
          <div className="panel">
            <div className="panel-inner">
              <div className="panel-title">
                <h3>Fale com o Neurops</h3>
                <span className="badge">Resposta rápida</span>
              </div>

              <div className="kv">
                <div className="kv-row">
                  <div className="kv-label">WhatsApp</div>
                  <div className="kv-value">(81) 99705-3551</div>
                </div>
                <div className="kv-row">
                  <div className="kv-label">Instagram</div>
                  <div className="kv-value">@{INSTAGRAM}</div>
                </div>
                <div className="kv-row">
                  <div className="kv-label">Especialidade</div>
                  <div className="kv-value">Realismo PB e Cinza • Portrait</div>
                </div>
              </div>

              <div className="contact-actions">
                <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  Agendar pelo WhatsApp
                </a>
                <a className="btn secondary" href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer">
                  Ver Instagram
                </a>
              </div>

              <p className="form-hint" style={{ marginTop: 12 }}>
                Para acelerar o orçamento, envie: <strong>referência</strong>, <strong>tamanho aproximado</strong>,{" "}
                <strong>local do corpo</strong> e <strong>cidade</strong>.
              </p>
            </div>
          </div>

          {/* Card: formulário sem backend -> WhatsApp */}
          <div className="panel">
            <div className="panel-inner">
              <div className="panel-title">
                <h3>Pedido de orçamento</h3>
                <span className="badge">Sem cadastro</span>
              </div>

              <form className="form" onSubmit={(e) => e.preventDefault()}>
                <div className="field">
                  <label>Seu nome</label>
                  <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Ex.: Diego" />
                </div>

                <div className="field">
                  <label>Estilo</label>
                  <select value={estilo} onChange={(e) => setEstilo(e.target.value)}>
                    <option>Realismo PB e Cinza</option>
                    <option>Portrait (Rosto)</option>
                    <option>Projeto autoral</option>
                  </select>
                </div>

                <div className="field">
                  <label>Tamanho/medidas</label>
                  <input value={tamanho} onChange={(e) => setTamanho(e.target.value)} placeholder="Ex.: 12cm, antebraço" />
                </div>

                <div className="field">
                  <label>Local do corpo</label>
                  <input value={local} onChange={(e) => setLocal(e.target.value)} placeholder="Ex.: braço, panturrilha, costas" />
                </div>

                <div className="field">
                  <label>Detalhes</label>
                  <textarea
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Ex.: quero um rosto em PB e cinza, com fundo leve..."
                  />
                </div>

                <div className="contact-actions">
                  <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
                    Enviar no WhatsApp
                  </a>
                  <span className="form-hint">Você pode anexar referências diretamente no WhatsApp.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
