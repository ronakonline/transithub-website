import { useState, useEffect } from "react";
import logo from '../img/Logo.png'
import { NavLink } from "react-router-dom";
import SignupModal from "./SignupModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add("modal-open");
    document.documentElement.classList.add("modal-open"); 
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-open"); 
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900"
          : "bg-[#0F1E2F]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="TransitHub Logo"
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-[#A3E635]" : "text-gray-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/ota"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-[#A3E635]" : "text-gray-300 hover:text-white"
              }`
            }
          >
            For OTAs
          </NavLink>

          <NavLink
            to="/case-study"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-[#A3E635]" : "text-gray-300 hover:text-white"
              }`
            }
          >
            Case Studies
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-[#A3E635]" : "text-gray-300 hover:text-white"
              }`
            }
          >
            About
          </NavLink>

        </div>

        {/* CTA Button */}
        <button onClick={openModal} className="px-5 py-2.5 rounded-lg text-sm bg-[#A3E635] text-[#0A1220] transition-all duration-200 hover:scale-105 active:scale-95">
          Get Started
        </button>

      </div>
      {showModal && <SignupModal  onClose={closeModal}/>}
    </nav>
  );
}