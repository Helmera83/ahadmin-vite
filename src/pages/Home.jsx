import SiteHeader from '../components/SiteHeader.jsx';
import Hero from '../components/Hero.jsx';
import TrustBar from '../components/TrustBar.jsx';
import ServicesFlipSection from '../components/ServicesFlipSection.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import PricingGrid from '../components/PricingGrid.jsx';
import About from '../components/About.jsx';
import CallAction from '../components/CallAction.jsx';
import SiteFooter from '../components/SiteFooter.jsx';

export default function Home() {
  return (
    <div className="lp">
      <SiteHeader landing />
      <main>
        {/* 1. Value Proposition & Outcome */}
        <Hero />

        {/* 2. Immediate Tool Compatibility & Certifications */}
        <TrustBar />

        {/* 3. Interactive Service Capabilities (FlipCards) */}
        <ServicesFlipSection />

        {/* 4. Rapid 3-Step Onboarding Process */}
        <HowItWorks />
        
        {/* 5. Founder Background & Live Operations Snapshot */}
        <About />

        {/* 5. Transparent Retainers & Feature Comparison Matrix */}
        <PricingGrid />

       

        {/* 7. Final Conversion Closer */}
        <CallAction />
      </main>

      {/* 8. Minimal B2B Footer */}
      <SiteFooter />
    </div>
  );
}