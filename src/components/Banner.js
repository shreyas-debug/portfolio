import { useState, useEffect, useRef, useCallback } from "react";

const ROLES = [
  "Backend Engineer",
  "Full-Stack Developer",
  "AI/LLM Builder",
];
const TYPING_SPEED = 110;
const DELETING_SPEED = 60;
const PAUSE_TIME = 1800;

/* ─── Animated counter hook ─── */
function useCountUp(target, duration = 1400, suffix = "") {
  const [display, setDisplay] = useState("0" + suffix);
  const rafRef = useRef(null);
  const startedRef = useRef(false);

  const start = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const startTime = performance.now();
    const isFloat = String(target).includes(".");
    const numericTarget = parseFloat(target);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericTarget;
      const formatted = isFloat ? current.toFixed(1) : Math.floor(current);
      setDisplay(formatted + suffix);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [target, duration, suffix]);

  useEffect(() => () => rafRef.current && cancelAnimationFrame(rafRef.current), []);
  return [display, start];
}

/* ─── Single stat item with scroll-triggered counter ─── */
function StatItem({ value, suffix, label }) {
  const [display, startCount] = useCountUp(value, 1400, suffix);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startCount(); },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startCount]);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "clamp(20px, 2.5vw, 30px)",
        fontWeight: "700",
        color: "var(--accent)",
        lineHeight: 1,
      }}>{display}</span>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "11px",
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      }}>{label}</span>
    </div>
  );
}

/* ─── Animated dot-grid canvas with mouse parallax ─── */
function DotGrid() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const SPACING = 32;
    const DOT_R = 1.1;
    const MAX_SHIFT = 3;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.closest("section")?.offsetHeight || window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const mx = (mouseRef.current.x / width - 0.5) * MAX_SHIFT * 2;
      const my = (mouseRef.current.y / height - 0.5) * MAX_SHIFT * 2;

      for (let x = SPACING; x < width; x += SPACING) {
        for (let y = SPACING; y < height; y += SPACING) {
          const dist = Math.hypot(x - mouseRef.current.x, y - mouseRef.current.y);
          const influence = Math.max(0, 1 - dist / 220);
          const dx = mx * influence;
          const dy = my * influence;
          const alpha = 0.045 + influence * 0.15;
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, DOT_R + influence * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.fill();
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
    }} />
  );
}

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
      {/* Animated dot-grid background */}
      <DotGrid />

      {/* Radial accent glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse at 18% 0%, var(--accent-muted) 0%, transparent 55%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>

        {/* Greeting label */}
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '15px',
          color: 'var(--accent)',
          marginBottom: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ opacity: 0.45 }}>&gt;</span> Hello, I'm
        </p>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 68px)',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '6px',
          lineHeight: '1.05',
          letterSpacing: '-0.02em'
        }}>
          Shreyas Satpute
        </h1>

        {/* Typewriter role */}
        <h2 style={{
          fontSize: 'clamp(16px, 2.4vw, 26px)',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: '400',
          color: 'var(--accent)',
          marginBottom: '28px',
          lineHeight: '1.3',
          minHeight: '1.3em'
        }}>
          {text}
          <span style={{ animation: 'blink 1s step-end infinite', marginLeft: '2px' }}>|</span>
        </h2>

        {/* Hero description — specific, with impact */}
        <p style={{
          fontSize: '16px',
          color: '#a8a8b3',
          maxWidth: '560px',
          marginBottom: '40px',
          lineHeight: '1.8',
        }}>
          Backend-focused engineer with 2+ years at LTIMindtree
          on Microsoft's internal systems, and an MSc (Distinction)
          from Birmingham. I build scalable APIs, distributed
          pipelines, and LLM-integrated systems and I own them
          end-to-end, from schema design to deployment.
        </p>

        {/* CTA Buttons — clear visual hierarchy */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '56px' }}>
          {/* PRIMARY — filled, dominant */}
          <button
            id="hero-see-work-btn"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontFamily: "'Inter', sans-serif",
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
              boxShadow: '0 0 24px rgba(16, 185, 129, 0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              e.currentTarget.style.borderColor = 'var(--accent-hover)';
              e.currentTarget.style.boxShadow = '0 0 36px rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(16, 185, 129, 0.25)';
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
            href="/Shreyas_Satpute_Resume.pdf"
            download="Shreyas_Satpute_Resume.pdf"
            style={{
              fontFamily: "'Inter', sans-serif",
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
        </div>


      </div>

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
    </section>
  );
};


