import type { Metadata } from "next";
import Faq from "@/components/Faq";
import WaitlistCta from "@/components/WaitlistCta";
import { ButtonLink, Container, Section } from "@/components/ui";
import { pricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "No subscription. Free wallet, a simple fee on transfers at the mid-market rate, and a small one-off cost for virtual cards.",
  alternates: { canonical: "/pricing" },
};

const plans = [
  {
    name: "USD wallet",
    price: "Free",
    unit: "to open and hold",
    lines: ["No opening fee", "No monthly fee", "Add money from your bank"],
    href: "/wallets",
  },
  {
    name: "Send money",
    price: `${pricing.transferFeePercent}%`,
    unit: `per transfer, minimum $${pricing.transferMinFeeUsd.toFixed(2)}`,
    lines: [
      "Mid-market exchange rate, no markup",
      "Fee shown before you confirm",
      "Mobile money and bank payouts",
    ],
    href: "/remittance",
  },
  {
    name: "Virtual cards",
    price: `$${pricing.cardCreateUsd.toFixed(2)}`,
    unit: "to create a card",
    lines: ["No monthly fee", "Spending limits on every card", "Freeze any time"],
    href: "/cards",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-14 pb-20 sm:pt-20 sm:pb-28">
        <Container className="text-center">
          <h1 className="rb-rise mx-auto max-w-3xl font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-balance">
            Pricing you can read in one glance.
          </h1>
          <p className="rb-rise rb-delay-1 mx-auto mt-5 max-w-xl text-lg text-muted text-balance sm:text-xl">
            There&apos;s no subscription. You pay when you send money or create
            a card, and we show the amount before you confirm.
          </p>
        </Container>

        <Container className="mt-16">
          <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
            {plans.map((plan) => (
              <li key={plan.name} className="flex flex-col border-t border-ink pt-6">
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                <p className="mt-4 font-display text-5xl font-semibold tracking-tight">
                  {plan.price}
                </p>
                <p className="mt-1 text-muted">{plan.unit}</p>
                <ul className="mt-6 flex-1 space-y-3 text-[15px]">
                  {plan.lines.map((line) => (
                    <li key={line} className="border-b border-line pb-3 last:border-0">
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <ButtonLink href={plan.href} variant="secondary">
                    About {plan.name.toLowerCase()}
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-muted">
            These are launch prices and may change before we open in your
            region. Your bank, or the mobile money operator or bank paying your
            recipient, may charge their own fees. We&apos;ll tell you about any
            we know of before you confirm.
          </p>
        </Container>
      </section>

      <Section tone="mist">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="max-w-md font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Questions about fees
          </h2>
          <Faq
            items={[
              {
                q: "Where do you make money?",
                a: "From the transfer fee and the one-off card fee. We convert at the mid-market rate, so there's no markup tucked into the exchange rate.",
              },
              {
                q: "Is the fee added to what I send or taken from it?",
                a: "It's taken from the amount you send. If you send $200, you pay $200 in total, and the fee is deducted before conversion. The calculator shows exactly what your recipient gets.",
              },
              {
                q: "Will the price change?",
                a: "Launch prices may change before we open in your region. If they change after you join, we'll tell you in advance.",
              },
            ]}
          />
        </Container>
      </Section>

      <WaitlistCta />
    </>
  );
}
