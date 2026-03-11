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
    <section className="py-24 w-full" style={{ background: "#0F1E2F" }}>
      <div className="max-w-[1400px] mx-auto px-16 flex flex-col items-center gap-y-16">

        <h2 className="text-5xl font-semibold text-white text-center">
          Scaling Transfer Supply Is Hard for OTAs
        </h2>

        <p className="text-white text-center text-lg leading-relaxed tracking-wider max-w-3xl">
          Adding transfer services to your OTA should be simple. But supplier integrations,<br/>
          inconsistent APIs, and inventory management slow everything down.
        </p>

        <div className="grid grid-cols-4 gap-8 w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#F3F4F6] rounded-2xl p-8 flex flex-col gap-5"
            >
              <div className="w-16 h-18 rounded-xl flex items-center justify-center">
                <img src={card.icon} alt="" className="w-full h-full" />
              </div>

              <h3 className="text-lg font-semibold text-[#101828] whitespace-pre-line">
                {card.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}