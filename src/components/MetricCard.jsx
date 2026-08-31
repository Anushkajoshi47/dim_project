const toneClasses = {
  orange: 'bg-orange-50 text-orange-700 border-orange-100',
  red: 'bg-red-50 text-red-700 border-red-100',
  teal: 'bg-teal-50 text-teal-700 border-teal-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
  blue: 'bg-sky-50 text-sky-700 border-sky-100',
  yellow: 'bg-yellow-50 text-yellow-700 border-yellow-100',
};

export default function MetricCard({ label, value, icon: Icon, tone = 'orange' }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className={`inline-grid h-11 w-11 place-items-center rounded-xl border ${toneClasses[tone]}`}>
        <Icon size={21} aria-hidden="true" />
      </div>
      <p className="mt-5 text-sm font-semibold text-slate-500">{label}</p>
      <h3 className="mt-1 text-3xl font-black text-slate-950">{value}</h3>
    </article>
  );
}
