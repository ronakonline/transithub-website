import ctaBg from "../img/ctaBg.svg";
import SignupModal from "./SignupModal";
import { useState } from "react";

export default function OTACTA() {
  

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
        <div className="max-w-3xl pl-36">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0A1220]" style={{ lineHeight: "1.3" }}>
            Start Scaling Your<br/> Transfer Marketplace
          </h2>
          <p className="text-sm md:text-base mb-8 text-[#0F1E2F]">
            Connect to suppliers, standardize inventory, and launch transfer services<br/> faster with TransitHub.
          </p>
          <button onClick={() =>
    window.open(
      "https://mail.google.com/mail/?view=cm&to=info@transithub.io",
      "_blank"
    )
  } className="px-8 py-4 rounded-xl font-medium text-white bg-[#0F1E2F] hover:scale-105 transition">
            Talk to Us
          </button>
        </div>
      </div>
   
    </section>
  );
}