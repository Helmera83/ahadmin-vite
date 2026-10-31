import { Link } from 'react-router-dom';
import { HelpCircle, Check, Minus } from 'lucide-react';

const plans = [
  {
    id: 'workflow-review',
    name: 'Workflow Review',
    badge: 'One-Time Audit',
    subtitle: 'One-time Optimization Consultation',
    price: '$500',
    period: 'flat rate',
    cta: 'Book a Review',
    highlight: false,
  },
  {
    id: 'part-time',
    name: 'Part-Time Retainer',
    badge: 'Most Popular',
    subtitle: 'Dedicated Operational Retainer',
    price: '$1,400',
    period: 'per month',
    cta: 'Start Retainer',
    highlight: true,
  },
  {
    id: 'full-time',
    name: 'Dedicated Assistant',
    badge: 'High Capacity',
    subtitle: 'High-Volume Executive Support',
    price: '$2,600',
    period: 'per month',
    cta: 'Check Availability',
    highlight: false,
  },
];

const featureComparison = [
  {
    category: 'OVERVIEW & ALLOCATIONS',
    rows: [
      {
        feature: 'Monthly Dedicated Hours',
        tooltip: 'Pre-allocated hours reserved exclusively for your business',
        values: ['Consultation only', 'Up to 40 hrs / mo', 'Up to 120 hrs / mo'],
      },
      {
        feature: 'Invoicing & Deposit Reconciliation',
        tooltip: 'Preparing client invoices, tracking receipts, and matching bank accounts',
        values: [true, true, true],
      },
      {
        feature: 'CRM Database Cleanup & Tagging',
        tooltip: 'Organizing contact lists, tags, and data deduplication',
        values: [true, true, true],
      },
      {
        feature: 'Calendar & Scheduling Defense',
        tooltip: 'Proactive calendar management, invites, and focus buffers',
        values: [false, true, true],
      },
      {
        feature: 'Custom Workflow Automations',
        tooltip: 'Zapier, Make, or native integration flows for repetitive steps',
        values: ['Audit blueprint', true, true],
      },
      {
        feature: 'Communication Channels',
        tooltip: 'Direct day-to-day coordination access',
        values: ['Email', 'Slack & Email', 'Dedicated Slack & Daily sync'],
      },
      {
        feature: 'SLA Turnaround Speed',
        tooltip: 'Target delivery speed for routine requests',
        values: ['3 Business days', '24 - 48 Hours', 'Same-day priority'],
      },
    ],
  },
];

export default function PricingGrid() {
  const renderCellContent = (val) => {
    if (typeof val === 'boolean') {
      return val ? (
        <span className="lp-table-check" aria-label="Included">
          <Check size={14} strokeWidth={2.75} />
        </span>
      ) : (
        <span className="lp-table-dash" aria-label="Not included">
          <Minus size={15} strokeWidth={2} />
        </span>
      );
    }
    return <span className="lp-table-val">{val}</span>;
  };

  return (
    <section className="lp-sec lp-pricing-section" id="pricing">
      <div className="lp-wrap">
        <div className="lp-pricing-head">
          <span className="lp-pricing-eyebrow">Investment & Plans</span>
          <h2 className="lp-pricing-title">Simple pricing. Serious value.</h2>
          <p className="lp-pricing-subtitle">
            Pick the plan that matches your operational needs right now.<br /> Adjust, upgrade, or pause anytime with no lock-in.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="lp-pricing-cards-grid">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`lp-pricing-card ${p.highlight ? 'is-popular' : ''}`}
            >
              <div className="lp-pricing-card-header">
                <div className="lp-pricing-badge-row">
                  <span className="lp-pricing-plan-badge">{p.badge}</span>
                </div>
                <div className="lp-pricing-name-row">
                  <h3 className="lp-pricing-plan-name">{p.name}</h3>
                  <button
                    type="button"
                    className="lp-pricing-tooltip-btn"
                    title={p.subtitle}
                    aria-label={`Details for ${p.name}`}
                  >
                    <HelpCircle size={15} />
                  </button>
                </div>
                <p className="lp-pricing-plan-sub">{p.subtitle}</p>
              </div>

              <div className="lp-pricing-price-box">
                <span className="lp-pricing-amount">{p.price}</span>
                <span className="lp-pricing-period">/ {p.period}</span>
              </div>

              <Link
                to={`/intake?plan=${encodeURIComponent(p.name)}`}
                className={`lp-pricing-cta-btn ${p.highlight ? 'is-primary' : 'is-secondary'}`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="lp-pricing-matrix">
          <div className="lp-matrix-head">
            <span className="lp-matrix-head-label">Deliverable Breakdown</span>
            <div className="lp-matrix-head-plans">
              <span>Workflow Review</span>
              <span className="is-popular">Part-Time Retainer</span>
              <span>Dedicated Assistant</span>
            </div>
          </div>

          {featureComparison.map((section) => (
            <div key={section.category} className="lp-matrix-section">
              <div className="lp-matrix-cat-header">
                <span>{section.category}</span>
              </div>

              <div className="lp-matrix-table">
                {section.rows.map((row) => (
                  <div key={row.feature} className="lp-matrix-row">
                    <div className="lp-matrix-label-cell">
                      <span>{row.feature}</span>
                      <button
                        type="button"
                        className="lp-pricing-tooltip-btn"
                        title={row.tooltip}
                        aria-label={`Learn more about ${row.feature}`}
                      >
                        <HelpCircle size={13} />
                      </button>
                    </div>

                    <div className="lp-matrix-values-group">
                      {row.values.map((val, idx) => (
                        <div key={idx} className="lp-matrix-val-cell">
                          {renderCellContent(val)}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}