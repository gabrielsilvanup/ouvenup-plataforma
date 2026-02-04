import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ouvidoria from './pages/Ouvidoria';
import Institucional from './pages/Institucional';
import logo from './assets/logo.png'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        
        {/* === HEADER: CLEAN & AUTHORITY === */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
          <div className="container mx-auto px-6 h-24 flex justify-between items-center">
            
            {/* BRANDING */}
            <Link to="/" className="flex items-center group no-underline">
              <div className="bg-[#002B5B] p-3 rounded-2xl shadow-lg shadow-blue-900/10 group-hover:scale-105 transition-transform duration-300">
                <img src={logo} alt="OuveNup" className="h-8 w-auto object-contain" />
              </div>
              <div className="ml-4 hidden sm:block">
                <h2 className="text-xl font-black text-[#002B5B] leading-none">OuveNup</h2>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Nuporanga • SP</p>
              </div>
            </Link>

            {/* NAVIGATION */}
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/" className="text-sm font-bold text-slate-500 hover:text-[#002B5B] transition-colors">INÍCIO</Link>
              <Link to="/ouvidoria" className="text-sm font-bold text-slate-500 hover:text-[#002B5B] transition-colors">OUVIDORIA</Link>
              <Link to="/sobre" className="text-sm font-bold text-slate-500 hover:text-[#002B5B] transition-colors">O GABRIEL</Link>
              <button className="bg-[#002B5B] text-white px-7 py-3 rounded-full font-bold text-sm hover:shadow-xl hover:shadow-blue-900/20 hover:-translate-y-0.5 transition-all active:scale-95">
                COLABORE
              </button>
            </div>
          </div>
        </nav>

        {/* === MAIN CONTENT === */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ouvidoria" element={<div className="container mx-auto px-6 pt-10"><Ouvidoria /></div>} />
            <Route path="/sobre" element={<div className="container mx-auto px-6 pt-10"><Institucional /></div>} />
          </Routes>
        </main>

        {/* === FOOTER: MINIMALIST === */}
        <footer className="bg-slate-50 py-20 mt-20 border-t border-slate-100">
          <div className="container mx-auto px-6 text-center">
            <img src={logo} alt="OuveNup" className="h-6 mx-auto mb-8 opacity-50 grayscale" />
            <p className="text-slate-400 text-sm font-medium max-w-sm mx-auto mb-10">
              Plataforma cívica independente para uma Nuporanga mais transparente e participativa.
            </p>
            <div className="flex justify-center gap-8 mb-12 text-slate-400 font-bold text-xs tracking-widest uppercase">
              <Link to="/ouvidoria" className="hover:text-[#002B5B]">Ouvidoria</Link>
              <Link to="/sobre" className="hover:text-[#002B5B]">Sobre</Link>
              <a href="#" className="hover:text-[#002B5B]">Privacidade</a>
            </div>
            <p className="text-[10px] text-slate-300 font-bold tracking-widest uppercase">
              © 2026 GABRIEL SILVA • MADE WITH ❤️ IN NUPORANGA
            </p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* 1. HERO: BOLD & MODERN (Inspirado na Manus e Congresso em Foco) */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#002B5B] px-4 py-2 rounded-full mb-8 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest">Plataforma Cívica Ativa</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#002B5B] mb-8 tracking-tight max-w-5xl mx-auto leading-[1.1]">
            O seu canal direto de participação em <span className="text-blue-600">Nuporanga.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            O <span className="text-[#002B5B] font-bold">OuveNup</span> conecta você às decisões municipais. Registre demandas, acompanhe estatísticas e participe ativamente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ouvidoria" className="w-full sm:w-auto bg-[#002B5B] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-900/30 hover:-translate-y-1 transition-all">
              Registre Sua Demanda Aqui
            </Link>
            <Link to="/sobre" className="w-full sm:w-auto bg-white text-[#002B5B] border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              Conheça o Projeto
            </Link>
          </div>
        </div>

        {/* Elemento Decorativo: O "Aura" de Fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[120px]"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        </div>
      </section>

      {/* 2. STATS BAR (Inspirado no Ranking dos Políticos) */}
      <section className="container mx-auto px-6 -mt-10 mb-24">
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Independência', value: '100%', color: 'text-blue-600' },
            { label: 'Acesso Digital', value: '24h', color: 'text-cyan-500' },
            { label: 'Participação', value: 'Livre', color: 'text-emerald-500' },
            { label: 'Transparência', value: 'Total', color: 'text-amber-500' }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r last:border-0 border-slate-100">
              <span className={`block text-3xl font-black ${stat.color} mb-1`}>{stat.value}</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VALUE PROPOSITION (Inspirado na Manus) */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🗣️</div>
              <h3 className="text-2xl font-black text-[#002B5B] mb-4">Registre sua Voz</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Envie demandas e sugestões diretamente. O anonimato é uma opção disponível para sua segurança.</p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-2xl font-black text-[#002B5B] mb-4">Transparência Total</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Acompanhe estatísticas em tempo real sobre as demandas registradas pela comunidade nuporanguense.</p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-2xl font-black text-[#002B5B] mb-4">Participação Cidadã</h3>
              <p className="text-slate-500 font-medium leading-relaxed">Faça parte do debate qualificado sobre o futuro de Nuporanga e contribua para o desenvolvimento local.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;