'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function EquipmentDetails() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock equipment data - in real app, fetch based on params.id
  const equipment = {
    id: 1,
    name: "Canon EOS R5",
    category: "Camera Body",
    dailyPrice: 2500,
    owner: "Ahmed Hassan",
    ownerPhone: "+8801711111111",
    location: "Dhanmondi, Dhaka",
    rating: 4.9,
    reviews: 45,
    verified: true,
    availability: "Available",
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ],
    specifications: [
      "45MP Full-Frame CMOS Sensor",
      "8K Video Recording at 30fps",
      "5-Axis In-Body Image Stabilization",
      "Dual Pixel CMOS AF II with 1,053 AF points",
      "ISO 100-51200 (expandable to 102400)",
      "3.2\" Vari-Angle Touch LCD Screen",
      "0.5\" OLED Electronic Viewfinder",
      "Dual CF Express/SD Memory Card Slots"
    ],
    included: [
      "Canon EOS R5 Camera Body",
      "LP-E6NH Rechargeable Battery",
      "LC-E6 Battery Charger",
      "Camera Strap",
      "Body Cap",
      "64GB CF Express Card",
      "Camera Bag",
      "Lens Cleaning Kit"
    ],
    features: [
      "Professional Wedding Photography",
      "Portrait Photography",
      "Event Photography",
      "Video Recording",
      "Low Light Performance",
      "Weather Sealed Body"
    ],
    description: "The Canon EOS R5 is a revolutionary full-frame mirrorless camera that delivers incredible image quality and 8K video recording capabilities. Perfect for professional wedding photographers who demand the highest quality results. This camera has been meticulously maintained and is in excellent condition.",
    rentalTerms: [
      "Minimum rental period: 1 day",
      "Security deposit: ৳25,000 (refundable)",
      "Late return fee: ৳500 per hour",
      "Damage liability covered by insurance",
      "Must be returned in original condition",
      "Photo ID required for pickup"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="mb-4">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">📷 Main Equipment Photo</span>
                </div>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {equipment.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-w-1 aspect-h-1 bg-gray-200 rounded border-2 transition-colors ${
                    selectedImage === index ? 'border-primary-500' : 'border-gray-200'
                  }`}
                >
                  <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-400 text-xs">📷</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Equipment Details */}
          <div>
            <div className="sticky top-4">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{equipment.name}</h1>
                <p className="text-gray-600 mb-2">{equipment.category}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-600 ml-1">{equipment.rating} ({equipment.reviews} reviews)</span>
                  </div>
                  <span className="text-green-600 font-medium">{equipment.availability}</span>
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-4">
                  ৳{equipment.dailyPrice.toLocaleString()}/day
                </div>
              </div>

              {/* Owner Info */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Equipment Owner</h3>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-900">{equipment.owner}</h4>
                      {equipment.verified && (
                        <span className="ml-2 text-green-500">✓</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">📍 {equipment.location}</p>
                    <p className="text-gray-600 text-sm">📞 {equipment.ownerPhone}</p>
                  </div>
                </div>
              </div>

              {/* Booking Actions */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="space-y-4">
                  <Link 
                    href="/book-equipment"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium text-center block transition-colors"
                  >
                    Book Now
                  </Link>
                  <button className="w-full bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 py-3 rounded-lg font-medium transition-colors">
                    Send Message
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors">
                    Add to Favorites
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  🔒 Secure booking with escrow protection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Description */}
            <div className="p-8 border-b">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{equipment.description}</p>
            </div>

            {/* Specifications */}
            <div className="p-8 border-b">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipment.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What&apos;s Included */}
            <div className="p-8 border-b">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipment.included.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 mr-3">📦</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Best For */}
            <div className="p-8 border-b">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Best For</h2>
              <div className="flex flex-wrap gap-3">
                {equipment.features.map((feature, index) => (
                  <span 
                    key={index}
                    className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Rental Terms */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Rental Terms</h2>
              <div className="space-y-3">
                {equipment.rentalTerms.map((term, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">ℹ️</span>
                    <span className="text-gray-700">{term}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Equipment */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">📷 Equipment Photo</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Canon RF 24-70mm f/2.8L</h3>
                  <p className="text-gray-600 text-sm mb-2">Lens</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-bold">৳1,800/day</span>
                    <Link href="/equipment/2" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}