// ── Icon imports ─────────────────────────────────────────
import icon1 from "../img/Feature_Icon1.png";
import icon2 from "../img/Feature_Icon2.png";
import icon3 from "../img/Feature_Icon3.png";
import icon4 from "../img/Feature_Icon4.png";
import icon5 from "../img/Feature_Icon5.png";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import SignupModal from "./SignupModal";

// ── Feature images ───────────────────────────────────────
import imgFleet from "../img/Feature1.png";
import imgDispatch from "../img/Feature2.png";
import imgPricing from "../img/Feature3.png";
import imgOTA from "../img/Feature4.png";
import imgCalendar from "../img/Feature5.png";

const features = [
  {
    icon: icon1,
    title: "Real-time fleet & availability",
    desc: "Get complete real-time visibility into your fleet,\n vehicle availability, and driver status so your\n team always knows exactly which vehicles are\n ready for the next booking",
    image: imgFleet,
  },
  {
    icon: icon2,
    title: "Smart auto-dispatch",
    desc: "Automatically assign the most suitable vehicle to\n every booking using intelligent auto-dispatch \nbased on location, vehicle type, availability, and\n operational rules",
    image: imgDispatch,
  },
  {
    icon: icon3,
    title: "Dynamic pricing engine",
    desc: "Configure powerful pricing rules and \nautomatically calculate transfer fares based on\n distance, time, route complexity, surge demand,\n and custom pricing logic",
    image: imgPricing,
  },
  {
    icon: icon4,
    title: "OTA Integration",
    desc: "Connect your transfer inventory to global online\n travel agencies through a unified API and\n distribute real-time availability, pricing, and\n bookings across multiple platforms.",
    image: imgOTA,
  },
  {
    icon: icon5,
    title: "Centralized booking calendar",
    desc: "Manage and track all bookings from every sales\n channel in one centralized calendar view, helping\n your operations team avoid conflicts and stay \nfully organized",
    image: imgCalendar,
  },
];

export default function Features() {
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
    <section id="features" className="w-full bg-[#0F1E2F] pb-20 xl:pb-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">

        {/* Header */}
        <div className="text-center pt-16 sm:pt-20 lg:pt-24 pb-12 lg:pb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Your Complete Transfer Command Center
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed tracking-wide">
            Everything you need to run a modern ground transfer operation, in one
            powerful platform.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-y-40 sm:gap-y-[200px] lg:gap-y-[200px] mt-10 lg:mt-24">

          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >

              {/* Text */}
              <div className="flex flex-col max-w-xl text-center lg:text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <img src={feature.icon} alt="" className="w-full h-full" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {feature.desc}
                </p>

                <div
                  onClick={openModal}
                  className="text-[#A3DE23] mt-8 lg:mt-10 sm:pb-10 pb-4 flex gap-x-2 cursor-pointer justify-center lg:justify-start"
                >
                  <span>Get Started</span>
                  <MoveRight />
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-md max-h-[350px] lg:max-h-[430px]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

            </div>
          ))}

        </div>
      </div>

      {showModal && <SignupModal onClose={closeModal} />}
    </section>
  );
}