import React from 'react';
import { Link } from 'react-router-dom';

export default function Painel() {
  // O link que você me enviou
  const embedUrl = "https://lookerstudio.google.com/embed/reporting/a3e308d1-7d0c-43c0-941a-3106a3042bde/page/v1fnF"; 
  // Nota: Transformei seu link curto no link completo de embed para garantir que funcione no iframe

  return (
    <div className="max-w-7xl mx-auto pb-20 px-4">
      
      {/* CABEÇALHO */}
      <div className="bg-[#002B5B] rounded-[2.5rem] p-8 md:p-12 text-white mb-10 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
        {/* Decorativo de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full mix-blend-overlay filter blur-[60px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="inline-block bg-blue-800/50 border border-blue-700/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-300 mb-4">
              Dados em Tempo Real
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              Painel da Cidade
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl font-light">
              Acompanhe as estatísticas das demandas enviadas pela população. A transparência é o primeiro passo para a mudança.
            </p>
          </div>
          
          {/* Botão de Ação */}
          <Link to="/ouvidoria" className="bg-white text-[#002B5B] px-8 py-4 rounded-xl font-bold hover:bg-cyan-50 transition shadow-lg whitespace-nowrap">
            + Nova Demanda
          </Link>
        </div>
      </div>

      {/* ÁREA DO GRÁFICO (IFRAME) */}
      <div className="bg-white p-2 rounded-3xl shadow-xl border border-slate-100 overflow-hidden h-[800px] md:h-[600px] relative">
        <iframe 
          width="100%" 
          height="100%" 
          src={embedUrl} 
          frameBorder="0" 
          style={{ border: 0 }} 
          allowFullScreen
          title="Relatório OuveNup"
          className="rounded-2xl bg-slate-50"
        ></iframe>
        
        {/* Aviso caso demore a carregar */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center text-slate-400">
          <div className="text-center">
            <p className="mb-2">Carregando dados...</p>
            <div className="w-8 h-8 border-4 border-slate-200 border-t-[#002B5B] rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      </div>

      <p className="text-center text-slate-400 text-sm mt-6">
        Dados atualizados automaticamente a partir da base do OuveNup.
      </p>

    </div>
  );
}