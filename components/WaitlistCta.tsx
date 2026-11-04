import Link from "next/link";
import { Container } from "@/components/ui";
import WaitlistForm from "@/components/WaitlistForm";

export default function WaitlistCta({
  title = "Be first in line.",
  body = "We're opening early access region by region. Leave your email and we'll tell you the moment your country opens.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="rounded-[2rem] bg-ink px-6 py-14 text-center text-paper sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-paper/70 text-pretty">{body}</p>
          <div className="relative mx-auto mt-9 max-w-md">
            <WaitlistForm variant="compact" tone="dark" />
          </div>
          <p className="mt-5 text-sm text-paper/60">
            Want to tell us what you need?{" "}
            <Link
              href="/get-started"
              className="underline underline-offset-4 transition-colors hover:text-paper"
            >
              Use the full sign-up
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
