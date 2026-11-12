/**
 * Placeholder wordmark. The client's original logo file could not be pulled
 * from the old site, so swap this for the real SVG/PNG in /public when received.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 44 44" className="h-9 w-9" aria-hidden="true">
        <circle cx="22" cy="22" r="20.5" fill="none" stroke="#E84142" strokeWidth="1.2" />
        <circle
          cx="22"
          cy="22"
          r="16.5"
          fill="none"
          stroke="#E84142"
          strokeWidth="1"
          strokeDasharray="2.6 2.6"
          opacity="0.7"
        />
        <text
          x="22"
          y="27.5"
          textAnchor="middle"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#FFFFFF"
          letterSpacing="-0.5"
        >
          SS
        </text>
      </svg>
      <span className="display text-bone text-[1.35rem] leading-none tracking-tight">
        International
      </span>
    </span>
  );
}
