import React from 'react';
import { Shield, Lock, Server, Eye, FileCheck, AlertCircle } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Security</h1>
          <p className="text-lg text-slate-600">
            Enterprise-grade security measures to protect your business and customer data
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-600">
        <section>
          <p className="text-lg text-slate-700">
            At TransitHub, security is not an afterthought—it's fundamental to everything we do. Built by
            transport operators who understand the critical nature of your operations, we've implemented
            enterprise-grade security measures to protect your business and customer data.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Data Encryption</h3>
              <p>
                All data transmitted to and from TransitHub is encrypted using industry-standard TLS 1.3
                protocol. Data at rest is encrypted using AES-256 encryption, ensuring your sensitive
                information remains protected at all times.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Server className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Infrastructure Security</h3>
              <p>
                Our infrastructure is hosted on secure, SOC 2 compliant cloud providers with automated
                backups, disaster recovery procedures, and 99.9% uptime guarantee. We maintain redundant
                systems across multiple geographic locations to ensure business continuity.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Access Control</h3>
              <p>
                We implement role-based access control (RBAC) to ensure users only have access to data
                and features necessary for their role. Multi-factor authentication (MFA) is available
                for all accounts and required for enterprise plans.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Monitoring & Logging</h3>
              <p>
                Our systems are continuously monitored for suspicious activity. We maintain comprehensive
                audit logs of all system access and changes, enabling quick detection and response to
                potential security incidents.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Compliance & Certifications</h3>
              <p className="mb-3">We adhere to international security standards and regulations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>GDPR compliant data handling</li>
                <li>PCI DSS compliance for payment processing</li>
                <li>Regular third-party security audits</li>
                <li>ISO 27001 security management practices</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Incident Response</h3>
              <p>
                We maintain a comprehensive incident response plan with a dedicated security team ready
                to respond to any potential threats. In the unlikely event of a security incident, we
                commit to transparent communication with all affected parties.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Security Best Practices for Users</h3>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Use strong, unique passwords for your TransitHub account</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Enable multi-factor authentication when available</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Regularly review user access and remove inactive accounts</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Keep your contact information up to date for security notifications</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 mt-1">•</span>
              <span>Report any suspicious activity immediately</span>
            </li>
          </ul>
        </section>

        <section className="bg-emerald-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Report a Security Issue</h3>
          <p className="mb-4">
            If you discover a security vulnerability or have security concerns, please report them
            immediately to our security team:
          </p>
          <div className="space-y-1">
            <p>Email: <a href="mailto:info@transithub.io" className="text-emerald-600 hover:text-emerald-700 font-semibold">info@transithub.io</a></p>
            <p>Email: <a href="mailto:transithub.io@outlook.com" className="text-emerald-600 hover:text-emerald-700 font-semibold">transithub.io@outlook.com</a></p>
          </div>
          <p className="mt-4 text-sm">
            We take all security reports seriously and will respond promptly to investigate and address
            any verified issues.
          </p>
        </section>
      </div>
    </div>
  );
}
