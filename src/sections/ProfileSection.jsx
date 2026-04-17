import { user } from "../data/mockData";

const verifications = [
  { label: "CCCD / CMND", status: "verified", icon: "🪪" },
  { label: "Số điện thoại", status: "verified", icon: "📱" },
  { label: "Email", status: "verified", icon: "📧" },
  { label: "Địa chỉ", status: "pending", icon: "📍" },
  { label: "Thu nhập", status: "unverified", icon: "💰" },
];

export default function ProfileSection() {
  return (
    <section className="space-y-5">
      <div className="py-5 text-center">
        <div className="mx-auto mb-3 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-emerald-300 to-blue-500 text-3xl">👤</div>
        <h3 className="text-xl font-bold">{user.name}</h3>
        <p className="text-xs text-slate-500">ID: {user.id} • Hà Nội</p>
      </div>

      <div>
        <h4 className="mb-3 font-bold">Trạng thái xác minh</h4>
        <div className="space-y-2">
          {verifications.map((item) => {
            const map = {
              verified: "bg-emerald-300/10 text-emerald-300",
              pending: "bg-amber-300/10 text-amber-300",
              unverified: "bg-red-400/10 text-red-400",
            };
            const label = item.status === "verified" ? "✓ Đã xác minh" : item.status === "pending" ? "⏳ Đang chờ" : "Chưa xác minh";
            return (
              <div key={item.label} className="flex items-center justify-between rounded-lg border border-asterBorder bg-asterCard p-3">
                <div className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </div>
                <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${map[item.status]}`}>{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <p className="pt-2 text-center text-[10px] text-slate-500">ASTER Credit v2.0 • © 2026 TenAI Inc.</p>
    </section>
  );
}
