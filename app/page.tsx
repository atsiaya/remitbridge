import Link from "next/link";
import {
  ArrowUpRight,
  CreditCard,
  Check,
  FileText,
  ScanFace,
  ShieldCheck,
  Send,
  Wallet,
  X,
} from "lucide-react";
import Faq, { type FaqItem } from "@/components/Faq";
import PhoneMockup from "@/components/PhoneMockup";
import RateCalculator from "@/components/RateCalculator";
import WaitlistCta from "@/components/WaitlistCta";
import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import { corridors } from "@/lib/corridors";
import { pricing } from "@/lib/pricing";
import { getRates } from "@/lib/rates";
import { site } from "@/lib/site";

const products = [
  {
    title: "USD wallet",
    body: "Hold dollars in an account that's yours. Add money from your bank and keep it in a currency the world prices in.",
    href: "/wallets",
    cta: "Explore the wallet",
    Icon: Wallet,
  },
  {
    title: "Global remittance",
    body: "Send money to mobile money wallets and bank accounts abroad. See the fee and rate before you confirm.",
    href: "/remittance",
    cta: "See how sending works",
    Icon: Send,
  },
  {
    title: "Virtual cards",
    body: "Create a USD card in seconds for subscriptions, ads and online shopping. Set limits, freeze it any time.",
    href: "/cards",
    cta: "See virtual cards",
    Icon: CreditCard,
  },
];

const withoutUs = [
  "Fees taken at both ends of the transfer",
  "An exchange rate with the markup hidden inside",
  "Days to arrive, with little tracking",
  "Recipients need full bank details and a branch visit",
];

const withUs = [
  "One fee, shown before you confirm",
  "The mid-market exchange rate",
  "Paid to mobile money or a bank account",
  "Status updates from send to payout",
];

const steps = [
  {
    title: "Verify your identity",
    body: "Create an account and confirm who you are. It takes a few minutes and keeps everyone's money safe.",
  },
  {
    title: "Add dollars",
    body: "Fund your USD wallet from your bank account, or receive dollars straight into it.",
  },
  {
    title: "Send or spend",
    body: "Choose a recipient and country, check the quote, and confirm. Or create a virtual card and pay online.",
  },
  {
    title: "Follow it to payout",
    body: "Get updates until the money lands in your recipient's mobile money wallet or bank account.",
  },
];

const trust = [
  {
    title: "Identity checks",
    body: "Every customer is verified before they can send money.",
    Icon: ScanFace,
  },
  {
    title: "Transfer screening",
    body: "Transfers are screened against sanctions and watchlists.",
    Icon: ShieldCheck,
  },
  {
    title: "A record of everything",
    body: "Each transfer gets a reference and stays in your history.",
    Icon: FileText,
  },
];

const faq: FaqItem[] = [
  {
    q: "When can I start using RemitBridge?",
    a: "We're opening early access region by region. Join the waitlist and we'll email you the moment your country opens.",
  },
  {
    q: "How much does it cost?",
    a: `Opening a wallet is free. Transfers carry a fee of ${pricing.transferFeePercent}% (minimum $${pricing.transferMinFeeUsd.toFixed(2)}), shown before you confirm, and we use the mid-market exchange rate. See the pricing page for the full list.`,
  },
  {
    q: "How do recipients get paid?",
    a: "In local currency, to a mobile money wallet or a bank account, depending on the country. Recipients don't need a RemitBridge account.",
  },
  {
    q: "Is my money safe?",
    a: "We verify customers and screen transfers. Before we open to the public we'll publish how customer funds are held and which regulator oversees us.",
  },
  {
    q: "What are virtual cards for?",
    a: "Paying online in dollars: software, subscriptions, ads and shopping. Create one in seconds, set a spending limit, and freeze it whenever you like.",
  },
];

export default async function HomePage() {
  const { rates, live, updatedAt } = await getRates();
  const launch = corridors.filter((c) => c.wave === "launch");
  const next = corridors.filter((c) => c.wave === "next");

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden pt-16 sm:pt-24">
        <Container className="flex flex-col items-center text-center">
          <h1 className="rb-rise max-w-4xl font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.02] tracking-tight text-balance">
            {site.tagline}
          </h1>
          <p className="rb-rise rb-delay-1 mt-6 max-w-xl text-lg text-muted text-balance sm:text-xl">
            Hold USD in a wallet, send money across borders, and pay online
            with virtual cards. One account, with fees shown up front.
          </p>
          <div className="rb-rise rb-delay-2 mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/get-started" size="lg">
              Join the waitlist
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary" size="lg">
              How it works
            </ButtonLink>
          </div>
        </Container>

        <div className="rb-rise rb-delay-3 mx-auto mt-14 h-[440px] w-full max-w-3xl overflow-hidden px-5 sm:mt-16">
          <PhoneMockup />
        </div>
      </section>

      {/* Products */}
      <Section>
        <Container>
          <SectionHeading
            title="One account for the money you hold, send and spend."
            body="Three tools that work from the same dollar balance."
          />
          <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {products.map(({ title, body, href, cta, Icon }) => (
              <li key={title} className="border-t border-ink pt-6">
                <Icon className="size-6" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{body}</p>
                <Link
                  href={href}
                  className="mt-5 inline-flex items-center gap-1 font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {cta}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Comparison */}
      <Section tone="mist">
        <Container>
          <SectionHeading
            align="center"
            title="Same money. Fewer surprises."
            body="Sending dollars home shouldn't need a spreadsheet to work out what arrives."
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-line bg-paper p-8">
              <h3 className="text-lg font-semibold">Sending by bank wire</h3>
              <ul className="mt-6 space-y-4">
                {withoutUs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <X className="mt-1 size-4 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-ink p-8 text-paper">
              <h3 className="text-lg font-semibold">Sending with RemitBridge</h3>
              <ul className="mt-6 space-y-4">
                {withUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-sun" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Calculator */}
      <Section id="rates">
        <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            title="See what your recipient gets."
            body="Enter an amount and pick a country. The fee and exchange rate are on the screen before you send, not after."
          />
          <RateCalculator rates={rates} live={live} updatedAt={updatedAt} />
        </Container>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" tone="mist">
        <Container>
          <SectionHeading title="From sign-up to payout in four steps." />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title}>
                <span className="font-display text-5xl font-semibold text-sun">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Corridors */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading
            title="Where you'll be able to send."
            body="We're launching in these countries first and adding more as each payout route goes live."
          />
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-semibold">Launching first</h3>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {launch.map((c) => (
                  <li key={c.code} className="flex items-center justify-between gap-4 py-4">
                    <span className="flex items-center gap-4">
                      <span className="w-8 text-sm font-semibold text-muted">{c.code}</span>
                      <span className="font-medium">{c.country}</span>
                    </span>
                    <span className="text-right text-sm text-muted">
                      {c.currency} · {c.payout}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Next up</h3>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {next.map((c) => (
                  <li key={c.code} className="flex items-center justify-between gap-4 py-4">
                    <span className="flex items-center gap-4">
                      <span className="w-8 text-sm font-semibold text-muted">{c.code}</span>
                      <span className="font-medium">{c.country}</span>
                    </span>
                    <span className="rounded-full bg-sun-soft px-3 py-1 text-xs font-medium">
                      Soon
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust */}
      <Section tone="mist">
        <Container>
          <SectionHeading
            title="Built to be checked."
            body="Moving money is a responsibility. These are the basics we hold ourselves to."
          />
          <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {trust.map(({ title, body, Icon }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading title="Common questions" />
          <Faq items={faq} />
        </Container>
      </Section>

      <WaitlistCta />
    </>
  );
}
