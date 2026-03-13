import iconAirport from "../img/Icon19.png";
import iconChauffeur from "../img/Icon20.png";
import iconLocal from "../img/Icon21.png";
import iconFleet from "../img/Icon20.png";

const categories = [
  { icon: iconAirport, label: "Airport Transfers" },
  { icon: iconChauffeur, label: "Chauffeur Services" },
  { icon: iconLocal, label: "Local Transport Operators" },
  { icon: iconFleet, label: "Fleet Providers" },
];

export default function SupplierNetwork() {
  return (
    <section className="w-full bg-[#0F1E2F] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Access a Growing Global Supplier Network
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-xl max-w-3xl mx-auto">
            TransitHub connects OTAs with transfer suppliers across cities and airports worldwide.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {categories.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 sm:gap-5"
            >

              {/* Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center">
                <img
                  src={icon}
                  alt={label}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Label */}
              <p className="text-white font-semibold text-sm sm:text-base lg:text-lg text-center">
                {label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}