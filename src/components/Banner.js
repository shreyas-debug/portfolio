import { useState, useEffect, useRef } from "react";

const ROLES = ["Software Developer", "Backend Engineer", "ML Enthusiast"];
const TYPING_SPEED = 150;
const DELETING_SPEED = 75;
const PAUSE_TIME = 2000;

export const Banner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const loopNumRef = useRef(0);

  useEffect(() => {
    const currentRole = ROLES[loopNumRef.current % ROLES.length];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          loopNumRef.current += 1;
        }
      } else {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), PAUSE_TIME);
          return;
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <section 
      className="banner" 
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle gradient overlay — left-anchored to match content */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at 20% 0%, var(--accent-muted) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      {/* Same container class — aligns left edge perfectly with other sections */}
      <div className="container" style={{ 
        position: 'relative',
        zIndex: 1,
        width: '100%'
      }}>

        {/* Greeting label */}
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '15px',
          color: 'var(--accent)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ opacity: 0.45 }}>&gt;</span> Hello, I'm
        </p>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '8px',
          lineHeight: '1.05',
          letterSpacing: '-0.02em'
        }}>
          Shreyas Satpute
        </h1>

        {/* Role with typewriter — lighter weight so name dominates */}
        <h2 style={{
          fontSize: 'clamp(18px, 3vw, 28px)',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: '400',
          color: 'var(--accent)',
          marginBottom: '28px',
          lineHeight: '1.3',
          minHeight: '1.3em'
        }}>
          {text}
          <span style={{
            animation: 'blink 1s step-end infinite',
            marginLeft: '2px'
          }}>|</span>
        </h2>

        {/* Tagline — plain bold, no italic */}
        <p style={{
          fontSize: '17px',
          color: 'var(--text-primary)',
          fontWeight: '600',
          marginBottom: '12px'
        }}>I build systems that scale.</p>

        {/* Description — lifted to #a8a8b3 for readability */}
        <p style={{
          fontSize: '16px',
          color: '#a8a8b3',
          maxWidth: '520px',
          marginBottom: '40px',
          lineHeight: '1.75'
        }}>
          From distributed fraud detection pipelines to autonomous AI agents backend-first, sharp on scale.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: '15px',
              fontWeight: '500',
              padding: '12px 24px',
              backgroundColor: 'var(--accent)',
              color: 'var(--bg-primary)',
              border: '1px solid var(--accent)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              height: '48px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              e.currentTarget.style.borderColor = 'var(--accent-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
          >
            See my work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <a
            href="/Shreyas_Satpute_Resume.pdf"
            download="Shreyas_Satpute_Resume.pdf"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: '15px',
              fontWeight: '500',
              padding: '12px 24px',
              backgroundColor: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none',
              height: '48px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>

      </div>{/* end container */}

      {/* Scroll indicator - hidden on mobile */}
      <div 
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-muted)',
          fontSize: '12px',
          fontFamily: "'JetBrains Mono', monospace",
          zIndex: 2
        }}
      >
        <span style={{ opacity: 0.6 }}>scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          backgroundColor: 'var(--border-color)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-40px',
            left: 0,
            width: '100%',
            height: '40px',
            backgroundColor: 'var(--accent)',
            animation: 'scrollDown 2s ease-in-out infinite'
          }} />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollDown {
          0% { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
        @media (max-width: 768px) {
          .scroll-indicator {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
