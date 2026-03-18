export function LoginPage() {
  return (
    <div className="w-screen h-screen flex justify-center font-display bg-blue-900 items-center">
      <div className="layout-content-container flex flex-col w-280 h-120 bg-white dark:bg-slate-900 +. rounded-xl overflow-hidden md:flex-row">

        <div className="relative z-10 flex flex-col gap-6 p-8 justify-center">

          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Todo o seu mundo digital em um único
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 flex ">
            Junte-se a milhares de profissionais que usam o Link Hub para gerenciar sua presença online.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-3">
              <span className="font-medium">Dashboards Customizáveis</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium">Análises Avançadas</span>
            </div>
          </div>
        </div>


      <div className="flex flex-col w-full md:w-1/2 p-8 sm:p-12 lg:p-16 justify-center">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-3xl font-bold text-slate-900-">Login e Cadastro</h2>
          <p className="text-slate-500">Acesse seu painel do Link Hub.</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">E-mail</label>
            <div className="relative">
              <input
                className="w-full pl-3 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                placeholder="nome@empresa.com"
                type="email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Senha</label>
              <a className="text-xs font-semibold text-primary" href="#">Esqueceu a senha?</a>
            </div>
            <div className="relative">
              <input
                className="w-full pl-3 pr-12 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                placeholder="••••••••"
                type="password"
              />
            </div>
          </div>

          <button className="w-full py-3 bg-primary bg-blue-400 text-white font-bold rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 mt-4">
            <span className="material-symbols-outlined text-xl">login</span>
          </button>
        </div>
      </div>

    </div>
    </div>
  );
}

