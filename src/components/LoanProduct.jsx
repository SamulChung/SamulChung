export default function LoanProduct({ title, amount, rate, term, partner, color, tokenReward }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-asterCard to-asterCardAlt p-5" style={{ borderColor: `${color}55` }}>
      <div className="absolute left-0 right-0 top-0 h-1" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-xs text-slate-500">Đối tác: {partner}</p>
        </div>
        <span className="rounded-md px-2 py-1 text-xs font-semibold" style={{ background: `${color}22`, color }}>+{tokenReward} AST</span>
      </div>
      <div className="flex flex-wrap gap-5">
        <div><p className="text-[10px] text-asterDim">Hạn mức</p><p className="font-semibold">{amount}</p></div>
        <div><p className="text-[10px] text-asterDim">Lãi suất</p><p className="font-semibold" style={{ color }}>{rate}</p></div>
        <div><p className="text-[10px] text-asterDim">Kỳ hạn</p><p className="font-semibold">{term}</p></div>
      </div>
      <button type="button" className="mt-4 w-full rounded-lg border py-2 text-sm font-bold" style={{ borderColor: `${color}77`, color, background: `${color}15` }}>
        Đăng ký ngay →
      </button>
    </div>
  );
}
