type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      className={`brand-mark inline-flex shrink-0 items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        className="size-full"
        role="presentation"
      >
        <rect
          className="brand-mark__trace"
          x="4.75"
          y="4.75"
          width="38.5"
          height="38.5"
          rx="12"
          fill="rgba(11, 16, 32, 0.92)"
          stroke="rgba(148, 163, 184, 0.28)"
          strokeWidth="1.5"
        />

        <text
          x="24" 
          y="29" 
          textAnchor="middle" 
          fill="var(--text-primary)" 
          fontFamily="Georgia, 'Times New Roman', serif" fontSize="18" 
          fontWeight="700" 
          fontStyle="italic" 
          letterSpacing="-1.5"
        >
          SB
        </text>

        <path
          d="M15 35.5H31"
          stroke="var(--accent-cyan)"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}