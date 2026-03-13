import React from "react";
import { Users, Target, Wrench, Check, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white mt-12 sm:mt-14 lg:mt-16">

      {/* HERO */}
      <div className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4">
              <span className="text-xs sm:text-sm font-semibold text-[#0F1E2F]">
                ABOUT US
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Built by Operators, For Operators
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              The world's first channel manager designed specifically for ground transport operators
            </p>
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start mb-16">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* BLOCK 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F1E2F]" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                  8+ Years of Transport Operations
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Our journey began on the ground, operating a transport company for over 8 years. We lived
                  the challenges you face every day—managing fleets, juggling bookings, coordinating drivers,
                  and struggling with systems that weren't built for our industry.
                </p>
              </div>
            </div>

            {/* BLOCK 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F1E2F]" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                  Solving Real Problems
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  All existing solutions are built for broader categories—activities, experiences, tours—and
                  they always keep the transfers part undervalued. We saw this gap firsthand. Ground
                  transportation deserves better than being an afterthought in generic booking systems.
                </p>
              </div>
            </div>

            {/* BLOCK 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F1E2F]" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                  Purpose-Built Technology
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  That's why we built TransitHub—a platform created by transport operators specifically for
                  transport operators. Whether you need a lightweight dispatch system or a full-fledged
                  complex API for OTA integrations, we're your tech partner for all needs.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">

            <div className="space-y-6">

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  Everything You Need, All in One Place
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                  We understand what transport operators need because we've been there. TransitHub brings
                  together all the tools that were scattered across multiple systems:
                </p>
              </div>

              <div className="space-y-4">

                {[
                  ["Your Own Booking Engine", "Customizable to match your brand and workflow"],
                  ["Payment Gateway Integration", "Secure payment processing built in"],
                  ["Dynamic Pricing Rules", "Multi-variable pricing that adapts to demand"],
                  ["Add-ons & Upselling", "Maximize revenue with smart upsell features"],
                  ["OTA API Integration", "Connect to global distribution channels"],
                  ["Dispatcher System", "From lightweight to enterprise-grade"],
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">

                    <Check className="w-5 h-5 text-[#0F1E2F] flex-shrink-0 mt-1" />

                    <div>
                      <p className="font-semibold text-slate-900 text-sm sm:text-base">
                        {item[0]}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {item[1]}
                      </p>
                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 md:p-12 text-center">

          <div className="max-w-3xl mx-auto">

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Over 10 Years of Combined Expertise
            </h3>

            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Our team brings together more than a decade of experience in both transport operations and
              technology. This unique combination keeps us ahead of the curve, solving problems before they
              become roadblocks for our community.
            </p>

            <p className="text-white text-lg sm:text-xl font-semibold mb-8">
              Built for the community. Powered by experience. Driven by innovation.
            </p>

            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white text-sm sm:text-base font-medium">
                Your Tech Partner in Ground Transportation
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}