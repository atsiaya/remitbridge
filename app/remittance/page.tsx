import type { Metadata } from "next";
import { Container, Section, SectionHeading } from "@/components/ui";
import { Percent, Smartphone, Eye, Route } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import RateCalculator from "@/components/RateCalculator";
import ReceiptVisual from "@/components/ReceiptVisual";
import { pricing } from "@/lib/pricing";
import { getRates } from "@/lib/rates";

export const metadata: Metadata = {
  title: "Send money abroad",
  description:
    "Send money to mobile money wallets and bank accounts with the mid-market exchange rate and a fee shown before you confirm.",
  alternates: { canonical: "/remittance" },
};

export default async function RemittancePage() {
  const { rates, live, updatedAt } = await getRates();

  return (
    <ProductPage
      title="Send money home, or anywhere."
      intro="Pay mobile money wallets and bank accounts abroad. You see the fee and the exchange rate first, so there's nothing to decode afterwards."
      visual={<ReceiptVisual />}
      featuresTitle="Clear from the first tap."
      features={[
        {
          title: "The mid-market rate",
          body: "We convert at the mid-market rate. Our fee is the only cost, and it's shown up front.",
          Icon: Percent,
        },
        {
          title: "Mobile money and bank payouts",
          body: "Recipients are paid in local currency to a mobile money wallet or a bank account, depending on the country.",
          Icon: Smartphone,
        },
        {
          title: "Quote before you confirm",
          body: "The amount your recipient gets is on screen before you send. If it isn't what you expected, you walk away.",
          Icon: Eye,
        },
        {
          title: "Follow every transfer",
          body: "Status updates from the moment you send until the money lands, plus a reference you can quote to support.",
          Icon: Route,
        },
      ]}
      extra={
        <Section>
          <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              title="Try a transfer."
              body={`The fee is ${pricing.transferFeePercent}% of the amount you send, with a minimum of $${pricing.transferMinFeeUsd.toFixed(2)}. Pick a country to see what arrives.`}
            />
            <RateCalculator rates={rates} live={live} updatedAt={updatedAt} />
          </Container>
        </Section>
      }
      faq={[
        {
          q: "How fast do transfers arrive?",
          a: "Our target is minutes for mobile money and the same day for bank payouts. Times depend on the destination and the receiving bank, and we show an estimate before you send.",
        },
        {
          q: "What does my recipient need?",
          a: "A mobile money number or a bank account in their country. They don't need a RemitBridge account.",
        },
        {
          q: "Are there sending limits?",
          a: "Limits depend on how far you've been verified and on the destination. You'll see yours in the app before you send.",
        },
        {
          q: "What if a transfer can't be completed?",
          a: "We tell you what went wrong and what happens next. Funds that can't be delivered are returned to your wallet.",
        },
      ]}
      ctaTitle="Send your first transfer sooner."
    />
  );
}
