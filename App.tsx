
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
import { fetchPhData } from './services/dataService';
import type { PhDataPoint } from './types';
import { WeekSelection } from './types';

const App: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState<WeekSelection>(WeekSelection.Current);
  const [phData, setPhData] = useState<PhDataPoint[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPhData(activeWeek);
      setPhData(data);
    } catch (err) {
      setError('Falha ao carregar os dados. Tente novamente mais tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [activeWeek]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (activeWeek === WeekSelection.Current) {
      const interval = setInterval(() => {
        loadData();
      }, 5000); // Auto-refresh every 5 seconds for the current week

      return () => clearInterval(interval); // Cleanup interval on component unmount or when week changes
    }
  }, [activeWeek, loadData]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-earthy-brown">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8 p-6 bg-white/50 rounded-lg shadow-sm">
           <h2 className="text-xl md:text-2xl font-semibold text-olive-green mb-2">Bem-vindo ao Painel de Monitoramento</h2>
           <p className="text-sm md:text-base max-w-3xl mx-auto">
             Este painel foi desenvolvido para acompanhar a qualidade da água do manguezal de Igarassu. Acompanhe conosco o equilíbrio ambiental e ajude a preservar nossos ecossistemas!
           </p>
        </div>
        <Dashboard 
          phData={phData}
          loading={loading}
          error={error}
          activeWeek={activeWeek}
          setActiveWeek={setActiveWeek}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
