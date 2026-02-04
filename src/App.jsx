import React from 'react';

function App() {
  return (
    // Esta div cinza usa Tailwind. Se o Tailwind falhar, ela ficará branca.
    <div className="min-h-screen bg-gray-100 flex items-center justify-center" style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      
      <div className="text-center" style={{ textAlign: 'center' }}>
        
        {/* O título abaixo tenta usar Tailwind (text-blue-600), mas tem um "seguro" em azul via style */}
        <h1 
          className="text-5xl font-bold text-blue-600 mb-4" 
          style={{ color: '#2563eb', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}
        >
          OuveNup
        </h1>

        <p className="text-xl text-gray-700" style={{ color: '#374151', fontSize: '1.25rem' }}>
          A plataforma de cidadania de Nuporanga.
        </p>

        <div className="mt-8" style={{ marginTop: '2rem' }}>
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Iniciar Acesso
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;