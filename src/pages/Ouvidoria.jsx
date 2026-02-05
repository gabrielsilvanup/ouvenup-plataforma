import React, { useState } from 'react';

export default function Ouvidoria() {
  const [step, setStep] = useState(1);
  const [protocolo, setProtocolo] = useState(null);
  const [isEnviando, setIsEnviando] = useState(false);
  
  // Estado para guardar os dados do formulário
  const [formData, setFormData] = useState({
    tipo: '',
    natureza: '', // 'geografica' ou 'administrativa'
    bairro: '',
    endereco: '',
    orgao: '',
    unidade_especifica: '',
    descricao: '',
    identificacao: 'anonimo', // 'anonimo' ou 'identificado'
    nome: '',
    whatsapp: ''
  });

  // Opções de Classificação
  const tipos = [
    { label: 'Denúncia', icon: '🚨' },
    { label: 'Ideia de Lei', icon: '💡' },
    { label: 'Reclamação', icon: '😤' },
    { label: 'Sugestão', icon: '✨' },
    { label: 'Outros', icon: '📝' }
  ];
  
  // Opções Administrativas
  const orgaos = [
    'Prefeitura', 'Câmara Municipal', 'Educação', 'Saúde', 
    'Segurança', 'Obras/Infraestrutura', 'Meio Ambiente', 'Outros'
  ];

  // Lista OFICIAL de Bairros de Nuporanga (Respeitando a ordem da lista fornecida)
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

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(step + 1);
  };
  
  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsEnviando(true);
    const novoProtocolo = `NUP-${Math.floor(Math.random() * 10000)}-${new Date().getFullYear()}`;
    
    const dadosParaPlanilha = {
      protocolo: novoProtocolo,
      tipo: formData.tipo,
      natureza: formData.natureza,
      bairro: formData.bairro,
      orgao: formData.orgao,
      unidade_especifica: formData.unidade_especifica,
      descricao: formData.descricao,
      identificacao: formData.identificacao,
      nome: formData.nome,
      whatsapp: formData.whatsapp
    };

    try {
      const URL_GOOGLE_SHEETS = "https://script.google.com/macros/s/AKfycbyMd8-2ceGPrf8gyIkstLwXhqAdYNct7-_57Y8eknR4Glq-h31HcTxZaOJUJMo1Xdy5dA/exec";

      await fetch(URL_GOOGLE_SHEETS, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaPlanilha),
      });

      setProtocolo(novoProtocolo);
      setIsEnviando(false);
      nextStep();
    } catch (error) {
      console.error("Erro ao enviar para a planilha:", error);
      setProtocolo(novoProtocolo);
      setIsEnviando(false);
      nextStep();
    }
  };

  const gerarLinkWhatsapp = () => {
    let texto = `*NOVA DEMANDA - OUVENUP*\n`;
    texto += `*Protocolo:* ${protocolo}\n`;
    texto += `*Tipo:* ${formData.tipo}\n`;
    
    if (formData.natureza === 'geografica') {
      texto += `*Local:* ${formData.bairro}\n`;
      if (formData.endereco) texto += `*Endereço:* ${formData.endereco}\n`;
    } else {
      texto += `*Órgão:* ${formData.orgao}\n`;
      if (formData.unidade_especifica) texto += `*Unidade:* ${formData.unidade_especifica}\n`;
    }
    
    texto += `*Relato:* ${formData.descricao}\n`;
    
    if (formData.identificacao === 'identificado') {
      texto += `*Cidadão:* ${formData.nome} (${formData.whatsapp})\n`;
    } else {
      texto += `*Cidadão:* Anônimo\n`;
    }

    return `https://wa.me/?text=${encodeURIComponent(texto)}`;
  };

  return (
    <div className="max-w-3xl mx-auto pb-20 pt-10 px-4">
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-[#002B5B] mb-2">Central de Registros</h2>
        <p className="text-slate-500">Exerça sua cidadania de forma rápida e segura.</p>
      </div>

      {/* Stepper Visual */}
      <div className="mb-12 relative flex justify-between items-center px-4 md:px-12">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 -z-10"></div>
        <div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-[#002B5B] -z-10 transition-all duration-500"
          style={{ width: `${((step - 1) / 4) * 100}%` }}
        ></div>

        {[1, 2, 3, 4].map((num) => (
          <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-4 ${step >= num ? 'bg-[#002B5B] border-[#002B5B] text-white' : 'bg-white border-slate-200 text-slate-400'}`}>
            {step > num ? '✓' : num}
          </div>
        ))}
      </div>

      <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
        
        {/* ETAPA 1: CLASSIFICAÇÃO */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="text-blue-500">1.</span> Qual o motivo do registro?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tipos.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { handleSelect('tipo', item.label); nextStep(); }}
                  className="group p-5 text-left border-2 border-slate-100 rounded-2xl hover:border-[#002B5B] hover:bg-blue-50/50 transition-all active:scale-95"
                >
                  <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="font-bold text-slate-700 group-hover:text-[#002B5B]">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 2: LOCALIZAÇÃO */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="text-blue-500">2.</span> Onde ocorreu?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => handleSelect('natureza', 'geografica')}
                className={`flex-1 py-4 px-6 rounded-xl font-bold border-2 transition-all flex items-center justify-center gap-2 ${formData.natureza === 'geografica' ? 'bg-[#002B5B] text-white border-[#002B5B] shadow-lg' : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'}`}
              >
                <span>📍</span> Na Cidade
              </button>
              <button 
                onClick={() => handleSelect('natureza', 'administrativa')}
                className={`flex-1 py-4 px-6 rounded-xl font-bold border-2 transition-all flex items-center justify-center gap-2 ${formData.natureza === 'administrativa' ? 'bg-[#002B5B] text-white border-[#002B5B] shadow-lg' : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300'}`}
              >
                <span>🏛️</span> Órgão Público
              </button>
            </div>

            {formData.natureza === 'geografica' && (
              <div className="space-y-5 animate-in fade-in">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Bairro <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:bg-white transition-all text-slate-700 font-medium"
                      onChange={(e) => handleSelect('bairro', e.target.value)}
                      value={formData.bairro}
                    >
                      <option value="">Selecione o bairro...</option>
                      {bairros.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Endereço (Opcional)</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:bg-white transition-all"
                    placeholder="Rua, número ou ponto de referência"
                    onChange={(e) => handleSelect('endereco', e.target.value)}
                    value={formData.endereco}
                  />
                </div>
              </div>
            )}

            {formData.natureza === 'administrativa' && (
              <div className="space-y-5 animate-in fade-in">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Órgão Relacionado <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:bg-white transition-all text-slate-700 font-medium"
                      onChange={(e) => handleSelect('orgao', e.target.value)}
                      value={formData.orgao}
                    >
                      <option value="">Selecione o setor...</option>
                      {orgaos.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Unidade Específica (Opcional)</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:bg-white transition-all"
                    placeholder="Ex: ESF Vila Nova, Escola Maria Abadia..."
                    onChange={(e) => handleSelect('unidade_especifica', e.target.value)}
                    value={formData.unidade_especifica}
                  />
                </div>
              </div>
            )}

            <div className="mt-10 flex justify-between items-center pt-6 border-t border-slate-100">
              <button onClick={prevStep} className="text-slate-400 font-bold hover:text-[#002B5B] px-4 py-2">Voltar</button>
              <button 
                onClick={nextStep} 
                disabled={!formData.natureza || (formData.natureza === 'geografica' && !formData.bairro) || (formData.natureza === 'administrativa' && !formData.orgao)}
                className="bg-[#002B5B] text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50 hover:bg-blue-900 shadow-lg shadow-blue-900/20"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* ETAPA 3: RELATO */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="text-blue-500">3.</span> Relato dos fatos
            </h3>
            
            <textarea
              className="w-full h-40 p-5 bg-slate-50 border border-slate-200 rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:bg-white resize-none transition-all text-slate-700 leading-relaxed"
              placeholder="Descreva o ocorrido com o máximo de detalhes..."
              value={formData.descricao}
              onChange={(e) => handleSelect('descricao', e.target.value)}
            ></textarea>

            <label className="block w-full border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center cursor-pointer hover:bg-slate-50 hover:border-blue-400 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl group-hover:scale-110 transition-transform">📷</div>
              <span className="block font-bold text-slate-600 group-hover:text-blue-600">Adicionar Mídia</span>
              <span className="text-sm text-slate-400">Fotos ou vídeos auxiliam na fiscalização (Opcional)</span>
            </label>

            <div className="mt-10 flex justify-between items-center pt-6 border-t border-slate-100">
              <button onClick={prevStep} className="text-slate-400 font-bold hover:text-[#002B5B] px-4 py-2">Voltar</button>
              <button 
                onClick={nextStep}
                disabled={!formData.descricao}
                className="bg-[#002B5B] text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50 hover:bg-blue-900 shadow-lg shadow-blue-900/20"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* ETAPA 4: FINALIZAÇÃO */}
        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="text-blue-500">4.</span> Identificação
            </h3>
            
            <div className="space-y-4 mb-8">
              <div 
                className={`p-6 border-2 rounded-2xl cursor-pointer flex items-center gap-4 transition-all ${formData.identificacao === 'anonimo' ? 'border-[#002B5B] bg-blue-50/30' : 'border-slate-100 hover:border-slate-300'}`}
                onClick={() => handleSelect('identificacao', 'anonimo')}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.identificacao === 'anonimo' ? 'border-[#002B5B]' : 'border-slate-300'}`}>
                  {formData.identificacao === 'anonimo' && <div className="w-3 h-3 bg-[#002B5B] rounded-full"></div>}
                </div>
                <div>
                  <p className="font-bold text-slate-800">Enviar Anônimo</p>
                  <p className="text-sm text-slate-500">Sua identidade será preservada.</p>
                </div>
              </div>

              <div 
                className={`p-6 border-2 rounded-2xl cursor-pointer flex items-center gap-4 transition-all ${formData.identificacao === 'identificado' ? 'border-[#002B5B] bg-blue-50/30' : 'border-slate-100 hover:border-slate-300'}`}
                onClick={() => handleSelect('identificacao', 'identificado')}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.identificacao === 'identificado' ? 'border-[#002B5B]' : 'border-slate-300'}`}>
                  {formData.identificacao === 'identificado' && <div className="w-3 h-3 bg-[#002B5B] rounded-full"></div>}
                </div>
                <div>
                  <p className="font-bold text-slate-800">Identificar-me</p>
                  <p className="text-sm text-slate-500">Necessário para receber retornos específicos.</p>
                </div>
              </div>
            </div>

            {formData.identificacao === 'identificado' && (
               <div className="space-y-4 mb-8 animate-in fade-in pl-4 border-l-4 border-slate-200">
                 <input 
                   type="text" 
                   placeholder="Nome Completo" 
                   className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#002B5B]"
                   onChange={(e) => handleSelect('nome', e.target.value)}
                 />
                 <input 
                   type="text" 
                   placeholder="WhatsApp (DDD + Número)" 
                   className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#002B5B]"
                   onChange={(e) => handleSelect('whatsapp', e.target.value)}
                 />
               </div>
            )}

            <div className="mt-10 flex justify-between items-center pt-6 border-t border-slate-100">
              <button onClick={prevStep} className="text-slate-400 font-bold hover:text-[#002B5B] px-4 py-2">Voltar</button>
              <button 
                onClick={handleSubmit}
                disabled={isEnviando}
                className="bg-emerald-500 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-600 transition shadow-xl shadow-emerald-500/30 flex items-center gap-2 transform hover:-translate-y-1"
              >
                {isEnviando ? 'Enviando...' : '✅ Finalizar Registro'}
              </button>
            </div>
          </div>
        )}

        {/* TELA DE SUCESSO (PROTOCOLO) */}
        {step === 5 && (
          <div className="text-center py-10 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl shadow-lg shadow-emerald-100">
              🎉
            </div>
            <h2 className="text-4xl font-black text-slate-800 mb-4">Registro Realizado!</h2>
            <p className="text-slate-500 mb-10 max-w-md mx-auto text-lg">Sua voz ajuda a transformar Nuporanga. Guarde o seu número de protocolo.</p>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl mb-10 inline-block shadow-inner">
              <p className="text-xs text-slate-400 uppercase tracking-[0.2em] font-bold mb-2">Protocolo de Registro</p>
              <p className="text-4xl font-mono font-black text-[#002B5B] tracking-wider select-all">{protocolo}</p>
            </div>

            <a 
              href={gerarLinkWhatsapp()}
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-[#25D366] text-white font-bold py-5 rounded-2xl hover:bg-[#20bd5a] transition shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 mb-6 transform hover:-translate-y-1"
            >
              <span className="text-2xl">📲</span> Compartilhar no WhatsApp
            </a>
            
            <button 
              onClick={() => window.location.reload()}
              className="text-slate-400 hover:text-[#002B5B] font-bold py-2"
            >
              Voltar ao Início
            </button>
          </div>
        )}

      </div>
    </div>
  );
}