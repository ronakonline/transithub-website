import React from 'react';
import image1 from "../img/casestudies1.png";
import image2 from "../img/casestudies2.png";
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Clock, DollarSign, Target, CheckCircle2, Quote } from 'lucide-react';
import Navbar from './NavBar';
import Footer from './Footer';
 
export default function CaseStudyDetailPage() {
  const { id } = useParams();
 
  const caseStudies = {
    'global-ota-expansion': {
      title: 'Global OTA Scales to 200+ Suppliers in 30 Days',
      category: 'OTA Success Story',
      image: image2,
      client: {
        name: 'Leading European OTA',
        industry: 'Online Travel Agency',
        size: '500+ Employees',
        markets: 'Europe, Middle East, Asia'
      },
      challenge: {
        title: 'The Challenge',
        description: 'A rapidly growing OTA needed to expand their ground transportation offerings to compete with larger players. They faced significant challenges managing offline suppliers and DMCs without investing in expensive extranet infrastructure.',
        problems: [
          'No infrastructure to onboard offline suppliers at scale',
          'Complex price calculation mismatches across suppliers',
          'Managing thousands of routes with inconsistent data formats',
          'Need for hourly rentals and meet & greet products beyond basic transfers',
          'Limited technical resources to build and maintain integrations',
          'Operational bottlenecks in supplier communication and support'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'TransitHub provided a complete platform that eliminated the need for custom extranet infrastructure while enabling rapid supplier onboarding and product diversification.',
        features: [
          {
            title: 'Rapid Supplier Onboarding',
            description: 'Dedicated onboarding team helped bring 200+ offline suppliers and DMCs live within 30 days'
          },
          {
            title: 'Universal Product Support',
            description: 'Seamlessly handled transfers, hourly rentals, and meet & greet services in one unified platform'
          },
          {
            title: 'Intelligent Pricing Engine',
            description: 'Advanced pricing algorithms resolved complex calculation mismatches across suppliers'
          },
          {
            title: 'Route Management at Scale',
            description: 'Efficiently managed thousands of routes with standardized data formats'
          },
          {
            title: 'Technical Knowledge Transfer',
            description: 'Comprehensive training and documentation empowered the internal team'
          },
          {
            title: 'Operational Support',
            description: '24/7 support team provided ongoing assistance to ensure smooth operations'
          }
        ]
      },
      results: {
        title: 'The Results',
        description: 'The impact was immediate and transformative, positioning the OTA as a major player in ground transportation.',
        metrics: [
          {
            icon: Users,
            value: '200+',
            label: 'Suppliers Onboarded',
            description: 'Offline suppliers and DMCs integrated in 30 days'
          },
          {
            icon: Clock,
            value: '30 Days',
            label: 'Time to Market',
            description: 'From planning to full production launch'
          },
          {
            icon: TrendingUp,
            value: '340%',
            label: 'Revenue Growth',
            description: 'YoY increase in ground transfer bookings'
          },
          {
            icon: Target,
            value: '5,000+',
            label: 'Routes Active',
            description: 'Across all markets and destinations'
          },
          {
            icon: DollarSign,
            value: '92%',
            label: 'Margin Improvement',
            description: 'Through optimized supplier pricing'
          },
          {
            icon: CheckCircle2,
            value: '99.8%',
            label: 'Booking Success Rate',
            description: 'Industry-leading reliability'
          }
        ],
        operationalImpact: [
          'Reduced time spent on supplier management by 85%',
          'Eliminated need for custom extranet development (saving $500K+)',
          'Increased customer satisfaction scores by 28%',
          'Expanded to 3 new markets within 6 months',
          'Automated 95% of booking confirmations',
          'Reduced customer support tickets by 60%'
        ]
      },
      quote: {
        text: 'TransitHub didn\'t just solve our technical challenges—they became a true partner in our growth. The team\'s expertise in supplier onboarding and their willingness to adapt the platform to our complex pricing needs was game-changing. We went from struggling with 20 suppliers to confidently managing 200+ in just one month.',
        author: 'Head of Ground Transportation',
        company: 'Leading European OTA'
      }
    },
    'italy-supplier-transformation': {
      title: 'Italian DMC Manages 2,000 Routes with 50 Rules',
      category: 'Supplier Success Story',
      image: image1,
      client: {
        name: 'Premier Italian Ground Transportation Provider',
        industry: 'Destination Management Company',
        size: '50+ Vehicles',
        markets: 'Italy (National Coverage)'
      },
      challenge: {
        title: 'The Challenge',
        description: 'A well-established Italian DMC with extensive market knowledge struggled to digitally manage their complex inventory and pricing structure. Their terrain-based pricing model was too sophisticated for standard booking systems.',
        problems: [
          'Managing 2,000+ routes with varying complexity levels',
          'Pricing based on distance, time, location, AND terrain factors',
          'No unified system for agents, walk-ins, and OTA bookings',
          'Manual inventory management causing errors and overbooking',
          'Inability to showcase full service range to potential partners',
          'Time-consuming price calculations for custom routes'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'TransitHub\'s advanced rule engine and flexible pricing system provided the perfect foundation to digitize and scale their unique business model.',
        features: [
          {
            title: 'Intelligent Rule Engine',
            description: 'Created just 50 rules that elegantly covered all 2,000 routes and edge cases'
          },
          {
            title: 'Multi-Parameter Pricing',
            description: 'Configured pricing to account for distance, time, location, and terrain complexity'
          },
          {
            title: 'Unified Distribution',
            description: 'One platform to sell to agents, walk-in customers, and OTAs simultaneously'
          },
          {
            title: 'Real-Time Inventory',
            description: 'Live vehicle availability across all sales channels to prevent overbooking'
          },
          {
            title: 'Rapid Implementation',
            description: 'Complete setup with exact pricing and routes in just 7 days'
          },
          {
            title: 'Custom Route Builder',
            description: 'Tools to easily create and price new routes on demand'
          }
        ]
      },
      results: {
        title: 'The Results',
        description: 'The transformation was immediate, with significant operational efficiency gains and new revenue opportunities.',
        metrics: [
          {
            icon: Target,
            value: '2,000',
            label: 'Routes Managed',
            description: 'Complex routes with terrain-based pricing'
          },
          {
            icon: CheckCircle2,
            value: '50',
            label: 'Pricing Rules',
            description: 'Covering all routes and edge cases'
          },
          {
            icon: Clock,
            value: '7 Days',
            label: 'Time to Live',
            description: 'From onboarding to full production'
          },
          {
            icon: TrendingUp,
            value: '156%',
            label: 'Booking Volume',
            description: 'Increase in monthly bookings'
          },
          {
            icon: Users,
            value: '45+',
            label: 'New OTA Partners',
            description: 'Connected within 3 months'
          },
          {
            icon: DollarSign,
            value: '68%',
            label: 'Revenue Growth',
            description: 'Year-over-year increase'
          }
        ],
        operationalImpact: [
          'Eliminated manual pricing calculations saving 30+ hours per week',
          'Reduced booking errors from 8% to less than 0.5%',
          'Expanded distribution to reach international OTAs',
          'Automated inventory management across all channels',
          'Enabled dynamic pricing during peak seasons',
          'Reduced time to quote custom routes from hours to minutes'
        ]
      },
      quote: {
        text: 'After 15 years in this business, I thought our pricing model was too complex to digitize. TransitHub proved me wrong in just one week. The rule engine is incredibly powerful yet simple to use. Now we can instantly quote any route, even ones we\'ve never run before, with complete confidence in the pricing. Our team loves it, and our partners are impressed by how quickly we respond.',
        author: 'Operations Manager',
        company: 'Premier Italian Ground Transportation Provider'
      }
    }
  };
   const study = caseStudies[id || ""];

  if (!study) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Case Study Not Found
          </h1>
          <Link to="/case-study" className="text-emerald-600 hover:underline">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[420px] overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12 w-full">

            <Link
              to="/case-study"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-4 sm:mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Back to Case Studies</span>
            </Link>

            <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 ml-0 sm:ml-4 bg-white rounded-full mb-4">
              <span className="text-xs sm:text-sm font-semibold text-[#0F1E2F]">
                {study.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {study.title}
            </h1>

          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">

        <div className="grid lg:grid-cols-4 gap-10 lg:gap-12 mb-16">

          {/* SIDEBAR */}
          <div className="lg:col-span-1 order-2 lg:order-1">

            <div className="bg-slate-50 rounded-xl p-6 lg:sticky lg:top-24">

              <h3 className="font-semibold text-slate-900 mb-4">
                Client Profile
              </h3>

              <div className="space-y-3">

                <div>
                  <div className="text-sm text-slate-600">Company</div>
                  <div className="font-medium text-slate-900">
                    {study.client.name}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-slate-600">Industry</div>
                  <div className="font-medium text-slate-900">
                    {study.client.industry}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-slate-600">Size</div>
                  <div className="font-medium text-slate-900">
                    {study.client.size}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-slate-600">Markets</div>
                  <div className="font-medium text-slate-900">
                    {study.client.markets}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="lg:col-span-3 space-y-14 order-1 lg:order-2">

            {/* CHALLENGE */}
            <section>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                {study.challenge.title}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 mb-6">
                {study.challenge.description}
              </p>

              <div className="bg-red-50 rounded-xl p-6 border border-red-100">

                <h3 className="font-semibold text-slate-900 mb-4">
                  Key Challenges
                </h3>

                <ul className="space-y-3">

                  {study.challenge.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700 text-sm sm:text-base">
                        {problem}
                      </span>
                    </li>
                  ))}

                </ul>

              </div>

            </section>

            {/* SOLUTION */}
            <section>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                {study.solution.title}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 mb-8">
                {study.solution.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">

                {study.solution.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-xl p-6 border border-emerald-100"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}

              </div>

            </section>

            {/* RESULTS */}
            <section>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                {study.results.title}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 mb-8">
                {study.results.description}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

                {study.results.metrics.map((metric, idx) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200"
                    >

                      <div className="w-12 h-12 bg-[#0F1E2F] rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="text-2xl sm:text-3xl font-bold text-[#0F1E2F] mb-1">
                        {metric.value}
                      </div>

                      <div className="font-semibold text-slate-900 mb-2">
                        {metric.label}
                      </div>

                      <div className="text-sm text-slate-600">
                        {metric.description}
                      </div>

                    </div>
                  );
                })}

              </div>

              <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">

                <h3 className="font-semibold text-slate-900 mb-6 text-lg sm:text-xl">
                  Operational Impact
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">

                  {study.results.operationalImpact.map((impact, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0F1E2F] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm sm:text-base">
                        {impact}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </section>

            {/* QUOTE */}
            <section className="bg-gray-300 rounded-2xl p-6 sm:p-8 md:p-12 text-[#0F1E2F] relative overflow-hidden">

              <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 text-white/10" />

              <div className="relative">

                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#0F1E2F] mb-6" />

                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                  "{study.quote.text}"
                </blockquote>

                <div className="border-t border-white/20 pt-6">
                  <div className="font-semibold text-lg">
                    {study.quote.author}
                  </div>
                  <div className="text-gray-700">
                    {study.quote.company}
                  </div>
                </div>

              </div>

            </section>

          </div>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-10 md:p-12 text-center text-white">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            See how TransitHub can help you achieve similar results. Schedule a personalized demo today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/demo"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0F1E2F] rounded-lg font-semibold text-sm sm:text-lg hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Watch Demo
            </Link>

            <Link
              to="/case-study"
              onClick={() => window.scrollTo(0, 0)}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-semibold text-sm sm:text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View More Case Studies
            </Link>

          </div>

        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}