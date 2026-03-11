import icon1 from "../img/OTAFeature1.png";
import icon2 from "../img/OTAFeature2.png";
import icon3 from "../img/OTAFeature3.png";
import icon4 from "../img/OTAFeature4.png";
import img1 from "../img/Feature2.png";
import img2 from "../img/Feature4.png";
import img3 from "../img/FeatureOTA1.png";
import img4 from "../img/FeatureOTA2.png";

const features = [
  {
    title: "Scalable Infrastructure",
    desc: "Handle high booking volumes with fast and reliable API performance.",
    image: img4,
    icon: icon1,
  },
  {
    title: "Real-time fleet & availability",
    desc: "Live visibility into every vehicle, driver status, and capacity - updated instantly across your entire operation.",
    image: img1,
    icon: icon2,
  },
  {
    title: "Unified Supplier API",
    desc: "Integrate once and connect to multiple transfer providers globally.",
    image: img2,
    icon: icon3,
  },
  {
    title: "Business Analytics & Intelligence",
    desc: "Connect to global OTAs with our robust API. Distribute inventory worldwide seamlessly.",
    image: img3,
    icon: icon4,
  },
];

export default function OTAFeatures() {
  return (
    <section id="features" className="w-full bg-[#0F1E2F]">
      <div className="max-w-[1300px] mx-auto px-20">

        {/* Header */}
        <div className="text-center pt-24 pb-16">
          <h2 className="text-5xl font-semibold text-white mb-6">
            Your Complete Transfer Command Center
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed tracking-wide">
            Everything you need to run a modern ground transfer operation, in one<br/>
            powerful platform.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-y-[200px] mt-24">

          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex  justify-between gap-16  ${
                i % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              
              {/* Text */}
              <div className="flex flex-col max-w-md">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <img src={feature.icon} alt="" className="w-full h-full" />
                </div>

                <h3 className="text-3xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center w-full max-w-md max-h-[430px]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}