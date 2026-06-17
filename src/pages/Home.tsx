import { ArrowBounce } from "../components/ui/ArrowBounce";

function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-6">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold border border-blue-600 p-6 hover:bg-sky-700 transition-colors duration-200">
          Olá, sou Juan Almeida
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <span className="font-light text-sky-500">Conheça mais sobre mim e meus projetos</span>
      </div>
      <ArrowBounce />
    </main>

  );
}

export default Home;
