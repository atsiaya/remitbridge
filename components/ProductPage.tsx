import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import Faq, { type FaqItem } from "@/components/Faq";
import WaitlistCta from "@/components/WaitlistCta";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";

export type Feature = { title: string; body: string; Icon: LucideIcon };

export default function ProductPage({
  title,
  intro,
  visual,
  featuresTitle,
  features,
  extra,
  faq,
  ctaTitle,
}: {
  title: string;
  intro: string;
  visual: ReactNode;
  featuresTitle: string;
  features: Feature[];
  /** Optional block between the features and the FAQ (e.g. the calculator). */
  extra?: ReactNode;
  faq: FaqItem[];
  ctaTitle?: string;
}) {
  return (
    <>
      <section className="overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
        <Container className="grid items-center gap-16 md:grid-cols-2 md:gap-10">
          <div>
            <h1 className="rb-rise font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-balance">
              {title}
            </h1>
            <p className="rb-rise rb-delay-1 mt-5 max-w-lg text-lg text-muted text-pretty sm:text-xl">
              {intro}
            </p>
            <div className="rb-rise rb-delay-2 mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/get-started" size="lg">
                Join the waitlist
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary" size="lg">
                See pricing
              </ButtonLink>
            </div>
          </div>
          <div className="rb-rise rb-delay-2 flex justify-center md:justify-end">
            {visual}
          </div>
        </Container>
      </section>

      <Section tone="mist">
        <Container>
          <SectionHeading title={featuresTitle} />
          <ul className="mt-14 grid gap-x-14 gap-y-12 sm:grid-cols-2">
            {features.map(({ title: featureTitle, body, Icon }) => (
              <li key={featureTitle} className="flex gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{featureTitle}</h3>
                  <p className="mt-2 max-w-sm leading-relaxed text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {extra}

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading title="Common questions" />
          <Faq items={faq} />
        </Container>
      </Section>

      <WaitlistCta title={ctaTitle} />
    </>
  );
}
