import React, { useState } from 'react';

/* ─── Terminal card component ─── */
const TerminalCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#0d0d0d',
        border: '1px solid var(--border-color)',
        borderLeft: `2px solid ${hovered ? 'var(--accent)' : 'rgba(14, 106, 77, 0.4)'}`,
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 8px 30px rgba(0, 255, 153, 0.3)'
          : '0 4px 16px rgba(0, 0, 0, 0.25)',
        cursor: 'default',
        height: '100%',
      }}
    >
      {/* ── Plain English Body ── */}
      <div style={{
        padding: '20px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Title */}
        <h3 style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '18px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          margin: '0 0 12px 0',
          paddingBottom: '12px',
          borderBottom: '1px solid #222'
        }}>
          {project.title}
        </h3>

        {/* Descriptions */}
        <div style={{ flexGrow: 1, marginTop: '2px' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0 0 10px 0' }}>
            {project.desc1}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0 0 16px 0' }}>
            {project.desc2}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0 0 20px 0', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>&gt;</span>
            <span style={{ color: 'var(--text-primary)' }}>{project.desc3}</span>
          </p>
        </div>

        {/* Tech chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {project.technologies.map((tech, ti) => (
            <span key={ti} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: 'var(--text-muted)',
              backgroundColor: 'rgba(1, 76, 37, 0)',
              padding: '3px 8px',
              borderRadius: '4px',
              border: '1px solid var(--border-color)',
            }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
          
          {/* Left side: GitHub Icon + Devpost or View Code */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank" rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                title="View Source on GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            
            {project.devpostUrl && (
              <a
                href={project.devpostUrl}
                target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: '12px',
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
              href={project.liveUrl}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontFamily: "'Inter', sans-serif", fontSize: '13.5px', fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.39)', textDecoration: 'none',
                padding: '6px 16px', borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.66)',
                backgroundColor: 'transparent',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)'; 
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'; 
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.backgroundColor = 'transparent'; 
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; 
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'; 
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
    <section className="project" id="projects" style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', color: 'var(--accent)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ opacity: 0.5 }}>#</span> projects
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: "'JetBrains Mono', monospace", fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px' }}>
            Things I've Built
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.7' }}>
            A collection of systems I've built, focusing on backend architecture, applied AI, and real-time performance.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((project, index) => (
            <TerminalCard key={index} project={project} />
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
