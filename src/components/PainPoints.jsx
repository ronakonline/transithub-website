import Icon1 from "../img/Icon9.svg";
import Icon2 from "../img/Icon91.png";
import Icon3 from "../img/Icon92.png";
import Icon4 from "../img/Icon93.png";
import Icon5 from "../img/Icon94.png";

import arrowIcon from "../img/Icon10.png";

const cards = [
  { icon: Icon1, title: "Double bookings\nacross channels" },
  { icon: Icon2, title: "Spreadsheet\ndispatch chaos" },
  { icon: Icon3, title: "Driver\nmiscommunication" },
  { icon: Icon4, title: "Missed airport\nschedule changes" },
  { icon: Icon5, title: "Manual Pricing\nErrors" },
];

export default function PainPoints() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0F1E2F]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-5 leading-tight">
          Still Managing Transfers Manually?
        </h2>

        {/* Subtext */}
        <p className="text-white text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Every day without automation costs you time, money, and customer trust.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

          {cards.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-4 sm:gap-5 px-5 py-5 sm:px-6 sm:py-6 rounded-2xl bg-white text-left"
            >
              {/* Icon */}
              <div className="w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-20 flex items-center justify-center flex-shrink-0">
                <img src={c.icon} alt="warning" className="w-full h-full object-contain" />
              </div>

              {/* Text */}
              <span className="font-normal text-[#101828] whitespace-pre-line text-sm sm:text-base md:text-lg leading-snug">
                {c.title}
              </span>
            </div>
          ))}

          {/* Last Card */}
          <div
            className="flex flex-col items-center justify-center px-6 py-6 rounded-2xl text-white font-bold text-center"
            style={{ background: "#56697F" }}
          >
            <span className="text-sm sm:text-base md:text-lg mb-2">
              Sound like you?
            </span>

            <div
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&to=info@transithub.io",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="text-sm sm:text-base md:text-lg font-semibold flex items-center gap-2 cursor-pointer"
              style={{ color: "#A3E635" }}
            >
              Let's talk
              <img src={arrowIcon} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}