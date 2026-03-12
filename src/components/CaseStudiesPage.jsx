import React from 'react';
import image1 from "../img/casestudies1.png";
import image2 from "../img/casestudies2.png";
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Clock, MapPin } from 'lucide-react';
 
export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'global-ota-expansion',
      title: 'Global OTA Scales to 200+ Suppliers in 30 Days',
      category: 'OTA Success Story',
      excerpt: 'How a leading OTA onboarded 200+ offline suppliers and DMCs with complex pricing across thousands of routes in just one month.',
      image: image2,
      metrics: [
        { label: 'Suppliers Onboarded', value: '200+' },
        { label: 'Time to Live', value: '30 Days' },
        { label: 'Revenue Increase', value: '340%' }
      ],
      tags: ['OTA', 'Supplier Management', 'Revenue Growth']
    },
    {
      id: 'italy-supplier-transformation',
      title: 'Italian DMC Manages 2,000 Routes with 50 Rules',
      category: 'Supplier Success Story',
      excerpt: 'How a premier Italian ground transportation provider simplified complex terrain-based pricing and went live in one week.',
      image: image1,
      metrics: [
        { label: 'Routes Managed', value: '2,000' },
        { label: 'Pricing Rules', value: '50' },
        { label: 'Time to Live', value: '7 Days' }
      ],
      tags: ['DMC', 'Inventory Management', 'Pricing Engine']
    }
  ];
 
  return (
    <div className="min-h-screen bg-white mt-10">
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-[#0F1E2F]">SUCCESS STORIES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F1E2F] mb-6">
            Real Results from
            <br />
            <span className="text-transparent bg-clip-text bg-[#0F1E2F]">
              Real Customers
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how leading travel companies and ground transportation providers are transforming their operations with TransitHub.
          </p>
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-study/${study.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0F1E2F] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#0F1E2F]">
                    {study.category}
                  </span>
                </div>
              </div>
 
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#0F1E2F] transition-colors">
                  {study.title}
                </h2>
                <p className="text-slate-600 mb-6">
                  {study.excerpt}
                </p>
 
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-200">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-[#0F1E2F]">{metric.value}</div>
                      <div className="text-xs text-slate-600 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
 
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-[#0F1E2F] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
 
                <div className="flex items-center text-[#0F1E2F] font-semibold group-hover:gap-3 gap-2 transition-all">
                  Read Full Story
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
 
        <div className="mt-16 bg-[#0F1E2F] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of travel companies transforming their ground transportation operations with TransitHub.
          </p>
          <Link to="/demo" className="px-8 py-4 bg-white text-[#0F1E2F] rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            Watch Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
 