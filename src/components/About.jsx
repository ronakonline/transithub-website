import React from 'react';
import { Users, Target, Wrench, Check, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white mt-16">
      <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-[#0F1E2F]">ABOUT US</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              Built by Operators, For Operators
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The world's first channel manager designed specifically for ground transport operators
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#0F1E2F]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">8+ Years of Transport Operations</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our journey began on the ground, operating a transport company for over 8 years. We lived
                  the challenges you face every day—managing fleets, juggling bookings, coordinating drivers,
                  and struggling with systems that weren't built for our industry.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-[#0F1E2F]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Solving Real Problems</h3>
                <p className="text-slate-600 leading-relaxed">
                  All existing solutions are built for broader categories—activities, experiences, tours—and
                  they always keep the transfers part undervalued. We saw this gap firsthand. Ground
                  transportation deserves better than being an afterthought in generic booking systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-[#0F1E2F]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Purpose-Built Technology</h3>
                <p className="text-slate-600 leading-relaxed">
                  That's why we built TransitHub—a platform created by transport operators specifically for
                  transport operators. Whether you need a lightweight dispatch system or a full-fledged
                  complex API for OTA integrations, we're your tech partner for all needs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Everything You Need, All in One Place</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We understand what transport operators need because we've been there. TransitHub brings
                  together all the tools that were scattered across multiple systems:
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#0F1E2F] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Your Own Booking Engine</p>
                    <p className="text-sm text-slate-600">Customizable to match your brand and workflow</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#0F1E2F] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Payment Gateway Integration</p>
                    <p className="text-sm text-slate-600">Secure payment processing built in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#0F1E2F] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Dynamic Pricing Rules</p>
                    <p className="text-sm text-slate-600">Multi-variable pricing that adapts to demand</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#0F1E2F] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Add-ons & Upselling</p>
                    <p className="text-sm text-slate-600">Maximize revenue with smart upsell features</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#0F1E2F] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">OTA API Integration</p>
                    <p className="text-sm text-slate-600">Connect to global distribution channels</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-[#0F1E2F] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Dispatcher System</p>
                    <p className="text-sm text-slate-600">From lightweight to enterprise-grade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Over 10 Years of Combined Expertise
            </h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Our team brings together more than a decade of experience in both transport operations and
              technology. This unique combination keeps us ahead of the curve, solving problems before they
              become roadblocks for our community.
            </p>
            <p className="text-white text-xl font-semibold mb-8">
              Built for the community. Powered by experience. Driven by innovation.
            </p>
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Your Tech Partner in Ground Transportation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
