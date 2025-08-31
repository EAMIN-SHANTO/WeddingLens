import Link from 'next/link';

export default function FeaturedEquipment() {
  const equipmentItems = [
    {
      id: 1,
      name: "Canon EOS R5",
      category: "Camera Body",
      price: "৳2,500/day",
      rating: 4.9,
      reviews: 45,
      image: "/api/placeholder/300/200",
      owner: "Ahmed Hassan",
      verified: true
    },
    {
      id: 2,
      name: "Sony A7 IV",
      category: "Camera Body",
      price: "৳2,200/day",
      rating: 4.8,
      reviews: 38,
      image: "/api/placeholder/300/200",
      owner: "Fatima Rahman",
      verified: true
    },
    {
      id: 3,
      name: "Canon RF 24-70mm f/2.8L",
      category: "Lens",
      price: "৳1,800/day",
      rating: 4.9,
      reviews: 52,
      image: "/api/placeholder/300/200",
      owner: "Rashid Ahmed",
      verified: true
    },
    {
      id: 4,
      name: "Profoto B1X Flash Kit",
      category: "Lighting",
      price: "৳3,000/day",
      rating: 4.7,
      reviews: 28,
      image: "/api/placeholder/300/200",
      owner: "Nusrat Jahan",
      verified: true
    },
    {
      id: 5,
      name: "DJI Ronin-S Gimbal",
      category: "Stabilizer",
      price: "৳1,500/day",
      rating: 4.6,
      reviews: 34,
      image: "/api/placeholder/300/200",
      owner: "Kamal Uddin",
      verified: true
    },
    {
      id: 6,
      name: "Sigma 85mm f/1.4 Art",
      category: "Lens",
      price: "৳1,200/day",
      rating: 4.8,
      reviews: 41,
      image: "/api/placeholder/300/200",
      owner: "Sabrina Khan",
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Equipment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rent professional photography gear from verified photographers in Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {equipmentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">📷 Equipment Photo</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-primary-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.category}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-600 ml-1">{item.rating} ({item.reviews} reviews)</span>
                  </div>
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
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/browse-equipment"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            View All Equipment
          </Link>
        </div>
      </div>
    </section>
  );
}