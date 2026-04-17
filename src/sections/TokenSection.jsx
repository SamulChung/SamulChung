const useCases = [
  { title: "Giảm lãi suất vay F88", desc: "Dùng 500 AST để giảm 0.5% lãi suất/tháng", icon: "📉", color: "#00e5a0" },
  { title: "Vay bằng Token", desc: "Thế chấp AST để vay tiền mặt tức thì", icon: "💵", color: "#3b82f6" },
  { title: "Tăng hạn mức vay", desc: "1000 AST = Tăng 5 triệu VNĐ hạn mức", icon: "📈", color: "#a78bfa" },
  { title: "Mua bảo hiểm", desc: "Thanh toán phí bảo hiểm F88 bằng AST", icon: "🛡️", color: "#f97316" },
];

const txs = [
  { action: "Kết nối Zalo", amount: "+50", time: "Hôm nay, 09:30", type: "earn" },
  { action: "Xác minh CCCD", amount: "+100", time: "Hôm nay, 10:15", type: "earn" },
  { action: "Giảm lãi suất F88", amount: "-500", time: "Hôm qua, 14:00", type: "spend" },
  { action: "Đăng nhập hàng ngày", amount: "+10", time: "Hôm qua, 08:00", type: "earn" },
];

export default function TokenSection() {
  return (
    <section className="space-y-5">
      <div className="rounded-2xl border border-amber-300/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 text-center">
        <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-2xl font-black text-[#0a0e1a]">A</div>
        <p className="font-mono text-4xl font-extrabold text-amber-300">2,450</p>
        <p className="mt-1 text-sm text-asterDim">ASTER Token (AST)</p>
        <p className="text-xs text-slate-500">≈ 245,000 VNĐ</p>
      </div>

      <div>
        <h3 className="mb-3 text-base font-bold">Sử dụng Token AST</h3>
        <div className="space-y-2">
          {useCases.map((item) => (
            <button key={item.title} className="flex w-full items-center gap-3 rounded-xl border p-3 text-left" style={{ background: "#111827", borderColor: `${item.color}22` }}>
              <div className="grid h-10 w-10 place-items-center rounded-lg text-xl" style={{ background: `${item.color}22` }}>{item.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
              <span style={{ color: item.color }}>→</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-base font-bold">Lịch sử giao dịch</h3>
        <div className="divide-y divide-asterBorder">
          {txs.map((tx) => (
            <div key={`${tx.action}-${tx.time}`} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm">{tx.action}</p>
                <p className="text-[10px] text-slate-500">{tx.time}</p>
              </div>
              <span className={`font-mono text-sm font-bold ${tx.type === "earn" ? "text-emerald-300" : "text-red-400"}`}>{tx.amount} AST</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
