import { CheckCircle2, Car, MapPin, Calendar, Clock, Users, Luggage, Download, Mail, ArrowLeft, Shield } from 'lucide-react';
import { useState,useEffect } from 'react';
import logo from "../img/Logo.png"

export default function BookingConfirmation({ bookingId, vehicle, searchData, currency, currencySymbol, convertPrice, onBackToHome }) {
  const currentDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const currentTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1E2F] relative">
      {/* <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10" style={{ opacity: 0.08 }}>
        <div className="transform -rotate-45 text-slate-600 font-bold" style={{ fontSize: '120px', lineHeight: 1 }}>DEMO<br />BOOKING</div>
      </div> */}

    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${scrolled ? 'bg-gray-900 backdrop-blur-sm shadow-md' : 'bg-[#0F1E2F]'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <button onClick={onBackToHome} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </button>
      </div>
    </div>
  </header>



      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20 pt-36">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="w-10 h-10 text-emerald-600" /></div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Booking Confirmed!</h1>
            <p className="text-lg text-slate-600">Your transfer has been successfully booked</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
            <div className="text-center">
              <p className="text-sm text-slate-600 mb-2">Booking Reference</p>
              <p className="text-3xl font-bold text-blue-600 tracking-wider">{bookingId}</p>
              <p className="text-sm text-slate-500 mt-2">Please save this reference for your records</p>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Booking Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3"><Calendar className="w-5 h-5 text-slate-400 mt-0.5" /><div><p className="text-sm text-slate-600">Booking Date</p><p className="font-semibold text-slate-900">{currentDate}</p></div></div>
                <div className="flex items-start space-x-3"><Clock className="w-5 h-5 text-slate-400 mt-0.5" /><div><p className="text-sm text-slate-600">Booking Time</p><p className="font-semibold text-slate-900">{currentTime}</p></div></div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Trip Details</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3"><MapPin className="w-5 h-5 text-emerald-500 mt-0.5" /><div><p className="text-sm text-slate-600">Pickup Location</p><p className="font-semibold text-slate-900">{searchData.from}</p></div></div>
                <div className="flex items-start space-x-3"><MapPin className="w-5 h-5 text-red-500 mt-0.5" /><div><p className="text-sm text-slate-600">Dropoff Location</p><p className="font-semibold text-slate-900">{searchData.to}</p></div></div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3"><Calendar className="w-5 h-5 text-slate-400 mt-0.5" /><div><p className="text-sm text-slate-600">Pickup Date</p><p className="font-semibold text-slate-900">{searchData.pickupDate ? searchData.pickupDate.toLocaleDateString('en-GB') : 'Not set'}</p></div></div>
                  <div className="flex items-start space-x-3"><Clock className="w-5 h-5 text-slate-400 mt-0.5" /><div><p className="text-sm text-slate-600">Pickup Time</p><p className="font-semibold text-slate-900">{searchData.pickupTime ? searchData.pickupTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) : 'Not set'}</p></div></div>
                </div>
              </div>
            </div>

        <div className="border-t border-slate-200 pt-4 sm:pt-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Vehicle Details</h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          
          {/* Image */}
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full sm:w-32 h-48 sm:h-24 object-cover rounded-lg flex-shrink-0"
          />

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{vehicle.name}</h3>

            <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600 mb-3">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 flex-shrink-0" />
                <span>{vehicle.passengers} Passengers</span>
              </div>
              <div className="flex items-center space-x-1">
                <Luggage className="w-4 h-4 flex-shrink-0" />
                <span>{vehicle.luggage} Bags</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {vehicle.features.map((f, i) => (
                <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

            <div className="border-t border-slate-200 pt-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Payment Summary</h2>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex justify-between items-center"><span className="text-slate-600">Total Amount Paid</span><span className="text-2xl font-bold text-slate-900">{currencySymbol}{convertPrice(vehicle.price)} {currency}</span></div>
                <div className="mt-2"><span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full"><CheckCircle2 className="w-4 h-4 mr-1" />Paid</span></div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Local Supplier Information</h2>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="space-y-2">
                  <div><p className="text-sm text-slate-600">Supplier Name</p><p className="font-semibold text-slate-900">TransitHub Local Services</p></div>
                  <div><p className="text-sm text-slate-600">Contact Number</p><p className="font-semibold text-slate-900">+1 (555) 123-4567</p></div>
                  <div><p className="text-sm text-slate-600">Emergency Hotline</p><p className="font-semibold text-slate-900">+1 (555) 999-8888</p></div>
                  <p className="text-xs text-slate-500 mt-3">Available 24/7 for any assistance or queries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 print:hidden">
            <button onClick={() => window.print()} className="flex-1 px-6 py-3 bg-[#0F1E2F] text-white font-semibold rounded-lg hover:bg-gray-900 transition-all flex items-center justify-center space-x-2"><Download className="w-5 h-5" /><span>Download Receipt</span></button>
            <button className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center space-x-2"><Mail className="w-5 h-5" /><span>Email Confirmation</span></button>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 print:hidden">
            <p className="text-sm text-blue-900"><strong>What happens next?</strong> You will receive a confirmation email. Our driver will contact you 30 minutes before pickup. For any changes, contact our 24/7 support team.</p>
          </div>
        </div>

        <div className="text-center print:hidden">
          <button onClick={onBackToHome} className="inline-flex items-center space-x-2 text-slate-100 hover:text-slate-200 transition-colors mt-4"><ArrowLeft className="w-5 h-5" /><span>Back to Search</span></button>
        </div>
      </div>

      <footer className="bg-[#0F1E2F] py-6 mt-12 print:hidden"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-center text-slate-200 text-sm">Powered by Transithub Inc 2026</p></div></footer>
    </div>
  );
}