import image1 from "../img/casestudies1.png";
import image2 from "../img/casestudies2.png";

const caseStudies = [
  {
    image: image2,
    title: "Global OTA Scales to 200+ Suppliers in 30 Days",
    desc: "How a leading OTA onboarded 200+ suppliers\nand DMCs with complex pricing in 30 days.",
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
    <section className="py-24 bg-[#0F1E2F]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-semibold text-white mb-3">
          Customer Success Stories
        </h2>

        <p className="text-white mb-14">
          See how OTAs and suppliers grow their transfer operations with TransitHub.
        </p>

        <div className="flex justify-center gap-12">

          {caseStudies.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden w-[503px]"
              style={{ background: "#202F3E", border: "1px solid #1e293b" }}
            >

              {/* Image */}
              <img
                src={card.image}
                alt=""
                className="h-[303px] w-full object-cover"
              />

              <div className="p-8 text-left">

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-white text-2xl font-medium leading-snug max-w-[80%]">
                    {card.title}
                  </h3>

                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1e293b] text-white">
                    ↗
                  </div>
                </div>

                <p className="text-gray-400 text-base mb-6 whitespace-pre-line">
                  {card.desc}
                </p>

                <div className="flex flex-wrap gap-4 max-w-[300px]">
                  {card.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-5 py-2 rounded-full text-sm font-medium"
                      style={{ background: tag.color, color: "#0A1220" }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}