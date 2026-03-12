import { useState } from "react";
import SignupModal from "./SignupModal";
const plans = [
  {
    label: "Free",
    name: "Starter",
    tagline: "Perfect for small fleets getting started",
    price: "$0",
    period: "/month",
    features: [
      "Up to 10 vehicles",
      "Unlimited bookings",
      "Basic dispatch",
      "Email support",
      "Mobile app access",
      "14-day free trial",
    ],
    highlight: false,
  },
  {
    label: "Professional",
    name: "Professional",
    tagline: "For growing operations",
    price: "$299",
    period: "/month",
    features: [
      "Up to 50 vehicles",
      "Unlimited bookings",
      "Smart auto-dispatch",
      "Priority support",
      "API access",
      "Custom integrations",
      "Advanced reporting",
      "Driver mobile app",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    label: "Custom",
    name: "Enterprise",
    tagline: "For large-scale operations",
    price: "Custom",
    features: [
      "Unlimited vehicles",
      "Multi-city support",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom development",
      "SLA guarantees",
      "White-label options",
      "Advanced security",
    ],
    highlight: false,
  },
];
 
export default function Pricing() {
   const [showModal, setShowModal] = useState(false);
 
 
  const openModal = () => {
    setShowModal(true);
    document.body.classList.add("modal-open");
    document.documentElement.classList.add("modal-open"); // html element
  };
 
  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-open"); // html element
  };
  return (
    <section id="pricing" className="py-24" style={{ background: "#0F1E2F" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-white mb-8">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-300 mb-32">
          Start free, scale as you grow. No hidden fees, no surprises.
        </p>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch relative">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col p-8 h-[550px] w-[368px] ${
                p.highlight ? "rounded-3xl h-[610px] z-10 -my-8 shadow-2xl " : "rounded-2xl"
              }`}
              style={{
                 backgroundColor: p.highlight ? "#202F3E" : "rgba(32, 47, 62, 0.29)",
                border: p.highlight ? "1px solid #374151" : "1px solid #1e293b",
                transform: p.highlight ? "scale(1.02)" : "scale(1)",
              }}
            >
              {p.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-12 py-2 rounded-full text-xs font-bold"
                  style={{ background: "#A3DE23", color: "#0A1220" }}
                >
                  {p.badge}
                </div>
              )}
              <div className="text-gray-400 text-base font-semibold tracking-widest mb-2">
                {p.label}
              </div>
              <div className="text-white text-2xl font-bold mb-1 text-left">{p.name}</div>
              <div className="text-gray-400 text-xs mb-5 text-left">{p.tagline}</div>
              <div className="flex items-end gap-1 mb-6">
                <span
                  className="text-5xl "
                  style={{ color: p.highlight ? "#A3DE23" : "#ffffff" }}
                >
                  {p.price}
                </span>
                {p.period && (
                  <span className="text-gray-400 text-sm mb-1">{p.period}</span>
                )}
              </div>
              <ul className="flex-1 space-y-2 mb-8 text-left">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={openModal}
                className="w-full py-3 rounded-xl font-normal text-sm transition-all hover:opacity-90"
                style={
                  p.highlight
                    ? { background: "#A3DE23", color: "#0A1220", marginBottom:"32px" }
                    : { background: "#FFFFFF", border: "1px solid #374151", color: "#000000" }
                }
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
        {showModal && <SignupModal  onClose={closeModal}/>}
    </section>
  );
}