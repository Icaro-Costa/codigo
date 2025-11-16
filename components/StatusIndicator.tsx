
import React from 'react';
import { PH_HABITABLE_MIN, PH_HABITABLE_MAX } from '../types';

interface StatusIndicatorProps {
  latestPh?: number;
  loading: boolean;
}

const DropletIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 inline-block mr-2 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 7a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        <path d="M10 1.5A8.5 8.5 0 1018.5 10 8.5 8.5 0 0010 1.5zM10 16a6 6 0 110-12 6 6 0 010 12z" />
        <path d="M10 5a.5.5 0 01.5.5v3.5a.5.5 0 01-1 0V5.5A.5.5 0 0110 5z" />
    </svg>
);

const SensorIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-12 w-12 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 8l2-2 2 2m0 8l2 2 2-2M15 9l-2-2-2 2m0 8l-2 2-2-2" />
    </svg>
);

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ latestPh, loading }) => {
  if (loading) {
     return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg h-full text-center animate-pulse">
            <div className="w-16 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-24 h-8 bg-gray-300 rounded mb-4"></div>
            <div className="w-32 h-6 bg-gray-300 rounded"></div>
        </div>
     );
  }
  
  const isHabitable = latestPh !== undefined && latestPh >= PH_HABITABLE_MIN && latestPh <= PH_HABITABLE_MAX;
  const statusText = isHabitable ? 'Habitável' : 'Não Habitável';
  const bgColor = isHabitable ? 'bg-green-100' : 'bg-red-100';
  const textColor = isHabitable ? 'text-moss-green' : 'text-red-700';
  const iconColor = isHabitable ? 'text-moss-green' : 'text-red-600';

  return (
    <div className={`flex flex-col items-center justify-center ${bgColor} p-6 rounded-lg h-full text-center transition-colors duration-500`}>
        <SensorIcon className={`${iconColor} mb-3`} />
        <p className="text-sm font-semibold text-earthy-brown mb-1">Status Atual</p>
        <p className={`text-4xl font-bold ${textColor}`}>
            {latestPh !== undefined ? latestPh.toFixed(2) : '--'}
            <span className="text-2xl ml-1">pH</span>
        </p>
        <div className={`mt-3 px-4 py-1.5 rounded-full text-lg font-bold ${textColor}`}>
            {statusText}
        </div>
    </div>
  );
};
