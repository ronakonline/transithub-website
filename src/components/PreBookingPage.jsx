import { useState,useEffect } from 'react';
import logo from "../img/Logo.png"
import { ArrowLeft, Car, Users, Luggage, Plus, Minus, MapPin, Calendar, Clock, Baby, Timer, Gift } from 'lucide-react';

export default function PreBookingPage({ vehicle, searchData, currency, currencySymbol, convertPrice, onBack, onProceedToPayment }) {
  const [scrolled, setScrolled] = useState(false);
  const [addOns, setAddOns] = useState([
    { id: 'child-seat', name: 'Child Seat', price: 10, quantity: 0 },
    { id: 'extra-waiting', name: 'Extra Waiting (1 hour)', price: 20, quantity: 0 },
    { id: 'chocolates-roses', name: 'Chocolates and Roses', price: 120, quantity: 0 }
  ]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', flightDetails: '', remarks: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 10);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const updateAddOnQuantity = (id, change) => setAddOns(addOns.map(a => a.id === id ? { ...a, quantity: Math.max(0, a.quantity + change) } : a));
  const calculateAddOnsTotal = () => addOns.reduce((total, a) => total + (a.price * a.quantity), 0);
  const calculateTotal = () => convertPrice(vehicle.price + calculateAddOnsTotal());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => { e?.preventDefault(); if (validate()) onProceedToPayment(); };

  return (
    <div className="min-h-screen  bg-[#0F1E2F]">
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 backdrop-blur-sm shadow-md' : 'bg-[#0F1E2F] border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center space-x-1.5 text-white hover:text-white/80 transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base whitespace-nowrap">Back</span>
          </button>

          {/* Logo + Title — center on mobile, left-ish on desktop */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 justify-center sm:justify-start sm:ml-6">
            <img src={logo} alt="Logo" className="h-5 sm:h-6 w-auto shrink-0" />
            <span className="text-xs sm:text-base font-bold text-white leading-tight text-center sm:text-left">
              Complete Your Booking
            </span>
          </div>

        </div>
      </div>
    </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-36">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Selected Vehicle */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Selected Vehicle</h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <img 
                src={vehicle.image} 
                alt={vehicle.name} 
                className="w-full sm:w-48 h-48 sm:h-32 object-cover rounded-lg flex-shrink-0" 
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{vehicle.name}</h3>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-slate-600 mb-3">
                  <div className="flex items-center space-x-1"><Users className="w-4 h-4" /><span>{vehicle.passengers} Passengers</span></div>
                  <div className="flex items-center space-x-1"><Luggage className="w-4 h-4" /><span>{vehicle.luggage} Bags</span></div>
                </div>
                <div className="space-y-1 text-sm text-slate-600">
                  <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 flex-shrink-0" /><span className="break-words">{searchData.from} → {searchData.to}</span></div>
                  <div className="flex items-center space-x-2"><Calendar className="w-4 h-4 flex-shrink-0" /><span>{searchData.pickupDate ? searchData.pickupDate.toLocaleDateString('en-GB') : 'Not set'}</span></div>
                  <div className="flex items-center space-x-2"><Clock className="w-4 h-4 flex-shrink-0" /><span>{searchData.pickupTime ? searchData.pickupTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) : 'Not set'}</span></div>
                </div>
              </div>
            </div>
          </div>

            {/* Add-ons */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Available Add-ons</h2>
  <div className="space-y-3 sm:space-y-4">
    {addOns.map((addon) => {
      const iconMap = {
        'child-seat': <Baby className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />,
        'extra-waiting': <Timer className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
        'chocolates-roses': <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600" />
      };
      return (
        <div
          key={addon.id}
          className="flex items-center justify-between p-3 sm:p-5 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-md transition-all bg-white gap-3"
        >
          {/* Left: Icon + Info */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
            <div className="flex-shrink-0">{iconMap[addon.id]}</div>
            <div className="min-w-0">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight truncate">
                {addon.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                {currencySymbol}{convertPrice(addon.price)} {currency}
              </p>
            </div>
          </div>

          {/* Right: Quantity Controls */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={() => updateAddOnQuantity(addon.id, -1)}
              disabled={addon.quantity === 0}
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-slate-700" />
            </button>

            <span className="w-6 sm:w-8 text-center font-bold text-base sm:text-lg text-slate-900">
              {addon.quantity}
            </span>

            <button
              onClick={() => updateAddOnQuantity(addon.id, 1)}
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-slate-700" />
            </button>
          </div>
        </div>
      );
    })}
  </div>
</div>

            {/* Booking Form */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Booking Details</h2>
              <div className="space-y-4">
                {[{ label: 'Full Name *', name: 'name', type: 'text', placeholder: 'John Doe' }, { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'john@example.com' }, { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '+44 20 1234 5678' }, { label: 'Flight Details', name: 'flightDetails', type: 'text', placeholder: 'BA123 - London Heathrow' }].map(({ label, name, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
                    <input type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder} className={`w-full px-4 py-3 border ${errors[name] ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`} />
                    {errors[name] && <p className="text-sm text-red-600 mt-1">{errors[name]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Special Remarks</label>
                  <textarea name="remarks" value={formData.remarks} onChange={handleChange} rows={4} placeholder="Any special requests or instructions..." className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600"><span>Vehicle ({vehicle.name})</span><span className="font-semibold">{currencySymbol}{convertPrice(vehicle.price)}</span></div>
                {addOns.filter(a => a.quantity > 0).map(a => (
                  <div key={a.id} className="flex justify-between text-slate-600"><span>{a.name} (x{a.quantity})</span><span className="font-semibold">{currencySymbol}{convertPrice(a.price * a.quantity)}</span></div>
                ))}
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-slate-900"><span>Total</span><span>{currencySymbol}{calculateTotal()} {currency}</span></div>
                </div>
              </div>
              <button onClick={handleSubmit} className="w-full px-6 py-4 bg-[#0F1E2F] text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-200 hover:shadow-lg">Make Payment</button>
              <p className="text-xs text-slate-500 text-center mt-4">By proceeding, you agree to our terms and conditions</p>
            </div>
          </div>
        </div>
      </div>

      <footer className=" bg-[#0F1E2F] py-6 mt-12"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-center text-slate-400 text-sm">Powered by Transithub Inc 2026</p></div></footer>
    </div>
  );
}