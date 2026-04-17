function getGrade(s) {
  if (s >= 950) return { grade: "AAA", color: "#00e5a0" };
  if (s >= 900) return { grade: "AA", color: "#22d3ee" };
  if (s >= 850) return { grade: "A", color: "#3b82f6" };
  if (s >= 800) return { grade: "BBB", color: "#8b5cf6" };
  if (s >= 750) return { grade: "BB", color: "#fbbf24" };
  if (s >= 700) return { grade: "B", color: "#f97316" };
  if (s >= 650) return { grade: "CCC", color: "#ef4444" };
  return { grade: "D", color: "#dc2626" };
}

export default function ScoreGauge({ score, maxScore = 1000, size = 200 }) {
  const percentage = Math.min(score / maxScore, 1);
  const radius = size / 2 - 20;
  const circumference = 2 * Math.PI * radius * 0.75;
  const offset = circumference * (1 - percentage);
  const { grade, color } = getGrade(score);

  return (
    <svg width={size} height={size * 0.85} viewBox={`0 0 ${size} ${size * 0.85}`} role="img" aria-label={`Credit score ${score}, grade ${grade}`}>
      <defs>
        <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="33%" stopColor="#fbbf24" />
          <stop offset="66%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#00e5a0" />
        </linearGradient>
      </defs>
      <path d={`M ${size * 0.1} ${size * 0.7} A ${radius} ${radius} 0 1 1 ${size * 0.9} ${size * 0.7}`} fill="none" stroke="#1e293b" strokeWidth="12" strokeLinecap="round" />
      <path
        d={`M ${size * 0.1} ${size * 0.7} A ${radius} ${radius} 0 1 1 ${size * 0.9} ${size * 0.7}`}
        fill="none"
        stroke="url(#scoreGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
      />
      <text x={size / 2} y={size * 0.42} textAnchor="middle" fill={color} fontSize="42" fontWeight="800" fontFamily="Space Grotesk, monospace">{score}</text>
      <text x={size / 2} y={size * 0.58} textAnchor="middle" fill={color} fontSize="22" fontWeight="700" fontFamily="Space Grotesk, monospace">{grade}</text>
      <text x={size / 2} y={size * 0.72} textAnchor="middle" fill="#94a3b8" fontSize="11">/ {maxScore} điểm</text>
    </svg>
  );
}
