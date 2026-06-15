"use client"; // Client component for animations
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 py-32 px-6 sm:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: January 6, 2026</p>

        <p className="mb-4">
          THIS NOTICE IS IMPORTANT. PLEASE READ CAREFULLY. Certain sections of this Agreement may limit your ability to bring claims or require individual arbitration.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance</h2>
        <p className="mb-4">
          These Terms of Service ("Agreement") govern your use of <strong>RemitBridge</strong> website and mobile application ("Services"). By using our Services, you agree to be bound by this Agreement. If you do not agree, do not access or use the Services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Changes to Terms</h2>
        <p className="mb-4">
          We may update this Agreement at any time. Updated terms will be posted on the website, and your continued use constitutes acceptance.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Service Fees</h2>
        <p className="mb-4">
          You may incur fees for certain services, including transaction, or third-party fees. Any applicable fees will be shown before you complete a transaction. Contact <a href="mailto:support@remitbridge.com" className="underline hover:text-blue-600">support@remitbridge.com</a> for clarification.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">3.1. No FDIC Insurance</h3>
        <p className="mb-4">
          RemitBridge is not an FDIC-insured bank. Funds are not covered by deposit insurance.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">3.2. Cryptocurrency Risk Disclosure</h3>
        <p className="mb-4">
          Virtual currencies fluctuate in value and may result in total loss. Transactions are irreversible. RemitBridge does not control blockchain protocols and is not responsible for price changes, fraud, or security breaches at personal level  .
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">3.3. Error Resolution</h3>
        <p className="mb-4">
          If you notice errors or issues with your account, contact our Support via chat, email (<a href="mailto:support@remitbridge.com" className="underline hover:text-blue-600">support@remitbridge.com</a>), portal, or phone.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">3.4. Taxes</h3>
        <p className="mb-4">You are responsible for any taxes arising from your use of our Services.</p>

        <h3 className="text-xl font-semibold mt-4 mb-2">3.5. Account Security</h3>
        <p className="mb-4">
          You are responsible for safeguarding your login credentials. Notify Support immediately of unauthorized access or breaches.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">3.6. Protection from Unauthorized Transactions</h3>
        <p className="mb-4">
          Review your account regularly to detect unauthorized transactions and report any issues immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Accessing the Services</h2>
        <p className="mb-4">
          We may restrict or suspend access at any time. You must provide accurate registration information and comply with our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Use of Your Information</h2>
        <p className="mb-4">
          By submitting content ("User Submissions"), you grant RemitBridge a worldwide, royalty-free license to use, display, and distribute your submissions. You confirm you have all necessary rights.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Electronic Communications</h2>
        <p className="mb-4">
          You consent to receive notices and communications electronically. Promotional emails may be sent, which you can opt out from anytime.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Mobile Service Charges</h2>
        <p className="mb-4">
          Mobile carriers may impose data or other charges; you are responsible for any such fees.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Reservation of Rights</h2>
        <p className="mb-4">
          We may modify or discontinue Services at our discretion and may suspend accounts for violations of these Terms or applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Intellectual Property</h2>
        <p className="mb-4">
          All content on the website and app is owned by RemitBridge or its licensors. You may not reproduce, distribute, or create derivative works without consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Permitted Uses</h2>
        <p className="mb-4">
          You must be 18+, not subject to U.S. sanctions, and comply with all applicable laws. The website may only be used for lawful purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Prohibited Uses</h2>
        <p className="mb-4">
          You may not use the Services for unlawful, fraudulent, or harmful purposes, including money laundering or market manipulation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Reliance on Information</h2>
        <p className="mb-4">
          We do not guarantee the accuracy of information provided on the Services. Reliance is at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">13. Third-Party Links</h2>
        <p className="mb-4">
          Our Services may link to third-party websites. We are not responsible for third-party content or policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">14. Agent of Payee Appointment</h2>
        <p className="mb-4">
          By using the Services, you appoint RemitBridge as an Agent of Payee or similar designation where applicable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">15. Disclaimer of Warranties</h2>
        <p className="mb-4">
          Services are provided "as is" without warranties of any kind. RemitBridge does not guarantee accuracy, reliability, security, or uninterrupted access.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">16. Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent allowed by law, RemitBridge and its affiliates are not liable for indirect, incidental, or consequential damages related to your use of Services.
        </p>
      </motion.div>
    </main>
  );
}
