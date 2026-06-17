export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Juanvic/"
              className="text-xl font-bold text-gray-900 dark:text-white tracking-tight"
            >
              Juan<span className="text-blue-600">Almeida</span>
            </a>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projetos"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
