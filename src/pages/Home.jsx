import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // Estado para controlar qual curiosidade está aparecendo
  const [curiosidadeIndex, setCuriosidadeIndex] = useState(0);

  // Lista de Fatos Reais sobre Nuporanga
  const curiosidades = [
    {
      titulo: "Pioneirismo Naval",
      texto: "Nuporanga é berço do Almirante Mello Marques, figura chave na implementação dos submarinos na Marinha do Brasil."
    },
    {
      titulo: "Significado do Nome",
      texto: "De origem Tupi-Guarani (Nhu-Poran), Nuporanga significa 'Campo Belo', uma referência direta às nossas paisagens."
    },
    {
      titulo: "Altitude Privilegiada",
      texto: "Somos uma Estância Climática a mais de 800m de altitude, o que garante um clima ameno e ar puro diferenciado."
    },
    {
      titulo: "Nossa Comunidade",
      texto: "Segundo o Censo 2022, somos cerca de 7.400 nuporanguenses preservando a qualidade de vida do interior."
    }
  ];

  // Efeito para trocar a curiosidade a cada 7 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCuriosidadeIndex((prev) => (prev + 1) % curiosidades.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen p-4 md:p-8 pb-20 font-sans">
      
      {/* =================================================================================
          1. HERO SECTION (Bloco Azul Institucional)
         ================================================================================= */}
      <div className="max-w-7xl mx-auto bg-[#002B5B] rounded-[3rem] px-6 py-20 md:py-28 text-center shadow-2xl shadow-blue-900/20 relative overflow-hidden">
        
        {/* Elemento Decorativo de Fundo (Sutil e Azulado, sem Ciano) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-overlay filter blur-[120px] opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Badge Institucional (Tons de azul claro) */}
          <div className="inline-block bg-white/10 border border-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-10">
            <span className="text-blue-100 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
              Plataforma de Controle Social
            </span>
          </div>

          {/* Logo / Título Gigante (Sóbrio: Branco e Azul Claro) */}
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none select-none">
            Ouve<span className="text-blue-200">Nup</span>
            <span className="text-blue-400">.</span>
          </h1>

          {/* Subtítulo Institucional Reformulado */}
          <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed mb-14">
            Fiscalização técnica e participação cidadã na gestão municipal. <br className="hidden md:block"/>
            Dados e propostas para o futuro de Nuporanga.
          </p>

          {/* BOTÕES - Destaque Máximo */}
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center max-w-2xl">
            {/* Botão Principal: Branco */}
            <Link 
              to="/ouvidoria" 
              className="w-full sm:w-auto bg-white text-[#002B5B] px-10 py-6 rounded-2xl font-black text-xl uppercase tracking-wide hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] whitespace-nowrap flex items-center justify-center gap-3"
            >
              <span>📢 Registrar Demanda</span>
            </Link>

            {/* Botão Secundário: Transparente */}
            <Link 
              to="/painel" 
              className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white px-10 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all whitespace-nowrap flex items-center justify-center gap-3"
            >
              <span>📊 Acessar Dados</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =================================================================================
          2. BLOCO DE CURIOSIDADES (Destaque Separado e Limpo)
         ================================================================================= */}
      <div className="max-w-5xl mx-auto mt-12 mb-20">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
          
          {/* Ícone com Efeito Pulsante */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-2xl animate-ping opacity-30"></div>
            <div className="relative w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl text-[#002B5B]">
              💡
            </div>
          </div>

          {/* Texto Grande e Legível */}
          <div className="flex-1 animate-in fade-in duration-500 key={curiosidadeIndex} min-h-[120px] flex flex-col justify-center">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
              Identidade Local
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-[#002B5B] leading-tight mb-3">
              {curiosidades[curiosidadeIndex].titulo}
            </h3>
            <p className="text-xl text-slate-600 font-medium leading-snug">
              "{curiosidades[curiosidadeIndex].texto}"
            </p>
          </div>

          {/* Paginação */}
          <div className="flex gap-3 flex-shrink-0 justify-center md:self-end">
            {curiosidades.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2.5 rounded-full transition-all duration-500 ${idx === curiosidadeIndex ? 'w-10 bg-[#002B5B]' : 'w-2.5 bg-slate-200'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================================
          3. CARDS DE SERVIÇO (Pilares de Atuação)
         ================================================================================= */}
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#002B5B] mb-4">Pilares de Atuação</h2>
          <p className="text-slate-500 text-xl">Metodologia para uma gestão participativa e técnica.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          
          {/* Card 1 */}
          <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mb-8 text-[#002B5B] group-hover:scale-110 transition-transform">
              🎯
            </div>
            <h3 className="text-3xl font-black text-[#002B5B] mb-5">Fiscalização Técnica</h3>
            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 flex-1">
              Registre problemas de infraestrutura ou serviços. Sua demanda gera um protocolo oficial para cobrança embasada junto à prefeitura.
            </p>
            <Link to="/ouvidoria" className="mt-auto text-[#002B5B] font-black text-sm uppercase tracking-wider border-b-2 border-blue-100 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors w-fit">
              Registrar Demanda →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
             {/* Destaque sutil de fundo (Azul claro, não ciano) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/80 rounded-bl-[4rem] -mr-8 -mt-8 z-0 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mb-8 text-[#002B5B] group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-3xl font-black text-[#002B5B] mb-5">Transparência Ativa</h3>
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 flex-1">
                Acesse o Painel de Dados. Mapas e estatísticas reais sobre as demandas da cidade, impedindo que fatos sejam ignorados.
              </p>
              <Link to="/painel" className="mt-auto text-[#002B5B] font-black text-sm uppercase tracking-wider border-b-2 border-blue-100 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors w-fit">
                Acessar Painel →
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mb-8 text-[#002B5B] group-hover:scale-110 transition-transform">
              💡
            </div>
            <h3 className="text-3xl font-black text-[#002B5B] mb-5">Proposição de Políticas</h3>
            <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 flex-1">
              Envie sugestões de projetos de lei ou melhorias administrativas. Vamos construir tecnicamente o plano de governo para 2028.
            </p>
            <Link to="/ouvidoria" className="mt-auto text-[#002B5B] font-black text-sm uppercase tracking-wider border-b-2 border-blue-100 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors w-fit">
              Enviar Proposta →
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}