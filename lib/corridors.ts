// Supported and planned destination countries. Safe to import from client components.

export type Corridor = {
  country: string;
  /** ISO 3166-1 alpha-2 */
  code: string;
  /** ISO 4217 */
  currency: string;
  payout: string;
  /** Target delivery time shown in the calculator. */
  eta: string;
  wave: "launch" | "next";
};

export const corridors: Corridor[] = [
  { country: "Kenya", code: "KE", currency: "KES", payout: "Mobile money, bank", eta: "Minutes to mobile money", wave: "launch" },
  { country: "Nigeria", code: "NG", currency: "NGN", payout: "Bank", eta: "Same day", wave: "launch" },
  { country: "Ghana", code: "GH", currency: "GHS", payout: "Mobile money, bank", eta: "Minutes to mobile money", wave: "launch" },
  { country: "Uganda", code: "UG", currency: "UGX", payout: "Mobile money, bank", eta: "Minutes to mobile money", wave: "launch" },
  { country: "Tanzania", code: "TZ", currency: "TZS", payout: "Mobile money, bank", eta: "Minutes to mobile money", wave: "launch" },
  { country: "South Africa", code: "ZA", currency: "ZAR", payout: "Bank", eta: "Same day", wave: "launch" },
  { country: "India", code: "IN", currency: "INR", payout: "Bank", eta: "Same day", wave: "next" },
  { country: "Philippines", code: "PH", currency: "PHP", payout: "Bank", eta: "Same day", wave: "next" },
  { country: "Mexico", code: "MX", currency: "MXN", payout: "Bank", eta: "Same day", wave: "next" },
];
