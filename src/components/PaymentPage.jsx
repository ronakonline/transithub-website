import { useState,useEffect } from 'react';
import logo from "../img/Logo.png"
import { ArrowLeft, Car, CreditCard, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function PaymentPage({ vehicle, currency, currencySymbol, convertPrice, onBack, onPaymentSuccess }) {
  const [processing, setProcessing] = useState(false);
  const [showResult, setShowResult] = useState(null);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 10);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const generateBookingId = () => `TH${Math.floor(100000 + Math.random() * 900000)}`;

  const handlePaymentSuccess = () => {
    setShowResult('success');
    setTimeout(() => onPaymentSuccess(generateBookingId()), 1500);
  };

  const handlePaymentFailure = () => {
    setShowResult('failure');
    setTimeout(() => { setShowResult(null); setProcessing(false); }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0F1E2F] flex flex-col">
     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 backdrop-blur-sm shadow-md' : 'bg-[#0F1E2F]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 space-x-4">
          <button onClick={onBack} className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"><ArrowLeft className="w-5 h-5" /><span>Back</span></button>
          <div className="flex items-center space-x-5">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">Payment</span>
          </div>
        </div>
      </div>
    </header>


      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full pt-36">
        {!processing && !showResult && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><CreditCard className="w-10 h-10 text-blue-600" /></div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Complete Payment</h1>
              <p className="text-slate-600">Demo payment page - Click any button to simulate payment</p>
            </div>
            <div className="border-t border-slate-200 pt-8 mb-8">
              <div className="space-y-3">
                <div className="flex justify-between text-slate-600"><span>Vehicle: {vehicle.name}</span><span className="font-semibold">{currencySymbol}{convertPrice(vehicle.price)}</span></div>
                <div className="border-t border-slate-200 pt-3"><div className="flex justify-between text-2xl font-bold text-slate-900"><span>Total Amount</span><span>{currencySymbol}{convertPrice(vehicle.price)} {currency}</span></div></div>
              </div>
            </div>
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-5 mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
                <div><h3 className="font-bold text-amber-900 mb-2 text-lg">Payment Simulator Test Page</h3><p className="text-sm text-amber-800 font-medium mb-1">This is a demonstration payment page for testing purposes only.</p><p className="text-xs text-amber-700">No real transactions are processed here.</p></div>
              </div>
            </div>
            <button onClick={() => setProcessing(true)} className="w-full px-6 py-4 bg-[#0F1E2F] hover:bg-gray-900  text-white font-semibold rounded-lg transition-all duration-200">Payment Complete</button>
          </div>
        )}

        {processing && !showResult && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><CreditCard className="w-10 h-10 text-blue-600" /></div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Processing Payment</h1>
              <p className="text-slate-600 mb-8">Choose a payment outcome to continue</p>
            </div>
            <div className="space-y-4">
              <button onClick={handlePaymentSuccess} className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all flex items-center justify-center space-x-2"><CheckCircle2 className="w-5 h-5" /><span>Payment Success</span></button>
              <button onClick={handlePaymentFailure} className="w-full px-6 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-rose-700 transition-all flex items-center justify-center space-x-2"><XCircle className="w-5 h-5" /><span>Payment Failure</span></button>
            </div>
          </div>
        )}

        {showResult === 'success' && (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce"><CheckCircle2 className="w-10 h-10 text-emerald-600" /></div>
            <h1 className="text-3xl font-bold text-emerald-600 mb-2">Payment Successful!</h1>
            <p className="text-slate-600">Redirecting to booking confirmation...</p>
            <div className="mt-6"><div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto"></div></div>
          </div>
        )}

        {showResult === 'failure' && (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce"><XCircle className="w-10 h-10 text-red-600" /></div>
            <h1 className="text-3xl font-bold text-red-600 mb-2">Payment Failed!</h1>
            <p className="text-slate-600 mb-4">Your payment could not be processed. Please try again.</p>
            <p className="text-sm text-slate-500">Returning to payment options...</p>
          </div>
        )}
      </div>

      <footer className="bg-[#0F1E2F] py-6 mt-auto"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-center text-slate-400 text-sm">Powered by Transithub Inc 2026</p></div></footer>
    </div>
  );
}