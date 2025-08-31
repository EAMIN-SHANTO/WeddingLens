import Link from 'next/link';

export default function Hero() {
  return (
    <div 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/homebanner.jpg)',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Rent Professional
            <span className="text-primary-400 block">Photography Equipment</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Connect with verified photographers in your area. Rent high-quality gear or find top-rated wedding photographers for your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/browse-equipment" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg"
            >
              Browse Equipment
            </Link>
            <Link 
              href="/photographers" 
              className="bg-white hover:bg-gray-50 text-primary-600 border-2 border-white px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg"
            >
              Find Photographers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}