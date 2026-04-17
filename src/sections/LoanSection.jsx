import LoanProduct from "../components/LoanProduct";

export default function LoanSection() {
  return (
    <section className="space-y-5">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-900 via-red-600 to-orange-500 p-6">
        <div className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">🤝 Đối tác chiến lược</div>
        <h3 className="text-2xl font-extrabold text-white">F88 × ASTER Credit</h3>
        <p className="mt-2 text-sm text-white/80">Vay nhanh, lãi suất thấp, thưởng Token.</p>
      </div>

      <div className="space-y-3">
        <LoanProduct title="Vay nhanh F88" amount="500K - 30M VNĐ" rate="1.5%/tháng" term="1 - 12 tháng" partner="F88" color="#f97316" tokenReward={100} />
        <LoanProduct title="Vay bằng Token AST" amount="100K - 5M VNĐ" rate="0.8%/tháng" term="1 - 6 tháng" partner="ASTER × F88" color="#fbbf24" tokenReward={50} />
        <LoanProduct title="Vay tín chấp SNS" amount="1M - 20M VNĐ" rate="2.0%/tháng" term="3 - 24 tháng" partner="ASTER Credit" color="#00e5a0" tokenReward={150} />
      </div>
    </section>
  );
}
