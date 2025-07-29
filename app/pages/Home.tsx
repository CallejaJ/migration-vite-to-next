import MetricsSection from "../components/MetricsSection"
import FeaturesSection from "../components/FeaturesSection"
import EmpoweringSection from "../components/EmpoweringSection"
import PaymentSolutions from "../components/PaymentSolutions"
import WalletAndNewsletterSection from "../components/WalletAndNewsletterSection"
import ContactAndFooter from "../components/ContactAndFooter"
import HeroSection from "../components/HeroSection"

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <MetricsSection />
      <FeaturesSection />
      <EmpoweringSection />
      <PaymentSolutions />
      <WalletAndNewsletterSection />
      <ContactAndFooter />
    </main>
  )
}

export default Home
