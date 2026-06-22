interface TrackPhotoProps {
  variant?: "sky" | "dusk" | "overcast" | "green" | "stone" | "amber";
  withDevice?: boolean;
  className?: string;
}

const PALETTES: Record<
  string,
  { sky: [string, string]; ground: string; rail: string }
> = {
  sky: { sky: ["#bcd9ee", "#7fb3d8"], ground: "#8a9a7c", rail: "#5b6470" },
  dusk: { sky: ["#9fb6c9", "#5c7d96"], ground: "#7c8a6e", rail: "#4b5360" },
  overcast: { sky: ["#cfd6da", "#9fadb5"], ground: "#7d8a78", rail: "#535a62" },
  green: { sky: ["#bcd9c9", "#7fb89a"], ground: "#5e7a4f", rail: "#4a5258" },
  stone: { sky: ["#d8d2c4", "#b3a890"], ground: "#8a7f63", rail: "#55504a" },
  amber: { sky: ["#f0dcb0", "#d9b06a"], ground: "#8c7a4f", rail: "#5a4f3a" },
};

export default function TrackPhoto({
  variant = "sky",
  withDevice = true,
  className = "",
}: TrackPhotoProps) {
  const p = PALETTES[variant];
  const uid = `${variant}-${withDevice}`;

  return (
    <svg
      viewBox="0 0 400 260"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Railway track equipment installation"
    >
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.sky[0]} />
          <stop offset="100%" stopColor={p.sky[1]} />
        </linearGradient>
        <linearGradient id={`box-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>

      <rect width="400" height="260" fill={`url(#sky-${uid})`} />

      {/* distant hills */}
      <path d="M0 140 Q80 110 160 135 T400 130 V165 H0 Z" fill={p.ground} opacity="0.55" />
      <path d="M0 155 Q100 130 220 150 T400 145 V165 H0 Z" fill={p.ground} opacity="0.8" />

      {/* ballast / ground */}
      <rect x="0" y="160" width="400" height="100" fill="#9b9488" />
      <rect x="0" y="160" width="400" height="100" fill="#000" opacity="0.06" />

      {/* ballast stones */}
      {Array.from({ length: 60 }).map((_, i) => {
        const rx = (i * 53) % 400;
        const ry = 168 + ((i * 29) % 88);
        const r = 2 + (i % 4);
        return <circle key={i} cx={rx} cy={ry} r={r} fill="#000" opacity="0.08" />;
      })}

      {/* sleepers */}
      {[178, 196, 214, 232, 250].map((y, i) => (
        <rect key={i} x="20" y={y} width="360" height="9" rx="1.5" fill="#3f3a33" opacity="0.85" />
      ))}

      {/* rails */}
      <rect x="70" y="160" width="10" height="100" fill={p.rail} />
      <rect x="72" y="160" width="3" height="100" fill="#cfd3d6" opacity="0.6" />
      <rect x="300" y="160" width="10" height="100" fill={p.rail} />
      <rect x="302" y="160" width="3" height="100" fill="#cfd3d6" opacity="0.6" />

      {withDevice && (
        <g>
          <rect x="150" y="148" width="100" height="58" rx="4" fill={`url(#box-${uid})`} stroke="#1f2937" strokeWidth="1.5" />
          <rect x="160" y="156" width="36" height="10" rx="2" fill="#9ca3af" />
          <circle cx="234" cy="160" r="5" fill="#d1d5db" />
          <path d="M188 148 V128 Q188 118 200 118 H222 Q234 118 234 128 V148" fill="none" stroke="#1f2937" strokeWidth="4" />
          <rect x="178" y="206" width="14" height="14" fill="#4b5563" />
          <rect x="208" y="206" width="14" height="14" fill="#4b5563" />
        </g>
      )}
    </svg>
  );
}
