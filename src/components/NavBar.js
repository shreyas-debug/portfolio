import { useState, useEffect, useRef } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useTheme } from '../contexts/ThemeContext';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const collapseRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        // Monitor navbar collapse state
        const collapseElement = collapseRef.current;
        if (!collapseElement) return;

        const observer = new MutationObserver(() => {
            const isOpen = collapseElement.classList.contains('show');
            setIsExpanded(isOpen);
            if (isOpen) {
                document.body.classList.add('navbar-expanded');
            } else {
                document.body.classList.remove('navbar-expanded');
            }
        });

        observer.observe(collapseElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const closeMobileMenu = () => {
        if (collapseRef.current) {
            const collapseElement = collapseRef.current;
            if (collapseElement.classList.contains('show')) {
                // Remove the show class to close the menu
                collapseElement.classList.remove('show');
                // Update aria-expanded on toggle button
                const toggleButton = document.querySelector('.mobile-menu-toggle');
                if (toggleButton) {
                    toggleButton.setAttribute('aria-expanded', 'false');
                }
                // Trigger the mutation observer update
                document.body.classList.remove('navbar-expanded');
            }
        }
    };

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        // Close mobile menu when a link is clicked (only on mobile)
        if (window.innerWidth <= 768) {
            closeMobileMenu();
        }
    }
    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-menu-toggle">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" ref={collapseRef}>
           <Nav className="me-auto desktop-nav">
             <Nav.Link href="#home" className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
             <Nav.Link href="#about" className={activeLink == 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
             <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
             <Nav.Link href="#experience" className={activeLink == 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
             <Nav.Link href="#projects" className={activeLink == 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
           </Nav>
           {/* Mobile Dropdown Menu - All Navigation Items */}
           <Nav className="mobile-nav">
             <Nav.Link href="#home" className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
             <Nav.Link href="#about" className={activeLink == 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
             <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
             <Nav.Link href="#experience" className={activeLink == 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
             <Nav.Link href="#projects" className={activeLink == 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
           </Nav>
          <span className="navbar-text">
            {/* Theme Toggle Switch */}
            <div 
              className={`theme-toggle-switch ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
              data-theme={isDarkMode ? 'dark' : 'light'}
              onClick={toggleTheme}
              style={{
                position: 'relative',
                width: '80px',
                height: '40px',
                background: isDarkMode ? '#1a1a1a' : '#f0f0f0',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                marginRight: '15px',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '4px',
                boxShadow: isDarkMode 
                  ? 'inset 0 2px 4px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)'
                  : 'inset 0 2px 4px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? 'inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.3)' 
                  : 'inset 0 2px 4px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)'
                  : 'inset 0 2px 4px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.1)';
              }}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {/* Moon Icon - Left Side */}
              <div className="moon-icon" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'transparent',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                zIndex: 2
              }}>
                <span style={{
                  fontSize: '16px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>🌙</span>
              </div>
              
              {/* Toggle Circle */}
              <div 
                className={`toggle-circle ${isDarkMode ? 'toggle-dark' : 'toggle-light'}`}
                style={{
                  position: 'absolute',
                  width: '32px',
                  height: '32px',
                  background: '#ffffff',
                  borderRadius: '50%',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isDarkMode 
                    ? '0 2px 8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 2px rgba(255,255,255,0.1)'
                    : '0 2px 8px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.1)',
                  border: isDarkMode ? '1px solid rgba(0,0,0,0.1)' : 'none',
                  left: '4px',
                  top: '4px',
                  zIndex: 3
                }}></div>
              
              {/* Sun Icon - Right Side */}
              <div className="sun-icon" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'transparent',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                zIndex: 2
              }}>
                <span style={{
                  fontSize: '16px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>☀️</span>
              </div>
            </div>
            
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/shreyas-satpute-5817b41b3/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/shreyas-debug" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="GitHub" />
                </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}