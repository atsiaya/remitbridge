import { Check, CreditCard, Plus, Send } from "lucide-react";

const actions = [
  { label: "Add", Icon: Plus },
  { label: "Send", Icon: Send },
  { label: "Cards", Icon: CreditCard },
];

const activity = [
  { initials: "AO", title: "To Amina", meta: "Delivered", amount: "-$200.00" },
  { initials: "BD", title: "Bank deposit", meta: "Completed", amount: "+$500.00" },
  { initials: "CL", title: "Cloud hosting", meta: "Card ending 4821", amount: "-$24.00" },
];

/** Illustrative wallet screen. Not live data. */
export default function PhoneMockup() {
  return (
    <div
      role="img"
      aria-label="Illustration of the RemitBridge app showing a USD balance, quick actions and recent activity"
      className="relative mx-auto w-[300px]"
    >
      <div className="rounded-[46px] bg-ink p-2.5 shadow-[0_30px_80px_-30px_rgba(18,18,18,0.45)]">
        <div className="h-[600px] overflow-hidden rounded-[38px] bg-paper px-5 pt-5 text-left">
          <div className="mx-auto h-5 w-24 rounded-full bg-ink" />

          <p className="mt-8 text-sm text-muted">USD balance</p>
          <p className="mt-1 font-display text-[2.6rem] font-semibold leading-none tracking-tight">
            $2,480.00
          </p>
          <p className="mt-2 text-sm text-muted">About KES 321,036</p>

          <div className="mt-7 grid grid-cols-3 gap-3">
            {actions.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-2xl bg-mist py-3.5 text-[13px] font-medium"
              >
                <Icon className="size-[18px]" />
                {label}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm font-medium">Recent</p>
          <ul className="mt-3 divide-y divide-line">
            {activity.map((row) => (
              <li key={row.title} className="flex items-center gap-3 py-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sun-soft text-xs font-semibold">
                  {row.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{row.title}</span>
                  <span className="block text-xs text-muted">{row.meta}</span>
                </span>
                <span className="text-sm font-medium tabular-nums">{row.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rb-toast absolute -left-56 top-[240px] hidden items-center gap-3 rounded-2xl bg-sun px-4 py-3 text-left shadow-lg md:flex">
        <span className="flex size-8 items-center justify-center rounded-full bg-ink text-paper">
          <Check className="size-4" />
        </span>
        <span>
          <span className="block text-sm font-semibold">KES 25,579 delivered</span>
          <span className="block text-xs text-ink/70">To Amina in Nairobi, just now</span>
        </span>
      </div>
    </div>
  );
}
