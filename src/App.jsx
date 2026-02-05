import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Importação das Páginas
import Home from './pages/Home';
import Ouvidoria from './pages/Ouvidoria';
import Institucional from './pages/Institucional';
import Painel from './pages/Painel'; // <--- Nova Página Conectada

// Componente para garantir que a página suba ao topo na navegação
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fecha o menu mobile automaticamente ao clicar em um link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <ScrollToTop />
      
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
        
        {/* NAVBAR FIXA */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              
              {/* LOGO */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-black text-[#002B5B] tracking-tight hover:opacity-80 transition">
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
                  Transparência
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
                    <span className="text-2xl font-bold">✕</span> // Ícone Fechar
                  ) : (
                    <span className="text-2xl font-bold">☰</span> // Ícone Menu
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
                  Transparência <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase tracking-wide">Novo</span>
                </Link>
                <Link to="/ouvidoria" onClick={closeMenu} className="block px-3 py-4 mt-4 bg-[#002B5B] text-white text-center rounded-xl font-bold shadow-lg">
                  Abrir Ouvidoria
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* ÁREA DE CONTEÚDO PRINCIPAL */}
        <main className="pt-10 pb-20 animate-in fade-in duration-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-sou" element={<Institucional />} />
            <Route path="/ouvidoria" element={<Ouvidoria />} />
            <Route path="/painel" element={<Painel />} />
          </Routes>
        </main>

        {/* RODAPÉ SIMPLES */}
        <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-xl font-black text-[#002B5B] mb-4">OuveNup</h3>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Um projeto independente para conectar o cidadão à gestão pública de Nuporanga.
            </p>
            <div className="flex justify-center gap-6 text-sm text-slate-400 font-medium">
              <Link to="/" className="hover:text-[#002B5B]">Início</Link>
              <Link to="/quem-sou" className="hover:text-[#002B5B]">Sobre o Idealizador</Link>
              <Link to="/painel" className="hover:text-[#002B5B]">Dados Públicos</Link>
            </div>
            <div className="mt-8 text-xs text-slate-300">
              &copy; {new Date().getFullYear()} Gabriel Silva. Todos os direitos reservados.
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}