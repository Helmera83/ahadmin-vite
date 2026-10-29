import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Reclaimed / Mo', value: '40+ hrs', icon: Clock },
  { label: 'Avg Lead Response', value: '< 15 min', icon: Zap },
  { label: 'Ledger Accuracy', value: '100%', icon: ShieldCheck },
];

const liveFeed = [
  { task: 'Stripe merchant feed balanced & reconciled', tag: 'Bookkeeping', time: '12m ago' },
  { task: '14 new leads synced from webform to HubSpot', tag: 'Automation', time: '1h ago' },
  { task: 'Calendar defense active: 4hr deep-work block secured', tag: 'Inbox & Cal', time: '3h ago' },
];

export default function Hero() {
  return (
    <section className="lp-hero">
      <div className="lp-wrap">
        {/* Left Column: Value Prop */}
        <div className="lp-hero-copy">
          <div className="lp-hero-pill">
            <Sparkles size={14} className="lp-hero-spark" />
            <span>Dedicated Operations & Administrative Bandwidth</span>
          </div>
          <h1>A virtual assistant for the work that piles up.</h1>
          <p className="lead">
            I'm a remote virtual assistant for small business owners. I handle your sales follow-up, scheduling, bookkeeping, marketing, and automations so you can get back to the work you sell.
          </p>
          <div className="lp-actions">
            <Link to="/intake" className="lp-btn">
              Start with a consultation <ArrowRight size={18} />
            </Link>
            <a href="#pricing" className="lp-btn ghost">See pricing</a>
          </div>
          <p className="small">$500.00 Optimization Consultation, then flexible plans sized to your workload.</p>
        </div>

        {/* Right Column: Live Operational Command Card */}
        <div className="lp-hero-dashboard">
          <div className="lp-dash-glass-card">
            {/* Top Bar with Live Indicator */}
            <div className="lp-dash-topbar">
              <div className="lp-dash-title-group">
                <span className="lp-live-pulse" />
                <span className="lp-dash-title">Operations in Motion</span>
              </div>
              <span className="lp-dash-badge">Active Retainer</span>
            </div>

            {/* Quick KPI Metrics Grid */}
            <div className="lp-dash-stats-grid">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="lp-dash-stat-item">
                  <div className="lp-dash-stat-icon-wrap">
                    <Icon size={16} />
                  </div>
                  <div className="lp-dash-stat-text">
                    <span className="lp-dash-stat-val">{value}</span>
                    <span className="lp-dash-stat-label">{label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Activity Stream */}
            <div className="lp-dash-stream-header">
              <span>Recent Automated Hand-offs</span>
            </div>
            <div className="lp-dash-stream">
              {liveFeed.map((item, idx) => (
                <div key={idx} className="lp-dash-stream-item">
                  <CheckCircle2 size={16} className="lp-dash-check" />
                  <div className="lp-dash-stream-content">
                    <p className="lp-dash-stream-task">{item.task}</p>
                    <div className="lp-dash-stream-meta">
                      <span className="lp-stream-tag">{item.tag}</span>
                      <span className="lp-stream-dot">•</span>
                      <span className="lp-stream-time">{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}