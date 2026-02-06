import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Importação das Páginas
import Home from './pages/Home';
import Ouvidoria from './pages/Ouvidoria';
import Institucional from './pages/Institucional';
import Painel from './pages/Painel';

// Componente para subir ao topo ao mudar de página
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Componente do Botão Flutuante do WhatsApp
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5516982706895" // Seu número configurado
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 hover:shadow-xl transition-all duration-300 group flex items-center gap-2"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Ícone do WhatsApp (SVG) */}
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      {/* Texto que aparece no hover (Desktop) */}
      <span className="hidden group-hover:block whitespace-nowrap font-bold pr-2 animate-in slide-in-from-right-2">
        Falar com Gabriel
      </span>
    </a>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <WhatsAppButton />
      
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
        
        {/* NAVBAR FIXA */}
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              
              {/* LOGO */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-black text-[#002B5B] tracking-tight hover:opacity-80 transition select-none">
                  Ouve<span className="text-blue-500">Nup</span>
                </Link>
              </div>

              {/* MENU DESKTOP */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-slate-600 hover:text-[#002B5B] font-medium transition hover:-translate-y-0.5">
                  Início
                </Link>
                <Link to="/quem-sou" className="text-slate-600 hover:text-[#002B5B] font-medium transition hover:-translate-y-0.5">
                  Quem Sou
                </Link>
                <Link to="/painel" className="text-slate-600 hover:text-[#002B5B] font-medium transition hover:-translate-y-0.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Painel de Estatística
                </Link>
                
                {/* Botão de Ação */}
                <Link to="/ouvidoria" className="bg-[#002B5B] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-900 transition shadow-lg shadow-blue-900/20 transform hover:-translate-y-1">
                  Abrir Ouvidoria
                </Link>
              </div>

              {/* BOTÃO MOBILE (HAMBURGER) */}
              <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="text-slate-600 hover:text-[#002B5B] p-2 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <span className="text-2xl font-bold">✕</span> 
                  ) : (
                    <span className="text-2xl font-bold">☰</span> 
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* MENU MOBILE EXPANDIDO */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl animate-in slide-in-from-top-5">
              <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
                <Link to="/" onClick={closeMenu} className="block px-3 py-2 text-slate-600 font-bold hover:bg-slate-50 rounded-lg">
                  Início
                </Link>
                <Link to="/quem-sou" onClick={closeMenu} className="block px-3 py-2 text-slate-600 font-bold hover:bg-slate-50 rounded-lg">
                  Quem Sou
                </Link>
                <Link to="/painel" onClick={closeMenu} className="block px-3 py-2 text-slate-600 font-bold hover:bg-slate-50 rounded-lg flex items-center gap-2">
                  Painel de Estatística <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase tracking-wide">Ao Vivo</span>
                </Link>
                <Link to="/ouvidoria" onClick={closeMenu} className="block px-3 py-4 mt-4 bg-[#002B5B] text-white text-center rounded-xl font-bold shadow-lg">
                  Abrir Ouvidoria
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* ÁREA DE CONTEÚDO PRINCIPAL */}
        <main className="animate-in fade-in duration-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-sou" element={<Institucional />} />
            <Route path="/ouvidoria" element={<Ouvidoria />} />
            <Route path="/painel" element={<Painel />} />
          </Routes>
        </main>

        {/* RODAPÉ SIMPLES */}
        <footer className="bg-white border-t border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-xl font-black text-[#002B5B] mb-4">OuveNup</h3>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Controle social e participação técnica para o futuro de Nuporanga.
            </p>
            <div className="flex justify-center gap-6 text-sm text-slate-400 font-medium">
              <Link to="/" className="hover:text-[#002B5B]">Início</Link>
              <Link to="/quem-sou" className="hover:text-[#002B5B]">Quem Sou</Link>
              <Link to="/painel" className="hover:text-[#002B5B]">Estatísticas</Link>
            </div>
            <div className="mt-8 text-xs text-slate-300">
              &copy; {new Date().getFullYear()} Gabriel Silva. Iniciativa Independente.
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}