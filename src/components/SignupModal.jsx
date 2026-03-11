// SignupModal.jsx
import { useState } from "react";
import X from "../img/X.svg"

export default function SignupModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "", email: "", password: "",
    verificationCode: "",
    company: "", location: "", fleetSize: "", monthlyBookings: "", bookingSources: ""
  });

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  // Overlay
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(2px)" }}>

      {/* Modal Box */}
      <div className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{ backgroundColor: "#2E3F53" }}>

        {/* Close */}
        <button onClick={onClose} className="absolute top-6 right-4 text-[#99A1AF] hover:text-white text-xl w-5 h-5 leading-none">
         <img src={X}/>
        </button>

        {/* ── STEP 1 ── */}
        {step === 1 && (
          <>
            <p className="text-[#99A1AF] text-xs mb-4">Step 1 of 3</p>
            <h2 className="text-white text-2xl font-bold mb-1">Create Your Account</h2>
            <p className="text-[#99A1AF] text-sm mb-6">Set up your TransitHub login to get started.</p>

            <label className="text-[#D1D5DC] text-xs mb-1 block">Full Name</label>
            <input value={form.name} onChange={e => update("name", e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 outline-none mb-4"
              style={{ backgroundColor: "rgba(15, 30, 47, 0.51)" }} />

            <label className="text-[#D1D5DC] text-xs mb-1 block">Work Email</label>
            <input value={form.email} onChange={e => update("email", e.target.value)}
              placeholder="you@company.com" type="email"
              className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 outline-none mb-4"
              style={{ backgroundColor: "rgba(15, 30, 47, 0.51)" }} />

            <label className="text-[#D1D5DC] text-xs mb-1 block">Password</label>
            <input value={form.password} onChange={e => update("password", e.target.value)}
              placeholder="Create a secure password" type="password"
              className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 outline-none mb-6"
              style={{ backgroundColor: "rgba(15, 30, 47, 0.51)" }} />

            <button onClick={() => setStep(2)}
              className="w-full py-3 rounded-lg font-medium text-sm text-[#000000] bg-[#A3E635] hover:opacity-90 transition">
              Continue
            </button>
            <p className="text-center text-[#6A7282] text-xs mt-3">This will be your login for TransitHub.</p>
          </>
        )}

        {/* ── STEP 2 ── */}
        {step === 2 && (
          <>
            <p className="text-[#99A1AF] text-xs mb-4">Step 2 of 3</p>
            <h2 className="text-white text-2xl font-bold mb-1">Verify Your Email</h2>
            <p className="text-[#99A1AF] text-sm mb-6">
              We've sent a verification code to{" "}
              <span className="text-[#FFFFFF] font-medium">{form.email || "a@sf.com"}</span>.
              Enter the code below to continue.
            </p>

            <label className="text-white text-xs mb-3 block">Verification Code</label>
            <input value={form.verificationCode} onChange={e => update("verificationCode", e.target.value)}
              placeholder="000000" maxLength={6}
              className="w-full rounded-lg px-4 py-3 text-white placeholder-[#6A7282] outline-none mb-4 tracking-widest text-left text-lg"
              style={{ backgroundColor: "#1F2E41" }} />

            <button className="w-full text-center text-[#A3E635] text-sm font-medium mb-2 hover:opacity-80 transition">
              Resend Code
            </button>
            <p className="text-center text-[#6A7282] text-xs mb-6">
              Didn't receive the email? Check your spam folder or resend the code.
            </p>

            <button onClick={() => setStep(3)}
              className="w-full py-3 rounded-lg font-medium text-sm text-[#000000] bg-[#A3E635] hover:opacity-90 transition">
              Verify Email
            </button>
          </>
        )}

        {/* ── STEP 3 ── */}
        {step === 3 && (
          <>
            <p className="text-[#99A1AF] text-xs mb-4">Step 3 of 3</p>
            <h2 className="text-white text-2xl font-bold mb-1">Tell Us About Your Business</h2>
            <p className="text-[#99A1AF] text-sm mb-6">Help us configure TransitHub for your business.</p>

            <label className="text-[#D1D5DC] text-xs mb-1 block">Company Name</label>
            <input value={form.company} onChange={e => update("company", e.target.value)}
              placeholder="Your company"
              className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 placeholder:font-thin outline-none mb-4"
              style={{ backgroundColor: "#1F2E41" }} />

            <label className="text-[#D1D5DC] text-xs mb-1 block">Primary Location (City/Town)</label>
            <input value={form.location} onChange={e => update("location", e.target.value)}
              placeholder="Your company"
              className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 placeholder:font-thin outline-none mb-4"
              style={{ backgroundColor: "#1F2E41" }} />

            <div className="flex gap-3 mb-4">
            <div className="flex-1">
                <label className="text-[#D1D5DC] text-xs mb-1 block">Fleet Size</label>
                <div className="relative">
                <select value={form.fleetSize} onChange={e => update("fleetSize", e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-sm text-gray-400 outline-none appearance-none pr-10"
                    style={{ backgroundColor: "#1F2E41" }}>
                    <option value="">Select</option>
                    <option>1-5 vehicles</option><option>6-20 vehicles</option><option>21-50 vehicles</option><option>51-100 vehicles</option><option>100+ vehicles</option>
                </select>
                <svg className="absolute right-3 top-4 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </div>
            </div>

            <div className="flex-1">
                <label className="text-[#D1D5DC] text-xs mb-1 block">Monthly Bookings</label>
                <div className="relative">
                <select value={form.monthlyBookings} onChange={e => update("monthlyBookings", e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-sm text-gray-400 outline-none appearance-none pr-10"
                    style={{ backgroundColor: "#1F2E41" }}>
                    <option value="">Select</option>
                    <option>Less than 100</option><option>100-500</option><option>500-2000</option><option>2000+</option>
                </select>
                <svg className="absolute right-3 top-4 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </div>
            </div>
            </div>

          <label className="text-[#D1D5DC] text-xs mb-1 block">Primary Booking Sources</label>
            <div className="relative">
            <select value={form.bookingSources} onChange={e => update("bookingSources", e.target.value)}
                className="w-full rounded-lg px-4 py-3 text-sm text-gray-400 outline-none appearance-none mb-6 pr-10"
                style={{ backgroundColor: "#1F2E41" }}>
                <option value="">Select sources</option>
                <option>Direct Website</option>
                <option>OTA Platforms</option>
                <option>Phone/Email</option>
                <option>All of above</option>
            </select>
            <svg className="absolute right-3 top-4 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </div>

            <button onClick={() => setStep(4)}
              className="w-full py-3 rounded-lg font-semibold text-sm text-[#101828] mb-4 bg-[#A3E635] hover:opacity-90 transition">
              Create Workspace
            </button>
          </>
        )}

        {/* ── STEP 4 ── */}
        {step === 4 && (
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-16 h-16 rounded-full border-4 border-[#A3E635] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#A3E635]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-white text-2xl font-bold mb-3">Setting Up Your Workspace</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              We're preparing your TransitHub environment. We'll notify you by email once it's ready.
            </p>
            <button onClick={onClose}
              className="px-8 py-3 rounded-lg font-semibold text-sm text-[#101828] bg-[#A3E635] hover:opacity-90 transition">
              Back to Home
            </button>
          </div>
        )}

      </div>
    </div>
  );
}