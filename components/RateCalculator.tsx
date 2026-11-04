"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ui";
import { corridors } from "@/lib/corridors";
import { pricing, quoteTransfer } from "@/lib/pricing";

type Props = {
  rates: Record<string, number>;
  live: boolean;
  updatedAt?: string;
};

const launchCorridors = corridors.filter((c) => c.wave === "launch");

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const local = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const rateFmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

function formatUpdated(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function RateCalculator({ rates, live, updatedAt }: Props) {
  const [amount, setAmount] = useState("200");
  const [currency, setCurrency] = useState(launchCorridors[0].currency);

  const corridor =
    launchCorridors.find((c) => c.currency === currency) ?? launchCorridors[0];
  const rate = rates[corridor.currency];
  const value = Number(amount.replace(/,/g, ""));
  const quote = quoteTransfer(value, rate);
  const updated = formatUpdated(updatedAt);

  return (
    <div className="rounded-3xl border border-line bg-paper p-6 shadow-[0_30px_60px_-40px_rgba(18,18,18,0.3)] sm:p-8">
      <div className="space-y-3">
        <div className="rounded-2xl bg-mist px-5 py-4">
          <label htmlFor="calc-amount" className="text-sm text-muted">
            You send
          </label>
          <div className="mt-1 flex items-center justify-between gap-4">
            <input
              id="calc-amount"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.,]/g, ""))}
              className="w-full min-w-0 bg-transparent font-display text-3xl font-semibold tracking-tight outline-none placeholder:text-muted/50"
              placeholder="0"
            />
            <span className="shrink-0 rounded-full bg-paper px-3.5 py-1.5 text-sm font-medium">
              USD
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-mist px-5 py-4">
          <p className="text-sm text-muted">They receive</p>
          <div className="mt-1 flex items-center justify-between gap-4">
            <output
              htmlFor="calc-amount calc-country"
              aria-live="polite"
              className="min-w-0 truncate font-display text-3xl font-semibold tracking-tight tabular-nums"
            >
              {quote ? local.format(quote.receive) : "0"}
            </output>
            <label htmlFor="calc-country" className="sr-only">
              Destination country
            </label>
            <select
              id="calc-country"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="shrink-0 cursor-pointer rounded-full bg-paper px-3.5 py-1.5 text-sm font-medium outline-none"
            >
              {launchCorridors.map((c) => (
                <option key={c.code} value={c.currency}>
                  {c.country} ({c.currency})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <dl className="mt-6 divide-y divide-line text-[15px]">
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-muted">
            Fee ({pricing.transferFeePercent}%, min {usd.format(pricing.transferMinFeeUsd)})
          </dt>
          <dd className="font-medium tabular-nums">{quote ? usd.format(quote.fee) : "-"}</dd>
        </div>
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-muted">
            {live ? "Mid-market rate" : "Sample rate"}
          </dt>
          <dd className="font-medium tabular-nums">
            1 USD = {rateFmt.format(rate)} {corridor.currency}
          </dd>
        </div>
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-muted">Target delivery</dt>
          <dd className="text-right font-medium">{corridor.eta}</dd>
        </div>
      </dl>

      {!quote ? (
        <p className="mt-2 text-sm text-muted" role="status">
          Enter an amount above the minimum fee to see your quote.
        </p>
      ) : null}

      <ButtonLink href="/get-started" size="lg" className="mt-6 w-full">
        Join the waitlist to send
      </ButtonLink>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        {live
          ? `Reference rates are mid-market and refresh hourly${updated ? ` (last update ${updated})` : ""}.`
          : "Live rates are unavailable right now, so this shows sample rates."}{" "}
        Delivery times are launch targets and vary by bank. Your final quote is
        shown before you confirm.
      </p>
    </div>
  );
}
