'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BookingPage() {
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    deliveryMethod: 'pickup',
    specialRequests: '',
    insuranceOption: 'basic'
  });

  const [showPayment, setShowPayment] = useState(false);

  // Mock equipment data
  const equipment = {
    id: 1,
    name: "Canon EOS R5",
    category: "Camera Body",
    dailyPrice: 2500,
    owner: "PhotoPro Dhaka",
    location: "Dhanmondi, Dhaka",
    rating: 4.9,
    reviews: 45,
    verified: true,
    specifications: [
      "45MP Full-Frame CMOS Sensor",
      "8K Video Recording",
      "5-Axis Image Stabilization",
      "Dual Pixel CMOS AF II"
    ],
    included: [
      "Camera Body",
      "Battery Pack",
      "Charger",
      "Memory Card (64GB)",
      "Camera Strap"
    ]
  };

  const calculateTotal = () => {
    if (!bookingData.startDate || !bookingData.endDate) {
      return {
        days: 0,
        equipmentCost: 0,
        insuranceCost: 0,
        serviceFee: 0,
        total: 0
      };
    }
    
    const start = new Date(bookingData.startDate);
    const end = new Date(bookingData.endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    const equipmentCost = days * equipment.dailyPrice;
    const insuranceCost = bookingData.insuranceOption === 'premium' ? equipmentCost * 0.1 : equipmentCost * 0.05;
    const serviceFee = equipmentCost * 0.08;
    
    return {
      days,
      equipmentCost,
      insuranceCost,
      serviceFee,
      total: equipmentCost + insuranceCost + serviceFee
    };
  };

  const costs = calculateTotal();

  const handleBooking = () => {
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Equipment</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Equipment Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Equipment Details</h3>
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📷</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900">{equipment.name}</h4>
                  <p className="text-gray-600">{equipment.category}</p>
                  <p className="text-gray-500 text-sm">📍 {equipment.location}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-600 ml-1">{equipment.rating} ({equipment.reviews} reviews)</span>
                    <span className="text-primary-600 font-bold ml-4">৳{equipment.dailyPrice}/day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={bookingData.startDate}
                    onChange={(e) => setBookingData({...bookingData, startDate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={bookingData.endDate}
                    onChange={(e) => setBookingData({...bookingData, endDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Method</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="pickup"
                      checked={bookingData.deliveryMethod === 'pickup'}
                      onChange={(e) => setBookingData({...bookingData, deliveryMethod: e.target.value})}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Self Pickup (Free)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="delivery"
                      checked={bookingData.deliveryMethod === 'delivery'}
                      onChange={(e) => setBookingData({...bookingData, deliveryMethod: e.target.value})}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Home Delivery (+৳500)</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Option</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="insuranceOption"
                      value="basic"
                      checked={bookingData.insuranceOption === 'basic'}
                      onChange={(e) => setBookingData({...bookingData, insuranceOption: e.target.value})}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Basic Protection (5% of rental cost)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="insuranceOption"
                      value="premium"
                      checked={bookingData.insuranceOption === 'premium'}
                      onChange={(e) => setBookingData({...bookingData, insuranceOption: e.target.value})}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Premium Protection (10% of rental cost)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                <textarea
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  rows={3}
                  placeholder="Any special instructions or requests..."
                  value={bookingData.specialRequests}
                  onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                />
              </div>
            </div>

            {/* Equipment Specifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <ul className="space-y-2">
                {equipment.specifications.map((spec, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-2">
                {equipment.included.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
              
              {costs.days > 0 && (
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">৳{equipment.dailyPrice} × {costs.days} day{costs.days > 1 ? 's' : ''}</span>
                    <span className="text-gray-900">৳{costs.equipmentCost.toLocaleString()}</span>
                  </div>
                  
                  {bookingData.deliveryMethod === 'delivery' && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Home Delivery</span>
                      <span className="text-gray-900">৳500</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Insurance ({bookingData.insuranceOption})</span>
                    <span className="text-gray-900">৳{costs.insuranceCost.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service Fee (8%)</span>
                    <span className="text-gray-900">৳{costs.serviceFee.toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-primary-600">৳{costs.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}

              {!showPayment ? (
                <button 
                  onClick={handleBooking}
                  disabled={!bookingData.startDate || !bookingData.endDate}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Book Now
                </button>
              ) : (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Payment Method</h4>
                  <div className="space-y-2">
                    <button className="w-full border border-gray-300 rounded-lg p-3 text-left hover:bg-gray-50">
                      💳 Credit/Debit Card
                    </button>
                    <button className="w-full border border-gray-300 rounded-lg p-3 text-left hover:bg-gray-50">
                      📱 bKash
                    </button>
                    <button className="w-full border border-gray-300 rounded-lg p-3 text-left hover:bg-gray-50">
                      🏦 Bank Transfer
                    </button>
                  </div>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Complete Payment
                  </button>
                </div>
              )}

              <div className="mt-6 text-xs text-gray-500">
                <p>🔒 Your payment is secured with escrow protection</p>
                <p className="mt-2">📞 24/7 support available for any issues</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}