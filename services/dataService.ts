import type { PhDataPoint, WeekSelection } from '../types';
import { WeekSelection as WeekSelectionEnum } from '../types';

// --- Dados Manuais ---

// Dados definidos manualmente para a "Semana Anterior"
const previousWeekData: PhDataPoint[] = [
    { day: 'Seg', ph: 17.2 },
    { day: 'Ter', ph: 7.1 },
    { day: 'Qua', ph: 7.3 },
    { day: 'Qui', ph: 17.0 },
    { day: 'Sex', ph: 6.8 },
    { day: 'Sáb', ph: 6.9 },
    { day: 'Dom', ph: 17.2 },
];

// Dados definidos manualmente para a "Semana Atual"
const currentWeekData: PhDataPoint[] = [
    { day: 'Seg', ph: 18.0 },
    { day: 'Ter', ph: 8.2 },
    { day: 'Qua', ph: 7.9 },
    { day: 'Qui', ph: 18.1 },
    { day: 'Sex', ph: 6.4 },
    { day: 'Sáb', ph: 7.8 },
    { day: 'Dom', ph: 17.9 },
];

export const fetchPhData = (week: WeekSelection): Promise<PhDataPoint[]> => {
    return new Promise((resolve) => {
        // Simula o tempo de espera da rede
        setTimeout(() => {
            if (week === WeekSelectionEnum.Current) {
                resolve(currentWeekData);
            } else {
                resolve(previousWeekData);
            }
        }, 500);
    });
};