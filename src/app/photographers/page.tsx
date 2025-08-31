'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Photographers() {
  const [filters, setFilters] = useState({
    speciality: '',
    location: '',
    priceRange: '',
    rating: ''
  });

  const photographers = [
    {
      id: 1,
      name: "Ahmed Hassan",
      speciality: "Wedding Photography",
      location: "Dhaka, Bangladesh", 
      rating: 4.9,
      reviews: 127,
      completedJobs: 85,
      priceRange: "৳15,000 - ৳45,000",
      verified: true,
      badges: ["Top Rated", "Fast Response"],
      description: "Specializing in traditional and modern wedding photography with 8+ years of experience.",
      responseTime: "Usually responds within 2 hours"
    },
    {
      id: 2,
      name: "Fatima Khan",
      speciality: "Portrait & Wedding",
      location: "Chittagong, Bangladesh",
      rating: 4.8,
      reviews: 94,
      completedJobs: 67,
      priceRange: "৳12,000 - ৳35,000",
      verified: true,
      badges: ["Rising Star", "Best Value"],
      description: "Creative portrait and wedding photographer with a passion for capturing authentic moments.",
      responseTime: "Usually responds within 4 hours"
    },
    {
      id: 3,
      name: "Rashid Ahmed",
      speciality: "Cinematic Wedding",
      location: "Sylhet, Bangladesh",
      rating: 4.9,
      reviews: 156,
      completedJobs: 112,
      priceRange: "৳20,000 - ৳60,000",
      verified: true,
      badges: ["Premium", "Award Winner"],
      description: "Award-winning cinematic wedding photographer creating timeless memories.",
      responseTime: "Usually responds within 1 hour"
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      speciality: "Traditional Wedding",
      location: "Rajshahi, Bangladesh",
      rating: 4.7,
      reviews: 73,
      completedJobs: 56,
      priceRange: "৳10,000 - ৳28,000",
      verified: true,
      badges: ["Cultural Expert", "Affordable"],
      description: "Expert in traditional Bengali wedding photography and cultural ceremonies.",
      responseTime: "Usually responds within 6 hours"
    },
    {
      id: 5,
      name: "Kamal Uddin",
      speciality: "Destination Wedding",
      location: "Cox's Bazar, Bangladesh",
      rating: 4.8,
      reviews: 89,
      completedJobs: 71,
      priceRange: "৳18,000 - ৳50,000",
      verified: true,
      badges: ["Travel Expert", "Scenic Specialist"],
      description: "Destination wedding specialist with experience in beach and outdoor ceremonies.",
      responseTime: "Usually responds within 3 hours"
    },
    {
      id: 6,
      name: "Sabrina Rahman",
      speciality: "Modern Wedding",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      reviews: 142,
      completedJobs: 98,
      priceRange: "৳16,000 - ৳42,000",
      verified: true,
      badges: ["Trending", "Creative Vision"],
      description: "Contemporary wedding photographer known for artistic and modern approach.",
      responseTime: "Usually responds within 1 hour"
    }
  ];

  const specialities = ["All", "Wedding Photography", "Portrait & Wedding", "Cinematic Wedding", "Traditional Wedding", "Destination Wedding", "Modern Wedding"];
  const locations = ["All", "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Cox's Bazar"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Top Wedding Photographers</h1>
          <p className="text-gray-600">Find verified, highly-rated wedding photographers across Bangladesh</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Speciality Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Speciality</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={filters.speciality}
                  onChange={(e) => setFilters({...filters, speciality: e.target.value})}
                >
                  {specialities.map(speciality => (
                    <option key={speciality} value={speciality}>{speciality}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                  <option value="">Any Budget</option>
                  <option value="0-15000">৳0 - ৳15,000</option>
                  <option value="15000-30000">৳15,000 - ৳30,000</option>
                  <option value="30000-50000">৳30,000 - ৳50,000</option>
                  <option value="50000+">৳50,000+</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={filters.rating}
                  onChange={(e) => setFilters({...filters, rating: e.target.value})}
                >
                  <option value="">Any Rating</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.0">4.0+ Stars</option>
                  <option value="3.5">3.5+ Stars</option>
                </select>
              </div>

              <button 
                onClick={() => setFilters({speciality: '', location: '', priceRange: '', rating: ''})}
                className="w-full text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Photographers Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{photographers.length} photographers found</p>
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Sort by: Featured</option>
                <option>Rating: High to Low</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Reviews</option>
                <option>Most Jobs Completed</option>
              </select>
            </div>

            <div className="space-y-6">
              {photographers.map((photographer) => (
                <div key={photographer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      {/* Profile Image */}
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">👨‍💼</span>
                      </div>

                      {/* Photographer Info */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                          <div>
                            <div className="flex items-center mb-1">
                              <h3 className="text-xl font-semibold text-gray-900">{photographer.name}</h3>
                              {photographer.verified && (
                                <span className="ml-2 text-green-500">✓</span>
                              )}
                            </div>
                            <p className="text-gray-600">{photographer.speciality}</p>
                            <p className="text-gray-500 text-sm">📍 {photographer.location}</p>
                          </div>
                          <div className="text-right mt-2 sm:mt-0">
                            <p className="text-primary-600 font-bold">{photographer.priceRange}</p>
                            <p className="text-gray-500 text-sm">per event</p>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-3">{photographer.description}</p>

                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <div className="flex items-center">
                            <span className="text-yellow-400">⭐</span>
                            <span className="text-sm text-gray-600 ml-1">
                              {photographer.rating} ({photographer.reviews} reviews)
                            </span>
                          </div>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-600">{photographer.completedJobs} jobs completed</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-500">{photographer.responseTime}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {photographer.badges.map((badge, index) => (
                            <span 
                              key={index}
                              className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link 
                            href={`/photographers/${photographer.id}`}
                            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded text-sm font-medium text-center transition-colors"
                          >
                            View Portfolio
                          </Link>
                          <button className="bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-6 py-2 rounded text-sm font-medium transition-colors">
                            Send Message
                          </button>
                          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Previous</button>
                <button className="px-3 py-2 bg-primary-600 text-white rounded-md">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}