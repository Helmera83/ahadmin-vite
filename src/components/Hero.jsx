import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="lp-hero">
      <div className="lp-wrap">
        <div className="lp-hero-copy">
          <div className="lp-hero-pill">
            <Sparkles size={14} className="lp-hero-spark" />
            <span>Dedicated Operations & Administrative Bandwidth</span>
          </div>

          <h1>Reclaim 40+ hours every month from operational drag.</h1>

          <p className="lead">
            Fixed-price bookkeeping reconciliation, automated CRM pipelines, calendar defense, and executive administrative leverage for growing business owners.
          </p>

          <div className="lp-actions">
            <Link to="/intake" className="lp-btn">
              Book an Optimization Consultation <ArrowRight size={18} />
            </Link>
            <a href="#pricing" className="lp-btn ghost">
              View Plans & Retainers
            </a>
          </div>

          <div className="lp-hero-guarantees">
            <span className="lp-guarantee-item">
              <CheckCircle2 size={15} /> Fixed monthly retainers
            </span>
            <span className="lp-guarantee-item">
              <Shield size={15} /> Standard NDA & security agreements
            </span>
            <span className="lp-guarantee-item">
              <CheckCircle2 size={15} /> Pause or cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}