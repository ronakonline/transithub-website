import ctaBg from "../img/ctaBg.svg";
import SignupModal from "./SignupModal";
import { useState } from "react";

export default function CTA() {
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
    <section className="w-full bg-[#0F1E2F] flex justify-center items-center">
      <div
        className="w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[440px] flex items-center max-w-[1540px] mx-auto"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-2xl px-6 sm:px-10 lg:px-0 lg:pl-28 text-center lg:text-left">

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0A1220]"
            style={{ lineHeight: "1.3" }}
          >
            Ready to Transform <br /> Your Operations?
          </h2>

          <p className="text-sm sm:text-base mb-8 text-[#0F1E2F] sm:max-w-[200px] max-w-[200px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[600px] mx-auto lg:mx-0">
            Join hundreds of ground transfer operators who've automated their
            business with TransitHub. Get started today and see the difference
            in your first week.
          </p>

          <button
            onClick={openModal}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-white bg-[#0F1E2F] hover:scale-105 transition"
          >
            Start Free Trial
          </button>

        </div>
      </div>

      {showModal && <SignupModal onClose={closeModal} />}
    </section>
  );
}