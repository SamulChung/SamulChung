import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import HomeSection from "./sections/HomeSection";
import ScoreSection from "./sections/ScoreSection";
import TokenSection from "./sections/TokenSection";
import LoanSection from "./sections/LoanSection";
import ProfileSection from "./sections/ProfileSection";
import { overview } from "./data/mockData";

export default function App() {
  const [tab, setTab] = useState("home");
  const [loaded, setLoaded] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setLoaded(true);
    let s = 0;
    const id = setInterval(() => {
      s += 12;
      if (s >= overview.scoreTarget) {
        setScore(overview.scoreTarget);
        clearInterval(id);
      } else setScore(s);
    }, 20);
    return () => clearInterval(id);
  }, []);

  const title = useMemo(() => {
    if (tab === "home") return "Trang chủ";
    if (tab === "score") return "Điểm tín dụng ASTER";
    if (tab === "token") return "Ví Token ASTER";
    if (tab === "loan") return "Vay vốn";
    return "Tài khoản";
  }, [tab]);

  return (
    <div className="mx-auto min-h-screen w-full max-w-[420px] bg-asterBg">
      <Header balance={overview.tokenBalance} />
      <main className={`px-4 pb-24 pt-4 transition-all duration-500 ${loaded ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
        <h1 className="mb-4 text-xl font-extrabold">{title}</h1>
        {tab === "home" && <HomeSection score={score} />}
        {tab === "score" && <ScoreSection score={score} />}
        {tab === "token" && <TokenSection />}
        {tab === "loan" && <LoanSection />}
        {tab === "profile" && <ProfileSection />}
      </main>
      <BottomNav tab={tab} onChange={setTab} />
    </div>
  );
}
