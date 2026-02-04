import React, { useState } from 'react';

export default function Ouvidoria() {
  const [step, setStep] = useState(1);
  const [protocolo, setProtocolo] = useState(null);
  
  // Estado para guardar os dados do formulário
  const [formData, setFormData] = useState({
    tipo: '',
    natureza: '', // 'geografica' ou 'administrativa'
    bairro: '',
    endereco: '',
    orgao: '',
    descricao: '',
    identificacao: 'anonimo', // 'anonimo' ou 'identificado'
    nome: '',
    whatsapp: ''
  });

  // Opções de Classificação
  const tipos = ['Denúncia', 'Ideia de Lei', 'Reclamação', 'Sugestão', 'Outros'];
  
  // Opções Administrativas
  const orgaos = [
    'Prefeitura', 'Câmara Municipal', 'Educação', 'Saúde', 
    'Segurança', 'Obras/Infraestrutura', 'Meio Ambiente', 'Outros'
  ];

  // Lista OFICIAL de Bairros de Nuporanga (Conforme imagem)
  const bairros = [
    'Centro',
    'Arlindo Rossi',
    'Dona Mariquinha Anholeto',
    'Francisco Ambrozeto',
    'Jardim Alvorada',
    'Jardim Brasília',
    'Jardim Boa Vista',
    'Jardim Campo Belo',
    'Jardim Continental',
    'Jardim Estância I',
    'Jardim Estância II',
    'Jardim Santa Cruz',
    'Jardim Vista Linda',
    'Morada do Verde',
    'Parque da Figueira',
    'Residencial Paraíso',
    'Terra Bela I',
    'Terra Bela II',
    'Vila Diogo',
    'Vila Nova'
  ];

  const handleSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    // Gera um protocolo fictício baseado no ano e aleatório
    const novoProtocolo = `NUP-${Math.floor(Math.random() * 10000)}-${new Date().getFullYear()}`;
    setProtocolo(novoProtocolo);
    setStep(5); // Vai para tela de sucesso
  };

  const gerarLinkWhatsapp = () => {
    // Monta o texto completo para você ter acesso a tudo
    let texto = `*NOVA DEMANDA - OUVENUP*\n`;
    texto += `*Protocolo:* ${protocolo}\n`;
    texto += `*Tipo:* ${formData.tipo}\n`;
    
    if (formData.natureza === 'geografica') {
      texto += `*Local:* ${formData.bairro}\n`;
      if (formData.endereco) texto += `*Endereço:* ${formData.endereco}\n`;
    } else {
      texto += `*Órgão:* ${formData.orgao}\n`;
    }
    
    texto += `*Relato:* ${formData.descricao}\n`;
    
    if (formData.identificacao === 'identificado') {
      texto += `*Cidadão:* ${formData.nome} (${formData.whatsapp})\n`;
    } else {
      texto += `*Cidadão:* Anônimo\n`;
    }

    // Abre o WhatsApp para compartilhar esse texto
    return `https://wa.me/?text=${encodeURIComponent(texto)}`;
  };

  return (
    <div className="py-10 max-w-2xl mx-auto">
      
      {/* Barra de Progresso */}
      <div className="mb-8 flex justify-between text-sm font-bold text-gray-400 uppercase tracking-wider px-2">
        <span className={step >= 1 ? "text-blue-600" : ""}>1. Tipo</span>
        <span className={step >= 2 ? "text-blue-600" : ""}>2. Local</span>
        <span className={step >= 3 ? "text-blue-600" : ""}>3. Relato</span>
        <span className={step >= 4 ? "text-blue-600" : ""}>4. Envio</span>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
        
        {/* ETAPA 1: CLASSIFICAÇÃO */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Qual o tipo do registro?</h2>
            <div className="grid gap-3">
              {tipos.map((tipo) => (
                <button
                  key={tipo}
                  onClick={() => { handleSelect('tipo', tipo); nextStep(); }}
                  className="p-4 text-left border rounded-xl hover:bg-blue-50 hover:border-blue-500 transition-all font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {tipo}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 2: LOCALIZAÇÃO */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Onde é a ocorrência?</h2>
            
            <div className="flex gap-4 mb-6">
              <button 
                onClick={() => handleSelect('natureza', 'geografica')}
                className={`flex-1 py-3 rounded-lg font-bold border transition-all ${formData.natureza === 'geografica' ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'}`}
              >
                📍 Na Cidade
              </button>
              <button 
                onClick={() => handleSelect('natureza', 'administrativa')}
                className={`flex-1 py-3 rounded-lg font-bold border transition-all ${formData.natureza === 'administrativa' ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'}`}
              >
                🏛️ Prefeitura/Orgão
              </button>
            </div>

            {formData.natureza === 'geografica' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bairro (Obrigatório)</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) => handleSelect('bairro', e.target.value)}
                    value={formData.bairro}
                  >
                    <option value="">Selecione o bairro...</option>
                    {bairros.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Endereço (Opcional)</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Rua, número ou referência"
                    onChange={(e) => handleSelect('endereco', e.target.value)}
                    value={formData.endereco}
                  />
                </div>
              </div>
            )}

            {formData.natureza === 'administrativa' && (
              <div className="animate-fade-in">
                <label className="block text-sm font-medium text-gray-700 mb-1">Órgão Relacionado</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  onChange={(e) => handleSelect('orgao', e.target.value)}
                  value={formData.orgao}
                >
                  <option value="">Selecione o setor...</option>
                  {orgaos.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            )}

            <div className="mt-8 flex justify-between items-center">
              <button onClick={prevStep} className="text-gray-500 font-medium hover:text-gray-700 px-4 py-2">Voltar</button>
              <button 
                onClick={nextStep} 
                disabled={!formData.natureza || (formData.natureza === 'geografica' && !formData.bairro) || (formData.natureza === 'administrativa' && !formData.orgao)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* ETAPA 3: RELATO */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detalhes do caso</h2>
            
            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Descreva o que aconteceu..."
              value={formData.descricao}
              onChange={(e) => handleSelect('descricao', e.target.value)}
            ></textarea>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition group">
              <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">📷</span>
              <p className="text-sm text-gray-500">Clique para adicionar fotos ou vídeos (Opcional)</p>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <button onClick={prevStep} className="text-gray-500 font-medium hover:text-gray-700 px-4 py-2">Voltar</button>
              <button 
                onClick={nextStep}
                disabled={!formData.descricao}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold disabled:opacity-50 hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* ETAPA 4: FINALIZAÇÃO */}
        {step === 4 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Identificação</h2>
            
            <div className="space-y-4 mb-6">
              <div 
                className={`p-4 border rounded-xl cursor-pointer flex items-center gap-3 transition-all ${formData.identificacao === 'anonimo' ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'hover:border-gray-400'}`}
                onClick={() => handleSelect('identificacao', 'anonimo')}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.identificacao === 'anonimo' ? 'border-blue-600' : 'border-gray-300'}`}>
                  {formData.identificacao === 'anonimo' && <div className="w-3 h-3 bg-blue-600 rounded-full"></div>}
                </div>
                <div>
                  <p className="font-bold text-gray-800">Enviar Anônimo</p>
                  <p className="text-sm text-gray-500">Seus dados não aparecem no relato público.</p>
                </div>
              </div>

              <div 
                className={`p-4 border rounded-xl cursor-pointer flex items-center gap-3 transition-all ${formData.identificacao === 'identificado' ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'hover:border-gray-400'}`}
                onClick={() => handleSelect('identificacao', 'identificado')}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.identificacao === 'identificado' ? 'border-blue-600' : 'border-gray-300'}`}>
                  {formData.identificacao === 'identificado' && <div className="w-3 h-3 bg-blue-600 rounded-full"></div>}
                </div>
                <div>
                  <p className="font-bold text-gray-800">Quero me Identificar</p>
                  <p className="text-sm text-gray-500">Ajuda na credibilidade da denúncia.</p>
                </div>
              </div>
            </div>

            {formData.identificacao === 'identificado' && (
               <div className="space-y-3 mb-6 animate-fade-in pl-1">
                 <input 
                   type="text" 
                   placeholder="Seu Nome Completo" 
                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                   onChange={(e) => handleSelect('nome', e.target.value)}
                 />
                 <input 
                   type="text" 
                   placeholder="Seu WhatsApp" 
                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                   onChange={(e) => handleSelect('whatsapp', e.target.value)}
                 />
               </div>
            )}

            <div className="mt-8 flex justify-between items-center">
              <button onClick={prevStep} className="text-gray-500 font-medium hover:text-gray-700 px-4 py-2">Voltar</button>
              <button 
                onClick={handleSubmit}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg shadow-green-200 transform hover:-translate-y-1"
              >
                ✅ Finalizar e Enviar
              </button>
            </div>
          </div>
        )}

        {/* TELA DE SUCESSO (PROTOCOLO) */}
        {step === 5 && (
          <div className="text-center py-8 animate-fade-in">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">🎉</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Registrado!</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">Sua participação foi contabilizada. Compartilhe o resumo para garantir que sua voz chegue até nós.</p>
            
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl mb-8 inline-block shadow-inner">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Seu Protocolo</p>
              <p className="text-3xl font-mono font-bold text-blue-600 tracking-wider">{protocolo}</p>
            </div>

            <a 
              href={gerarLinkWhatsapp()}
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition shadow-lg shadow-green-100 flex items-center justify-center gap-2 mb-4"
            >
              <span>📲</span> Compartilhar Resumo no WhatsApp
            </a>
            
            <button 
              onClick={() => window.location.reload()}
              className="text-gray-500 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition"
            >
              Voltar ao Início
            </button>
          </div>
        )}

      </div>
    </div>
  );
}