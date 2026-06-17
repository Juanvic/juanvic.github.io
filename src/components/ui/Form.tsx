export default function Form() {
  return (
    <>
    <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-xl shadow-md border border-gray-100 dark:bg-zinc-900 dark:border-zinc-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Entre em contato</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Deixe sua mensagem abaixo.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="Seu nome"
          />
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="seu@email.com"
          />
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
            placeholder="Digite sua mensagem aqui..."
          />
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition duration-200 ease-in-out transform active:scale-[0.98] text-center"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
    </>
  );
}
