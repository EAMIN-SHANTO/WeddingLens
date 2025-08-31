import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">WeddingLens</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Bangladesh's premier marketplace for photography equipment rental and verified wedding photographer discovery. 
              Connecting photographers, building trust, creating memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400">📘 Facebook</a>
              <a href="#" className="text-gray-400 hover:text-primary-400">📷 Instagram</a>
              <a href="#" className="text-gray-400 hover:text-primary-400">🐦 Twitter</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/browse-equipment" className="text-gray-300 hover:text-primary-400">Browse Equipment</Link></li>
              <li><Link href="/photographers" className="text-gray-300 hover:text-primary-400">Find Photographers</Link></li>
              <li><Link href="/list-equipment" className="text-gray-300 hover:text-primary-400">List Your Gear</Link></li>
              <li><Link href="/how-it-works" className="text-gray-300 hover:text-primary-400">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-primary-400">Pricing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-300 hover:text-primary-400">Help Center</Link></li>
              <li><Link href="/safety" className="text-gray-300 hover:text-primary-400">Safety Guidelines</Link></li>
              <li><Link href="/insurance" className="text-gray-300 hover:text-primary-400">Insurance</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary-400">Contact Us</Link></li>
              <li><Link href="/dispute" className="text-gray-300 hover:text-primary-400">Report Issue</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 WeddingLens. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-400 text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}