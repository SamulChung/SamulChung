import ScoreGauge from "../components/ScoreGauge";
import SNSCard from "../components/SNSCard";
import { snsList } from "../data/mockData";

const breakdown = [
  { label: "Hoạt động SNS", weight: "30%", score: 85, color: "#00e5a0", icon: "📱" },
  { label: "Độ tin cậy xã hội", weight: "25%", score: 72, color: "#3b82f6", icon: "🤝" },
  { label: "Chuyên môn / Nghề nghiệp", weight: "20%", score: 80, color: "#a78bfa", icon: "💼" },
  { label: "Mô hình chi tiêu", weight: "15%", score: 68, color: "#fbbf24", icon: "🛒" },
  { label: "Ảnh hưởng mạng lưới", weight: "10%", score: 90, color: "#22d3ee", icon: "🌐" },
];

export default function ScoreSection({ score }) {
  return (
    <section className="space-y-5">
      <div className="py-3 text-center">
        <ScoreGauge score={score} size={240} />
        <p className="text-xs text-asterDim">Cập nhật lần cuối: 15/04/2026, 14:30</p>
      </div>

      <div>
        <h3 className="mb-3 text-base font-bold">Phân tích chi tiết điểm</h3>
        <div className="space-y-2">
          {breakdown.map((item) => (
            <div key={item.label} className="rounded-xl border p-3" style={{ background: "#111827", borderColor: `${item.color}22` }}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">{item.weight}</span>
                  <span className="text-sm font-bold" style={{ color: item.color }}>{item.score}</span>
                </div>
              </div>
              <div className="h-1.5 overflow-hidden rounded bg-asterBorder">
                <div className="h-full rounded" style={{ width: `${item.score}%`, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-base font-bold">Mạng xã hội đã kết nối</h3>
        <div className="space-y-2">
          {snsList.map((s) => <SNSCard key={s.platform} {...s} />)}
        </div>
      </div>
    </section>
  );
}
