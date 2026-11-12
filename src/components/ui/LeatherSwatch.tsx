type Props = {
  slug: string;
  tone: string;
  stitch: string;
  variant?: "belt" | "collar";
  label?: string;
  className?: string;
};

/**
 * Procedural leather visual (grain, stitching, buckle). Stands in until real
 * product photography is supplied; drop photos into Product.image later.
 */
export default function LeatherSwatch({
  slug,
  tone,
  stitch,
  variant = "belt",
  label,
  className = "",
}: Props) {
  const id = `ls-${slug}`;
  const dark = { fill: `color-mix(in srgb, ${tone} 72%, black)` };
  const hi = { stopColor: `color-mix(in srgb, ${tone} 82%, white)` };
  const lo = { stopColor: `color-mix(in srgb, ${tone} 70%, black)` };

  return (
    <svg
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={label ?? "Leather product illustration"}
    >
      <defs>
        <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.1 0.75" />
        </filter>
        <linearGradient id={`${id}-band`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={hi} />
          <stop offset="0.5" stopColor={tone} />
          <stop offset="1" style={lo} />
        </linearGradient>
      </defs>
      <rect width="480" height="360" style={dark} />
      <rect width="480" height="360" filter={`url(#${id}-grain)`} opacity="0.55" />

      {variant === "belt" ? (
        <g transform="rotate(-9 240 180)">
          <rect x="-60" y="138" width="600" height="86" rx="6" fill={`url(#${id}-band)`} />
          <rect x="-60" y="138" width="600" height="86" rx="6" filter={`url(#${id}-grain)`} opacity="0.35" />
          <line x1="-60" y1="150" x2="540" y2="150" stroke={stitch} strokeWidth="2.4" strokeDasharray="10 7" strokeLinecap="round" />
          <line x1="-60" y1="212" x2="540" y2="212" stroke={stitch} strokeWidth="2.4" strokeDasharray="10 7" strokeLinecap="round" />
          {[300, 335, 370, 405, 440].map((x) => (
            <circle key={x} cx={x} cy="181" r="5" fill="#0a0a0a" />
          ))}
          <rect x="70" y="118" width="112" height="126" rx="16" fill="none" stroke="#C9A56B" strokeWidth="13" />
          <rect x="74" y="122" width="104" height="118" rx="13" fill="none" stroke="#fff" strokeOpacity="0.22" strokeWidth="2" />
          <rect x="150" y="172" width="120" height="9" rx="4.5" fill="#C9A56B" />
        </g>
      ) : (
        <g>
          <circle cx="240" cy="190" r="104" fill="none" style={{ stroke: `color-mix(in srgb, ${tone} 85%, white)` }} strokeWidth="46" />
          <circle cx="240" cy="190" r="104" fill="none" stroke="#000" strokeOpacity="0.18" strokeWidth="46" strokeDasharray="1 0" />
          <circle cx="240" cy="190" r="86" fill="none" stroke={stitch} strokeWidth="2.4" strokeDasharray="9 7" strokeLinecap="round" />
          <circle cx="240" cy="190" r="122" fill="none" stroke={stitch} strokeWidth="2.4" strokeDasharray="9 7" strokeLinecap="round" />
          <rect x="214" y="58" width="52" height="40" rx="10" fill="none" stroke="#C9A56B" strokeWidth="10" />
          <rect x="168" y="274" width="144" height="26" rx="6" fill="#C9A56B" fillOpacity="0.9" />
        </g>
      )}
    </svg>
  );
}
