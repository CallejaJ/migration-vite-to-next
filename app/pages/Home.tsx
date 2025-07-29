import MetricsSection from "../components/MetricsSection";
import FeaturesSection from "../components/FeaturesSection";
import EmpoweringSection from "../components/EmpoweringSection";
import PaymentSolutions from "../components/PaymentSolutions";
import WalletAndNewsletterSection from "../components/WalletAndNewsletterSection";
import ContactAndFooter from "../components/ContactAndFooter";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <main className='min-h-screen bg-white'>
      <HeroSection />

      {/* Sección de métricas - no necesita ID propio */}
      <MetricsSection />

      {/* Features Section */}
      <section id='features'>
        <FeaturesSection />
      </section>

      {/* Solutions Section - incluye Empowering y Payment */}
      <section id='solutions'>
        <EmpoweringSection />
        <PaymentSolutions />
      </section>

      {/* About Section - incluye Wallet integration */}
      <section id='about'>
        <WalletAndNewsletterSection />
      </section>

      <ContactAndFooter />
    </main>
  );
};

export default Home;
