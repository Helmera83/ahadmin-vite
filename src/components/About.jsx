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

const credentials = [
  {
    src: 'https://i.ibb.co/xKhtfD7F/quickbooks.png',
    alt: 'Intuit QuickBooks Level 1 Certified',
    name: 'QuickBooks Level 1',
  },
  {
    src: 'https://i.ibb.co/rK60mtSr/google-data-analytics.png',
    alt: 'Google Data Analytics Professional Certificate',
    name: 'Google Data Analytics',
  },
  {
    src: 'https://i.ibb.co/FqsR5jSr/google-project-management.png',
    alt: 'Google Project Management Certificate',
    name: 'Google Project Mgmt',
  },
  {
    src: 'https://i.ibb.co/gZQ5KTyq/agile-project-management.png',
    alt: 'PMI Fundamentals of Agile Project Management',
    name: 'PMI Agile Kickoff',
  },
  {
    src: 'https://i.ibb.co/gMB7XgcG/google-bi.png',
    alt: 'Google Business Intelligence Certificate',
    name: 'Google BI',
  },
  {
    src: 'https://i.ibb.co/5WjPjrfr/saylor.png',
    alt: 'Saylor Academy Small Business Management (ACE)',
    name: 'Small Business Mgmt',
  },
];

export default function About() {
  return (
    <section className="lp-sec lp-about lp-about-bg" id="about">
      <div className="lp-wrap">
        <div className="lp-about-grid">
          {/* Left Column: Bio & Credentials */}
          <div className="lp-about-card-hero">
            <span className="lp-about-eyebrow">Behind AH Admin Solutions</span>
            <h2>Systems, numbers, and operations done right.</h2>
            <p className="sub">
              I partner with founders and business owners to remove operational friction—streamlining
              financial tracking, organizing workflows, and deploying reliable automated systems so you can focus on core growth.
            </p>
            <p className="lp-about-details">
              My background brings together verified accreditations in business intelligence, predictive & agile
              project management, and certified accounting administration to deliver accurate, dependable solutions for your everyday operations.
            </p>

            {/* Credential Badges Row */}
            <div className="lp-about-creds-strip">
              <span className="lp-about-creds-title">Verified Accreditations & Certifications</span>
              <div className="lp-about-badges">
                {credentials.map((cred) => (
                  <div key={cred.name} className="lp-about-badge-item" title={cred.alt}>
                    <img src={cred.src} alt={cred.alt} loading="lazy" />
                    <span>{cred.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Real-Time Operations Snapshot */}
          <div className="lp-about-proof-col">
            <div className="lp-hero-proof" aria-label="Operations metrics snapshot">
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