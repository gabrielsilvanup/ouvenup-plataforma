import React from 'react';
import { Link } from 'react-router-dom';

export default function Painel() {
  
  // SEU LINK DO LOOKER STUDIO (Já configurado):
  const LOOKER_STUDIO_URL = "https://lookerstudio.google.com/embed/reporting/a59b0ac4-58c6-40f4-8778-76404cc10f50/page/SZ2nF";

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans">
      
      {/* CABEÇALHO */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm z-10">
         <div>
           <h1 className="text-2xl font-black text-[#002B5B] flex items-center gap-2">
             📊 Painel de Gestão
             <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase tracking-wider border border-green-200 animate-pulse">
               Ao Vivo
             </span>
           </h1>
           <p className="text-xs text-slate-400 hidden md:block mt-1">
             Monitoramento em tempo real das demandas de Nuporanga.
           </p>
         </div>

         <Link 
            to="/ouvidoria" 
            className="bg-[#002B5B] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-900 transition text-sm flex items-center gap-2 shadow-lg shadow-blue-900/20"
         >
           <span>+</span> Registrar Nova Demanda
         </Link>
      </div>

      {/* ÁREA DO DASHBOARD */}
      <div className="flex-1 w-full p-2 md:p-6 flex flex-col">
        <div className="flex-1 w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative min-h-[800px]">
           <iframe
             src={LOOKER_STUDIO_URL}
             frameBorder="0"
             style={{ 
               border: 0, 
               width: '100%', 
               height: '100%',
               position: 'absolute',
               top: 0,
               left: 0 
             }}
             allowFullScreen
             title="Painel OuveNup Looker Studio"
           ></iframe>
        </div>
         <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-6 mb-4">
           Sistema OuveNup • Inteligência de Dados
         </p>
      </div>
    </div>
  );
}