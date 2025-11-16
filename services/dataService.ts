
import type { PhDataPoint, WeekSelection } from '../types';
import { WeekSelection as WeekSelectionEnum } from '../types';

const generateRandomPh = (): number => {
  // Generate pH values mostly within the 5.5-9.5 range
  // with a higher chance of being in the habitable zone (6.5-8.5)
  const isHabitable = Math.random() > 0.3; // 70% chance to be habitable
  if (isHabitable) {
    return parseFloat((6.5 + Math.random() * 2).toFixed(2)); // 6.5 to 8.5
  } else {
    // Generate values outside the habitable range
    return Math.random() > 0.5
      ? parseFloat((5.5 + Math.random()).toFixed(2)) // 5.5 to 6.5
      : parseFloat((8.5 + Math.random()).toFixed(2)); // 8.5 to 9.5
  }
};

const daysOfWeek = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

const generateWeekData = (): PhDataPoint[] => {
  return daysOfWeek.map(day => ({
    day,
    ph: generateRandomPh(),
  }));
};

// Store previous week data to keep it consistent
const previousWeekData = generateWeekData();

export const fetchPhData = (week: WeekSelection): Promise<PhDataPoint[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (week === WeekSelectionEnum.Current) {
        resolve(generateWeekData());
      } else {
        resolve(previousWeekData);
      }
    }, 500); // Simulate network delay
  });
};
