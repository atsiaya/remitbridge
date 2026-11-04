import Link from "next/link";
import Logo from "@/components/Logo";
import { Container } from "@/components/ui";
import { footerLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
              {site.tagline} A USD wallet, global remittance and virtual cards
              in one account.
            </p>
            <p className="mt-5 text-[15px]">
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
              >
                {site.email}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h2 className="text-sm font-semibold">{heading}</h2>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 space-y-2 border-t border-line pt-6 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
            {" "}RemitBridge is not a bank.
          </p>
          {site.licenseNotice ? <p>{site.licenseNotice}</p> : null}
        </div>
      </Container>
    </footer>
  );
}
