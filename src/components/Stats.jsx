import iconClock from "../img/Icon4.png";
import iconChart from "../img/Icon5.svg";
import iconTrend from "../img/Icon6.png";

const stats = [
  { icon: iconClock, value: "20+", label: "Save admin hours", sublabel: "weekly" },
  { icon: iconChart, value: "3x", label: "Handle high", sublabel: "booking volumes" },
  { icon: iconTrend, value: "60%", label: "Reduction in", sublabel: "No-Shows" },
];

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0F1E2F]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl sm lg:text-5xl font-semibold text-white mb-4">
          Operate Faster. Scale Smarter.
        </h2>

        {/* Subheading */}
        <p className="text-white text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Real operators, real results. See what happens when you stop managing manually.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl p-6 sm:p-7 lg:p-8 text-left flex flex-col justify-center items-center sm:block"
              style={{ backgroundColor: "rgba(138, 147, 158, 0.14)" }}
            >

              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-6 sm:mb-8">
                <img
                  src={s.icon}
                  alt={s.label}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Value */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                {s.value}
              </div>

              {/* Text */}
              <div className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-10">
                {s.label}
                <br className="hidden sm:block"/>
                {s.sublabel}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}