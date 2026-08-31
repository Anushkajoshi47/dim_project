import { BrainCircuit, ChevronDown, Plus } from 'lucide-react';
import { useMemo, useState } from 'react';
import RiskGauge from '../components/RiskGauge.jsx';
import SEO from '../components/SEO.jsx';
import SocialShare from '../components/SocialShare.jsx';
import { predictionFactors } from '../data/climateData.js';

function getRiskLevel(score) {
  if (score >= 88) return 'EXTREME';
  if (score >= 68) return 'HIGH';
  if (score >= 42) return 'MODERATE';
  return 'NORMAL';
}

function recommendationFor(level) {
  const messages = {
    NORMAL: 'Maintain routine heat awareness and monitor daily conditions.',
    MODERATE: 'Plan hydration and reduce unnecessary peak-afternoon exposure.',
    HIGH: 'Prepare for elevated heat conditions.',
    EXTREME: 'Follow official alerts and prioritize urgent heat-safety precautions.',
  };

  return messages[level];
}

export default function Prediction() {
  const [inputs, setInputs] = useState({
    temperature: 38,
    humidity: 65,
    wind: 12,
    previousTemperature: 36,
    rainfall: 'Low',
  });
  const [analyzed, setAnalyzed] = useState(false);

  const score = useMemo(() => {
    const rainModifier = inputs.rainfall === 'Low' ? 10 : inputs.rainfall === 'Moderate' ? 3 : -7;
    const windModifier = Math.max(0, 18 - inputs.wind) * 0.8;
    const heatTrend = Math.max(0, inputs.temperature - inputs.previousTemperature) * 3;
    const raw =
      inputs.temperature * 1.45 +
      inputs.humidity * 0.35 +
      windModifier +
      heatTrend +
      rainModifier -
      22;

    return Math.max(5, Math.min(98, Math.round(raw)));
  }, [inputs]);

  const level = getRiskLevel(score);
  const confidence = Math.min(96, Math.max(76, Math.round(83 + score / 9)));

  function updateInput(key, value) {
    setInputs((current) => ({ ...current, [key]: value }));
  }

  return (
    <>
      <SEO
        title="AI Heatwave Prediction Simulator | ClimaSense AI"
        description="Try a frontend AI climate prediction simulator that combines climate indicators to estimate demo heatwave risk."
        keywords="heatwave prediction, AI climate prediction, climate technology, heat risk, weather intelligence"
        path="/prediction"
      />

      <section className="bg-white">
        <div className="page-shell section-pad">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div>
              <span className="eyebrow">
                <BrainCircuit size={14} aria-hidden="true" />
                AI Simulation
              </span>
              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                AI-Powered Heatwave Prediction
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Explore how climate indicators can be combined to estimate potential heatwave risk using a simple
                frontend-only simulation.
              </p>
              <div className="mt-7">
                <SocialShare title="ClimaSense AI Prediction Simulator" text="Try a frontend heatwave prediction simulator." />
              </div>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-5">
              <p className="text-sm font-bold uppercase text-orange-800">Conceptual demonstration</p>
              <p className="mt-2 leading-7 text-orange-900">
                This page does not run a real machine-learning model. The calculation is intentionally simple and
                local, designed to demonstrate how an AI climate prediction interface could look and feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="page-shell grid gap-6 lg:grid-cols-[1fr,0.85fr]">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black">Prediction Simulator</h2>
            <p className="mt-2 text-sm text-slate-600">Adjust the inputs and click Analyze Risk.</p>

            <div className="mt-7 space-y-6">
              {[
                ['temperature', 'Temperature', 25, 48, '°C'],
                ['humidity', 'Humidity', 20, 95, '%'],
                ['wind', 'Wind Speed', 0, 35, ' km/h'],
                ['previousTemperature', 'Previous Temperature', 20, 46, '°C'],
              ].map(([key, label, min, max, suffix]) => (
                <label key={key} className="block">
                  <span className="flex items-center justify-between gap-3 text-sm font-bold text-slate-700">
                    {label}
                    <strong className="text-orange-700">
                      {inputs[key]}
                      {suffix}
                    </strong>
                  </span>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={inputs[key]}
                    onChange={(event) => updateInput(key, Number(event.target.value))}
                    className="range-input mt-3 w-full"
                  />
                </label>
              ))}

              <label className="block">
                <span className="text-sm font-bold text-slate-700">Rainfall</span>
                <select
                  value={inputs.rainfall}
                  onChange={(event) => updateInput('rainfall', event.target.value)}
                  className="focus-ring mt-3 min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 font-semibold text-slate-800"
                >
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </label>

              <button
                type="button"
                onClick={() => setAnalyzed(true)}
                className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-navy px-6 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
              >
                <BrainCircuit size={19} aria-hidden="true" />
                Analyze Risk
              </button>
            </div>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">AI Risk Analysis</p>
            <div className="mt-7">
              <RiskGauge score={analyzed ? score : 82} label={analyzed ? level : 'HIGH'} />
            </div>
            <div className="mt-8 grid gap-3">
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-500">Risk Score</p>
                <p className="text-2xl font-black">{analyzed ? score : 82}%</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-500">Risk Level</p>
                <p className="text-2xl font-black text-orange-700">{analyzed ? level : 'HIGH'}</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-500">Confidence</p>
                <p className="text-2xl font-black">{analyzed ? confidence : 91}%</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-4">
                <p className="text-sm font-bold text-orange-800">Recommendation</p>
                <p className="mt-1 text-sm font-semibold text-orange-900">
                  {analyzed ? recommendationFor(level) : 'Prepare for elevated heat conditions.'}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Conceptual Model</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">How the Prediction Works</h2>
            <p className="mt-4 leading-7 text-slate-600">
              A visual explanation of how climate indicators can flow into an AI analysis concept and produce a
              heatwave risk signal.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {predictionFactors.map(({ label, icon: Icon }, index) => (
              <article key={label} className="relative rounded-lg border border-slate-200 bg-slate-50 p-5 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white text-orange-700 shadow-sm">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-black">{label}</h3>
                {index < predictionFactors.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white text-slate-400 shadow-sm lg:grid">
                    {index < 3 ? <Plus size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
                  </span>
                )}
              </article>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl rounded-lg bg-orange-50 p-4 text-center text-sm font-semibold text-orange-900">
            Conceptual demonstration only. This frontend does not provide medical, safety-grade, or official weather
            forecasting.
          </p>
        </div>
      </section>
    </>
  );
}
