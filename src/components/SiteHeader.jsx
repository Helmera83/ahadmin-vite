import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo.jsx';

export default function SiteHeader({ landing = false }) {
  return (
    <header className="lp-head">
      <div className="lp-wrap">
        <Link to="/" className="lp-brand" aria-label="AH Administrative Solutions home"><BrandLogo /></Link>
        <nav className="lp-nav" aria-label="Main">
          {landing && (<>
            <a className="hide-sm" href="#services">Services</a>
            <a className="hide-sm" href="#how">How it works</a>
            <a className="hide-sm" href="#pricing">Pricing</a>
          </>)}
          <Link to="/intake" className="lp-btn" style={{ padding: '.5rem 1rem' }}>Get started</Link>
        </nav>
      </div>
    </header>
  );
}
