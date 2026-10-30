import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="lp-hero">
      <div className="lp-wrap">
        <div className="lp-hero-copy">
          <div className="lp-hero-pill">
            <Sparkles size={14} className="lp-hero-spark" />
            <span>Bookkeeping · Automations · Scheduling</span>
          </div>
          <h1>Dedicated Virtual Assistant for Small Business Owners</h1>
          <p className="lead">
            Let us handle the administrative heavy lifting, <strong>so you can focus on growing your business.</strong>
          </p>
          <div className="lp-actions">
            <Link to="/intake" className="lp-btn">
              Start with a consultation <ArrowRight size={18} />
            </Link>
            <a href="#pricing" className="lp-btn ghost">See pricing</a>
          </div>
        </div>
      </div>
    </section>
  );
}