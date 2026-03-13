import HeroSection from "../img/HeroSection.png";
import iconCalendar from "../img/Icon1.png";
import iconCreditCard from "../img/Icon2.png";
import iconCheck from "../img/Icon3.png";
import { useState } from "react";
import SignupModal from "./SignupModal";
import { useNavigate } from "react-router-dom";

const badges = [
  { icon: iconCheck, text: "14-day free trial" },
  { icon: iconCalendar, text: "No credit card needed" },
  { icon: iconCreditCard, text: "Cancel Anytime" },
];

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
    <section className="relative w-full flex flex-col justify-evenly items-center min-h-screen overflow-hidden bg-[#0F1E2F] pt-40 px-6 md:px-12 xl:px-24">

      {/* glow */}
      <div className="absolute hidden lg:block 2xl:hidden top-[60%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-[350px] xl:w-[450px] xl:h-[200px] h-[170px] rounded-full bg-[#0D9688] blur-[100px] pointer-events-none z-0" />

      {/* main box */}
      <div
        style={{ backgroundColor: "rgba(231, 242, 255, 0.04)" }}
        className="relative z-10 max-w-[1440px] mx-auto w-full rounded-xl backdrop-blur-md overflow-hidden flex flex-col lg:flex-row  items-center gap-12 px-6 sm:pl-6 sm:pr-0 md:pl-10 xl:pl-16 xl:pr-0 pt-12 xl:pt-16"
      >
        {/* LEFT */}
        <div className="flex flex-col justify-center items-center md:items-start w-full lg:w-[50%] gap-y-6 lg:gap-y-8">

          <h1 className="lg:block hidden text-3xl md:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-white leading-snug tracking-wide" style={{lineHeight:"1"}}>
            Real-Time Control <br className="hiddden"/>
            for Ground Transfer <br className="hidden" />
            Operations.
          </h1>
          <h1 className="lg:hidden text-center md:text-start block text-3xl md:text-4xl xl:text-5xl 2xl:text-[55px] font-semibold text-white leading-snug tracking-wide" style={{lineHeight:"1.2"}}>
            Real-Time Control for <br className="hidden sm:block"/> Ground Transfer Operations.
          </h1>

          <p className="text-white text-center sm:text-start text-sm md:text-base xl:text-lg leading-normal tracking-normal" style={{lineHeight:"1.5"}}>
            Complete channel manager for ground operators. Manage <br className="hidden sm:block"/> inventory,
            drivers, dynamic pricing, and sell via APIs to global <br className="hidden sm:block"/> OTAs.
            Streamline operations and maximize revenue.
          </p>

          {/* buttons */}
          <div className="flex w-full justify-center md:justify-center lg:justify-start lg:items-start flex-wrap lg:flex-row md:flex-col gap-4 mt-4 lg:mb-4">
            <button
              onClick={openModal}
              className="px-6 md:w-[50%] lg:w-auto py-3 rounded-xl text-sm bg-[#A3E635] text-[#101828] transition-all hover:scale-105 active:scale-95"
            >
              Start Free Trial
            </button>

            <button
              onClick={() => navigate("/demo")}
              className="px-6 py-3 md:w-[50%] lg:w-auto rounded-xl text-sm bg-white text-[#101828]"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:flex-1 flex items-center justify-center md:justify-end">
          <img
            src={HeroSection}
            alt="TransitHub Dashboard Preview"
            className="w-full max-w-[520px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[780px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* badges */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 text-white text-sm md:text-base mb-10">
        {badges.map((b) => (
          <div key={b.text} className="flex items-center gap-2">
            <img src={b.icon} alt={b.text} className="w-5 h-5 object-contain" />
            <span>{b.text}</span>
          </div>
        ))}
      </div>

      {showModal && <SignupModal onClose={closeModal} />}
    </section>
  );
}