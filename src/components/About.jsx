import CountUp from './CountUp.jsx';
import { Clock, ShieldCheck, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const stats = [
  {
    label: 'Reclaimed / Mo',
    to: 40,
    suffix: '+ hrs',
    icon: Clock,
  },
  {
    label: 'Avg Response',
    to: 15,
    prefix: '< ',
    suffix: ' min',
    icon: Zap,
  },
  {
    label: 'Ledger Accuracy',
    to: 100,
    suffix: '%',
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section className="lp-sec lp-about lp-about-bg" id="about">
      <div className="lp-wrap">
        <div className="lp-about-grid">
          {/* Left Column: Bio */}
          <div className="lp-about-card-hero">
            <span className="lp-about-eyebrow">Behind AH Admin Solutions</span>
            <h2>Systems, numbers, and operations done right.</h2>
            <p className="sub">
              I partner with founders and business owners to take operational friction off their plates—streamlining
              financial tracking, organizing workflows, and deploying reliable automated systems so you can focus on core growth.
            </p>
            <p className="lp-about-details">
              My background brings together verified training in business intelligence, project management,
              and certified accounting administration to deliver accurate, dependable solutions for your everyday operations.
            </p>
          </div>

          {/* Right Column: Operations Snapshot Card */}
          <div className="lp-about-proof-col">
            <div className="lp-hero-proof" aria-label="Example operations snapshot">
              <div className="lp-proof-topbar">
                <div>
                  <span className="lp-proof-kicker">Operations snapshot</span>
                  <strong>This month, handled</strong>
                </div>
                <span className="lp-proof-status">
                  <span aria-hidden="true" /> Live
                </span>
              </div>
              <div className="lp-proof-stats">
                {stats.map(({ label, to, prefix = '', suffix = '', icon: Icon }) => (
                  <div className="lp-proof-stat" key={label}>
                    <span className="lp-proof-icon" aria-hidden="true">
                      <Icon size={16} />
                    </span>
                    <strong>
                      <span>{prefix}</span>
                      <CountUp to={to} />
                      <span>{suffix}</span>
                    </strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="lp-proof-footer">
                <span>
                  <CheckCircle2 size={15} aria-hidden="true" /> Weekly workflows on track
                </span>
                <span className="lp-proof-arrow" aria-hidden="true">
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}