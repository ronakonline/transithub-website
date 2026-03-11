import { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Users, Luggage, Car, Share2, CheckCircle, Award, HeadphonesIcon, Shield, Star } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PreBookingPage from './PreBookingPage';
import PaymentPage from './PaymentPage';
import BookingConfirmation from './BookingConfirmation';
import Logo from "../img/Logo.png"
import Icon1 from "../img/Icon12.svg"
import Icon2 from "../img/Icon13.svg"
import Icon3 from "../img/Icon14.svg"

const vehicles = [
  { id: 1, name: 'Sedan Car', image: 'https://copy-leamigo-cms-bucket.s3.ap-south-1.amazonaws.com/sedan_corolla2_6d233b3aa7.png', passengers: 3, luggage: 3, price: 65, features: ['Free Meet And Greet', 'Free Cancellation', '60 Minutes Free Waiting Time', 'Instant Confirmation'] },
  { id: 2, name: 'Minivan', image: 'https://copy-leamigo-cms-bucket.s3.ap-south-1.amazonaws.com/minivan_touran_0e217b48b2.png', passengers: 4, luggage: 4, price: 75, features: ['Free Meet And Greet', 'Free Cancellation', '60 Minutes Free Waiting Time', 'Instant Confirmation'] },
  { id: 3, name: 'Business Sedan', image: 'https://copy-leamigo-cms-bucket.s3.ap-south-1.amazonaws.com/business_merc_e_class_05d694f15d.png', passengers: 3, luggage: 2, price: 85, features: ['Free Meet And Greet', 'Free Cancellation', '60 Minutes Free Waiting Time', 'Instant Confirmation'] },
  { id: 4, name: 'Business Minivan', image: 'https://copy-leamigo-cms-bucket.s3.ap-south-1.amazonaws.com/minivan_merc_v_class_2f46759b95.png', passengers: 7, luggage: 7, price: 100, features: ['Free Meet And Greet', 'Free Cancellation', '60 Minutes Free Waiting Time', 'Instant Confirmation'] },
  { id: 5, name: 'Minibus', image: 'https://copy-leamigo-cms-bucket.s3.ap-south-1.amazonaws.com/merc_sprinter_761b61aad7.png', passengers: 10, luggage: 10, price: 300, features: ['Free Meet And Greet', 'Free Cancellation', '60 Minutes Free Waiting Time', 'Instant Confirmation'] }
];

const locations = {
  airports: ['London Heathrow Airport (LHR)', 'London Gatwick Airport (LGW)', 'London City Airport (LCY)', 'London Stansted Airport (STN)'],
  hotels: ['Taj 51 Buckingham Gate, London', 'The Taj St James Court Hotel, London', 'The Ritz London', 'The Savoy Hotel London']
};

const rentalCities = ['Dubai', 'London', 'Paris', 'New York'];

const pickupAddresses = {
  'Dubai': ['Dubai International Airport (DXB)', 'Burj Khalifa, Downtown Dubai', 'Dubai Mall', 'Dubai Marina', 'Palm Jumeirah'],
  'London': ['London Heathrow Airport (LHR)', 'Kings Cross Station', 'London Bridge', 'Canary Wharf', 'Hyde Park Corner'],
  'Paris': ['Charles de Gaulle Airport (CDG)', 'Eiffel Tower', 'Gare du Nord', 'Champs-Élysées', 'Louvre Museum'],
  'New York': ['JFK International Airport (JFK)', 'Times Square', 'Grand Central Terminal', 'Central Park South', 'Wall Street']
};

const rentalRates = {
  'Dubai': { minHours: 4, rates: { 'Sedan Car': 10, 'Minivan': 15, 'Business Sedan': 20, 'Business Minivan': 25 } },
  'Paris': { minHours: 2, rates: { 'Sedan Car': 30, 'Minivan': 35, 'Business Sedan': 45, 'Business Minivan': 50 } },
  'London': { minHours: 2, rates: { 'Sedan Car': 35, 'Minivan': 40, 'Business Sedan': 50, 'Business Minivan': 60 } },
  'New York': { minHours: 2, rates: { 'Sedan Car': 30, 'Minivan': 35, 'Business Sedan': 45, 'Business Minivan': 50 } }
};

const currencySymbols = { GBP: '£', USD: '$', EUR: '€' };

export default function DemoPage() {
  const [currency, setCurrency] = useState('GBP');
  const [activeTab, setActiveTab] = useState('transfers');
  const [showResults, setShowResults] = useState(false);
  const [searching, setSearching] = useState(false);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [bookingStep, setBookingStep] = useState('search');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [bookingId, setBookingId] = useState('');
  const [formData, setFormData] = useState({ tripType: 'oneway', from: '', to: '', pickupDate: null, pickupTime: null, returnDate: null, returnTime: null });
  const [rentalFormData, setRentalFormData] = useState({ city: '', pickupDate: null, pickupTime: null, pickupAddress: '', hours: '' });
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const [rentalVehicles, setRentalVehicles] = useState([]);
  const [customHours, setCustomHours] = useState('');
  const [billingHours, setBillingHours] = useState(0);

  const convertPrice = (priceInGBP) => {
    if (currency === 'EUR') return Math.round(priceInGBP * 1.15);
    if (currency === 'USD') return Math.round(priceInGBP * 1.36);
    return priceInGBP;
  };

  const handleSearch = () => {
    setSearching(true);
    setTimeout(() => { setSearching(false); setShowResults(true); }, 1500);
  };

  const handleRentalSearch = () => {
    if (!rentalFormData.city || !rentalFormData.pickupDate || !rentalFormData.pickupTime || !rentalFormData.pickupAddress || !rentalFormData.hours) { alert('Please fill in all fields'); return; }
    const actualHours = rentalFormData.hours === 'custom' ? customHours : rentalFormData.hours;
    if (!actualHours) { alert('Please enter the number of hours'); return; }
    const hours = parseInt(actualHours);
    if (isNaN(hours) || hours < 1) { alert('Please enter a valid number of hours'); return; }
    const cityRates = rentalRates[rentalFormData.city];
    const calculatedBillingHours = Math.max(hours, cityRates.minHours);
    setSearching(true);
    setTimeout(() => {
      setRentalVehicles(vehicles.map(v => ({ ...v, price: (cityRates.rates[v.name] || 0) * calculatedBillingHours })));
      setBillingHours(calculatedBillingHours);
      setSearching(false);
      setShowResults(true);
    }, 1500);
  };

  const handleBackToSearch = () => { setBookingStep('search'); setSelectedVehicle(null); setShowResults(false); };

  if (bookingStep === 'prebooking' && selectedVehicle) {
    const searchDataForBooking = activeTab === 'transfers' ? formData : { tripType: 'oneway', from: rentalFormData.pickupAddress, to: rentalFormData.city, pickupDate: rentalFormData.pickupDate, pickupTime: rentalFormData.pickupTime, returnDate: null, returnTime: null };
    return <PreBookingPage vehicle={selectedVehicle} searchData={searchDataForBooking} currency={currency} currencySymbol={currencySymbols[currency]} convertPrice={convertPrice} onBack={handleBackToSearch} onProceedToPayment={() => setBookingStep('payment')} />;
  }

  if (bookingStep === 'payment' && selectedVehicle) {
    return <PaymentPage vehicle={selectedVehicle} currency={currency} currencySymbol={currencySymbols[currency]} convertPrice={convertPrice} onBack={() => setBookingStep('prebooking')} onPaymentSuccess={(ref) => { setBookingId(ref); setBookingStep('confirmation'); }} />;
  }

  if (bookingStep === 'confirmation' && bookingId) {
    const searchDataForConfirmation = activeTab === 'transfers' ? formData : { tripType: 'oneway', from: rentalFormData.pickupAddress, to: rentalFormData.city, pickupDate: rentalFormData.pickupDate, pickupTime: rentalFormData.pickupTime, returnDate: null, returnTime: null };
    return <BookingConfirmation bookingId={bookingId} vehicle={selectedVehicle} searchData={searchDataForConfirmation} currency={currency} currencySymbol={currencySymbols[currency]} convertPrice={convertPrice} onBackToHome={handleBackToSearch} />;
  }

return (
  
<div className="min-h-screen w-full bg-[#0F1E2F]" style={{paddingTop: '64px'}}>
      {/* Header */}
      <header style={{ background: '#0F1E2F', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => { setBookingStep('search'); setShowResults(false); }} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="flex items-center justify-between">
                <img
                    src={Logo}
                    alt="TransitHub Logo"
                    className="h-9 w-auto object-contain mr-4"
                />
                </div>
            <span className='text-white text-2xl tracking-widest'>DEMO</span>
            </button>
            <div className="flex items-center space-x-4">
              <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="px-4 py-2 border text-white bg-transparent border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-sm">
                <option value="GBP" style={{background:'#0F1E2F'}}>GBP (£)</option>
                <option value="USD" style={{background:'#0F1E2F'}}>USD ($)</option>
                <option value="EUR" style={{background:'#0F1E2F'}}>EUR (€)</option>
              </select>
              <a href="https://www.transithub.io" target="_blank" rel="noopener noreferrer" style={{background:'#FFFFFF', color:'#0F1E2F'}} className="px-6 py-2 font-semibold rounded-lg hover:opacity-90 transition-all duration-200 shadow-md text-sm">Go Live</a>
            </div>
          </div>
        </div>
      </header>

      {!showResults ? (
        <>
          {/* Hero */}
          <div  className="relative py-16 bg-[#0F1E2F]">
          <div className="absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[80px] rounded-full bg-[#0D9688] blur-[100px] pointer-events-none z-0" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <h1 style={{ fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1 }} className="text-5xl md:text-6xl text-white mb-4">Book Your Transfers Instantly</h1>
                <p className="text-lg text-slate-300 mt-3">Reliable airport transfers and rentals from trusted suppliers worldwide.</p>
              </div>
   
              {/* White Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-8xl mx-auto">
                {/* Tabs */}
                <div className="flex space-x-6 mb-5 border-b border-slate-200">
                  {['transfers', 'rentals'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} style={activeTab === tab ? {borderBottom: '2.5px solid #0F1E2F', color: '#0F1E2F', fontWeight: 700} : {color: '#64748b', borderBottom: '2.5px solid transparent'}} className={`pb-3 text-sm font-medium transition-colors capitalize`}>
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Transfers Form */}
                {activeTab === 'transfers' && (
                  <div className="space-y-4">
                    {/* Trip type radios */}
                    <div className="flex space-x-6">
                      {[['oneway', 'One Way'], ['return', 'Return']].map(([val, label]) => (
                        <label key={val} className="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" name="tripType" value={val} checked={formData.tripType === val} onChange={() => setFormData({ ...formData, tripType: val })} className="w-4 h-4" style={{accentColor: '#00877B'}} />
                          <span className="text-[#364153] text-sm font-medium">{label}</span>
                        </label>
                      ))}
                    </div>

                    {/* Horizontal inputs row */}
                    <div className="flex items-stretch border border-slate-200 rounded-xl overflow-visible" style={{minHeight: '70px'}}>
                      {/* From */}
                      <div className="relative flex-1 border-r border-slate-200">
                        <div className="px-4 py-3 h-full">
                          <label className="block text-sm font-semibold text-[#364153] mb-1 ml-6">Pickup Location</label>
                          <div className="relative flex items-center">
                            <MapPin className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
                            <input
                              type="text"
                              value={formData.from}
                              onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                              onFocus={() => setShowFromSuggestions(true)}
                              placeholder="Enter pickup location"
                              className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                            />
                          </div>
                        </div>
                        {showFromSuggestions && (
                          <div className="absolute z-50 left-0 right-0 mt-1 top-full bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            <div className="p-2">
                              <div className="text-xs font-semibold text-slate-500 px-3 py-2">AIRPORTS</div>
                              {locations.airports.map((loc, i) => <button key={i} onClick={() => { setFormData({ ...formData, from: loc }); setShowFromSuggestions(false); }} className="w-full text-left px-3 py-2 hover:bg-slate-50 rounded flex items-center space-x-2"><MapPin className="w-4 h-4 text-slate-400" /><span className="text-sm text-slate-700">{loc}</span></button>)}
                              <div className="text-xs font-semibold text-slate-500 px-3 py-2 mt-2">HOTELS</div>
                              {locations.hotels.map((loc, i) => <button key={i} onClick={() => { setFormData({ ...formData, from: loc }); setShowFromSuggestions(false); }} className="w-full text-left px-3 py-2 hover:bg-slate-50 rounded flex items-center space-x-2"><MapPin className="w-4 h-4 text-slate-400" /><span className="text-sm text-slate-700">{loc}</span></button>)}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Swap icon */}
                      <div className="flex items-center pr-2 -mx-3 border-slate-200 flex-shrink-0">
                        <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>

                      {/* To */}
                      <div className="relative flex-1 border-r border-slate-200">
                        <div className="px-4 py-3 h-full">
                          <label className="block text-sm font-semibold text-[#364153] mb-1 ml-6">Dropoff Location</label>
                          <div className="relative flex items-center">
                            <MapPin className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
                            <input
                              type="text"
                              value={formData.to}
                              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                              onFocus={() => setShowToSuggestions(true)}
                              placeholder="Enter dropoff location"
                              className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                            />
                          </div>
                        </div>
                        {showToSuggestions && (
                          <div className="absolute z-50 left-0 right-0 mt-1 top-full bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            <div className="p-2">
                              <div className="text-xs font-semibold text-slate-500 px-3 py-2">HOTELS</div>
                              {locations.hotels.map((loc, i) => <button key={i} onClick={() => { setFormData({ ...formData, to: loc }); setShowToSuggestions(false); }} className="w-full text-left px-3 py-2 hover:bg-slate-50 rounded flex items-center space-x-2"><MapPin className="w-4 h-4 text-slate-400" /><span className="text-sm text-slate-700">{loc}</span></button>)}
                              <div className="text-xs font-semibold text-slate-500 px-3 py-2 mt-2">AIRPORTS</div>
                              {locations.airports.map((loc, i) => <button key={i} onClick={() => { setFormData({ ...formData, to: loc }); setShowToSuggestions(false); }} className="w-full text-left px-3 py-2 hover:bg-slate-50 rounded flex items-center space-x-2"><MapPin className="w-4 h-4 text-slate-400" /><span className="text-sm text-slate-700">{loc}</span></button>)}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Pickup Date */}
                      <div className="flex-1 border-r border-slate-200">
                        <div className="px-4 py-3 h-full">
                          <label className="block text-sm font-semibold text-[#364153] mb-1 ml-6">Pickup Date</label>
                          <div className="relative flex items-center">
                            <Calendar className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0 z-10 pointer-events-none" />
                            <DatePicker
                              selected={formData.pickupDate}
                              onChange={(date) => setFormData({ ...formData, pickupDate: date })}
                              dateFormat="dd/MM/yyyy"
                              minDate={new Date()}
                              placeholderText="dd-mm-yyyy"
                              className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                              wrapperClassName="w-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Pickup Time */}
                      <div className="flex-1 border-r border-slate-200">
                        <div className="px-4 py-3 h-full">
                          <label className="block text-sm font-semibold text-[#364153] mb-1 ml-6">Pickup Time</label>
                          <div className="relative flex items-center">
                            <Clock className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0 z-10 pointer-events-none" />
                            <DatePicker
                              selected={formData.pickupTime}
                              onChange={(date) => setFormData({ ...formData, pickupTime: date })}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              dateFormat="HH:mm"
                              timeFormat="HH:mm"
                              placeholderText="--:--"
                              className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                              wrapperClassName="w-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Search Button */}
                      <button
                        onClick={handleSearch}
                        disabled={searching || !formData.from || !formData.to || !formData.pickupDate || !formData.pickupTime}
                        style={{ background: '#0F1E2F', color: '#C6F135', borderRadius: '0 12px 12px 0', minWidth: '160px', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em' }}
                        className="flex items-center justify-center space-x-2 px-5 py-3 hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                      >
                        {searching
                          ? <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div><span>Searching...</span></>
                          : <><span>Search Transfers</span><ArrowRight className="w-4 h-4" /></>
                        }
                      </button>
                    </div>

                    {formData.tripType === 'return' && (
                      <div className="grid md:grid-cols-2 gap-6 mt-2">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Return Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10 pointer-events-none" />
                            <DatePicker selected={formData.returnDate} onChange={(date) => setFormData({ ...formData, returnDate: date })} dateFormat="dd/MM/yyyy" minDate={formData.pickupDate || new Date()} placeholderText="Select return date" className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" wrapperClassName="w-full" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Return Time</label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10 pointer-events-none" />
                            <DatePicker selected={formData.returnTime} onChange={(date) => setFormData({ ...formData, returnTime: date })} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="HH:mm" timeFormat="HH:mm" placeholderText="Select return time" className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" wrapperClassName="w-full" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Rentals Form */}
                {activeTab === 'rentals' && (
                  <div className="space-y-4">
                    {/* Horizontal inputs row */}
                    <div className="flex items-stretch border border-slate-200 rounded-xl overflow-visible" style={{minHeight: '70px'}}>
                      {/* City */}
                      <div className="relative flex-1 border-r border-slate-200">
                        <div className="px-4 py-3 h-full">
                          <label className="block text-sm font-semibold text-[#364153] mb-1 ml-6">City</label>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
                            <input
                              type="text"
                              value={rentalFormData.city}
                              onChange={(e) => { setRentalFormData({ ...rentalFormData, city: e.target.value, pickupAddress: '' }); setShowCitySuggestions(true); }}
                              onFocus={() => setShowCitySuggestions(true)}
                              placeholder="Select a city"
                              className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                            />
                          </div>
                        </div>
                        {showCitySuggestions && (
                          <div className="absolute z-10 left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {rentalCities.filter(c => c.toLowerCase().includes(rentalFormData.city.toLowerCase())).map((city, i) => (
                              <button key={i} onClick={() => { setRentalFormData({ ...rentalFormData, city, pickupAddress: '' }); setShowCitySuggestions(false); }} className="w-full px-4 py-3 text-left hover:bg-slate-50 border-b border-slate-100 last:border-b-0">
                                <div className="flex items-center space-x-3"><MapPin className="w-4 h-4 text-blue-600" /><span className="text-slate-900 text-sm">{city}</span></div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Pickup Date */}
                      <div className="flex-1 border-r border-slate-200">
                        <div className="px-4 py-3 h-full">
                          <label className="block text-sm font-semibold text-[#364153] mb-1 ml-6">Pickup Date</label>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0 pointer-events-none" />
                            <DatePicker
                              selected={rentalFormData.pickupDate}
                              onChange={(date) => setRentalFormData({ ...rentalFormData, pickupDate: date })}
                              minDate={new Date()}
                              dateFormat="dd/MM/yyyy"
                              placeholderText="Pickup Date"
                              className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                              wrapperClassName="w-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Pickup Time */}
                      <div className="flex-1 border-r border-slate-200">
                        <div className="px-4 py-3 h-full">
                          <label className="block text-sm font-semibold text-[#364153] mb-1 ml-6">Pickup Time</label>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0 pointer-events-none" />
                            <DatePicker
                              selected={rentalFormData.pickupTime}
                              onChange={(time) => setRentalFormData({ ...rentalFormData, pickupTime: time })}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              dateFormat="HH:mm"
                              timeFormat="HH:mm"
                              placeholderText="Pickup Time"
                              className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                              wrapperClassName="w-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex-1 border-r border-slate-200">
                        <div className="px-4 py-3 h-full">
                          <label className="block text-sm font-semibold text-[#364153] mb-1 ml-6">Hours</label>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0 pointer-events-none" />
                            <select
                              value={rentalFormData.hours}
                              onChange={(e) => setRentalFormData({ ...rentalFormData, hours: e.target.value })}
                              className="w-full text-sm text-slate-800 focus:outline-none bg-transparent appearance-none"
                            >
                              <option value="">Select hours</option>
                              {['2', '4', '6', '8', '10', '12'].map(h => <option key={h} value={h}>{h} hours</option>)}
                              <option value="custom">Custom</option>
                            </select>
                          </div>
                          {rentalFormData.hours === 'custom' && (
                            <input type="number" min="1" value={customHours} placeholder="Enter hours" onChange={(e) => setCustomHours(e.target.value)} className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent mt-1 border-t border-slate-200 pt-1" />
                          )}
                        </div>
                      </div>

                      {/* Find Cars Button */}
                      <button
                        onClick={handleRentalSearch}
                        disabled={searching}
                        style={{ background: '#0F1E2F', color: '#C6F135', borderRadius: '0 12px 12px 0', minWidth: '170px', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em' }}
                        className="flex items-center justify-center space-x-2 px-5 py-3 hover:opacity-90 transition-all duration-200 disabled:opacity-50 flex-shrink-0"
                      >
                        {searching
                          ? <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div><span>Searching...</span></>
                          : <><span>Find Available Cars</span><ArrowRight className="w-4 h-4" /></>
                        }
                      </button>
                    </div>

                    {/* Pickup address (shown below when city selected) */}
                    {rentalFormData.city && (
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Pickup Address</label>
                        <div className="relative">
                          <select value={rentalFormData.pickupAddress} onChange={(e) => setRentalFormData({ ...rentalFormData, pickupAddress: e.target.value })} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm">
                            <option value="">Select pickup address</option>
                            {pickupAddresses[rentalFormData.city]?.map((addr, i) => <option key={i} value={addr}>{addr}</option>)}
                          </select>
                          <MapPin className="absolute right-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="min-h-[300px] w-full flex justify-center items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex justify-between w-full">
                <div className="text-center">
                  <div style={{background: 'rgba(255,255,255,0.1)', backdropFilter:'blur(4px)'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-[#A3DE23]" />
                  </div>
                  <p className="text-white font-medium text-sm mt-4">24/7 Support</p>
                  <p className="text-white font-medium text-sm mt-5">Round the clock customer assistance</p>
                </div>
                <div className="text-center">
                  <div style={{background: 'rgba(255,255,255,0.1)', backdropFilter:'blur(4px)'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-[#A3DE23]" />
                  </div>
                  <p className="text-white font-medium text-sm mt-4">Real-Time Tracking</p>
                  <p className="text-white font-medium text-sm mt-5">Track your driver in real-time</p>
                </div>
                <div className="text-center">
                  <div style={{background: 'rgba(255,255,255,0.1)', backdropFilter:'blur(4px)'}} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-[#A3DE23]" />
                  </div>
                  <p className="text-white font-medium text-sm mt-4">Professional Drivers</p>
                  <p className="text-white font-medium text-sm mt-5">Experienced and vetted drivers</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Results */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center flex-wrap gap-4">
                <div className="flex items-center space-x-2"><MapPin className="w-5 h-5 text-slate-400" /><div><div className="text-sm text-slate-600">From</div><div className="font-semibold">{formData.from}</div></div></div>
                <ArrowRight className="w-5 h-5 text-slate-400" />
                <div className="flex items-center space-x-2"><MapPin className="w-5 h-5 text-slate-400" /><div><div className="text-sm text-slate-600">To</div><div className="font-semibold">{formData.to}</div></div></div>
                <div className="h-8 w-px bg-slate-300"></div>
                <div className="flex items-center space-x-2"><Calendar className="w-5 h-5 text-slate-400" /><div><div className="text-sm text-slate-600">Pickup</div><div className="font-semibold">{formData.pickupDate && formData.pickupTime ? `${formData.pickupDate.toLocaleDateString('en-GB')} at ${formData.pickupTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}` : 'Not set'}</div></div></div>
              </div>
              <button onClick={() => setShowResults(false)} className="px-6 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">Modify Search</button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Why Book With Us?</h2>
                <div className="space-y-5">
                  <div className="flex items-start space-x-3"><div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0"><CheckCircle className="w-5 h-5 text-emerald-600" /></div><div><h3 className="font-semibold text-slate-900 mb-1">Free Amendments</h3><p className="text-sm text-slate-600">Change your booking anytime</p></div></div>
                  <div className="flex items-start space-x-3"><div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"><Award className="w-5 h-5 text-blue-600" /></div><div><h3 className="font-semibold text-slate-900 mb-1">Professional Drivers</h3><p className="text-sm text-slate-600">Experienced and licensed</p></div></div>
                  <div className="flex items-start space-x-3"><div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0"><CheckCircle className="w-5 h-5 text-amber-600" /></div><div><h3 className="font-semibold text-slate-900 mb-1">Instant Confirmation</h3><p className="text-sm text-slate-600">Book and confirm in seconds</p></div></div>
                  <div className="flex items-start space-x-3"><div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"><Shield className="w-5 h-5 text-red-600" /></div><div><h3 className="font-semibold text-slate-900 mb-1">Free Cancellations</h3><p className="text-sm text-slate-600">Up to 24 hours before arrival</p></div></div>
                  <div className="flex items-start space-x-3"><div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0"><HeadphonesIcon className="w-5 h-5 text-cyan-600" /></div><div><h3 className="font-semibold text-slate-900 mb-1">24/7 Local Support</h3><p className="text-sm text-slate-600">Always here to help you</p></div></div>
                  <div className="pt-4 border-t border-slate-200 space-y-4">
                    <div className="text-center"><div className="text-3xl font-bold text-blue-600 mb-1">120,000+</div><div className="text-sm text-slate-600">Rides Completed</div></div>
                    <div className="flex items-center justify-center space-x-2"><div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}</div><span className="text-sm font-semibold text-slate-900">4.7</span></div>
                    <div className="text-xs text-center text-slate-600">Google, Tripadvisor, Trustpilot</div>
                    <div className="text-center"><div className="text-2xl font-bold text-slate-900 mb-1">10+ Years</div><div className="text-xs text-slate-600">Of Excellence</div></div>
                    <div className="flex items-center justify-center space-x-2"><Shield className="w-5 h-5 text-blue-600" /><span className="text-sm font-medium text-slate-700">Safety & Security Guaranteed</span></div>
                    <div className="pt-4 border-t border-slate-200 text-center"><div className="text-xs text-slate-500">Powered by</div><div className="text-sm font-bold text-slate-900 mt-1">Transithub Inc</div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Cards */}
            <div className="lg:col-span-3">
              <div className="mb-6"><h2 className="text-2xl font-bold text-white mb-2">Available Vehicles</h2><p className="text-white/80">{(activeTab === 'transfers' ? vehicles : rentalVehicles).length} vehicles found</p></div>
              <div className="space-y-6">
                {(activeTab === 'transfers' ? vehicles : rentalVehicles).map((vehicle) => (
                  <div key={vehicle.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-6 p-6">
                      <div className="md:col-span-1"><img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover rounded-lg" /></div>
                      <div className="md:col-span-2">
                        <div className="flex flex-col h-full">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-slate-900 mb-2">{vehicle.name}</h3>
                              <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                                <div className="flex items-center space-x-1"><Users className="w-4 h-4" /><span>{vehicle.passengers} Passengers</span></div>
                                <div className="flex items-center space-x-1"><Luggage className="w-4 h-4" /><span>{vehicle.luggage} Bags</span></div>
                              </div>
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {vehicle.features.filter(f => activeTab === 'rentals' ? f !== 'Free Meet And Greet' && f !== '60 Minutes Free Waiting Time' : true).map((feature, i) => {
                                  const colorMap = { 'Free Meet And Greet': 'bg-purple-100 text-purple-700 border border-purple-200', 'Free Cancellation': 'bg-emerald-100 text-emerald-700 border border-emerald-200', '60 Minutes Free Waiting Time': 'bg-blue-100 text-blue-700 border border-blue-200', 'Instant Confirmation': 'bg-amber-100 text-amber-700 border border-amber-200' };
                                  return <span key={i} className={`px-2.5 py-0.5 text-xs rounded-full font-medium ${colorMap[feature] || 'bg-slate-100 text-slate-700'}`}>{feature}</span>;
                                })}
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="text-3xl font-bold text-slate-900">{currencySymbols[currency]}{convertPrice(vehicle.price)}</div>
                              <div className="text-sm text-slate-600">{activeTab === 'transfers' ? 'per transfer' : `for ${billingHours} hour${billingHours > 1 ? 's' : ''}`}</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-100">
                            <button onClick={() => { const url = `${window.location.origin}?vehicle=${vehicle.name}`; if (navigator.share) { navigator.share({ title: vehicle.name, text: `${vehicle.name} - ${currencySymbols[currency]}${convertPrice(vehicle.price)}`, url }); } else { window.open(`https://wa.me/?text=${encodeURIComponent(vehicle.name + ' ' + url)}`, '_blank'); } }} className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors">
                              <Share2 className="w-4 h-4" /><span className="text-sm font-medium">Share this offer</span>
                            </button>
                            <button onClick={() => { setSelectedVehicle(vehicle); setBookingStep('prebooking'); }} style={{background: '#0F1E2F', color: '#A3DE23'}} className="px-8 py-3 font-semibold rounded-lg hover:opacity-90 transition-all duration-200">Book Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer style={{ background: '#0F1E2F' }} className="py-10 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 text-sm">Powered by Transithub Inc 2026</p>
        </div>
      </footer>
    </div>
  );
}