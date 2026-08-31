import { ArrowUpRight, Droplets, ThermometerSun } from 'lucide-react';
import RiskGauge from './RiskGauge.jsx';

export default function DashboardPreview() {
  return (
    <aside className="glass-panel w-full rounded-lg border border-white/70 p-5 shadow-glow sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">Current Heat Risk</p>
          <h2 className="mt-2 text-4xl font-black text-navy">HIGH</h2>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-orange-700">
          <ArrowUpRight size={22} aria-hidden="true" />
        </div>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-[0.95fr,1.05fr] sm:items-center">
        <RiskGauge score={87} label="Risk Probability" />
        <div className="space-y-3">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3 text-slate-500">
              <ThermometerSun size={19} aria-hidden="true" />
              <span className="text-sm font-bold">Temperature</span>
            </div>
            <p className="mt-2 text-4xl font-black">38°C</p>
            <p className="text-sm font-semibold text-orange-700">Feels Like 42°C</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3 text-slate-500">
              <Droplets size={19} aria-hidden="true" />
              <span className="text-sm font-bold">Humidity</span>
            </div>
            <p className="mt-2 text-3xl font-black">61%</p>
          </div>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-full bg-orange-100">
        <div className="h-2 w-5/6 animate-pulsebar rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500" />
      </div>
      <p className="mt-3 text-xs font-semibold text-slate-500">Simulated dashboard values for academic demonstration.</p>
    </aside>
  );
}
