import Link from 'next/link';
import Image from 'next/image';

export default function TopPhotographers() {
  const photographers = [
    {
      id: 1,
      name: "Ahmed Hassan",
      speciality: "Wedding Photography",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      reviews: 127,
      completedJobs: 85,
      price: "৳15,000 - ৳45,000",
      verified: true,
      badges: ["Top Rated", "Fast Response"],
      portfolio: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "Fatima Khan",
      speciality: "Portrait & Wedding",
      location: "Chittagong, Bangladesh",
      rating: 4.8,
      reviews: 94,
      completedJobs: 67,
      price: "৳12,000 - ৳35,000",
      verified: true,
      badges: ["Rising Star", "Best Value"],
      portfolio: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "Rashid Ahmed",
      speciality: "Cinematic Wedding",
      location: "Sylhet, Bangladesh",
      rating: 4.9,
      reviews: 156,
      completedJobs: 112,
      price: "৳20,000 - ৳60,000",
      verified: true,
      badges: ["Premium", "Award Winner"],
      portfolio: "/api/placeholder/100/100"
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      speciality: "Traditional Wedding",
      location: "Rajshahi, Bangladesh",
      rating: 4.7,
      reviews: 73,
      completedJobs: 56,
      price: "৳10,000 - ৳28,000",
      verified: true,
      badges: ["Cultural Expert", "Affordable"],
      portfolio: "/api/placeholder/100/100"
    },
    {
      id: 5,
      name: "Kamal Uddin",
      speciality: "Destination Wedding",
      location: "Cox's Bazar, Bangladesh",
      rating: 4.8,
      reviews: 89,
      completedJobs: 71,
      price: "৳18,000 - ৳50,000",
      verified: true,
      badges: ["Travel Expert", "Scenic Specialist"],
      portfolio: "/api/placeholder/100/100"
    },
    {
      id: 6,
      name: "Sabrina Rahman",
      speciality: "Modern Wedding",
      location: "Dhaka, Bangladesh",
      rating: 4.9,
      reviews: 142,
      completedJobs: 98,
      price: "৳16,000 - ৳42,000",
      verified: true,
      badges: ["Trending", "Creative Vision"],
      portfolio: "/api/placeholder/100/100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Rated Wedding Photographers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover verified, highly-rated wedding photographers across Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {photographers.map((photographer) => (
            <div key={photographer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/photographer.png" 
                      alt="Photographer avatar"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold text-gray-900">{photographer.name}</h3>
                      {photographer.verified && (
                        <span className="ml-2 text-green-500">✓</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{photographer.speciality}</p>
                    <p className="text-gray-500 text-xs">{photographer.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm text-gray-600 ml-1">
                    {photographer.rating} ({photographer.reviews} reviews)
                  </span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-sm text-gray-600">{photographer.completedJobs} jobs</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {photographer.badges.map((badge, index) => (
                    <span 
                      key={index}
                      className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-600 font-bold text-sm">{photographer.price}</p>
                    <p className="text-gray-500 text-xs">per event</p>
                  </div>
                  <Link 
                    href={`/photographers/${photographer.id}`}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/photographers"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            View All Photographers
          </Link>
        </div>
      </div>
    </section>
  );
}