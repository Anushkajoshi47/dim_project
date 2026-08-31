export default function RiskGauge({ score = 87, label = 'HIGH' }) {
  const safeScore = Math.max(0, Math.min(100, Math.round(score)));

  return (
    <div className="mx-auto w-full max-w-xs">
      <div
        className="relative grid aspect-square place-items-center rounded-full shadow-glow"
        style={{
          background: `conic-gradient(#ef4444 ${safeScore * 3.6}deg, #fed7aa ${safeScore * 3.6}deg)`,
        }}
        aria-label={`Risk score ${safeScore} percent`}
      >
        <div className="absolute inset-4 rounded-full bg-white" />
        <div className="relative text-center">
          <p className="text-sm font-black uppercase text-orange-700">{label}</p>
          <p className="text-5xl font-black text-navy">{safeScore}%</p>
          <p className="mt-1 text-xs font-semibold text-slate-500">estimated risk</p>
        </div>
      </div>
    </div>
  );
}
