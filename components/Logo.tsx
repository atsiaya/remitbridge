export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`.trim()}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="8" fill="#121212" />
        <path
          d="M6.5 18.5c2-7.5 13-7.5 15 0"
          fill="none"
          stroke="#FFB400"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="6.5" cy="19.5" r="1.8" fill="#fff" />
        <circle cx="21.5" cy="19.5" r="1.8" fill="#fff" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight">
        RemitBridge
      </span>
    </span>
  );
}
