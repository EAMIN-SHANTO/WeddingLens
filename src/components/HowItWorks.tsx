export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Sign up as a photographer or renter. Upload your NID for verification and build your portfolio.",
      icon: "👤"
    },
    {
      step: 2,
      title: "Browse & Book",
      description: "Find equipment or photographers in your area. Check availability and make secure bookings.",
      icon: "🔍"
    },
    {
      step: 3,
      title: "Secure Payment",
      description: "Pay safely through our integrated gateway with card, bKash, or bank transfer. Funds held in escrow.",
      icon: "💳"
    },
    {
      step: 4,
      title: "Meet & Create",
      description: "Meet up, exchange equipment or start your photoshoot. Create amazing memories together.",
      icon: "📸"
    },
    {
      step: 5,
      title: "Rate & Review",
      description: "Leave honest reviews to help build trust in our community of verified photographers.",
      icon: "⭐"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How WeddingLens Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple and secure way to rent photography equipment and find trusted professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl">
                {step.icon}
              </div>
              <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}