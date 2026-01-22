import Navbar from "./components/Navbar";
// @ts-ignore
import Hero from "./sections/Hero";
import Sobre from "./sections/Sobre";
import Trabalhos from "./sections/Trabalho";
import Servicos from "./sections/Servico";
import Contato from "./sections/Contato";
import Localizacao from "./sections/Localizacao";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Sobre />
        <Trabalhos />
        <Servicos />
        <Contato />
        <Localizacao />
      </main>

      {/* CTA fixo WhatsApp */}
      <a
        className="whatsapp-float"
        href="https://wa.me/5581997053551?text=Ol%C3%A1%2C%20Neurops!%20Quero%20fazer%20uma%20tatuagem%20em%20realismo%20preto%20e%20cinza.%20Posso%20te%20enviar%20minha%20refer%C3%AAncia%20para%20or%C3%A7amento%3F"
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        title="Agendar pelo WhatsApp"
      >
        Agendar no WhatsApp
      </a>
    </>
  );
}
