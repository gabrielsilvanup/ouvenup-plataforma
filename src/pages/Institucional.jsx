import React from 'react';
import { Link } from 'react-router-dom';

export default function Institucional() {
  return (
    <div className="max-w-6xl mx-auto pb-20">
      
      {/* SEÇÃO DE CABEÇALHO COM FUNDO AZUL (Hero da Bio) */}
      <div className="bg-[#002B5B] rounded-[3rem] p-8 md:p-16 text-white mb-16 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 rounded-full mix-blend-overlay filter blur-[80px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          
          {/* Coluna da Foto (Placeholder Profissional) */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-200 border-4 border-white/20 rounded-full flex items-center justify-center text-slate-400 font-bold text-xl shadow-xl overflow-hidden relative group">
              {/* Quando tiver a foto real, substitua a div abaixo pela tag <img src={suafoto} /> */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-300 flex flex-col items-center justify-center">
                <span className="text-6xl mb-2">👤</span>
                <span className="uppercase tracking-widest text-xs">Foto do Gabriel</span>
              </div>
            </div>
          </div>

          {/* Coluna de Texto de Impacto */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-blue-800/50 border border-blue-700/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-blue-200 mb-6">
              Idealizador do OuveNup
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Gabriel Silva
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl font-light leading-relaxed">
              "Acredito que a transparência e a técnica são os pilares para transformar Nuporanga. Minha missão é aliar o conhecimento jurídico à gestão pública eficiente."
            </p>
          </div>
        </div>
      </div>

      {/* SEÇÃO DE CREDENCIAIS (Grid de Autoridade) */}
      <div className="grid md:grid-cols-3 gap-6 mb-20 px-4">
        {/* Card 1: Direito */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-[#002B5B]">⚖️</div>
          <h3 className="text-xl font-black text-slate-800 mb-2">Bacharel em Direito</h3>
          <p className="text-slate-500 text-sm font-medium">Faculdade de Direito de Franca</p>
          <div className="w-12 h-1 bg-blue-100 mt-4 rounded-full"></div>
        </div>

        {/* Card 2: Gestão Pública */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
          <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-cyan-600">🏛️</div>
          <h3 className="text-xl font-black text-slate-800 mb-2">Gestão Pública</h3>
          <p className="text-slate-500 text-sm font-medium">Pós-graduando pela PUCPR</p>
          <div className="w-12 h-1 bg-cyan-100 mt-4 rounded-full"></div>
        </div>

        {/* Card 3: MBL / Academia Valete */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
          <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-emerald-600">🦁</div>
          <h3 className="text-xl font-black text-slate-800 mb-2">Liderança Política</h3>
          <p className="text-slate-500 text-sm font-medium">Academia Valete (MBL)</p>
          <div className="w-12 h-1 bg-emerald-100 mt-4 rounded-full"></div>
        </div>
      </div>

      {/* SEÇÃO DE BIOGRAFIA (Texto Corrido) */}
      <div className="bg-white rounded-[3rem] border border-slate-100 p-8 md:p-16 shadow-xl relative overflow-hidden mx-4">
        <h2 className="text-3xl font-black text-[#002B5B] mb-8 relative z-10">Trajetória e Visão</h2>
        
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify relative z-10 max-w-4xl">
          <p>
            Natural de Nuporanga/SP, Gabriel de Souza Silva, 26 anos, construiu sua carreira baseada em dois pilares fundamentais: o estudo técnico e a prática diária. Atua há mais de dez anos como escrevente extrajudicial, onde desenvolveu um profundo conhecimento sobre a burocracia estatal e a importância da segurança jurídica.
          </p>
          <p>
            Buscando ir além, graduou-se em Direito pela renomada Faculdade de Direito de Franca e, atualmente, especializa-se em Gestão Pública pela PUCPR. Essa formação técnica é complementada por sua atuação política como aluno da Academia Valete, do Movimento Brasil Livre (MBL), onde estuda estratégias modernas de liderança e liberdade econômica.
          </p>
          <p>
            Com dedicação à transparência pública e ao desenvolvimento urbano, Gabriel idealizou o <strong className="text-[#002B5B]">OuveNup</strong> como uma ferramenta para aproximar a população das decisões municipais. Seu objetivo é claro: incentivar a participação cidadã e elevar o nível do debate sobre o futuro de Nuporanga.
          </p>
        </div>

        {/* Citação em Destaque */}
        <div className="mt-12 pt-12 border-t border-slate-100">
          <blockquote className="text-2xl font-bold text-[#002B5B] italic text-center max-w-3xl mx-auto">
            "A política não é profissão, é missão. E minha missão é preparar Nuporanga para os desafios da próxima década."
          </blockquote>
        </div>
      </div>

      {/* CTA Final */}
      <div className="mt-16 text-center">
         <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-6">Quer falar comigo?</h3>
         <div className="flex justify-center gap-4">
            <a href="#" className="bg-[#002B5B] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition shadow-lg">
              Instagram
            </a>
            <Link to="/ouvidoria" className="bg-white text-[#002B5B] border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-[#002B5B] transition">
              Acessar Ouvidoria
            </Link>
         </div>
      </div>

    </div>
  );
}