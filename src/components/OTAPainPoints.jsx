import icon1 from "../img/Icon15.png";
import icon2 from "../img/Icon16.png";
import icon3 from "../img/Icon17.png";
import icon4 from "../img/Icon18.png";

const cards = [
  {
    icon: icon1,
    title: "Multiple Supplier\nAPIs",
    desc: "Every supplier has a\ndifferent API format and\nbooking process."
  },
  {
    icon: icon2,
    title: "Slow Supplier\nOnboarding",
    desc: "Integrating new transfer\npartners can take weeks or\nmonths."
  },
  {
    icon: icon3,
    title: "Data\nInconsistency",
    desc: "Availability, pricing, and\nvehicle information vary\nacross suppliers."
  },
  {
    icon: icon4,
    title: "Maintenance\nOverhead",
    desc: "Engineering teams spend time\nfixing integrations instead of\nbuilding new features."
  }
];

export default function OTAPainPoints() {
  return (
    <section className="py-16 md:py-20 xl:py-24 w-full bg-[#0F1E2F]">

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 flex flex-col items-center gap-y-12 xl:gap-y-16">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-white text-center leading-tight">
          Scaling Transfer Supply Is Hard for OTAs
        </h2>

        {/* Description */}
        <p className="text-white text-center text-sm md:text-base xl:text-lg leading-relaxed tracking-wide max-w-3xl">
          Adding transfer services to your OTA should be simple. But supplier integrations
          <br className="hidden md:block"/>
          inconsistent APIs, and inventory management slow everything down.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8 w-full">

          {cards.map((card, i) => (
            <div key={i} className="bg-[#F3F4F6] rounded-2xl p-6 md:p-8 lg:pl-6 lg:pr-2 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-4 md:gap-5 transition-all hover:scale-[1.02]">

              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center">
                <img src={card.icon} alt="" className="w-full h-full object-contain" />
              </div>

              <h3 className="text-base md:text-lg font-semibold text-center lg:text-start text-[#101828] whitespace-normal lg:whitespace-pre-line">
                {card.title}
              </h3>

              <p className="text-sm md:text-[13px] max-w-[200px] lg:max-w-[190px] text-center lg:text-start text-gray-600 leading-relaxed whitespace-normal sm:whitespace-pre-line">
                {card.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}