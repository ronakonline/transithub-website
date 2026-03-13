import image1 from "../img/casestudies1.png";
import image2 from "../img/casestudies2.png";
import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

const caseStudies = [
  {
    image: image2,
    title: "Global OTA Scales to 200+ Suppliers in 30 Days",
    desc: "How a leading OTA onboarded 200+ suppliers\n and DMCs with complex pricing in 30 days.",
    tags: [
      { name: "Supplier Management", color: "#A3E635" },
      { name: "OTA", color: "#d1d5db" },
      { name: "OTA", color: "#9DC0E7" },
    ],
  },
  {
    image: image1,
    title: "Italian DMC Manages 2,000 Routes with 50 Rules",
    desc: "How an Italian DMC simplified complex\nroute pricing and launched in one week.",
    tags: [
      { name: "DMC", color: "#A3E635" },
      { name: "Inventory Management", color: "#d1d5db" },
      { name: "Pricing Engine", color: "#9DC0E7" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0F1E2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
          Customer Success Stories
        </h2>

        <p className="text-white text-sm sm:text-base mb-10 sm:mb-14">
          See how OTAs and suppliers grow their transfer operations with TransitHub.
        </p>

        {/* Cards container */}
        <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-10 lg:gap-12">

          {caseStudies.map((card, i) => (
            <Link
              to="/case-study"
              key={i}
              onClick={() => window.scrollTo(0, 0)}
              className="w-full md:w-[48%] lg:w-[503px]"
            >
              <div
                className="rounded-2xl overflow-hidden w-full"
                style={{
                  background: "#202F3E",
                  border: "1px solid #1e293b",
                }}
              >

                {/* Image */}
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[303px] object-cover"
                />

                <div className="p-5 sm:p-6 lg:p-8 text-left">

                  <div className="flex justify-between items-start mb-4 gap-3">

                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-snug max-w-[90%]">
                      {card.title}
                    </h3>

                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-[#1e293b] text-white flex-shrink-0">
                      <MoveUpRight size={18} />
                    </div>

                  </div>

                  <p className="text-gray-200 text-sm sm:text-base mb-10 md:max-w-[250px] lg:max-w-full lg:whitespace-pre-line sm:whitespace-normal">
                    {card.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 md:max-w-[300px]">
                    {card.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                        style={{ background: tag.color, color: "#0A1220" }}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}