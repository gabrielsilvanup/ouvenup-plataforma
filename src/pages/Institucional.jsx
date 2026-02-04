import React from 'react';

export default function Institucional() {
  return (
    <div className="py-12 max-w-4xl mx-auto">
      
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="md:flex">
          
          {/* Coluna da Foto (Placeholder) */}
          <div className="md:w-1/3 bg-gray-200 min-h-[300px] md:min-h-full relative">
            {/* Quando tiver a foto, substituiremos a linha abaixo pela tag <img /> */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
              [Foto do Gabriel]
            </div>
          </div>

          {/* Coluna do Texto */}
          <div className="p-8 md:p-12 md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Gabriel de Souza Silva</h2>
            <p className="text-blue-600 font-semibold mb-6">Gestor Público & Bacharel em Direito</p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p>
                Gabriel de Souza Silva é natural de Nuporanga/SP, tem 26 anos e é o criador do projeto OuveNup.
              </p>
              <p>
                Bacharel em Direito pela Faculdade de Direito de Franca, aluno da Academia Valete do Movimento Brasil Livre (MBL) e pós-graduando em Gestão Pública pela Pontifícia Universidade Católica do Paraná (PUCPR), também é técnico em Informática para Web e atua há mais de dez anos como escrevente extrajudicial.
              </p>
              <p>
                Com dedicação à transparência pública, à política local e ao desenvolvimento urbano, Gabriel idealizou iniciativas que visam aproximar a população das decisões municipais, incentivando a participação cidadã e o debate qualificado sobre o futuro de Nuporanga.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}