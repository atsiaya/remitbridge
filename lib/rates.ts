import { corridors } from "@/lib/corridors";

// Used only when the live feed is unreachable. The UI labels these as samples.
const FALLBACK_RATES: Record<string, number> = {
  KES: 129.45,
  NGN: 1601.5,
  GHS: 15.62,
  UGX: 3700,
  TZS: 2650,
  ZAR: 18.34,
  INR: 83.72,
  PHP: 58.4,
  MXN: 17.2,
};

export type RateSnapshot = {
  rates: Record<string, number>;
  /** True when the rates came from the live feed rather than the fallback. */
  live: boolean;
  /** When the feed last updated, e.g. "Wed, 04 Nov 2026 00:02:31 +0000". */
  updatedAt?: string;
};

/**
 * Mid-market reference rates against USD, cached for an hour.
 * Swap the URL for your own FX provider when you have one.
 */
export async function getRates(): Promise<RateSnapshot> {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Rate feed responded ${res.status}`);

    const data = (await res.json()) as {
      result?: string;
      rates?: Record<string, number>;
      time_last_update_utc?: string;
    };
    if (data.result !== "success" || !data.rates) {
      throw new Error("Rate feed returned no rates");
    }

    const rates: Record<string, number> = {};
    for (const c of corridors) {
      const value = data.rates[c.currency];
      if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new Error(`Missing rate for ${c.currency}`);
      }
      rates[c.currency] = value;
    }
    return { rates, live: true, updatedAt: data.time_last_update_utc };
  } catch {
    return { rates: FALLBACK_RATES, live: false };
  }
}
