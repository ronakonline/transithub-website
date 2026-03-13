import integrationsDiagram from "../img/integration.png";
import { useNavigate } from "react-router-dom";

export default function Integrations() {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0F1E2F]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">

        {/* MAIN BOX */}
        <div className="rounded-3xl bg-[#202F3E] flex flex-col lg:flex-row items-center gap-10 lg:gap-12 
        p-8 sm:p-10 lg:p-12 xl:p-16 
        min-h-[420px] lg:min-h-[520px] xl:min-h-[560px]">

          {/* LEFT — Text */}
          <div className="flex-1 text-center lg:text-left">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-medium text-white mb-12 leading-snug" style={{lineHeight:"1.4"}}>
              Connect All Your <br className="hidden lg:block"/>Booking Sources
            </h2>

            <p className="text-white text-sm sm:text-base md:text-lg mb-12 lg:mb-10 leading-relaxed md:px-8 lg:px-0" style={{lineHeight:"1.8"}}>
              Sync bookings from OTAs, travel partners, and other <br className="hidden xl:block"/> booking platforms directly into
              TransitHub. Manage <br className="hidden xl:block"/> availability, drivers, and schedules from a single <br className="hidden xl:block"/> centralized
              system without juggling multiple tools.
            </p>

            <button
              onClick={() => navigate("/demo")}
              className="px-8 sm:px-10 py-4 rounded-full w-[70%] lg:w-auto md:w-[50%] mb-20 lg:mb-0 text-sm sm:text-base bg-[#A3E635] text-[#0A1220] hover:scale-105 transition-all"
            >
              Watch Demo
            </button>

          </div>

          {/* RIGHT — Diagram */}
          <div className="flex-1 flex items-center justify-center">

            <img
              src={integrationsDiagram}
              alt="TransitHub Integrations Diagram"
              className="w-full max-w-[320px] sm:max-w-lg lg:max-w-lg xl:max-w-xl object-contain"
            />

          </div>

        </div>
      </div>
    </section>
  );
}