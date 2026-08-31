const riskStyles = {
  NORMAL: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  MODERATE: 'bg-yellow-50 text-yellow-700 ring-yellow-200',
  HIGH: 'bg-orange-50 text-orange-700 ring-orange-200',
  EXTREME: 'bg-red-50 text-red-700 ring-red-200',
};

export default function RiskBadge({ level }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${riskStyles[level] || riskStyles.HIGH}`}>
      {level}
    </span>
  );
}
