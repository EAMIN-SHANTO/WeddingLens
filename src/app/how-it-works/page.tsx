'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HowItWorksPage() {
  const [activeSection, setActiveSection] = useState('renter');

  const renterSteps = [
    {
      step: 1,
      title: "Create Your Account",
      description: "Sign up as a renter and complete your profile with basic information.",
      details: [
        "Click 'Sign Up' and select 'I want to rent equipment'",
        "Fill in your name, email, phone number, and location",
        "Upload a profile photo (optional but recommended)",
        "Verify your email address through the confirmation link"
      ],
      icon: "👤",
      duration: "2-3 minutes"
    },
    {
      step: 2,
      title: "Browse Equipment",
      description: "Search and filter through thousands of photography equipment listings.",
      details: [
        "Use the search bar or browse by categories (cameras, lenses, lighting)",
        "Apply filters for location, price range, and availability dates",
        "Read equipment specifications and what's included",
        "Check owner ratings and reviews from previous renters"
      ],
      icon: "🔍",
      duration: "5-10 minutes"
    },
    {
      step: 3,
      title: "Contact & Book",
      description: "Message the equipment owner and make your booking request.",
      details: [
        "Click 'Send Message' to discuss your needs with the owner",
        "Ask any questions about the equipment condition or usage",
        "Select your rental dates and delivery preference",
        "Review the total cost including insurance and service fees"
      ],
      icon: "💬",
      duration: "10-15 minutes"
    },
    {
      step: 4,
      title: "Secure Payment",
      description: "Pay safely through our integrated payment system with escrow protection.",
      details: [
        "Choose your payment method (card, bKash, bank transfer)",
        "Your payment is held in escrow until rental completion",
        "Receive booking confirmation with pickup/delivery details",
        "Get the owner's contact information for coordination"
      ],
      icon: "💳",
      duration: "3-5 minutes"
    },
    {
      step: 5,
      title: "Get Equipment",
      description: "Pickup or receive your rented equipment and start creating.",
      details: [
        "Meet the owner at agreed location or receive home delivery",
        "Inspect equipment condition and test functionality",
        "Confirm receipt in the app to release payment to owner",
        "Start using the equipment for your photography needs"
      ],
      icon: "📦",
      duration: "15-30 minutes"
    },
    {
      step: 6,
      title: "Return & Review",
      description: "Return the equipment and leave honest feedback.",
      details: [
        "Clean and pack equipment in original condition",
        "Return to owner at agreed time and location",
        "Both parties confirm return in the app",
        "Leave a review to help future renters and build trust"
      ],
      icon: "⭐",
      duration: "10-15 minutes"
    }
  ];

  const ownerSteps = [
    {
      step: 1,
      title: "Complete Verification",
      description: "Create your account and get verified as a trusted equipment owner.",
      details: [
        "Sign up and select 'I want to list equipment'",
        "Complete your profile with professional information",
        "Upload your National ID for identity verification",
        "Wait for admin approval (typically 24-48 hours)"
      ],
      icon: "✅",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "List Your Equipment",
      description: "Create detailed listings for your photography equipment.",
      details: [
        "Upload high-quality photos of your equipment",
        "Add detailed specifications and what's included",
        "Set your daily rental price and availability calendar",
        "Write clear usage guidelines and care instructions"
      ],
      icon: "📷",
      duration: "15-20 minutes per item"
    },
    {
      step: 3,
      title: "Receive Bookings",
      description: "Get rental requests and communicate with potential renters.",
      details: [
        "Receive notifications when someone wants to rent",
        "Review the renter's profile and rental history",
        "Discuss rental terms and answer any questions",
        "Accept or decline booking requests"
      ],
      icon: "📅",
      duration: "5-10 minutes per request"
    },
    {
      step: 4,
      title: "Coordinate Handover",
      description: "Arrange equipment pickup or delivery with the renter.",
      details: [
        "Confirm rental dates and meeting location",
        "Prepare equipment and ensure it's in perfect condition",
        "Meet renter and demonstrate equipment usage if needed",
        "Confirm handover in the app to start rental period"
      ],
      icon: "🤝",
      duration: "15-30 minutes"
    },
    {
      step: 5,
      title: "Monitor Rental",
      description: "Stay available for questions and track your equipment.",
      details: [
        "Be available for any technical questions via messaging",
        "Monitor rental period and remind about return date",
        "Receive payment automatically when rental is confirmed",
        "Handle any issues through our dispute resolution system"
      ],
      icon: "📊",
      duration: "Ongoing"
    },
    {
      step: 6,
      title: "Equipment Return",
      description: "Get your equipment back and complete the rental cycle.",
      details: [
        "Arrange return meeting with the renter",
        "Inspect equipment condition thoroughly",
        "Confirm return in the app to complete the rental",
        "Rate the renter and provide feedback for the community"
      ],
      icon: "🔄",
      duration: "10-15 minutes"
    }
  ];

  const photographerSteps = [
    {
      step: 1,
      title: "Professional Verification",
      description: "Get verified as a professional wedding photographer.",
      details: [
        "Create your photographer profile with portfolio",
        "Upload your National ID and professional certificates",
        "Add 10-15 best wedding photos to showcase your work",
        "Complete verification process (1-3 business days)"
      ],
      icon: "🎓",
      duration: "2-3 days"
    },
    {
      step: 2,
      title: "Build Your Profile",
      description: "Create an impressive profile to attract potential clients.",
      details: [
        "Write compelling bio highlighting your experience",
        "Set your pricing packages and availability",
        "Add specializations (traditional, modern, destination)",
        "Upload portfolio covering different wedding styles"
      ],
      icon: "📝",
      duration: "30-45 minutes"
    },
    {
      step: 3,
      title: "Get Discovered",
      description: "Appear in search results and get featured as a top photographer.",
      details: [
        "Your profile appears in local photographer searches",
        "Top-rated photographers get featured on homepage",
        "Clients can filter by style, location, and budget",
        "Receive direct booking inquiries from couples"
      ],
      icon: "🌟",
      duration: "Automatic"
    },
    {
      step: 4,
      title: "Client Communication",
      description: "Engage with potential clients and discuss their wedding needs.",
      details: [
        "Receive inquiry messages from interested couples",
        "Discuss wedding details, dates, and requirements",
        "Share additional portfolio samples if requested",
        "Provide custom quotes based on their needs"
      ],
      icon: "💌",
      duration: "15-30 minutes per inquiry"
    },
    {
      step: 5,
      title: "Secure Bookings",
      description: "Confirm wedding bookings with contract and advance payment.",
      details: [
        "Send official booking proposal with detailed terms",
        "Receive advance payment through secure platform",
        "Add wedding date to your calendar",
        "Share pre-wedding consultation details with client"
      ],
      icon: "📋",
      duration: "20-30 minutes"
    },
    {
      step: 6,
      title: "Deliver Excellence",
      description: "Capture amazing wedding moments and deliver final photos.",
      details: [
        "Conduct pre-wedding shoot if included in package",
        "Cover wedding day according to agreed timeline",
        "Edit and deliver photos within promised timeframe",
        "Receive final payment and get rated by the couple"
      ],
      icon: "🎉",
      duration: "Wedding day + editing time"
    }
  ];

  const currentSteps = activeSection === 'renter' ? renterSteps : 
                     activeSection === 'owner' ? ownerSteps : photographerSteps;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How WeddingLens Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Step-by-step guide to renting equipment, listing gear, or finding the perfect wedding photographer in Bangladesh
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
            <button
              onClick={() => setActiveSection('renter')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeSection === 'renter'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              🛒 I Want to Rent
            </button>
            <button
              onClick={() => setActiveSection('owner')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeSection === 'owner'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              📷 I Have Equipment
            </button>
            <button
              onClick={() => setActiveSection('photographer')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeSection === 'photographer'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              👰 I'm a Photographer
            </button>
          </div>
        </div>

        {/* Steps Section */}
        <div className="space-y-8 mb-16">
          {currentSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connecting Line */}
              {index < currentSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-primary-200 hidden md:block"></div>
              )}
              
              <div className="bg-white rounded-xl shadow-lg p-8 md:pl-24 relative">
                {/* Step Icon */}
                <div className="absolute left-8 top-8 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-3xl md:relative md:left-0 md:top-0 md:w-20 md:h-20 md:float-left md:mr-6 md:mb-4">
                  {step.icon}
                </div>
                
                {/* Step Number */}
                <div className="absolute left-10 top-20 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold md:hidden">
                  {step.step}
                </div>
                
                <div className="ml-0 md:ml-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 hidden md:flex">
                          {step.step}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg mb-4">{step.description}</p>
                    </div>
                    <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                      ⏱️ {step.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Safety Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            🛡️ Trust & Safety Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm">All payments are held in escrow until successful completion of rental or service.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ID Verification</h3>
              <p className="text-gray-600 text-sm">All users undergo National ID verification before listing or high-value rentals.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Equipment Insurance</h3>
              <p className="text-gray-600 text-sm">Choose from basic or premium insurance coverage for peace of mind.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rating System</h3>
              <p className="text-gray-600 text-sm">Transparent ratings and reviews help build trust in our community.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Our customer support team is available round the clock for assistance.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
              <p className="text-gray-600 text-sm">Fair and transparent dispute resolution process with admin mediation.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ❓ Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does verification take?</h3>
                <p className="text-gray-600">Usually 24-48 hours for basic verification. Professional photographer verification may take up to 3 business days.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What if equipment gets damaged?</h3>
                <p className="text-gray-600">Our insurance covers accidental damage. The deductible depends on your chosen coverage (basic or premium).</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel a booking?</h3>
                <p className="text-gray-600">Yes, with our flexible cancellation policy. Full refund if cancelled 48+ hours before rental start.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods are accepted?</h3>
                <p className="text-gray-600">Credit/debit cards, bKash, Nagad, and bank transfers are all supported.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I become a top photographer?</h3>
                <p className="text-gray-600">Maintain high ratings (4.5+), complete verification, and receive consistent positive reviews.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a service fee?</h3>
                <p className="text-gray-600">Yes, we charge an 8% service fee to maintain the platform and provide customer support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of photographers and clients who trust WeddingLens for their equipment and photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Sign Up Now
            </Link>
            <Link 
              href="/browse-equipment" 
              className="bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Browse Equipment
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}