import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="py-28 sm:py-40">
      <Container className="text-center">
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.04] tracking-tight">
          That page isn&apos;t here.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">
          The link may be old or mistyped. Head back home, or see what we&apos;re building.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" size="lg">
            Go home
          </ButtonLink>
          <ButtonLink href="/pricing" variant="secondary" size="lg">
            See pricing
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
