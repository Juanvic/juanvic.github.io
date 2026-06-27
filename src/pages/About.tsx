import { ArrowBounce } from "../components/ui/ArrowBounce";

export default function About() {
  return (
    <section id="sobre">

    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-amber-50 dark:text-white mb-3">Sobre mim</h1>
      <p className="text-base font-normal text-gray-400 dark:text-gray-300 leading-relaxed">
        Sou apaixonado por tecnologia e entusiasta de novas soluções
        inteligentes para todo tipo de situação. Tenho experiência construindo
        sistemas desde a fase de planejamento, desde a obtenção de todos os
        requisitos do software até a entrega do sistema, incluindo testes em um
        cronograma ágil como o Scrum, além de desenvolver aplicações frontend
        com destaque para web e dispositivos móveis.
      </p>
    <ArrowBounce />
    </div>
    </section>
  );
}
