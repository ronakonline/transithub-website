import Logo from "../img/Logo.png";

const rows = [
  {
    feature: "Time to Market",
    transithub: "2–4 weeks for all suppliers",
    traditional: "6–12 months per supplier",
  },
  {
    feature: "Development Cost",
    transithub: "Fixed monthly fee",
    traditional: "$50K–$200K per supplier",
  },
  {
    feature: "API Response Time",
    transithub: "<1 second",
    traditional: "3–10 seconds",
  },
  {
    feature: "Supplier Coverage",
    transithub: "100+ suppliers",
    traditional: "5–10 suppliers",
  },
];

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 10.5L8.5 15L16 6" stroke="#A3DE23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
      <path d="M5 5L13 13M13 5L5 13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ComparisonTable() {
  return (
    <section className="w-full bg-[#0F1E2F] py-24 pt-28">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">

        {/* Title */}
        <h2
          className="text-center text-white font-medium mb-24"
          style={{ fontSize: "2.6rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}
        >
          Traditional Integrations vs Transit<span style={{ color: "#A3DE23" }}>Hub</span>
        </h2>

        {/* Table wrapper — relative so the highlight card can be absolute */}
        <div className="relative flex flex-col text-center">

          {/*
            Highlighted middle column card — sits behind the content
            Positioned absolutely to span from header to last row
          */}
          <div className=" shadow-2xl shadow-white/20"
            style={{
              position: "absolute",
              left: "33.333%",
              width: "33.333%",
              top: 0,
              bottom: 0,
              background: "rgba(32, 47, 62, 1)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              zIndex: 0,
            }}
          />

          {/* Header row */}
          <div className=""
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              position: "relative",
              zIndex: 1,
              paddingBottom: "1.5rem",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Feature */}
            <div className="flex items-center justify-center px-2 py-4">
              <span className="text-white font-bold text-lg">Feature</span>
            </div>

            {/* TransitHub logo */}
            <div className="flex items-center justify-center py-4 mt-2">
              <img src={Logo} alt="TransitHub" className="h-7 object-contain mr-20" />
            </div>

            {/* Traditional */}
            <div className="flex items-center justify-center px-2 py-4">
              <span className="text-slate-300 font-semibold text-base mr-20">Traditional Approach</span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map(({ feature, transithub, traditional }, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Feature name */}
              <div className="flex items-center justify-center px-2 py-8">
                <span className="text-white font-semibold text-base">{feature}</span>
              </div>

              {/* TransitHub value */}
              <div className="flex items-center gap-3 px-6 py-8">
                <Check />
                <span className="text-white text-sm font-medium">{transithub}</span>
              </div>

              {/* Traditional value */}
              <div className="flex items-center gap-3 px-6 py-8">
                <Cross />
                <span className="text-slate-200 text-sm">{traditional}</span>
              </div>
            </div>
          ))}

          {/* Bottom padding row to close the card nicely */}
          <div style={{ height: "1.5rem", position: "relative", zIndex: 1 }} />

        </div>
      </div>
    </section>
  );
}