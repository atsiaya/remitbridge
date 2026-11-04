import { Container } from "@/components/ui";

export type LegalSection = { heading: string; body: string[] };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <article className="pt-14 pb-24 sm:pt-20 sm:pb-32">
      <Container className="max-w-3xl">
        <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-balance">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated {updated}</p>
        <p className="mt-8 text-lg leading-relaxed text-muted">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold">
                {i + 1}. {section.heading}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
