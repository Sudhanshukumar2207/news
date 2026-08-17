import { Link } from 'react-router-dom';
import { SITE } from '../constants/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand"><span className="brand-mark">P</span><span><b>Pulse</b>News</span></Link>
          <p>{SITE.tagline}</p>
          <div className="social-row"><a href="#">in</a><a href="#">X</a><a href="#">▶</a><a href="#">◎</a></div>
        </div>
        <div><h4>Explore</h4><Link to="/news">Latest News</Link><Link to="/national">National</Link><Link to="/international">International</Link><Link to="/fitness">Fitness</Link></div>
        <div><h4>Company</h4><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/portfolio">Portfolio</Link><Link to="/testimonials">Testimonials</Link></div>
        <div><h4>Contact</h4><p>{SITE.email}</p><p>{SITE.phone}</p><p>{SITE.location}</p></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 PulseNews. Demo React project.</span><span>Privacy • Terms • Editorial Policy</span></div>
    </footer>
  );
}
