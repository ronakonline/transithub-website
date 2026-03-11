import Navbar from "../components/NavBar";
import Hero from "../components/HeroSection";
import PainPoints from "../components/PainPoints";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Integrations from "../components/Integrations";
import GetStarted from "../components/GetStarted";
import Pricing from "../components/Pricing";
import CaseStudies from "../components/CaseStudies";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import SignupModal from "../components/SignupModal";
import { useState, useEffect } from "react";

export default function App() {
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
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <Stats />
      <Integrations />
      <GetStarted />
      <Pricing />
      <CaseStudies />
      <CTA />
      <Footer />
    </div>
  );
}