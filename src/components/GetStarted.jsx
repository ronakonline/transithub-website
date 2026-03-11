import step1Icon from "../img/Icon7.png";
import step2Icon from "../img/Icon8.png";


const steps = [
  {
    n: 1,
    title: "Add your\nfleet",
    desc: "Import vehicles, set capacity, and configure vehicle types in minutes.",
    icon: step1Icon,
  },
  {
    n: 2,
    title: "Configure\npricing rules",
    desc: "Pick the data plan you need for your trip.",
    icon: step2Icon,
  },
  {
    n: 3,
    title: "Connect booking\nsources",
    desc: "Link your channels or use our API to bring everything together.",
    icon: step2Icon,
  },
  {
    n: 4,
    title: "Go Live &\nAutomated",
    desc: "Pick the data plan you need for your trip.",
    icon: step1Icon,
  },
];

export default function GetStarted() {
  return (
    <section className="py-24 bg-[#0F1E2F]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-white mb-8">
          Get Started in 4 Simple Steps
        </h2>
        <p className="text-white mb-14">
          Be fully operational in less than an hour. No complex setup, no IT team needed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl pt-6 px-8 text-left flex flex-col justify-center items-center bg-[#202F3E]"
            >
              {/* Step number badge */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 bg-[#A3E635] text-[#0A1220]">
                {s.n}
              </div>

              <h3 className="text-white font-bold text-xl mb-4 whitespace-pre-line text-center leading-snug">{s.title}</h3>
              <p className="text-white text-sm leading-relaxed mb-12 text-center">{s.desc}</p>

              {/* Bottom icon image */}
              <div className="mt-auto flex items-center justify-center h-22 overflow-hidden">
                <img
                  src={s.icon}
                  alt={s.title}
                  className="h-22 w-24 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}