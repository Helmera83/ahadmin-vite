import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck, Zap, Sparkles, CheckCircle2, CheckIcon } from 'lucide-react';
import CountUp from './CountUp.jsx';

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

const liveFeed = [
    { task: 'Stripe merchant feed balanced & reconciled', tag: 'Bookkeeping', time: '12m ago' },
    { task: '14 new leads synced from webform to CRM pipeline', tag: 'Automation', time: '1h ago' },
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
                        <span> administration heavy lifting </span>
                    </div>
                    <h1>Dedicated Virtual Assistant for Small Business Owners</h1>
                    <p className="lead">
                        <div>
                             Let us handle the administrative heavy lifting; <br />
                            <strong>so you can focus on growing your business.</strong>
                        </div>
                    </p>
                    <div className="lp-actions">
                        <Link to="/intake" className="lp-btn">
                            Start with a consultation <ArrowRight size={18} />
                        </Link>
                        <a href="#pricing" className="lp-btn ghost">See pricing</a>
                    </div>
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

                        {/* KPI Metrics with CountUp */}
                        <div className="lp-dash-stats-grid">
                            {stats.map(({ label, to, prefix = '', suffix = '', icon: Icon }) => (
                                <div key={label} className="lp-dash-stat-item">
                                    <div className="lp-dash-stat-icon-wrap">
                                        <Icon size={16} />
                                    </div>
                                    <div className="lp-dash-stat-text">
                                        <span className="lp-dash-stat-val">
                                            <CountUp
                                                from={0}
                                                to={to}
                                                duration={2}
                                                prefix={prefix}
                                                suffix={suffix}
                                                easing="easeOut"
                                            />
                                        </span>
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