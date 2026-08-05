import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GsapShowcase from '@/components/GsapShowcase';
import FramerShowcase from '@/components/FramerShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <Navbar />
      <HeroSection />
      <GsapShowcase />
      <FramerShowcase />
      <Footer />
    </main>
  );
}
