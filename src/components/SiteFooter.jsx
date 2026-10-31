import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock, ArrowUpRight, ArrowRight, Linkedin, Twitter, Check, AlertCircle } from 'lucide-react';
import { getSupabase } from '../lib/supabase.js';
import BrandLogo from './BrandLogo.jsx';

export default function SiteFooter() {
  const supabase = getSupabase();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: email.trim().toLowerCase(), source: 'footer_form' }]);

      if (error) {
        // Handle duplicate email (PostgreSQL error code 23505)
        if (error.code === '23505') {
          setSubscribed(true); // Treat existing subscriber gracefully
        } else {
          throw error;
        }
      } else {
        setSubscribed(true);
      }
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
      setErrorMsg('Unable to save subscription. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="lp-foot" role="contentinfo">
      <div className="lp-foot-brand-bar">
        <div className="lp-wrap lp-foot-brand-row">
          <div className="lp-foot-identity">
            <Link to="/" className="lp-foot-logo-link" aria-label="AH Admin Solutions Home">
              <BrandLogo />
            </Link>
            <p className="lp-foot-tagline">
              Dedicated administrative, financial reconciliation, and automated operational leverage tailored for small business owners.
            </p>

            <div className="lp-foot-socials-group">
              <span className="lp-foot-socials-label">Connect</span>
              <div className="lp-foot-socials">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lp-social-link"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lp-social-link"
                  aria-label="X Profile"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="lp-foot-newsletter-box">
            <span className="lp-newsletter-heading">Operational Briefings</span>
            <p className="lp-newsletter-sub">
              Actionable delegation frameworks, automation recipes, and bookkeeping tips for founders.
            </p>

            {subscribed ? (
              <div className="lp-newsletter-success">
                <Check size={16} />
                <span>You're subscribed to operational dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="lp-newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  disabled={loading}
                  aria-label="Work email address"
                />
                <button type="submit" className="lp-btn lp-btn-rounded" disabled={loading}>
                  {loading ? 'Saving...' : <>Subscribe <ArrowRight size={14} /></>}
                </button>
              </form>
            )}

            {errorMsg && (
              <div className="lp-newsletter-error">
                <AlertCircle size={14} />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="lp-foot-links-bar">
        <div className="lp-wrap lp-foot-cols-grid">
          <div className="lp-foot-col">
            <span className="lp-foot-col-heading">Navigation</span>
            <ul>
              <li><a href="#services">Capabilities & Services</a></li>
              <li><a href="#timeline">How It Works</a></li>
              <li><a href="#pricing">Plans & Retainers</a></li>
              <li><a href="#about">About the Founder</a></li>
            </ul>
          </div>

          <div className="lp-foot-col">
            <span className="lp-foot-col-heading">Focus Areas</span>
            <ul>
              <li><Link to="/intake?service=Bookkeeping">Bookkeeping & Reconciliations</Link></li>
              <li><Link to="/intake?service=Automations">Workflow Automations (Zapier/Make)</Link></li>
              <li><Link to="/intake?service=Calendar">Inbox & Calendar Defense</Link></li>
              <li><Link to="/intake?service=CRM">CRM Pipeline Administration</Link></li>
            </ul>
          </div>

          <div className="lp-foot-col">
            <span className="lp-foot-col-heading">Operations</span>
            <div className="lp-foot-ops-info">
              <div className="lp-foot-info-item">
                <Clock size={15} className="lp-foot-icon" />
                <span>Mon – Fri • 9:00 AM – 5:00 PM CST</span>
              </div>
              <div className="lp-foot-info-item">
                <Mail size={15} className="lp-foot-icon" />
                <a href="mailto:contact@ahadminsolutions.com">contact@ahadminsolutions.com</a>
              </div>
              <div className="lp-foot-sla-pill">
                <span className="lp-foot-sla-dot" />
                <span>Standard Turnaround: 24–48 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lp-foot-base">
        <div className="lp-wrap lp-foot-base-row">
          <span>&copy; {currentYear} AH Admin Solutions LLC. All rights reserved.</span>
          <div className="lp-foot-legal-links">
            <Link to="/terms">Terms of Service</Link>
            <span className="lp-foot-dot">•</span>
            <Link to="/privacy">Privacy Policy</Link>
            <span className="lp-foot-dot">•</span>
            <Link to="/admin">Admin Access <ArrowUpRight size={13} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}