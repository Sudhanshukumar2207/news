import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navItems } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Monday, August 17, 2026</span>
          <span className="top-note">Independent stories • Smart context • Better reading</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-main">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">P</span>
            <span><b>Pulse</b>News</span>
          </Link>
          <div className="header-actions">
            <button className="icon-btn desktop-search" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">⌕</button>
            <Link to="/shopping" className="pill-btn secondary">Shop</Link>
            <Link to="/contact" className="pill-btn">Advertise</Link>
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="search-bar-wrap">
            <div className="container search-bar">
              <input autoFocus placeholder="Search stories, topics or authors..." />
              <button>Search</button>
            </div>
          </div>
        )}
        <nav className={`main-nav ${open ? 'open' : ''}`}>
          <div className="container nav-inner">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
