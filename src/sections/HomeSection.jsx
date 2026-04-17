import ScoreGauge from "../components/ScoreGauge";
import TokenBalance from "../components/TokenBalance";
import MetricCard from "../components/MetricCard";
import TokenRewardItem from "../components/TokenRewardItem";
import { user, overview } from "../data/mockData";

export default function HomeSection({ score }) {
  return (
    <section className="space-y-5">
      <div className="relative overflow-hidden rounded-2xl border border-emerald-300/10 bg-gradient-to-br from-slate-900 via-[#1a2236] to-slate-900 p-6">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-300/10 blur-2xl" />
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl">{user.flag}</span>
          <div>
            <p className="font-bold">Xin chào, {user.name}</p>
            <p className="text-xs text-slate-500">{user.city}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <ScoreGauge score={score} size={170} />
          <div className="min-w-[160px] flex-1">
            <TokenBalance balance={overview.tokenBalance} earned={overview.earnedToday} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <MetricCard icon="📱" label="SNS kết nối" value="4/6" color="#3b82f6" />
        <MetricCard icon="🔄" label="Cập nhật" value="2h" sub="trước" color="#00e5a0" />
        <MetricCard icon="📈" label="Xu hướng" value="+12" sub="điểm / tuần" color="#22d3ee" />
      </div>

      <div className="flex cursor-pointer items-center gap-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-white font-black text-red-600">F88</div>
        <div className="flex-1">
          <p className="text-sm font-bold text-white">Vay nhanh cùng F88 × ASTER</p>
          <p className="text-[11px] text-white/80">Lãi suất ưu đãi từ 1.5%/tháng • 888+ chi nhánh toàn quốc</p>
        </div>
        <span className="text-xl text-white">→</span>
      </div>

      <div>
        <h3 className="mb-3 text-base font-bold">🪙 Kiếm Token ASTER</h3>
        <div className="space-y-2">
          <TokenRewardItem action="Kết nối Zalo" reward={50} icon="💬" completed />
          <TokenRewardItem action="Xác minh CCCD" reward={100} icon="🪪" completed />
          <TokenRewardItem action="Kết nối Facebook" reward={50} icon="📘" completed={false} />
          <TokenRewardItem action="Hoàn thành hồ sơ tín dụng" reward={200} icon="📋" completed={false} />
          <TokenRewardItem action="Giới thiệu bạn bè" reward={75} icon="👥" completed={false} />
        </div>
      </div>
    </section>
  );
}
