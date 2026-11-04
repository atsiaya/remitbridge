import { Check } from "lucide-react";

const rows = [
  ["To", "Amina Otieno, Nairobi"],
  ["You send", "$200.00"],
  ["Fee", "$2.40"],
  ["Exchange rate", "1 USD = 129.45 KES"],
];

/** Illustrative transfer receipt. Not live data. */
export default function ReceiptVisual() {
  return (
    <div
      role="img"
      aria-label="Illustration of a transfer receipt showing the fee, exchange rate and amount the recipient gets"
      className="w-full max-w-[380px] rounded-3xl border border-line bg-paper p-7 text-left shadow-[0_30px_60px_-35px_rgba(18,18,18,0.35)]"
    >
      <p className="text-sm text-muted">Recipient gets</p>
      <p className="mt-1 font-display text-4xl font-semibold tracking-tight tabular-nums">
        KES 25,579
      </p>

      <dl className="mt-6 divide-y divide-line border-y border-line text-[15px]">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 py-3.5">
            <dt className="text-muted">{label}</dt>
            <dd className="text-right font-medium tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-sun-soft px-3.5 py-1.5 text-sm font-medium">
        <Check className="size-4" />
        Delivered to mobile money
      </p>
    </div>
  );
}
