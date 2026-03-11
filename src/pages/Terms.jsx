import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Terms and Conditions</h1>
          <p className="text-slate-600">Last updated: February 1, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing and using TransitHub's platform, you agree to be bound by these Terms and Conditions.
            If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">2. Service Description</h2>
          <p>
            TransitHub provides a comprehensive ground transportation management platform including booking
            engine, dispatch system, inventory management, pricing tools, and integration capabilities for
            transport operators.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">3. Account Registration</h2>
          <p className="mb-3">To use our services, you must:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized access</li>
            <li>Be responsible for all activities under your account</li>
            <li>Not share your account with others</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">4. Acceptable Use</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Use the service for any illegal purposes</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Interfere with or disrupt the service</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Transmit any viruses or malicious code</li>
            <li>Use the service to compete with TransitHub</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">5. Payment Terms</h2>
          <p className="mb-3">Payment terms vary by plan:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Subscription fees are billed monthly or annually in advance</li>
            <li>Per-booking fees are charged for each confirmed booking</li>
            <li>All fees are non-refundable unless otherwise stated</li>
            <li>We reserve the right to modify pricing with 30 days notice</li>
            <li>Late payments may result in service suspension</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">6. Intellectual Property</h2>
          <p>
            All content, features, and functionality of TransitHub are owned by us and protected by
            international copyright, trademark, and other intellectual property laws. You may not copy,
            modify, or distribute our intellectual property without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">7. Data and Content</h2>
          <p>
            You retain ownership of all data you input into the platform. By using our service, you grant us
            a license to use, store, and process your data to provide the services. We will handle your data
            in accordance with our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">8. Service Availability</h2>
          <p>
            We strive to maintain high availability but do not guarantee uninterrupted service. We may
            perform maintenance, updates, or modifications that temporarily affect service availability.
            We are not liable for any downtime or service interruptions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, TransitHub shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, including lost profits, data loss,
            or business interruption arising from your use of the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">10. Termination</h2>
          <p>
            We may terminate or suspend your account at any time for violation of these terms. You may
            cancel your account at any time. Upon termination, your right to use the service ceases
            immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify you of material changes
            via email or through the platform. Continued use after changes constitutes acceptance of the
            new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">12. Governing Law</h2>
          <p>
            These terms are governed by the laws of the United Arab Emirates. Any disputes shall be
            resolved in the courts of Dubai.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">13. Contact Information</h2>
          <p>For questions about these Terms and Conditions, contact us at:</p>
          <div className="mt-3 space-y-1">
            <p>Email: <a href="mailto:info@transithub.io" className="text-emerald-600 hover:text-emerald-700">info@transithub.io</a></p>
            <p>Email: <a href="mailto:transithub.io@outlook.com" className="text-emerald-600 hover:text-emerald-700">transithub.io@outlook.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
