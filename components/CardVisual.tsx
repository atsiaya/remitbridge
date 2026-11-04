/** Illustrative virtual card. Not a real card number. */
export default function CardVisual() {
  return (
    <div
      role="img"
      aria-label="Illustration of two RemitBridge virtual USD cards"
      className="relative mx-auto h-[300px] w-full max-w-[380px]"
    >
      <div className="absolute left-6 top-0 aspect-[1.586] w-[300px] -rotate-6 rounded-3xl bg-sun p-6 sm:w-[340px]" />

      <div className="absolute left-0 top-12 flex aspect-[1.586] w-[300px] flex-col justify-between rounded-3xl bg-ink p-6 text-paper shadow-[0_30px_60px_-25px_rgba(18,18,18,0.55)] sm:w-[340px]">
        <div className="flex items-start justify-between">
          <svg width="44" height="30" viewBox="0 0 44 30" aria-hidden="true">
            <path
              d="M3 24c4-15 34-15 38 0"
              fill="none"
              stroke="#FFB400"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="3.5" cy="25" r="3" fill="#fff" />
            <circle cx="40.5" cy="25" r="3" fill="#fff" />
          </svg>
          <span className="text-xs tracking-wide text-paper/70">Virtual USD</span>
        </div>
        <div>
          <p className="font-display text-xl tracking-[0.18em] tabular-nums">
            •••• •••• •••• 4821
          </p>
          <div className="mt-3 flex items-end justify-between text-xs text-paper/70">
            <span>A. Wanjiku</span>
            <span className="tabular-nums">09/29</span>
          </div>
        </div>
      </div>
    </div>
  );
}
