import HeroSection from "../img/OTAHeroSection.png";
import icon1 from "../img/FileJson.png";
import icon2 from "../img/Link2.png";
import icon3   from "../img/Clock.png";
import { useState } from "react";
import SignupModal from "./SignupModal";
import { useNavigate } from 'react-router-dom'

const badges = [
    { icon: icon1,   text: "Unified Booking API" },
    { icon:  icon2, text: "Global Supplier Network" },
    { icon: icon3,      text: "Fast Booking Sync" },
  
];

export default function OTAHeroSection() {
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // const openModal = () => {
  //   setShowModal(true);
  //   document.body.classList.add("modal-open");
  //   document.documentElement.classList.add("modal-open"); 
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   document.body.classList.remove("modal-open");
  //   document.documentElement.classList.remove("modal-open"); 
  // };
  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#0F1E2F] py-24 px-36">

      {/* ── Green glow BEHIND the box ── */}
      <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-[#0D9688] blur-[100px] pointer-events-none z-0" />

      {/* ── MAIN BOX ── */}
      <div style={{backgroundColor:"rgba(231, 242, 255, 0.04)"}} className="relative z-10 w-full max-w-[1440px] rounded-xl backdrop-blur-md overflow-hidden flex flex-row justify-between pl-14 pt-6 gap-8 h-[578px]">

        {/* LEFT — text content */}
        <div className="flex flex-col justify-center w-[45%] gap-y-8 flex-shrink-0">
          <h1 className="text-4xl xl:text-5xl font-semibold text-white leading-snug tracking-wide mb-5">
          Scale Your Transfer<br />Marketplace Without<br />Integration Chaos.
          </h1>

          <p className="text-white text-sm xl:text-base mb-8 leading-loose tracking-wide">
            TransitHub helps OTAs connect to multiple transfer suppliers<br/>
            through a single unified API. Access real-time availability,<br/>
            standardized inventory, and launch new markets faster.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4">
          <button
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&to=info@transithub.io",
              "_blank",
               "noopener,noreferrer"
            )
          }
            className="px-6 py-3 rounded-xl text-sm bg-[#A3E635] text-[#101828] transition-all hover:scale-105 active:scale-95">
            Talk to Us
          </button>
            <button  onClick={() =>  window.open(
              "https://documenter.getpostman.com/view/20610710/2sBXcLecc6",
              "_blank",
               "noopener,noreferrer"
            )} 
            className="px-6 py-3 rounded-xl  text-sm bg-white text-[#101828] transition-all">
             View Documentation
            </button>
          </div>
        </div>

        {/* RIGHT — dashboard image */}
        <div className="flex justify-end items-end overflow-visible">
          <img
            src={HeroSection}
            alt="TransitHub Dashboard Preview"
            className="w-full max-w-[533px] max-h-[436px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>

      {/* ── BADGES — outside the box, below ── */}
      <div className="relative z-10 flex flex-row items-center justify-center gap-10 mt-12 text-white text-sm">
        {badges.map((b) => (
          <div key={b.text} className="flex items-center gap-2">
            <img src={b.icon} alt={b.text} className="w-5 h-5 object-contain" />
            <span>{b.text}</span>
          </div>
        ))}
      </div>
    {/* {showModal && <SignupModal  onClose={closeModal}/>} */}
    </section>
  );
}