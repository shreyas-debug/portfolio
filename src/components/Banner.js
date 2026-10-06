import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ROLES = [
  "Backend Engineer",
  "Full-Stack Developer",
  "AI/LLM Builder",
];
const TYPING_SPEED = 110;
const DELETING_SPEED = 60;
const PAUSE_TIME = 1800;



export const Banner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const loopNumRef = useRef(0);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.965]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.18]);

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
    <motion.section
      className="banner"
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        scale: heroScale,
        opacity: heroOpacity,
      }}
    >

      <motion.div 
        className="container" 
        style={{ position: 'relative', zIndex: 1, width: '100%' }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.11, delayChildren: 0.12 } }
        }}
      >

        {/* Greeting label */}
        <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.45, ease: 'easeOut' }} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '15px',
          color: 'var(--accent)',
          marginBottom: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ opacity: 0.45 }}>&gt;</span> Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1 className="hero-title" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} style={{
          fontSize: 'clamp(36px, 6vw, 68px)',
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '6px',
          lineHeight: '1.05',
          letterSpacing: '-0.02em'
        }}>
          Shreyas Satpute
        </motion.h1>

        {/* Typewriter role */}
        <motion.h2 className="hero-role" variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.45, ease: 'easeOut' }} style={{
          fontSize: 'clamp(16px, 2.4vw, 26px)',
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontWeight: '400',
          color: 'var(--accent)',
          marginBottom: '28px',
          lineHeight: '1.3',
          minHeight: '1.3em'
        }}>
          {text}
          <span style={{ animation: 'blink 1s step-end infinite', marginLeft: '2px' }}>|</span>
        </motion.h2>

        {/* Hero description — specific, with impact */}
        <motion.p className="hero-description" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: 'easeOut' }} style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '560px',
          marginBottom: '40px',
          lineHeight: '1.8',
        }}>
          Backend-focused engineer with 2+ years at LTIMindtree
          on Microsoft's internal systems, and an MSc (Distinction)
          from Birmingham. I build scalable APIs, distributed
          pipelines, and LLM-integrated systems and I own them
          end-to-end, from schema design to deployment.
        </motion.p>

        {/* CTA Buttons — clear visual hierarchy */}
        <motion.div className="hero-ctas" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: 'easeOut' }} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '56px' }}>
          {/* PRIMARY — filled, dominant */}
          <button
            id="hero-see-work-btn"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '15px',
              fontWeight: '600',
              padding: '13px 28px',
              backgroundColor: 'var(--accent)',
              color: 'var(--bg-primary)',
              border: '2px solid var(--accent)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              height: '50px',
              boxShadow: '0 0 24px rgba(112, 170, 162, 0.24)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              e.currentTarget.style.borderColor = 'var(--accent-hover)';
              e.currentTarget.style.boxShadow = '0 0 36px rgba(112, 170, 162, 0.38)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(112, 170, 162, 0.24)';
            }}
          >
            See my work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* SECONDARY — ghost, clearly subordinate */}
          <a
            id="hero-resume-btn"
            href="https://docs.google.com/document/d/1W0fHaVJJGS_-CtuHzK1dXddjj-6Q-AHE1nFBnpRX-jY/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '14px',
              fontWeight: '500',
              padding: '13px 24px',
              backgroundColor: 'transparent',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              height: '50px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
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
        <span style={{ opacity: 0.5 }}>scroll</span>
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
          0%   { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
        @media (max-width: 768px) {
          .scroll-indicator { display: none !important; }
        }
      `}</style>
    </motion.section>
  );
};


