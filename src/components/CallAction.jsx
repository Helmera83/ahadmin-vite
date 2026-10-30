import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {

  return (
    <section className="lp-sec lp-close" id="contact">
      <div className="lp-wrap">
        <div className="lp-close-content">
          <div className="lp-close-content-col">
            <span className="lp-close-eyebrow">Ready to reclaim your time?</span>
            <h2>Hand off the tasks you keep putting off.</h2>
            <p className="lp-close-sub">
              Whether you need invoicing reconciled, an inbox brought under control, or a full optimization review—let's get your operations running smoothly.
            </p>
          </div>
          <div className="lp-close-actions">
            <Link to="/intake" className="lp-btn">
              Book a consultation <ArrowRight size={18} />
            </Link>
            <a href="mailto:operations@ahadmin.com" className="lp-btn ghost">
              Ask a quick question
            </a>
          </div>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
}
