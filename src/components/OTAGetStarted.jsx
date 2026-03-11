import step1Icon from "../img/Icon7.png";
import step2Icon from "../img/Icon8.png";


const steps = [
  {
    n: 1,
    title: "Connect the API",
    desc: "Integrate the TransitHub API\nto access transfer inventory.",
    icon: step1Icon,
  },
  {
    n: 2,
    title: "Access Global\nSupplier Inventory",
    desc: "Get real-time availability\nfrom global transfer suppliers.",
    icon: step2Icon,
  },
  {
    n: 3,
    title: "Display Transfers\nto Customers",
    desc: "Display transfer options\nfor customers to search and compare.",
    icon: step2Icon,
  },
  {
    n: 4,
    title: "Process and\nManage Bookings",
    desc: "Confirm bookings with suppliers\nand manage them in TransitHub.",
    icon: step1Icon,
  }
];

export default function OTAGetStarted() {
  return (
    <section className="py-28 bg-[#0F1E2F] flex w-full">
      <div className="max-w-[1400px] mx-auto px-20 text-center">
        <h2 className="text-5xl font-semibold text-white mb-8">
          Get Started in 4 Simple Steps
        </h2>
        <p className="text-white mb-14 tracking-wider text-xl">
          Be fully operational in less than an hour. No complex setup, no IT team needed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl pt-6 px-7 text-left flex flex-col justify-center items-center bg-[#202F3E]"
            >
              {/* Step number badge */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-base font-bold mb-4 bg-[#A3E635] text-[#0A1220]">
                {s.n}
              </div>

              <h3 className="text-white font-bold text-xl mb-8 whitespace-pre-line text-center leading-snug">{s.title}</h3>
              <p className="text-white text-sm leading-relaxed mb-8 text-center whitespace-pre-line">{s.desc}</p>

              {/* Bottom icon image */}
              <div className="mt-auto flex h-28 overflow-hidden">
                <img
                  src={s.icon}
                  alt={s.title}
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}