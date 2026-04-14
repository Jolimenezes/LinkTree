export function LoginPage() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-red-800 p-4">
      {/* Container Principal Branco - Sem sombras, seguindo o padrão do EditPage */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-xl overflow-hidden border border-slate-200">
        
        {/* Lado Esquerdo: Texto de Boas-vindas (Oculto em telas muito pequenas se preferir) */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 p-8 md:p-12 justify-center bg-slate-50 border-r border-slate-100">
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Todo o seu mundo digital em um único lugar.
          </h1>
          <p className="text-slate-600">
            Junte-se a milhares de profissionais que usam o Link Hub para gerenciar sua presença online.
          </p>
          
          <div className="flex flex-col gap-3 mt-4 text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-800 rounded-full"></span>
              Dashboards Customizáveis
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-800 rounded-full"></span>
              Análises Avançadas
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário de Login */}
        <div className="w-full md:w-1/2 flex flex-col p-8 md:p-12 justify-center bg-white">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900">Acesse sua conta</h2>
            <p className="text-slate-500 text-sm">Entre com suas credenciais do Link Hub.</p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">E-mail</label>
              <input
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-red-800 transition-colors"
                placeholder="nome@empresa.com"
                type="email"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Senha</label>
                <a className="text-xs font-semibold text-red-800 hover:underline" href="#">
                  Esqueceu a senha?
                </a>
              </div>
              <input
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-red-800 transition-colors"
                placeholder="••••••••"
                type="password"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-red-800 text-white font-bold rounded-lg hover:bg-red-900 transition-colors mt-4 uppercase tracking-widest text-sm"
            >
              Entrar no Painel
            </button>
            
            <p className="text-center text-xs text-slate-500 mt-4">
              Não tem uma conta? <a href="#" className="text-red-800 font-bold hover:underline">Cadastre-se</a>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}

