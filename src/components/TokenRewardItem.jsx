export default function TokenRewardItem({ action, reward, icon, completed }) {
  return (
    <div className={`flex items-center justify-between rounded-lg border p-3 ${completed ? "border-emerald-300/20 bg-emerald-300/5" : "border-asterBorder bg-asterCard"}`}>
      <div className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <div>
          <p className="text-sm">{action}</p>
          <p className="text-[10px] text-slate-500">{completed ? "Đã hoàn thành" : "Đang chờ"}</p>
        </div>
      </div>
      <span className="font-mono text-sm font-bold text-amber-300">+{reward} AST</span>
    </div>
  );
}
