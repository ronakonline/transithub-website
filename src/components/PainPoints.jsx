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
    <section className="py-24" style={{ background: "#0F1E2F" }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-semibold text-white mb-6">
          Still Managing Transfers Manually?
        </h2>
        <p className="text-white mb-14">
          Every day without automation costs you time, money, and customer trust.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {cards.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-6 pl-7 pr-7 py-5 rounded-2xl bg-white text-left">
              <div
                className="w-16 h-20 rounded-xl flex items-center justify-center flex-shrink-0"
              >
               <img src={c.icon} alt="warning" className="w-full h-full" />
              </div>
              <span className="font-normal text-[#101828] whitespace-pre-line text-base leading-normal">
                {c.title}
              </span>
            </div>
          ))}

          <div
            className="flex flex-col items-center justify-center p-5 rounded-2xl text-white font-bold text-center"
            style={{ background: "#56697F" }}
          >
            <span className="text-base mb-2">Sound like you?</span>
            <div
                onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&to=info@transithub.io",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="text-base font-semibold flex items-center gap-1 cursor-pointer"
              style={{ color: "#A3E635" }}
            >
              Let's talk<img src={arrowIcon} alt="warning" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}