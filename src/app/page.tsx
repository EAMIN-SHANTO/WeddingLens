import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedEquipment from '@/components/FeaturedEquipment';
import TopPhotographers from '@/components/TopPhotographers';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <HowItWorks />
      <FeaturedEquipment />
      <TopPhotographers />
      <Footer />
    </main>
  );
}