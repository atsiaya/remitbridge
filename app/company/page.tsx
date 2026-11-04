import type { Metadata } from "next";
import { Eye, LifeBuoy, ShieldCheck } from "lucide-react";
import WaitlistCta from "@/components/WaitlistCta";
import { Container, Section, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company",
  description:
    "RemitBridge is a money service business building a USD wallet, global remittance and virtual cards.",
  alternates: { canonical: "/company" },
};

const principles = [
  {
    title: "Clear fees",
    body: "If it costs money, we say so before you commit. No fine print where a price should be.",
    Icon: Eye,
  },
  {
    title: "Compliance first",
    body: "We verify customers and screen transfers because it protects the people we serve and the routes they rely on.",
    Icon: ShieldCheck,
  },
  {
    title: "Real people on support",
    body: "Money questions are urgent. When something goes wrong, you should be able to reach someone who can help.",
    Icon: LifeBuoy,
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="pt-14 pb-20 sm:pt-20 sm:pb-28">
        <Container>
          <h1 className="rb-rise max-w-3xl font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-balance">
            We&apos;re building the simplest way to move dollars.
          </h1>
          <p className="rb-rise rb-delay-1 mt-6 max-w-2xl text-lg text-muted text-pretty sm:text-xl">
            RemitBridge is a money service business for people and small
            businesses who earn, save and send in US dollars. We&apos;re
            starting with a USD wallet, global remittance and virtual cards,
            all on one balance, and we&apos;re launching in Africa first.
          </p>
        </Container>
      </section>

      <Section tone="mist">
        <Container>
          <SectionHeading title="What we hold ourselves to." />
          <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {principles.map(({ title, body, Icon }) => (
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

      <Section id="contact">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading title="Get in touch." />
          <dl className="divide-y divide-line border-y border-line text-lg">
            <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
              <dt className="text-muted">Email</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
              <dt className="text-muted">Phone</dt>
              <dd>
                <a
                  href={`tel:${site.phone}`}
                  className="font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
              <dt className="text-muted">Partnerships and press</dt>
              <dd className="font-medium">Use the email above</dd>
            </div>
          </dl>
        </Container>
      </Section>

      <WaitlistCta />
    </>
  );
}
