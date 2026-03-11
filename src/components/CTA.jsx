import ctaBg from "../img/ctaBg.svg";
import SignupModal from "./SignupModal";
import { useState } from "react";

export default function CTA() {
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
    <section className="w-full" style={{ background: "#0F1E2F" }}>
      <div
        className="w-full min-h-[420px] flex items-center"
        style={{
          backgroundImage: `url(${ctaBg})`,
             backgroundSize: "cover",  
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-2xl md:max-w-2xl pl-36">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0A1220]" style={{ lineHeight: "1.3" }}>
            Ready to Transform <br/> Your Operations?
          </h2>
          <p className="text-sm md:text-base mb-8 text-[#0F1E2F]">
            Join hundreds of ground transfer operators who've automated their
            business with TransitHub. Get started today and see the difference
            in your first week.
          </p>
          <button onClick={openModal} className="px-8 py-4 rounded-xl font-medium text-white bg-[#0F1E2F] hover:scale-105 transition">
            Start Free Trial
          </button>
        </div>
      </div>
       {showModal && <SignupModal  onClose={closeModal}/>}
    </section>
  );
}