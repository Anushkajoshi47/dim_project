import { AlertTriangle, Clock, Info } from 'lucide-react';
import MetricCard from '../components/MetricCard.jsx';
import RiskBadge from '../components/RiskBadge.jsx';
import RiskGauge from '../components/RiskGauge.jsx';
import SEO from '../components/SEO.jsx';
import SocialShare from '../components/SocialShare.jsx';
import TemperatureChart from '../components/TemperatureChart.jsx';
import { currentConditions, regionalRisk } from '../data/climateData.js';

export default function Monitor() {
  return (
    <>
      <SEO
        title="Heatwave Monitoring Dashboard | ClimaSense AI"
        description="Explore simulated climate indicators, regional heat risk and weather intelligence in the ClimaSense AI heatwave monitoring dashboard."
        keywords="heatwave monitoring, climate monitoring, heat risk dashboard, extreme heat warning, weather intelligence"
        path="/monitor"
      />

      <section className="bg-white">
        <div className="page-shell section-pad">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Demo Data</span>
              <h1 className="mt-5 text-4xl font-black sm:text-5xl">Heatwave Monitoring Dashboard</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Explore simulated climate indicators and regional heat-risk conditions for a realistic frontend
                climate intelligence product experience.
              </p>
            </div>
            <SocialShare title="ClimaSense AI Heatwave Monitoring Dashboard" />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentConditions.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="page-shell grid gap-6 lg:grid-cols-[0.85fr,1.15fr]">
          <article className="rounded-lg border border-orange-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">Current Risk</p>
                <h2 className="mt-3 text-5xl font-black text-navy">HIGH</h2>
              </div>
              <AlertTriangle className="text-orange-600" size={34} aria-hidden="true" />
            </div>
            <div className="mt-8">
              <RiskGauge score={87} label="HIGH" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-orange-50 p-4">
                <p className="text-sm font-bold text-orange-800">87% estimated risk</p>
                <p className="mt-1 text-xs text-orange-700">Simulated risk probability</p>
              </div>
              <div className="rounded-lg bg-slate-100 p-4">
                <p className="flex items-center gap-2 text-sm font-bold text-slate-800">
                  <Clock size={16} aria-hidden="true" />
                  Next assessment
                </p>
                <p className="mt-1 text-xs text-slate-600">6 hours</p>
              </div>
            </div>
          </article>

          <article>
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-black">7-Day Temperature Chart</h2>
                <p className="mt-1 text-sm text-slate-600">Simulated temperature and feels-like trend.</p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-500 ring-1 ring-slate-200">
                Recharts visualization
              </span>
            </div>
            <TemperatureChart />
          </article>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-black">Regional Risk</h2>
              <p className="mt-2 text-slate-600">Demo/simulated values for heatwave awareness presentation.</p>
            </div>
            <span className="eyebrow">Simulated Values</span>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="hidden grid-cols-4 bg-slate-100 px-5 py-3 text-xs font-black uppercase text-slate-500 sm:grid">
              <span>City</span>
              <span>Risk Level</span>
              <span>Temperature</span>
              <span>Probability</span>
            </div>
            {regionalRisk.map((item) => (
              <div key={item.city} className="grid gap-3 border-t border-slate-200 px-5 py-4 sm:grid-cols-4 sm:items-center">
                <span className="font-black">{item.city}</span>
                <span>
                  <RiskBadge level={item.level} />
                </span>
                <span className="font-bold text-slate-700">{item.temp}</span>
                <span className="text-sm font-semibold text-slate-500">{item.probability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="page-shell">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-700">
                <Info size={23} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-2xl font-black">What does HIGH risk mean?</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  HIGH heat risk suggests elevated heat stress conditions in this demonstration. Users should consider
                  limiting strenuous activity during peak heat, planning hydration, checking on vulnerable people, and
                  monitoring official forecasts.
                </p>
                <blockquote className="mt-5 rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 text-sm font-semibold text-orange-900">
                  This dashboard uses simulated demonstration data and is not intended to replace official weather
                  warnings or emergency guidance.
                </blockquote>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
