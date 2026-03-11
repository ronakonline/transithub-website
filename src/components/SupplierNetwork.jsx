import iconAirport    from "../img/Icon19.png";
import iconChauffeur  from "../img/Icon20.png";
import iconLocal      from "../img/Icon21.png";
import iconFleet      from "../img/Icon20.png";

const categories = [
  { icon: iconAirport,   label: "Airport Transfers" },
  { icon: iconChauffeur, label: "Chauffeur Services" },
  { icon: iconLocal,     label: "Local Transport Operators" },
  { icon: iconFleet,     label: "Fleet Providers" },
];

export default function SupplierNetwork() {
  return (
    <section className="w-full bg-[#0F1E2F] py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl font-bold text-white mb-4 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Access a Growing Global Supplier Network
          </h2>
          <p className="text-slate-300 text-xl">
            TransitHub connects OTAs with transfer suppliers across cities and airports worldwide.
          </p>
        </div>

        {/* Cards row */}
        <div className="flex justify-between items-start gap-10">
          {categories.map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-5 flex-1">
              {/* Circle icon */}
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center"
            
              >
                <img src={icon} alt={label} className="w-full h-full object-contain" />
              </div>
              {/* Label */}
              <p className="text-white font-semibold text-lg text-center">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}