import { useState } from "react";
import X from "../img/X.svg";

export default function SignupModal({ onClose }) {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    location: "",
    fleetSize: "",
    monthlyBookings: "",
    bookingSources: "",
    website: "" // honeypot
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const update = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    setTouched(t => ({ ...t, [k]: true }));
  };

  const getFieldError = (k, value) => {
    if (k === "email") {
      if (!value.trim()) return "Work email is required.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Enter a valid email address.";
    }
    if (k === "password") {
      if (!value.trim()) return "Password is required.";
      if (value.length < 6 || value.length > 8) return "Password must be 6–8 characters long.";
    }
    if (k === "company") {
      if (!value.trim()) return "Company name is required.";
    }
    if (k === "location") {
      if (!value.trim()) return "Location is required.";
    }
    if (k === "fleetSize") {
      if (!value) return "Please select fleet size.";
    }
    if (k === "monthlyBookings") {
      if (!value) return "Please select monthly bookings.";
    }
    return "";
  };

  const liveErrors = {
    ...errors,
    ...(touched.email ? { email: getFieldError("email", form.email) } : {}),
    ...(touched.password ? { password: getFieldError("password", form.password) } : {}),
    ...(touched.company ? { company: getFieldError("company", form.company) } : {}),
    ...(touched.location ? { location: getFieldError("location", form.location) } : {}),
    ...(touched.fleetSize ? { fleetSize: getFieldError("fleetSize", form.fleetSize) } : {}),
    ...(touched.monthlyBookings ? { monthlyBookings: getFieldError("monthlyBookings", form.monthlyBookings) } : {}),
  };

  const validateStep1 = () => {
    const emailErr = getFieldError("email", form.email);
    const passwordErr = getFieldError("password", form.password);
    const newErrors = {};
    if (emailErr) newErrors.email = emailErr;
    if (passwordErr) newErrors.password = passwordErr;
    setErrors(newErrors);
    setTouched(t => ({ ...t, email: true, password: true }));
    return !emailErr && !passwordErr;
  };

  const validateStep2 = () => {
    const companyErr = getFieldError("company", form.company);
    const locationErr = getFieldError("location", form.location);
    const fleetErr = getFieldError("fleetSize", form.fleetSize);
    const bookingsErr = getFieldError("monthlyBookings", form.monthlyBookings);
    const newErrors = {};
    if (companyErr) newErrors.company = companyErr;
    if (locationErr) newErrors.location = locationErr;
    if (fleetErr) newErrors.fleetSize = fleetErr;
    if (bookingsErr) newErrors.monthlyBookings = bookingsErr;
    setErrors(newErrors);
    setTouched(t => ({ ...t, company: true, location: true, fleetSize: true, monthlyBookings: true }));
    return !companyErr && !locationErr && !fleetErr && !bookingsErr;
  };

  const goToStep2 = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;
    try {
      if (form.website) return;
      setLoading(true);
      const { password, website, ...dataToSend } = form;
      const istTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
       body: JSON.stringify({
        ...dataToSend,
        _subject: "New TransitHub Signup",
        submittedAt: istTime 
      }),
      });
      if (res.ok) setStep(3);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(2px)" }}>

      <div className="relative w-full max-w-[340px] md:max-w-md rounded-2xl p-8 shadow-2xl"
        style={{ backgroundColor: "#2E3F53" }}>

        <button onClick={onClose} className="absolute top-6 right-4 text-[#99A1AF] hover:text-white text-xl w-5 h-5 leading-none">
          <img src={X} />
        </button>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <p className="text-[#99A1AF] text-xs mb-4">Step 1 of 2</p>
            <h2 className="text-white text-2xl font-bold mb-1">Create Your Account</h2>
            <p className="text-[#99A1AF] text-sm mb-6">Set up your TransitHub login to get started.</p>

            <label className="text-[#D1D5DC] text-xs mb-1 block">Full Name</label>
            <input
              value={form.name}
              onChange={e => update("name", e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 outline-none mb-4"
              style={{ backgroundColor: "rgba(15, 30, 47, 0.51)" }}
            />

            <label className="text-[#D1D5DC] text-xs mb-1 block">Work Email</label>
            <input
              value={form.email}
              onChange={e => update("email", e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, email: true }))}
              placeholder="you@company.com"
              type="email"
              className={`w-full rounded-lg px-4 py-3 text-sm placeholder-white/50 outline-none mb-3
                ${liveErrors.email ? "border border-[#EB6767]" : ""}`}
              style={{ backgroundColor: "rgba(15, 30, 47, 0.51)", color: "white" }}
            />
            <div className="">
              {liveErrors.email && <p className="text-[#EB6767] min-h-[20px] mb-2 text-xs">{liveErrors.email}</p>}
            </div>

            <label className="text-[#D1D5DC] text-xs mb-1 block">Password</label>
            <input
              value={form.password}
              onChange={e => update("password", e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, password: true }))}
              placeholder="Create a secure password"
              type="password"
              className={`w-full rounded-lg px-4 py-3 text-sm placeholder-white/50 outline-none mb-3
                ${liveErrors.password ? "border border-[#EB6767]" : ""}`}
              style={{ backgroundColor: "rgba(15, 30, 47, 0.51)", color: "white" }}
            />
            <div className="">
              {liveErrors.password && <p className="text-[#EB6767] text-xs min-h-[20px] mb-2">{liveErrors.password}</p>}
            </div>

            <input type="text" value={form.website} onChange={e => update("website", e.target.value)} className="hidden" />

            <button
              onClick={goToStep2}
              className="w-full py-3 rounded-lg font-medium text-sm text-[#000000] bg-[#A3E635] hover:opacity-90 transition mt-6"
            >
              Continue
            </button>
            <p className="text-center text-[#99a0ae] text-xs mt-3">This will be your login for TransitHub.</p>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <p className="text-[#99A1AF] text-xs mb-4">Step 2 of 2</p>
            <h2 className="text-white text-2xl font-bold mb-1">Tell Us About Your Business</h2>
            <p className="text-[#99A1AF] text-sm mb-6">Help us configure TransitHub for your business.</p>

            <label className="text-[#D1D5DC] text-xs mb-1 block">Company Name</label>
            <input
              value={form.company}
              onChange={e => update("company", e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, company: true }))}
              placeholder="Your company"
              className={`w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 placeholder:font-thin outline-none mb-3
                ${liveErrors.company ? "border border-[#EB6767]" : ""}`}
              style={{ backgroundColor: "#1F2E41" }}
            />
            <div className="">
              {liveErrors.company && <p className="text-[#EB6767] text-xs mb-2">{liveErrors.company}</p>}
            </div>

            <label className="text-[#D1D5DC] text-xs mb-1 block">Primary Location (City/Town)</label>
            <input
              value={form.location}
              onChange={e => update("location", e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, location: true }))}
              placeholder="Your city"
              className={`w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 placeholder:font-thin outline-none mb-3
                ${liveErrors.location ? "border border-[#EB6767]" : ""}`}
              style={{ backgroundColor: "#1F2E41" }}
            />
            <div className="">
              {liveErrors.location && <p className="text-[#EB6767] text-xs mb-2">{liveErrors.location}</p>}
            </div>

            <div className="flex gap-3 mb-1">
              <div className="flex-1">
                <label className="text-[#D1D5DC] text-xs mb-1 block">Fleet Size</label>
                <div className="relative mb-3">
                  <select
                    value={form.fleetSize}
                    onChange={e => update("fleetSize", e.target.value)}
                    onBlur={() => setTouched(t => ({ ...t, fleetSize: true }))}
                    className={`w-full rounded-lg px-4 py-3 text-sm text-gray-400 outline-none appearance-none pr-10
                      ${liveErrors.fleetSize ? "border border-[#EB6767]" : ""}`}
                    style={{ backgroundColor: "#1F2E41" }}>
                    <option value="">Select</option>
                    <option>1-5 vehicles</option><option>6-20 vehicles</option><option>21-50 vehicles</option><option>51-100 vehicles</option><option>100+ vehicles</option>
                  </select>
                  <svg className="absolute right-3 top-4 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="">
                  {liveErrors.fleetSize && <p className="text-[#EB6767] text-xs mb-2">{liveErrors.fleetSize}</p>}
                </div>
              </div>

              <div className="flex-1">
                <label className="text-[#D1D5DC] text-xs mb-1 block">Monthly Bookings</label>
                <div className="relative mb-3">
                  <select
                    value={form.monthlyBookings}
                    onChange={e => update("monthlyBookings", e.target.value)}
                    onBlur={() => setTouched(t => ({ ...t, monthlyBookings: true }))}
                    className={`w-full rounded-lg px-4 py-3 text-sm text-gray-400 outline-none appearance-none pr-10
                      ${liveErrors.monthlyBookings ? "border border-[#EB6767]" : ""}`}
                    style={{ backgroundColor: "#1F2E41" }}>
                    <option value="">Select</option>
                    <option>Less than 100</option><option>100-500</option><option>500-2000</option><option>2000+</option>
                  </select>
                  <svg className="absolute right-3 top-4 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="">
                  {liveErrors.monthlyBookings && <p className="text-[#EB6767] text-xs ml-1.5 mb-2">{liveErrors.monthlyBookings}</p>}
                </div>
              </div>
            </div>

      
            <label className="text-[#D1D5DC] text-xs mb-1 block">Primary Booking Sources</label>
            <div className="relative">
              <select value={form.bookingSources} onChange={e => update("bookingSources", e.target.value)}
                className="w-full rounded-lg px-4 py-3 text-sm text-gray-400 outline-none appearance-none mb-10 pr-10"
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

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold text-sm text-[#101828] mb-4 bg-[#A3E635] hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Workspace"}
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
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