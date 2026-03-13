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
    document.documentElement.classList.add("modal-open");
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-open");
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-[#0F1E2F]">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-24 max-w-2xl mx-auto">
          Start free, scale as you grow. No hidden fees, no surprises.
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 items-stretch">

          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col p-6 mb-10 lg:mb-0 sm:p-7 lg:p-8 rounded-2xl w-full 
              ${
                p.highlight
                  ? "lg:scale-105 lg:-my-6 z-10 shadow-2xl rounded-2xl"
                  : ""
              }`}
              style={{
                backgroundColor: p.highlight
                  ? "#202F3E"
                  : "rgba(32, 47, 62, 0.29)",
                border: p.highlight
                  ? "1px solid #374151"
                  : "1px solid #1e293b",
              }}
            >

              {/* Badge */}
              {p.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 lg:w-[50%] py-2 rounded-full text-xs font-bold"
                  style={{ background: "#A3DE23", color: "#0A1220" }}
                >
                  {p.badge}
                </div>
              )}

              {/* Label */}
              <div className="text-gray-400 text-sm font-semibold tracking-widest mb-2">
                {p.label}
              </div>

              {/* Plan Name */}
              <div className="text-white text-xl sm:text-2xl font-bold mb-1 text-left">
                {p.name}
              </div>

              <div className="text-gray-400 text-xs sm:text-sm mb-5 text-left">
                {p.tagline}
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span
                  className="text-4xl sm:text-5xl font-bold"
                  style={{ color: p.highlight ? "#A3DE23" : "#ffffff" }}
                >
                  {p.price}
                </span>

                {p.period && (
                  <span className="text-gray-400 text-sm mb-1">
                    {p.period}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-2 mb-8 text-left">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <span className="text-white mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={openModal}
                className="w-full py-3 rounded-xl font-normal text-sm transition-all hover:opacity-90"
                style={
                  p.highlight
                    ? { background: "#A3DE23", color: "#0A1220" , marginBottom:"10px" }
                    : {
                        background: "#FFFFFF",
                        border: "1px solid #374151",
                        color: "#000000",
                      }
                }
              >
                Start Free Trial
              </button>

            </div>
          ))}
        </div>
      </div>

      {showModal && <SignupModal onClose={closeModal} />}
    </section>
  );
}