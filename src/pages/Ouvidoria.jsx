import React, { useState } from 'react';

export default function Ouvidoria() {
  // Estados de Controle
  const [identificacao, setIdentificacao] = useState('identificado'); // 'identificado' ou 'anonimo'
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [protocolo, setProtocolo] = useState('');

  // Dados do Formulário
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    bairro: '',
    categoria: '',
    descricao: '',
    arquivo: null
  });

  // Lista de Bairros
  const bairros = [
    "Centro", "Jardim São Francisco", "Jardim Imperial", "Jardim Morumbi",
    "Vila Vera", "Vila Dom Pedro", "Cohab I", "Cohab II",
    "Distrito Industrial", "Zona Rural", "Outro"
  ];

  // GRUPOS DE CATEGORIAS
  const catUrbana = [
    { icone: "🚧", nome: "Infraestrutura", desc: "Buracos, Calçadas, Obras" },
    { icone: "💡", nome: "Iluminação", desc: "Lâmpada queimada, Escuridão" },
    { icone: "🧹", nome: "Limpeza", desc: "Lixo, Entulho, Mato Alto" },
    { icone: "💧", nome: "Água e Esgoto", desc: "Vazamentos, Falta d'água" },
    { icone: "🚜", nome: "Zona Rural", desc: "Estradas, Pontes, Mata-burros" },
    { icone: "🐶", nome: "Causa Animal", desc: "Abandonos, Maus tratos" }
  ];

  const catAdmin = [
    { icone: "💊", nome: "Saúde", desc: "Postinho, Remédios, Demora" },
    { icone: "🎓", nome: "Educação", desc: "Escolas, Creches, Transporte" },
    { icone: "🛡️", nome: "Segurança", desc: "Patrulhamento, Vandalismo" },
    { icone: "🏛️", nome: "Prefeitura", desc: "Atendimento, Burocracia" }
  ];

  // --- LÓGICA DA MÁSCARA DE TELEFONE ---
  const mascaraTelefone = (value) => {
    return value
      .replace(/\D/g, "") // Remove tudo o que não é dígito
      .replace(/^(\d{2})(\d)/g, "($1) $2") // Coloca parênteses em volta dos dois primeiros dígitos
      .replace(/(\d)(\d{4})$/, "$1-$2"); // Coloca hífen entre o quarto e o quinto dígitos
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Se for o campo whatsapp, aplica a máscara
    if (name === 'whatsapp') {
      setFormData(prev => ({ ...prev, [name]: mascaraTelefone(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const selectCategoria = (catNome) => {
    setFormData(prev => ({ ...prev, categoria: catNome }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.categoria) {
      alert("Por favor, selecione uma categoria (clique nos ícones).");
      return;
    }
    setEnviando(true);
    
    // Simulação de Envio
    setTimeout(() => {
      const numProtocolo = "NP" + Math.floor(Math.random() * 100000);
      setProtocolo(numProtocolo);
      setEnviando(false);
      setSucesso(true);
      window.scrollTo(0, 0);
    }, 2000);
  };

  // TELA DE SUCESSO
  if (sucesso) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 animate-in fade-in">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 max-w-lg w-full text-center shadow-2xl border border-slate-100">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✅</div>
          <h2 className="text-2xl font-black text-[#002B5B] mb-2">Recebemos sua Demanda!</h2>
          <p className="text-slate-500 mb-6">Protocolo gerado com sucesso.</p>
          
          <div className="bg-slate-50 rounded-xl p-4 mb-8 border border-slate-200">
            <p className="text-3xl font-black text-[#002B5B] tracking-widest">{protocolo}</p>
          </div>

          <a 
            href={`https://wa.me/?text=Acabei de registrar uma demanda sobre ${formData.categoria} no OuveNup. Fiscalize também: https://ouvenup.vercel.app`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20bd5a] transition mb-3"
          >
            Compartilhar no WhatsApp 📲
          </a>
          <button onClick={() => window.location.reload()} className="text-slate-400 text-sm font-bold hover:text-[#002B5B]">
            Novo Registro
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen p-4 md:p-8 pb-20 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-10 pt-4">
          <h1 className="text-3xl md:text-5xl font-black text-[#002B5B] mb-4">Canal de Fiscalização</h1>
          <p className="text-slate-500 text-lg">Escolha abaixo como deseja prosseguir.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* 1. SELEÇÃO DE IDENTIDADE */}
          <div className="grid md:grid-cols-2 gap-4">
            
            {/* Opção Identificado */}
            <div 
              onClick={() => setIdentificacao('identificado')}
              className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 relative overflow-hidden ${identificacao === 'identificado' ? 'bg-white border-[#002B5B] shadow-xl transform scale-[1.02]' : 'bg-slate-100 border-transparent opacity-60 hover:opacity-100'}`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${identificacao === 'identificado' ? 'bg-[#002B5B]' : 'bg-slate-400'}`}>✓</div>
                <h3 className="font-black text-[#002B5B] text-lg uppercase">Quero me Identificar</h3>
              </div>
              <p className="text-slate-600 text-sm pl-12">
                Receba atualizações do protocolo pelo WhatsApp. Recomendado para cobrar soluções.
              </p>
            </div>

            {/* Opção Anônimo */}
            <div 
              onClick={() => setIdentificacao('anonimo')}
              className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 relative overflow-hidden ${identificacao === 'anonimo' ? 'bg-white border-amber-500 shadow-xl transform scale-[1.02]' : 'bg-slate-100 border-transparent opacity-60 hover:opacity-100'}`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${identificacao === 'anonimo' ? 'bg-amber-500' : 'bg-slate-400'}`}>✓</div>
                <h3 className="font-black text-amber-600 text-lg uppercase">Prefiro Anônimo</h3>
              </div>
              <p className="text-slate-600 text-sm pl-12">
                Sua identidade é preservada. A cobrança será feita publicamente pela nossa equipe.
              </p>
            </div>
          </div>

          {/* CAMPOS DE DADOS PESSOAIS */}
          {identificacao === 'identificado' && (
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 animate-in slide-in-from-top-2">
              <h4 className="text-[#002B5B] font-bold mb-4 uppercase text-sm tracking-wider">Seus Dados</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="nome"
                  required 
                  placeholder="Seu Nome Completo"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none focus:border-[#002B5B]"
                  onChange={handleInputChange}
                />
                
                {/* INPUT COM MÁSCARA APLICADA */}
                <input 
                  type="tel" 
                  name="whatsapp"
                  required 
                  value={formData.whatsapp} // O valor vem do estado formatado
                  placeholder="Whatsapp: (XX) 99999-9999"
                  maxLength="15" // Limite de caracteres para evitar erros
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none focus:border-[#002B5B]"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {/* 2. FUNIL DE CATEGORIAS */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-lg border border-slate-100">
            <h3 className="text-xl font-black text-[#002B5B] mb-6 flex items-center gap-2">
              <span>📍</span> Qual é o problema?
            </h3>

            {/* Grupo 1: Na Cidade */}
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Problemas na Cidade / Estrutura</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {catUrbana.map((cat, idx) => (
                <div 
                  key={idx}
                  onClick={() => selectCategoria(cat.nome)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md flex flex-col items-center text-center gap-2 ${formData.categoria === cat.nome ? 'border-blue-500 bg-blue-50' : 'border-slate-100 bg-slate-50 hover:border-blue-200'}`}
                >
                  <div className="text-3xl">{cat.icone}</div>
                  <div>
                    <div className="font-bold text-[#002B5B] text-sm leading-tight">{cat.nome}</div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-tight hidden md:block">{cat.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Grupo 2: Institucional */}
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Serviços Públicos / Gestão</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {catAdmin.map((cat, idx) => (
                <div 
                  key={idx}
                  onClick={() => selectCategoria(cat.nome)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md flex flex-col items-center text-center gap-2 ${formData.categoria === cat.nome ? 'border-blue-500 bg-blue-50' : 'border-slate-100 bg-slate-50 hover:border-blue-200'}`}
                >
                  <div className="text-3xl">{cat.icone}</div>
                  <div>
                    <div className="font-bold text-[#002B5B] text-sm leading-tight">{cat.nome}</div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-tight hidden md:block">{cat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. DETALHES FINAIS */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-lg border border-slate-100">
            <h3 className="text-xl font-black text-[#002B5B] mb-6 flex items-center gap-2">
              <span>📝</span> Detalhes
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-slate-700 font-bold mb-2 ml-1">Onde fica? (Bairro/Local)</label>
                <div className="relative">
                  <select 
                    name="bairro" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 appearance-none outline-none focus:border-[#002B5B]"
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione...</option>
                    {bairros.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2 ml-1">Descrição do Problema</label>
                <textarea 
                  name="descricao" 
                  required 
                  rows="3" 
                  placeholder="Conte o que aconteceu..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none focus:border-[#002B5B]"
                  onChange={handleInputChange}
                ></textarea>
              </div>

               {/* Botão de Envio */}
              <button 
                type="submit" 
                disabled={enviando}
                className="w-full bg-[#002B5B] text-white font-black text-lg py-5 rounded-xl shadow-xl hover:bg-blue-900 transition mt-4"
              >
                {enviando ? 'Enviando...' : 'REGISTRAR DEMANDA 🚀'}
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}