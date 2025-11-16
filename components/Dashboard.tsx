
import React from 'react';
import type { PhDataPoint } from '../types';
import { WeekSelection } from '../types';
import { PhChart } from './PhChart';
import { StatusIndicator } from './StatusIndicator';

interface DashboardProps {
  phData: PhDataPoint[];
  loading: boolean;
  error: string | null;
  activeWeek: WeekSelection;
  setActiveWeek: (week: WeekSelection) => void;
}

const WeekButton: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  const baseClasses = "px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive-green";
  const activeClasses = "bg-moss-green text-white shadow-lg";
  const inactiveClasses = "bg-white text-earthy-brown hover:bg-olive-green hover:text-white";
  return (
    <button onClick={onClick} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      {label}
    </button>
  );
};

export const Dashboard: React.FC<DashboardProps> = ({ phData, loading, error, activeWeek, setActiveWeek }) => {
  const latestPh = phData.length > 0 ? phData[phData.length - 1].ph : undefined;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl md:text-2xl font-bold text-moss-green">
          Monitoramento do pH da Água do Mangue
        </h2>
        <div className="flex items-center gap-2">
          <WeekButton 
            label="Semana Atual"
            isActive={activeWeek === WeekSelection.Current}
            onClick={() => setActiveWeek(WeekSelection.Current)}
          />
          <WeekButton
            label="Semana Anterior"
            isActive={activeWeek === WeekSelection.Previous}
            onClick={() => setActiveWeek(WeekSelection.Previous)}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2">
          {loading && <div className="h-80 flex justify-center items-center text-olive-green">Carregando dados...</div>}
          {error && <div className="h-80 flex justify-center items-center text-red-600 bg-red-100 rounded-lg p-4">{error}</div>}
          {!loading && !error && phData.length > 0 && <PhChart data={phData} />}
          {!loading && !error && phData.length === 0 && <div className="h-80 flex justify-center items-center text-olive-green">Nenhum dado disponível.</div>}
        </div>
        <div className="lg:col-span-1">
          <StatusIndicator latestPh={latestPh} loading={loading}/>
        </div>
      </div>
    </div>
  );
};
