import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="4 November 2026"
      intro={`This policy explains what personal information ${site.name} collects, why we collect it, and the choices you have. It covers this website and our services.`}
      sections={[
        {
          heading: "Who we are",
          body: [
            `${site.name} is the controller of the personal information described here. You can reach us at ${site.email}.`,
          ],
        },
        {
          heading: "What we collect",
          body: [
            "On this website: your email address, country and interests if you join the waitlist, plus basic technical data such as your browser and approximate location from your IP address.",
            "When you open an account: your name, contact details, date of birth, identity documents and other information we need to verify you, along with details of your transactions and the recipients you send money to.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "To run the waitlist and contact you about early access; to open and operate your account; to process transfers and card payments; to verify identity, prevent fraud and meet legal obligations; and to improve and secure our services.",
          ],
        },
        {
          heading: "Who we share it with",
          body: [
            "Payment partners, banks and mobile money operators that deliver your transfers; identity verification and screening providers; infrastructure and email providers that process data for us; and regulators or law enforcement where the law requires. We don't sell your personal information.",
          ],
        },
        {
          heading: "International transfers",
          body: [
            "Sending money abroad means some of your information travels with it, and our providers may be located in other countries. We take steps to make sure it stays protected wherever it goes.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "Waitlist details are kept until you ask us to remove them or until we've finished the launch in your region. Account and transaction records are kept for as long as the law requires after your account closes.",
          ],
        },
        {
          heading: "Security",
          body: [
            "We use technical and organisational measures to protect personal information. No system is perfectly secure, so we also limit who can access it and what they can see.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on where you live, including under Kenya's Data Protection Act, you can ask to access, correct or delete your information, object to or restrict certain uses, and withdraw consent. Email us and we'll respond within the time the law allows. You can also complain to your data protection authority.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "This website uses only the cookies and storage it needs to work. If we add analytics or advertising tools, we'll update this policy and ask for consent where required.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We'll post updates here and change the date above. If a change is significant, we'll tell you directly.",
          ],
        },
        {
          heading: "Contact",
          body: [`Privacy questions or requests: ${site.email}.`],
        },
      ]}
    />
  );
}
