
export interface PhDataPoint {
  day: string;
  ph: number;
}

export enum WeekSelection {
  Current = 'current',
  Previous = 'previous',
}

export const PH_HABITABLE_MIN = 6.5;
export const PH_HABITABLE_MAX = 8.5;
