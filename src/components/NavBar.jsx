import { useState, useEffect } from "react";
import logo from '../img/Logo.png'
import { NavLink } from "react-router-dom";
import SignupModal from "./SignupModal";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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

  const navLinkStyle = ({ isActive }) =>
    `text-sm lg:text-[15px] font-medium transition-colors duration-200 ${
      isActive ? "text-[#A3E635]" : "text-gray-300 hover:text-white"
    }`;

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900"
          : "bg-[#0F1E2F]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6 flex items-center justify-between">
        {/* Logo */}
         <img
            src={logo}
            alt="TransitHub Logo"
            className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
          />

        {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">

           <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
 
            <NavLink to="/ota" className={navLinkStyle}>
              For OTAs
            </NavLink>
 
            <NavLink to="/case-study" className={navLinkStyle}>
              Case Studies
            </NavLink>
 
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
        </div>
        {/* Desktop Button */}
          <div className="hidden md:block">
            <button
              onClick={openModal}
              className="px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm bg-[#A3E635] text-[#0A1220] transition-all duration-200 hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>

         {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={26} />
          </button>
 
        </div>
      </nav>
 
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-[#0F1E2F] z-50 transform transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-7 border-b border-gray-700">
          <img src={logo} alt="logo" className="h-5" />
 
          <button onClick={() => setMobileMenu(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
 
        <div className="flex flex-col h-full gap-6 p-6 text-[15px]">
 
          <NavLink to="/" className={navLinkStyle} onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>
 
          <NavLink to="/ota" className={navLinkStyle} onClick={() => setMobileMenu(false)}>
            For OTAs
          </NavLink>
 
          <NavLink to="/case-study" className={navLinkStyle} onClick={() => setMobileMenu(false)}>
            Case Studies
          </NavLink>
 
          <NavLink to="/about" className={navLinkStyle} onClick={() => setMobileMenu(false)}>
            About
          </NavLink>
 
          <button
            onClick={() => {
              openModal();
              setMobileMenu(false);
            }}
            className="mt-20 px-5 py-2.5 rounded-lg text-sm bg-[#A3E635] text-[#0A1220]"
          >
            Get Started
          </button>
 
        </div>
      </div>
 
      {/* Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenu(false)}
        />
      )}
 
      {showModal && <SignupModal onClose={closeModal} />}
    </>
 
  );
}