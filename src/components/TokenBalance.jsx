export default function TokenBalance({ balance, earned }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-300/25 bg-gradient-to-br from-[#1a2236] to-slate-900 p-5">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-300/10 blur-md" />
      <div className="mb-3 flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 font-black text-[#0a0e1a]">A</div>
        <div>
          <p className="text-xs font-semibold text-amber-300">ASTER Token</p>
          <p className="text-[10px] text-asterDim">AST</p>
        </div>
      </div>
      <p className="font-mono text-3xl font-extrabold text-amber-300">{balance.toLocaleString()}</p>
      <p className="mt-1 text-xs text-asterDim">+{earned} AST kiếm được hôm nay</p>
    </div>
  );
}
