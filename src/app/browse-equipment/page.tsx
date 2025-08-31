'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BrowseEquipment() {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    location: '',
    availability: ''
  });

  const equipment = [
    {
      id: 1,
      name: "Canon EOS R5",
      category: "Camera Body",
      price: "৳2,500/day",
      rating: 4.9,
      reviews: 45,
      owner: "Ahmed Hassan",
      location: "Dhaka",
      verified: true,
      available: true
    },
    {
      id: 2,
      name: "Sony A7 IV",
      category: "Camera Body", 
      price: "৳2,200/day",
      rating: 4.8,
      reviews: 38,
      owner: "Fatima Rahman",
      location: "Dhaka",
      verified: true,
      available: true
    },
    {
      id: 3,
      name: "Canon RF 24-70mm f/2.8L",
      category: "Lens",
      price: "৳1,800/day",
      rating: 4.9,
      reviews: 52,
      owner: "Rashid Ahmed",
      location: "Chittagong",
      verified: true,
      available: false
    },
    {
      id: 4,
      name: "Profoto B1X Flash Kit",
      category: "Lighting",
      price: "৳3,000/day",
      rating: 4.7,
      reviews: 28,
      owner: "Nusrat Jahan",
      location: "Dhaka",
      verified: true,
      available: true
    },
    {
      id: 5,
      name: "DJI Ronin-S Gimbal",
      category: "Stabilizer",
      price: "৳1,500/day",
      rating: 4.6,
      reviews: 34,
      owner: "Kamal Uddin",
      location: "Sylhet",
      verified: true,
      available: true
    },
    {
      id: 6,
      name: "Sigma 85mm f/1.4 Art",
      category: "Lens",
      price: "৳1,200/day",
      rating: 4.8,
      reviews: 41,
      owner: "Sabrina Khan",
      location: "Rajshahi",
      verified: true,
      available: true
    }
  ];

  const categories = ["All", "Camera Body", "Lens", "Lighting", "Stabilizer", "Audio", "Accessories"];
  const locations = ["All", "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Equipment</h1>
          <p className="text-gray-600">Find professional photography equipment available for rent in your area</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                  <option value="">Any Price</option>
                  <option value="0-1000">৳0 - ৳1,000</option>
                  <option value="1000-2000">৳1,000 - ৳2,000</option>
                  <option value="2000-3000">৳2,000 - ৳3,000</option>
                  <option value="3000+">৳3,000+</option>
                </select>
              </div>

              {/* Availability Filter */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={filters.availability === 'available'}
                    onChange={(e) => setFilters({...filters, availability: e.target.checked ? 'available' : ''})}
                  />
                  <span className="text-sm text-gray-700">Available Now</span>
                </label>
              </div>

              <button 
                onClick={() => setFilters({category: '', priceRange: '', location: '', availability: ''})}
                className="w-full text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{equipment.length} items found</p>
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {equipment.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                    <span className="text-gray-500">📷 Equipment Photo</span>
                    {!item.available && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-semibold">Not Available</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <span className="text-primary-600 font-bold">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                    <p className="text-gray-500 text-xs mb-3">📍 {item.location}</p>
                    
                    <div className="flex items-center mb-3">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">{item.rating} ({item.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600">by {item.owner}</span>
                        {item.verified && (
                          <span className="ml-2 text-green-500">✓</span>
                        )}
                      </div>
                      <Link 
                        href={`/equipment/${item.id}`}
                        className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                          item.available 
                            ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {item.available ? 'View Details' : 'Unavailable'}
                      </Link>
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