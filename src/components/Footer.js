export const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shreyas-debug',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shreyas-satpute-5817b41b3/',
    },
  ];

  return (
    <footer 
      className="footer"
      style={{
        padding: '80px 0 60px',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)'
      }}
    >
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 24px' 
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '32px'
        }}>
          {/* Main CTA */}
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '8px'
          }}>
            Looking for a developer?
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            lineHeight: '1.7',
            margin: 0
          }}>
            If you're building something cool and need a hand, I'm all ears.
          </p>

          {/* Social Links */}
          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '16px'
          }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  padding: '8px 0',
                  borderBottom: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.borderBottomColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Email */}
          <a 
            href="mailto:satputeshreyas07@gmail.com"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '16px',
              color: 'var(--accent)',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            satputeshreyas07@gmail.com
          </a>

          {/* Divider */}
          <div style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'var(--border-color)',
            marginTop: '16px'
          }} />

          {/* Copyright */}
          <p style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            margin: 0,
            fontFamily: "'JetBrains Mono', monospace",
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            © 2026 Shreyas Satpute
          </p>
        </div>
      </div>
    </footer>
  );
};
