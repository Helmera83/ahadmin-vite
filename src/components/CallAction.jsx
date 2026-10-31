import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CallAction() {
  return (
    <section className="lp-close">
      <div className="lp-wrap">
        <div className="lp-close-content">
          <div className="lp-close-content-col">
            <span className="lp-close-eyebrow">Ready to delegate?</span>
            <h2>Stop letting administrative drag dictate your calendar.</h2>
            <p className="lp-close-sub">
              Book a consultation to map out your operational bottlenecks, or select a monthly retainer to get started this week.
            </p>
          </div>

          <div className="lp-rgb-action-box">
            <div className="lp-close-actions">
              <Link to="/intake" className="lp-btn">
                Get Started with an Intake <ArrowRight size={18} />
              </Link>
              <a href="#pricing" className="lp-btn ghost">
                Compare Retainers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}