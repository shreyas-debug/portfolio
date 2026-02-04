import { useState, useEffect, useRef } from "react";
import resumePdf from '../assets/Resume(Shreyas_Satpute).pdf';

const ROLES = ["Software Developer", "Full-Stack Engineer", "ML Enthusiast"];
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
      {/* Subtle gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at 50% 0%, var(--accent-muted) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 24px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Greeting */}
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '16px',
          color: 'var(--accent)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ opacity: 0.5 }}>&gt;</span> Hello, my name is
        </p>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 72px)',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '8px',
          lineHeight: '1.1',
          letterSpacing: '-0.02em'
        }}>
          Shreyas Satpute
        </h1>

        {/* Role with typewriter */}
        <h2 style={{
          fontSize: 'clamp(24px, 5vw, 48px)',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: '600',
          color: 'var(--accent)',
          marginBottom: '24px',
          lineHeight: '1.2',
          minHeight: '1.2em'
        }}>
          {text}
          <span style={{
            animation: 'blink 1s step-end infinite',
            marginLeft: '2px'
          }}>|</span>
        </h2>

        {/* Description */}
        <p style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          marginBottom: '40px',
          lineHeight: '1.7'
        }}>
          Detail-oriented software engineer with a passion for building clean, 
          efficient applications. Experienced in full-stack development, 
          machine learning, and cloud technologies, backed by an 
          <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}> MSc in Computer Science</strong> from 
          the University of Birmingham.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              fontWeight: '500',
              padding: '14px 28px',
              backgroundColor: 'var(--accent)',
              color: 'var(--bg-primary)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'var(--accent)';
            }}
          >
            View Projects
            <span>→</span>
          </button>

          <a 
            href={resumePdf}
            download="Shreyas_Satpute_Resume.pdf"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              fontWeight: '500',
              padding: '14px 28px',
              backgroundColor: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            Download CV
            <span>↓</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
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
          fontFamily: "'JetBrains Mono', monospace"
        }}>
          <span>scroll</span>
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
      `}</style>
    </section>
  );
};
