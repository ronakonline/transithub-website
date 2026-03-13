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
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0F1E2F]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
          Get Started in 4 Simple Steps
        </h2>

        {/* Subheading */}
        <p className="text-white text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Be fully operational in less than an hour. No complex setup, no IT team needed.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">

          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl pt-6 px-6 sm:px-7 lg:px-8 flex flex-col items-center text-center bg-[#202F3E] min-h-[260px] sm:min-h-[280px] lg:min-h-[300px]"
            >

              {/* Step number */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 bg-[#A3E635] text-[#0A1220]">
                {s.n}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg sm:text-xl mb-3 whitespace-normal lg:whitespace-pre-line leading-snug">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed mb-8">
                {s.desc}
              </p>

              {/* Bottom icon */}
              <div className="mt-auto flex items-center justify-center">
                <img
                  src={s.icon}
                  alt={s.title}
                  className="h-[110px] w-auto object-contain"
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}