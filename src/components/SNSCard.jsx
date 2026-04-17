export default function SNSCard({ platform, connected, score, icon }) {
  return (
    <div className={`flex items-center justify-between rounded-xl border p-3 ${connected ? "bg-asterCard border-emerald-300/20" : "bg-slate-900 border-asterBorder opacity-70"}`}>
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="text-sm font-semibold">{platform}</p>
          <p className="text-xs text-slate-500">{connected ? `Điểm: ${score}/100` : "Chưa kết nối"}</p>
        </div>
      </div>
      <button
        type="button"
        className={`rounded-full border px-3 py-1 text-xs font-semibold ${
          connected ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-300" : "border-slate-600 bg-slate-800 text-slate-400"
        }`}
      >
        {connected ? "✓ Đã kết nối" : "Kết nối"}
      </button>
    </div>
  );
}
