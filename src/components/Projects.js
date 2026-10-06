import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* ─── Terminal card component ─── */
const TerminalCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="portfolio-surface project-panel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        borderLeft: `2px solid ${hovered ? 'var(--accent)' : 'var(--border-hover)'}`,
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 14px 36px -20px rgba(83, 142, 134, 0.46)'
          : 'var(--shadow-elevated)',
        cursor: 'default',
        height: '100%',
      }}
    >
      {/* ── Plain English Body ── */}
      <div className="project-panel-content" style={{
        padding: '20px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Title */}
        <h3 className="project-panel-title" style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: '18px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          margin: '0 0 12px 0',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--border-color)'
        }}>
          {project.title}
        </h3>

        {/* Descriptions */}
        <div className="project-narrative" style={{ flexGrow: 1, marginTop: '2px' }}>
          <div className="project-detail-block">
            <span className="project-detail-label">System</span>
            <p>{project.desc1}</p>
          </div>
          <div className="project-detail-block">
            <span className="project-detail-label">Engineering decision</span>
            <p>{project.desc2}</p>
          </div>
          <div className="project-detail-block project-outcome">
            <span className="project-detail-label">Outcome</span>
            <p><span>&gt;</span>{project.desc3}</p>
          </div>
        </div>

        {/* Tech chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {project.technologies.map((tech, ti) => (
            <span key={ti} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: 'var(--text-muted)',
              backgroundColor: 'var(--surface-subtle)',
              padding: '3px 8px',
              borderRadius: '4px',
              border: '1px solid var(--border-color)',
            }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="project-links-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>

          {/* Left side: GitHub Icon + Devpost or View Code */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {project.githubUrl && (
              <a
                className="project-action project-action-code"
                href={project.githubUrl}
                target="_blank" rel="noopener noreferrer"
                style={{
                  color: 'var(--text-primary)', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '9px'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                title="View Source on GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>View Code</span>
              </a>
            )}

            {project.devpostUrl && (
              <a
                href={project.devpostUrl}
                target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: "'Manrope', sans-serif", fontSize: '12px',
                  color: 'var(--text-muted)', textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                Devpost ↗
              </a>
            )}
          </div>

          {/* Right side: Live Demo Button */}
          {project.liveUrl && (
            <a
              className="project-action project-action-live"
              href={project.liveUrl}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontFamily: "'Manrope', sans-serif", fontSize: '13.5px', fontWeight: '500',
                color: 'var(--text-secondary)', textDecoration: 'none',
                padding: '6px 16px', borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'transparent',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--accent-muted)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const stackRef = useRef(null);

  useEffect(() => {
    let frame;

    const equalizeMobileCards = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const stack = stackRef.current;
        if (!stack) return;

        stack.style.removeProperty('--mobile-project-height');
        if (window.innerWidth > 768) return;

        const cards = Array.from(stack.querySelectorAll('.project-panel'));
        const tallestCard = Math.max(...cards.map((card) => card.scrollHeight), 0);
        if (tallestCard) stack.style.setProperty('--mobile-project-height', `${Math.ceil(tallestCard) + 2}px`);
      });
    };

    equalizeMobileCards();
    document.fonts?.ready.then(equalizeMobileCards);
    window.addEventListener('resize', equalizeMobileCards);
    window.addEventListener('orientationchange', equalizeMobileCards);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', equalizeMobileCards);
      window.removeEventListener('orientationchange', equalizeMobileCards);
    };
  }, []);

  const projects = [
    {
      title: 'PromptGuide',
      terminalFile: 'promptguide.py',
      desc1: 'Multi-surface prompt evaluation system - VS Code + Chrome extension backed by a Flask API.',
      desc2: 'Uses deterministic NLP scoring to filter prompts before LLM invocation, keeping costs predictable.',
      desc3: '42.1% improvement in prompt quality scores',
      technologies: ['Python', 'Flask', 'NLP', 'TypeScript'],
      githubUrl: 'https://github.com/shreyas-debug/PromptGuide',
      liveUrl: 'https://prompt-guide-ten.vercel.app/',
    },
    {
      title: 'Fraud Detection System',
      terminalFile: 'fraud_detector.py',
      desc1: 'Distributed transaction monitoring system ingesting payment events via Kafka, scoring fraud risk in real-time via a Python ML engine.',
      desc2: 'Solved a double-spend race condition using atomic PostgreSQL upsert - no application-level locking needed.',
      desc3: 'Real-time alerts via SignalR dashboard',
      technologies: ['.NET 9', 'Kafka', 'Python', 'React'],
      githubUrl: 'https://github.com/shreyas-debug/FraudDetectionSystem',
      liveUrl: null,
    },
    {
      title: 'Sentinel-G3',
      terminalFile: 'sentinel.py',
      desc1: 'Autonomous security auditor that decomposes a GitHub repo into parallel specialist agents and opens a PR with verified patches.',
      desc2: 'Enforced Pydantic output contracts at every agent node to prevent plausible-but-incorrect fixes from propagating.',
      desc3: 'Cryptographically signed audit trail per patch',
      technologies: ['Python', 'FastAPI', 'Next.js', 'Gemini 3'],
      githubUrl: 'https://github.com/shreyas-debug/SentinelG3',
      liveUrl: 'https://sentinel-g3-xi.vercel.app/',
      devpostUrl: 'https://devpost.com/software/sentinelg3-autonomous-self-healing-security?ref_content=user-portfolio&ref_feature=in_progress',
    },
    {
      title: 'IssueTracker',
      terminalFile: 'issue_tracker.ts',
      desc1: 'Multi-tenant issue management SaaS with tenant isolation enforced at the database layer - not the application layer.',
      desc2: 'Prisma client extensions auto-scope every query to the authenticated workspace, eliminating the bypass class that app-level filtering leaves open.',
      desc3: 'JWT auth + RBAC + route-level guards',
      technologies: ['Next.js 15', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com/shreyas-debug/issue-tracker',
      liveUrl: 'https://issue-tracker-navy-two.vercel.app/',
    },
    {
      title: 'JobScore',
      terminalFile: 'jobscore.py',
      desc1: 'Swipe-based job matching platform built with FastAPI and Next.js, featuring transparent, explainable match scores.',
      desc2: 'Replaced opaque algorithms using local pgvector embeddings and deterministic skill overlap math to ensure fair ranking.',
      desc3: 'Threshold matcher balancing skill overlap and experience fit',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector'],
      githubUrl: 'https://github.com/shreyas-debug/JobScore',
      liveUrl: 'https://job-score-seven.vercel.app/',
    },
    {
      title: 'RepoReel',
      terminalFile: 'reporeel.ts',
      desc1: 'Structured, visual changelog generator leveraging Gemini for concise AI release narratives.',
      desc2: 'Drastically reduced API token usage by parsing commits locally before generating permanent shareable release URLs via Vercel KV.',
      desc3: 'Automated changelog generation integrated with GitHub tags',
      technologies: ['Next.js', 'TypeScript', 'Gemini', 'Vercel KV'],
      githubUrl: 'https://github.com/shreyas-debug/RepoReel',
      liveUrl: 'https://repo-reel.vercel.app',
    },
    {
      title: 'Web Monitor',
      terminalFile: 'webmonitor.ts',
      desc1: 'Lightweight webpage change monitor using hashing and Gemini 2.5 Flash for precise diff summaries.',
      desc2: 'Optimized polling with ETag caching and localized hash comparisons before invoking the LLM for summary generation.',
      desc3: 'Instant alerts with full history backed by Supabase',
      technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'Gemini 2.5'],
      githubUrl: 'https://github.com/shreyas-debug/web-monitor',
      liveUrl: 'https://web-monitor-two.vercel.app/',
    },
    {
      title: 'LiveBid',
      terminalFile: 'livebid.cs',
      desc1: 'Full-stack real-time auction platform featuring automatic auction management and instant bidding.',
      desc2: 'Synchronized live bids across all active clients using SignalR WebSockets and .NET 8, handling high-frequency updates safely.',
      desc3: 'Zero-latency websocket broadcast to connected clients',
      technologies: ['.NET 8', 'React', 'SignalR', 'PostgreSQL'],
      githubUrl: 'https://github.com/shreyas-debug/LiveBid-Auction-Platform',
      liveUrl: null,
    },
    {
      title: 'StudySync',
      terminalFile: 'studysync.py',
      desc1: 'Web app matching students with compatible study partners using a cosine-similarity recommendation engine.',
      desc2: 'Optimized matching by pre-computing TF-IDF vectors for profiles, reducing the pair-wise similarity search from O(n^2) to O(1) per user.',
      desc3: 'Won the Public Choice Award at Birminghack 1.0',
      technologies: ['React', 'Node.js', 'SQLite', 'ML'],
      githubUrl: 'https://github.com/BugBusters101/StudySync',
      liveUrl: 'https://study-sync-ebon-chi.vercel.app/',
      devpostUrl: 'https://devpost.com/software/studysync-enosua',
    },
  ];

  return (
    <section className="project story-panel" id="projects" style={{ padding: '120px 0', backgroundColor: 'transparent' }}>
      <div className="container">
        <header className="editorial-header project-editorial-header">
          <p className="eyebrow">#projects</p>
          <h2>Things I've Built</h2>
          <p>
            A collection of systems I've built, focusing on backend architecture, applied AI, and real-time performance.
          </p>
        </header>

        <div className="projects-stack" ref={stackRef}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-stack-item"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ top: '86px', zIndex: index + 1 }}
            >
              <TerminalCard project={project} />
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="https://github.com/shreyas-debug"
            target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: '500',
              color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex',
              alignItems: 'center', gap: '8px', padding: '12px 24px',
              border: '1px solid var(--accent)', borderRadius: '8px', transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-muted)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            View More on GitHub <span>&#8594;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
