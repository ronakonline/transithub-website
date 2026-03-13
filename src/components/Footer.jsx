import { useState } from "react";
import logo from "../img/Logo.png";
import emailIcon from "../img/Icon11.png";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "OTA Integration", "API Docs"],
  },
  {
    heading: "Company",
    links: ["About", "Case studies"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#0F1E2F] pt-14 sm:pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">

          {/* Brand */}
          <div className="w-full lg:w-56 flex-shrink-0">
            <img
              src={logo}
              alt="TransitHub"
              className="h-8 w-auto object-contain mb-8"
            />

            <div
              className="flex flex-col gap-2 text-sm"
              style={{ color: "rgba(255, 255, 255, 0.73)" }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={emailIcon}
                  alt="email"
                  className="w-4 h-4 object-contain"
                />
                <span className="tracking-wider">
                  info@transithub.io
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16 flex-1">

            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h4 className="text-white font-medium text-base mb-4">
                  {col.heading}
                </h4>

                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      {l === "Features" ? (
                        <a
                          href="#features"
                          className="hidden transition-colors"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {l}
                        </a>

                      ) : l === "Pricing" ? (
                        <a
                          href="#pricing"
                          className="hidden transition-colors"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {l}
                        </a>

                      ) : l === "OTA Integration" ? (
                        <Link
                          to="/ota"
                          onClick={() => window.scrollTo(0, 0)}
                          className="transition-colors"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {l}
                        </Link>

                      ) : l === "API Docs" ? (
                        <a
                          href="https://documenter.getpostman.com/view/20610710/2sBXcLecc6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {l}
                        </a>

                      ) : l === "Privacy" ? (
                        <Link
                          to="/privacy"
                          onClick={() => window.scrollTo(0, 0)}
                          className="transition-colors"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {l}
                        </Link>

                      ) : l === "Terms" ? (
                        <Link
                          to="/terms"
                          onClick={() => window.scrollTo(0, 0)}
                          className="transition-colors"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {l}
                        </Link>

                      ) : l === "Security" ? (
                        <Link
                          to="/security"
                          onClick={() => window.scrollTo(0, 0)}
                          className="transition-colors"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {l}
                        </Link>

                      ) : l === "Case studies" ? (
                        <Link
                          to="/case-study"
                          onClick={() => window.scrollTo(0, 0)}
                          className="transition-colors"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {l}
                        </Link>

                      ) : l === "About" ? (
                        <Link
                          to="/about"
                          onClick={() => window.scrollTo(0, 0)}
                          className="transition-colors"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {l}
                        </Link>

                      ) : (
                        <a
                          href="#"
                          className="transition-colors"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {l}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Newsletter */}
          <div className="w-full sm:w-[320px] flex-shrink-0">

            <h4 className="text-[#A3E635] font-medium text-lg mb-2 tracking-wider">
              Be First to Know!
            </h4>

            <p
              className="text-sm sm:text-base mb-5 leading-relaxed tracking-wide"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              Stay informed about new features, updates, and improvements.
            </p>

            <div className="flex items-center rounded-lg bg-white p-2">

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white px-2 text-sm text-[#666666] placeholder-[#666666] outline-none"
              />

              <button className="px-3 py-1.5 text-sm font-thin bg-[#0F1E2F] tracking-wider text-white hover:opacity-90 transition whitespace-nowrap rounded-lg">
                Notify Me
              </button>

            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-gray-800 pt-6 text-sm text-center sm:text-left"
          style={{ color: "rgba(229, 231, 235, 0.7)" }}
        >
          <span>© 2026 TransitHub. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}