import { TABS } from "../constants/theme";

export default function BottomNav({ tab, onChange }) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-[420px] -translate-x-1/2 justify-around border-t border-asterBorder bg-[#0a0e1af0] py-2 backdrop-blur-xl" aria-label="Main navigation">
      {TABS.map((t) => {
        const active = tab === t.id;
        return (
          <button key={t.id} type="button" onClick={() => onChange(t.id)} aria-current={active ? "page" : undefined} className={`flex flex-col items-center gap-1 px-2 py-1 ${active ? "opacity-100" : "opacity-60"}`}>
            <span className="text-lg">{t.icon}</span>
            <span className={`text-[10px] ${active ? "font-bold text-asterAccent" : "text-slate-500"}`}>{t.label}</span>
            {active && <span className="h-1 w-1 rounded-full bg-asterAccent" />}
          </button>
        );
      })}
    </nav>
  );
}
