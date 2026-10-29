import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import PricingGrid from '../components/PricingGrid.jsx';
import About from '../components/About.jsx';
import CallAction from '../components/CallAction.jsx';
import Hero from '../components/Hero.jsx';
import ServicesFlipSection from '../components/ServicesFlipSection.jsx';

export default function Home() {
  return (
    <div className="lp">
      <SiteHeader landing />
      <main>
        <Hero />
        <ServicesFlipSection /> 
        <CallAction />
        <PricingGrid /> 

        <About />   
      </main>

      <SiteFooter />
    </div>
  );
}