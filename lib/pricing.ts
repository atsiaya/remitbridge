// Launch pricing. These numbers drive the pricing page, the rate calculator
// and the FAQ copy, so changing them here keeps everything consistent.
// Confirm every figure before launch.

export const pricing = {
  /** Fee on each transfer, as a percentage of the amount sent. */
  transferFeePercent: 1.2,
  /** Minimum fee per transfer, in USD. */
  transferMinFeeUsd: 1.5,
  /** One-off cost to create a virtual card, in USD. */
  cardCreateUsd: 1,
} as const;

export type Quote = {
  /** Amount the sender pays, fee included. */
  send: number;
  fee: number;
  /** Amount converted after the fee. */
  net: number;
  rate: number;
  /** What the recipient gets in local currency. */
  receive: number;
};

/** Fee is taken from the amount sent, so the sender pays exactly `amountUsd`. */
export function quoteTransfer(amountUsd: number, rate: number): Quote | null {
  if (!Number.isFinite(amountUsd) || amountUsd <= 0) return null;
  if (!Number.isFinite(rate) || rate <= 0) return null;

  const fee = Math.round(
    Math.max(
      (amountUsd * pricing.transferFeePercent) / 100,
      pricing.transferMinFeeUsd,
    ) * 100,
  ) / 100;
  const net = amountUsd - fee;
  if (net <= 0) return null;

  return { send: amountUsd, fee, net, rate, receive: net * rate };
}
