import iconClock  from "../img/Icon4.png";   // "Save admin hours weekly"
import iconChart  from "../img/Icon5.svg";   // "Handle high booking volumes"
import iconTrend  from "../img/Icon6.png";   // "Reduction in No-Shows"

const stats = [
  { icon: iconClock, value: "20+", label: "Save admin hours", sublabel: "weekly" },
  { icon: iconChart, value: "3x",  label: "Handle high",      sublabel: "booking volumes" },
  { icon: iconTrend, value: "60%", label: "Reduction in",     sublabel: "No-Shows" },
];


export default function Stats() {
  return (
    <section className="py-24 bg-[#0F1E2F]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-white mb-3">
          Operate Faster. Scale Smarter.
        </h2>
        <p className="text-white mb-14">
          Real operators, real results. See what happens when you stop managing manually.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl p-8 text-left"
              style={{ backgroundColor: "rgba(138, 147, 158, 0.14)" }}
            >
              {/* Icon box */}
              <div className="w-16 h-16 mb-10">
                <img src={s.icon} alt={s.label} className="w-full h-full object-contain" />
              </div>

              <div className="text-5xl font-bold text-white mb-10">{s.value}</div>
               <div className="text-white text-sm leading-loose mb-10">
                {s.label}<br />{s.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}