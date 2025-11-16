
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceArea } from 'recharts';
import type { PhDataPoint } from '../types';
import { PH_HABITABLE_MIN, PH_HABITABLE_MAX } from '../types';

interface PhChartProps {
  data: PhDataPoint[];
}

export const PhChart: React.FC<PhChartProps> = ({ data }) => {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="day" stroke="#4d400c" />
          <YAxis stroke="#4d400c" domain={[5, 10]} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #4d400c',
              borderRadius: '0.5rem'
            }} 
            labelStyle={{ color: '#3a640f', fontWeight: 'bold' }}
          />
          <Legend />
          <ReferenceArea y1={PH_HABITABLE_MIN} y2={PH_HABITABLE_MAX} fill="#3a640f" fillOpacity={0.1} label={{ value: 'Zona Habitável', position: 'insideTopLeft', fill: '#3a640f', fontSize: 12 }}/>
          <Line type="monotone" dataKey="ph" name="Nível de pH" stroke="#687940" strokeWidth={3} activeDot={{ r: 8 }} dot={{r: 5, fill: '#687940'}}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
