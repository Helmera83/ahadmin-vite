import { Link } from 'react-router-dom';
import quickbooksBadge from '../assets/badges/quickbooks.png';
import googleBiBadge from '../assets/badges/google-bi.png';
import googleDigitalMarketingBadge from '../assets/badges/google-digital-marketing.png';
import saylorBadge from '../assets/badges/saylor.png';
import pmiKickoffBadge from '../assets/badges/pmi-kickoff.png';


const badges = [
  { src: quickbooksBadge, alt: 'Intuit ProAdvisor QuickBooks Level 1 Certified' },
  { src: googleBiBadge, alt: 'Google Business Intelligence Certificate of Completion' },
  { src: googleDigitalMarketingBadge, alt: 'Google Digital Marketing and E-commerce Certificate of Completion' },
  { src: saylorBadge, alt: 'Saylor Academy Small Business Management, ACE recommended' },
  { src: pmiKickoffBadge, alt: 'PMI Kickoff: Predictive project management badge' },
];

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="lp-foot">
      <div className="lp-foot-mid">
        <div className="lp-wrap lp-foot-row">
          <div className="lp-foot-creds">
            <h2>Credentials</h2>
            <div className="lp-badges">
              {badges.map((b) => (
                <img key={b.src} src={b.src} alt={b.alt} title={b.alt} loading="lazy" />
              ))}
            </div>
          </div>
          <div className="lp-foot-ask">
            <h2>Not sure where to start?</h2>
            <p>Tell me what is piling up and I will point you to the right plan.</p>
            <Link to="/intake">Send a request</Link>
          </div>
        </div>
      </div>
<div className="lp-foot-brand-bar">
        <div className="lp-wrap lp-foot-brand-row">
          <div className="lp-foot-identity">
            <Link to="/" className="lp-foot-logo-link" aria-label="AH Administrative Solutions Home">
              <img
                src="./ah-logo.jpg"
                alt="AH Administrative Solutions"
                className="lp-foot-logo"
              />
            </Link>
            <p className="lp-foot-tagline">
              Dedicated operational, administrative, and workflow solutions for growing businesses.
            </p>
          </div>

          <div className="lp-foot-socials-wrap">
            <span className="lp-foot-socials-label">Connect with us</span>
            <div className="lp-foot-socials">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lp-social-link"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lp-foot-base">
        <div className="lp-wrap">© {new Date().getFullYear()} AH Administrative Solutions</div>
      </div>
    </footer>
  );
}