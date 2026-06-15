"use client"; // Client component for interactivity
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 py-32 px-6 sm:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 6, 2026</p>

        <p className="mb-4">
          This Privacy Policy explains how we at <strong>RemitBridge</strong> collect, use, disclose, and otherwise process your information when you visit our website, mobile application, or use our services. Please read this Privacy Policy carefully to understand how your information is handled. This policy also explains how we use third-party services to securely access financial data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Personal Information We Collect</h2>
        <p className="mb-4">
          "Personal Information" refers to information that can identify you. We may collect:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Identifiers: name, email, phone number, IP address, and other online identifiers.</li>
          <li>Customer records: device IP, browser type, operating system, platform.</li>
          <li>Internet and electronic activity: pages visited and actions on our website/app.</li>
        </ul>
        <p>We do not intentionally collect sensitive information under applicable privacy laws.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Collect Personal Information</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Identity Data: name, email, country, postal code.</li>
          <li>Transaction Data: payment info processed by secure third-party processors.</li>
          <li>Technical Data: device info, IP, browser, OS.</li>
          <li>Usage Data: interactions with our website/app.</li>
          <li>Other Data: contact forms, emails.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Personal Information</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Respond to requests and questions.</li>
          <li>Send marketing communications via email or SMS.</li>
          <li>Improve our services and technology.</li>
          <li>Protect website/app integrity and security.</li>
          <li>Detect and prevent fraud or illegal activity.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Share Personal Information</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Service Providers: hosting, payment processing, analytics, support.</li>
          <li>Third Parties in Business Transfers: mergers, acquisitions, or asset sales.</li>
          <li>Legal Requirements: comply with law, protect rights, prevent fraud, or ensure safety.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies & Tracking</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Strictly necessary cookies: required to use services.</li>
          <li>Functionality cookies: remember preferences.</li>
          <li>Preference cookies: store privacy settings and account info.</li>
          <li>Analytics cookies: Google Analytics, Mixpanel, Hotjar, to improve services.</li>
        </ul>
        <p className="mb-4">
          Manage cookies in your browser. Learn more at <a href="https://www.allaboutcookies.org" className="underline hover:text-blue-600">www.allaboutcookies.org</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Privacy Rights</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Correct information.</li>
          <li>Manage cookie preferences.</li>
          <li>Opt-out of marketing communications.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Security & Data Retention</h2>
        <p className="mb-4">
          We maintain administrative, technical, and physical safeguards. We retain Personal Information only as long as necessary for services and legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Websites</h2>
        <p className="mb-4">
          Links to other websites may exist; we are not responsible for their privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Do-Not-Track</h2>
        <p className="mb-4">
          Our website may not honor browser DNT signals due to varying standards.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Children’s Privacy</h2>
        <p className="mb-4">
          We do not knowingly collect information from children under 13 or equivalent minimum age.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">International Users</h2>
        <p className="mb-4">
          Your data may be stored or processed in the U.S., which may have different privacy laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy. Updated versions are posted here. Continued use of services constitutes acceptance.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          Questions? Email us at <a href="mailto:privacy@remitbridge.com" className="underline hover:text-blue-600">privacy@remitbridge.com</a>.
        </p>
      </motion.div>
    </main>
  );
}
