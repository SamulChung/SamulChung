export default function MetricCard({ icon, label, value, sub, color = "#00e5a0" }) {
  return (
    <div className="min-w-[140px] flex-1 rounded-xl border p-4" style={{ borderColor: `${color}33`, background: "#111827" }}>
      <div className="mb-1 text-xl">{icon}</div>
      <div className="text-[11px] text-asterDim">{label}</div>
      <div className="font-mono text-2xl font-bold" style={{ color }}>{value}</div>
      {sub && <div className="text-[10px] text-slate-500">{sub}</div>}
    </div>
  );
}
