import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Check if we're on the about page
  const isAboutPage = location.pathname === '/about';

  const handleNavClick = (id, isPageLink = false) => {
    setActiveLink(id);
    setMenuOpen(false);
    
    if (!isPageLink && isAboutPage && id !== 'home') {
      // Navigate to home first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navLinks = [
    // { id: 'home', label: 'home', type: 'hash' },
    { id: 'about', label: 'about', type: 'page', path: '/about' },
    { id: 'skills', label: 'skills', type: 'hash' },
    { id: 'experience', label: 'experience', type: 'hash' },
    { id: 'projects', label: 'projects', type: 'hash' },
  ];

  const renderNavLink = (link, isMobile = false) => {
    const isActive = link.id === 'about' ? isAboutPage : (!isAboutPage && activeLink === link.id);
    
    const style = {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '14px',
      fontWeight: '500',
      color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
      padding: isMobile ? '12px 16px' : '8px 16px',
      borderRadius: isMobile ? '8px' : '6px',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      backgroundColor: isActive ? 'var(--accent-muted)' : 'transparent',
      display: isMobile ? 'block' : 'inline-block',
      cursor: 'pointer'
    };

    if (link.type === 'page') {
      return (
        <Link
          key={link.id}
          to={link.path}
          style={style}
          onClick={() => handleNavClick(link.id, true)}
        >
          {link.label}
        </Link>
      );
    }

    // For hash links
    if (link.id === 'home') {
      return (
        <Link
          key={link.id}
          to="/"
          style={style}
          onClick={() => {
            handleNavClick(link.id, true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        key={link.id}
        href={`#${link.id}`}
        style={style}
        onClick={(e) => {
          e.preventDefault();
          if (isAboutPage) {
            handleNavClick(link.id);
          } else {
            handleNavClick(link.id);
            const element = document.getElementById(link.id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      >
        {link.label}
      </a>
    );
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        {/* Logo */}
        <Link 
          to="/" 
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '18px',
            fontWeight: '700',
            color: 'var(--text-primary)',
            textDecoration: 'none'
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          {navLinks.map((link) => renderNavLink(link, false))}
        </div>

        {/* Right Side - Theme Toggle & Social */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-switch"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '18px'
            }}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)' }} />
            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)' }} />
            <span style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '16px 24px'
        }}>
          {navLinks.map((link) => renderNavLink(link, true))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};
