import logo from "../../assets/brand/aster-logo-mark.svg";

export default function Header({ balance = 2450 }) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-asterBorder/40 bg-[#0a0e1aee] px-5 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <img src={logo} alt="ASTER logo" className="h-8 w-8 rounded-lg" />
        <div>
          <p className="text-sm font-bold tracking-wider">ASTER</p>
          <p className="text-[9px] text-slate-500">SNS Credit • Vietnam</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="rounded-full bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-300">🪙 {balance.toLocaleString()}</div>
        <button type="button" className="rounded-md p-1.5 text-lg hover:bg-white/5" aria-label="Notifications">🔔</button>
      </div>
    </header>
  );
}
