import type { Metadata } from "next";
import { Container } from "@/components/ui";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "Get early access to RemitBridge: a USD wallet, global remittance and virtual cards. We'll email you when your country opens.",
  alternates: { canonical: "/get-started" },
};

export default function GetStartedPage() {
  return (
    <section className="pt-14 pb-24 sm:pt-20 sm:pb-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <h1 className="rb-rise font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-balance">
            Get early access.
          </h1>
          <p className="rb-rise rb-delay-1 mt-5 max-w-md text-lg text-muted text-pretty sm:text-xl">
            We&apos;re opening region by region. Tell us where you are and what
            you need, and we&apos;ll email you when your country opens.
          </p>
          <p className="rb-rise rb-delay-2 mt-8 max-w-md text-[15px] leading-relaxed text-muted">
            We only use your details to contact you about RemitBridge. You can
            ask us to delete them at any time.
          </p>
        </div>

        <div className="rb-rise rb-delay-2 relative rounded-3xl border border-line bg-mist p-6 sm:p-10">
          <WaitlistForm variant="full" />
        </div>
      </Container>
    </section>
  );
}
