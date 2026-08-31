import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { temperatureTrend } from '../data/climateData.js';

export default function TemperatureChart() {
  return (
    <div className="h-80 w-full rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={temperatureTrend} margin={{ top: 18, right: 12, bottom: 8, left: -18 }}>
          <defs>
            <linearGradient id="temperatureGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.42} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(value) => `${value}°`}
            tick={{ fill: '#64748b', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value, name) => [`${value}°C`, name === 'temperature' ? 'Temperature' : 'Feels Like']}
            contentStyle={{ borderRadius: 8, borderColor: '#fed7aa' }}
          />
          <Area
            type="monotone"
            dataKey="feelsLike"
            stroke="#ef4444"
            strokeWidth={2}
            fill="transparent"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="temperature"
            stroke="#f97316"
            strokeWidth={4}
            fill="url(#temperatureGradient)"
            activeDot={{ r: 7, fill: '#f97316', stroke: '#fff', strokeWidth: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
