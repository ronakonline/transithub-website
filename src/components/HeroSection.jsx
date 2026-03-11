import HeroSection from "../img/HeroSection.png";
import iconCalendar  from "../img/Icon1.png";
import iconCreditCard from "../img/Icon2.png";
import iconCheck     from "../img/Icon3.png";
import { useState } from "react";
import SignupModal from "./SignupModal";
import { useNavigate } from 'react-router-dom'

const badges = [
    { icon: iconCheck,   text: "14-day free trial" },
    { icon:  iconCalendar, text: "No credit card needed" },
    { icon: iconCreditCard,      text: "Cancel Anytime" },
  
];

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
    <section className="relative w-full flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#0F1E2F] py-24 px-36">

      {/* ── Green glow BEHIND the box ── */}
      <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-[#0D9688] blur-[100px] pointer-events-none z-0" />

      {/* ── MAIN BOX ── */}
      <div style={{backgroundColor:"rgba(231, 242, 255, 0.04)"}} className="relative z-10 w-full rounded-xl backdrop-blur-md overflow-hidden flex flex-row pl-14 pt-6 items-center gap-8">

        {/* LEFT — text content */}
        <div className="flex flex-col justify-center w-[45%] gap-y-8 flex-shrink-0">
          <h1 className="text-4xl xl:text-5xl font-semibold text-white leading-snug tracking-wide mb-5">
            Real-Time Control<br />for Ground Transfer<br />Operations.
          </h1>

          <p className="text-white text-sm xl:text-base mb-8 leading-loose tracking-wide">
            Complete channel manager for ground operators. Manage<br/> inventory,
            drivers, dynamic pricing, and sell via APIs to global <br/> OTAs.
            Streamline operations and maximize revenue.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4">
          <button
           onClick={openModal}
            className="px-6 py-3 rounded-xl text-sm bg-[#A3E635] text-[#101828] transition-all hover:scale-105 active:scale-95">
            Start Free Trial
          </button>
            <button  onClick={() => navigate('/demo')} className="px-6 py-3 rounded-xl  text-sm bg-white text-[#101828] transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        {/* RIGHT — dashboard image */}
        <div className="flex-1 flex items-center justify-end overflow-visible">
          <img
            src={HeroSection}
            alt="TransitHub Dashboard Preview"
            className="w-full max-w-[580px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>

      {/* ── BADGES — outside the box, below ── */}
      <div className="relative z-10 flex flex-row items-center justify-center gap-10 mt-8 text-white text-sm">
        {badges.map((b) => (
          <div key={b.text} className="flex items-center gap-2">
            <img src={b.icon} alt={b.text} className="w-5 h-5 object-contain" />
            <span>{b.text}</span>
          </div>
        ))}
      </div>
    {showModal && <SignupModal  onClose={closeModal}/>}
    </section>
  );
}