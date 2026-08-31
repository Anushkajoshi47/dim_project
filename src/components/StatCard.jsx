export default function StatCard({ value, label, helper }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <p className="text-3xl font-black text-navy sm:text-4xl">{value}</p>
      <h3 className="mt-2 font-bold text-slate-900">{label}</h3>
      <p className="mt-1 text-sm text-slate-500">{helper}</p>
    </article>
  );
}
