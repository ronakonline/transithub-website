import integrationsDiagram from "../img/integration.png";
import { useNavigate } from "react-router-dom";

export default function Integrations() {
 const navigate = useNavigate();
  return (
    <section className="py-24 bg-[#0F1E2F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl p-12 flex flex-row items-center gap-12 bg-[#202F3E]">

          {/* LEFT — Text */}
          <div className="flex-1">
            <h2 className="text-5xl font-semibold text-white mb-5 leading-tight">
              Connect All Your<br />Booking Sources
            </h2>
            <p className="text-white text-sm mb-10 leading-relaxed">
              Sync bookings from OTAs, travel partners, and other <br/> booking platforms directly into
              TransitHub. Manage<br/> availability, drivers, and schedules from a single <br/> centralized
              system without juggling multiple tools.
            </p>
            <button onClick={() => navigate('/demo')} className="px-6 py-3 rounded-2xl font-normal mb-10 text-sm bg-[#A3E635] text-[#0A1220] hover:scale-105 transition-all">
              Watch Demo
            </button>
          </div>

          {/* RIGHT — Diagram image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={integrationsDiagram}
              alt="TransitHub Integrations Diagram"
              className="w-full max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}