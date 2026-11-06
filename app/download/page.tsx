import type { Metadata } from "next";
import PhoneMockup from "@/components/PhoneMockup";
import { ButtonLink, Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download the app",
  description:
    "Get the RemitBridge app for iPhone and Android to hold USD, send money abroad and manage virtual cards.",
  alternates: { canonical: "/download" },
};

export default function DownloadPage() {
  return (
    <section className="overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <Container className="grid items-center gap-16 md:grid-cols-2 md:gap-10">
        <div>
          <h1 className="rb-rise font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.04] tracking-tight text-balance">
            Get the RemitBridge app.
          </h1>
          <p className="rb-rise rb-delay-1 mt-5 max-w-lg text-lg text-muted text-pretty sm:text-xl">
            Hold dollars, send money abroad and manage your virtual cards from
            your phone. Available for iPhone and Android.
          </p>
          <div className="rb-rise rb-delay-2 mt-8 flex flex-wrap gap-3">
            <ButtonLink href={site.appDownloadUrl} size="lg">
              Download the app
            </ButtonLink>
            <ButtonLink href="/get-started" variant="secondary" size="lg">
              Join the waitlist
            </ButtonLink>
          </div>
          <p className="rb-rise rb-delay-3 mt-6 max-w-md text-[15px] leading-relaxed text-muted">
            On your computer? Open this page on your phone, or use the button
            to pick your app store. We&apos;ll send you to the right one for
            your device.
          </p>
        </div>

        <div className="rb-rise rb-delay-2 flex justify-center md:justify-end">
          <PhoneMockup />
        </div>
      </Container>
    </section>
  );
}
