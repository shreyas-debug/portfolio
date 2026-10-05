import { useState, useEffect } from "react";
import { useTheme } from '../contexts/ThemeContext';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['experience', 'projects', 'skills', 'about'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            currentSection = section;
          }
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: 'experience', id: 'experience' },
    { label: 'projects',   id: 'projects' },
    { label: 'skills',     id: 'skills' },
    { label: 'about',      id: 'about' },
  ];

  const renderNavLink = (link, isMobile = false) => {
    const isActive = activeLink === link.id;

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
      cursor: 'pointer',
      border: 'none',
      background: isActive ? 'var(--accent-muted)' : 'transparent',
    };

    return (
      <a
        href={`#${link.id}`}
        key={link.label}
        style={style}
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen(false);
          const element = document.getElementById(link.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onMouseEnter={(e) => {
          if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
        }}
        onMouseLeave={(e) => {
          if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
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
        {/* Logo — vertically centred via the parent flex row */}
        <button
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '18px',
            fontWeight: '700',
            color: 'var(--text-primary)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: 0,
          }}
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
        </button>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          {navLinks.map((link) => renderNavLink(link, false))}
        </div>

        {/* Right Side - Open to work + Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Open to work badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '999px',
              backgroundColor: 'var(--accent-muted)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: 'var(--accent)',
              whiteSpace: 'nowrap'
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)'
              }}
            />
            <span>Open to work</span>
          </div>

          {/* Theme Toggle — SVG icons, primary colour, green hover border */}
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
              color: 'var(--text-primary)'
            }}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              /* Sun icon — shown in dark mode to indicate "click for light" */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon icon — shown in light mode to indicate "click for dark" */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
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
