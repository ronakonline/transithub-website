import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: February 1, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
          <p>
            TransitHub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our ground
            transportation management platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">2. Information We Collect</h2>
          <p className="mb-3">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Account information (name, email, company details)</li>
            <li>Booking and reservation data</li>
            <li>Payment and billing information</li>
            <li>Customer and passenger information</li>
            <li>Communication preferences</li>
            <li>Usage data and analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">3. How We Use Your Information</h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process bookings and transactions</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends and usage</li>
            <li>Detect and prevent fraudulent transactions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">4. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with third parties only
            in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>With service providers who assist our operations</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction. However, no method of
            transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">6. Your Rights</h2>
          <p className="mb-3">You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your information</li>
            <li>Export your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">7. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to collect information about your browsing
            activities. You can control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of
            residence. We ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect
            personal information from children under 18. If you become aware that a child has provided us
            with personal information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">10. Changes to Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <div className="mt-3 space-y-1">
            <p>Email: <a href="mailto:info@transithub.io" className="text-emerald-600 hover:text-emerald-700">info@transithub.io</a></p>
            <p>Email: <a href="mailto:transithub.io@outlook.com" className="text-emerald-600 hover:text-emerald-700">transithub.io@outlook.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
