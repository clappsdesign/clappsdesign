export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const heights: Record<string, number> = { sm: 44, md: 60, lg: 80 };
  const h = heights[size];

  return (
    <svg
      height={h}
      viewBox="0 0 260 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CLApps Logo"
    >
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1992ff" />
          <stop offset="100%" stopColor="#0e6ed4" />
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffae00" />
          <stop offset="100%" stopColor="#e09600" />
        </linearGradient>
        <filter id="blueGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* CL — main lettermark */}
      <rect x="2" y="4" width="52" height="52" rx="10" fill="url(#blueGrad)" opacity="0.15" />
      <rect x="2" y="4" width="52" height="52" rx="10" stroke="#1992ff" strokeWidth="1.5" opacity="0.5" />

      {/* C */}
      <text
        x="14"
        y="47"
        fontFamily="'Orbitron', monospace"
        fontWeight="800"
        fontSize="36"
        fill="#1992ff"
        filter="url(#blueGlow)"
      >
        C
      </text>

      {/* L */}
      <text
        x="33"
        y="47"
        fontFamily="'Orbitron', monospace"
        fontWeight="800"
        fontSize="36"
        fill="#f5f7fb"
      >
        L
      </text>

      {/* APPS text block */}
      <text
        x="62"
        y="30"
        fontFamily="'Orbitron', monospace"
        fontWeight="800"
        fontSize="22"
        fill="#f5f7fb"
        letterSpacing="2"
      >
        APPS
      </text>

      {/* Divider line */}
      <line x1="62" y1="36" x2="258" y2="36" stroke="#1a3558" strokeWidth="1" />

      {/* CODE. LAUGH. */}
      <text
        x="62"
        y="55"
        fontFamily="'Orbitron', monospace"
        fontWeight="600"
        fontSize="11"
        letterSpacing="1.5"
      >
        <tspan fill="url(#orangeGrad)">CODE</tspan>
        <tspan fill="#a7b7d0">.</tspan>
        <tspan fill="#a7b7d0"> LAUGH</tspan>
        <tspan fill="#a7b7d0">.</tspan>
      </text>

      {/* Tagline dot accent */}
      <circle cx="252" cy="50" r="4" fill="url(#orangeGrad)" />
    </svg>
  );
}
