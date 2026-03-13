import icon1 from "../img/OTAFeature1.png";
import icon2 from "../img/OTAFeature2.png";
import icon3 from "../img/OTAFeature3.png";
import icon4 from "../img/OTAFeature4.png";
import img1 from "../img/Feature2.png";
import img2 from "../img/Feature4.png";
import img3 from "../img/FeatureOTA1.png";
import img4 from "../img/FeatureOTA2.png";
import { MoveRight } from "lucide-react";

const features = [
  {
    title: "Scalable Infrastructure",
    desc: "Handle high volumes of transfer searches and\n bookings with infrastructure built for reliability,\n fast API performance, and consistent availability\n across your entire platform.",
    image: img4,
    icon: icon1,
  },
  {
    title: "Real-time fleet & availability",
    desc: "Access live availability, vehicle capacity, and\n supplier inventory updates so customers always\n see accurate transfer options and real-time\n booking confirmation.",
    image: img1,
    icon: icon2,
  },
  {
    title: "Unified Supplier API",
    desc: "Integrate once and instantly connect to multiple\n transfer suppliers worldwide, simplifying\n integrations while expanding your available\n inventory across cities and regions.",
    image: img2,
    icon: icon3,
  },
  {
    title: "Business Analytics & Intelligence",
    desc: "Gain powerful insights into booking\n performance, supplier activity, and demand\n trends to optimize pricing strategies and grow\n your transfer business efficiently.",
    image: img3,
    icon: icon4,
  },
];

export default function OTAFeatures() {
  return (
    <section id="features" className="w-full bg-[#0F1E2F] pb-20 xl:pb-10">

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">

        {/* Header */}
        <div className="text-center pt-16 sm:pt-20 lg:pt-24 pb-12 lg:pb-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Your Complete Transfer Command Center
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed tracking-wide">
            Everything you need to run a modern ground transfer operation, in one
            powerful platform.
          </p>

        </div>

        {/* Features */}
        <div className="flex flex-col gap-y-40 sm:gap-y-[200px] lg:gap-y-[200px] mt-10 lg:mt-24">

          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >

              {/* TEXT */}
              <div className="flex flex-col max-w-xl text-center lg:text-left">

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <img src={feature.icon} alt="" className="w-full h-full" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {feature.desc}
                </p>

                <div
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&to=info@transithub.io",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="text-[#A3DE23] mt-8 lg:mt-10 sm:pb-10 pb-4 flex gap-x-2 cursor-pointer justify-center lg:justify-start"
                >
                  <span>Talk to Us</span>
                  <MoveRight />
                </div>

              </div>

              {/* IMAGE */}
              <div className="flex justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-md max-h-[350px] lg:max-h-[430px]">

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