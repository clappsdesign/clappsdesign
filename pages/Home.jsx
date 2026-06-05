import Navbar from '../components/landing/Navbar';
import ScrollProgress from '../components/landing/ScrollProgress';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ProductsSection from '../components/landing/ProductsSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a21e686e620a4d219e8d758/d66986ab8_generated_d618743e.png';
const PROJECT_IMAGES = [
  'https://media.base44.com/images/public/6a21e686e620a4d219e8d758/d31a76948_generated_6bed2d2c.png',
  'https://media.base44.com/images/public/6a21e686e620a4d219e8d758/029f74ccb_generated_6c64d537.png',
  'https://media.base44.com/images/public/6a21e686e620a4d219e8d758/ff041a91c_generated_eb406ce1.png',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <AboutSection />
      <ProductsSection projectImages={PROJECT_IMAGES} />
      <ContactSection />
      <Footer />
    </div>
  );
}
