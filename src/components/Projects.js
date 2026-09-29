import fraudImg from '../assets/img/fraud.jpg';
import livebidImg from '../assets/img/livebid.jpg';
import promptImg from '../assets/img/promtguide.jpg';
import sentinelImg from '../assets/img/sentinelg3.jpg';
import studysyncImg from '../assets/img/studysync.jpg';
import issuetrackerImg from '../assets/img/issuetracker.jpg';
import jobscoreImg from '../assets/img/jobscore.jpg';
import reporeelImg from '../assets/img/reporeel.jpg';
import webmonitorImg from '../assets/img/webmonitor.jpg';

export const Projects = () => {

  const projects = [
    {
      title: 'PromptGuide',
      description: 'A multi-platform prompt engineering toolkit — available as a Chrome Extension, a VS Code Extension, and a Web App. Combines a deterministic evaluation engine with intelligent refinement to provide objective, systematic feedback for prompt engineering without leaving your editor.',
      technologies: ['Python', 'TypeScript', 'React', 'VS Code API', 'Chrome Extension', 'AI'],
      githubUrl: 'https://github.com/shreyas-debug/PromptGuide',
      liveUrl: 'https://prompt-guide-ten.vercel.app/',
      featured: false,
      image: promptImg
    },
    {
      title: 'Sentinel-G3',
      description: 'Autonomous Self-Healing Security Auditor built for the Gemini 3 Hackathon. Uses Google Gemini 3 with deep reasoning to find vulnerabilities, fix them, and prove every decision with a cryptographically signed chain of thought.',
      technologies: ['Python', 'FastAPI', 'Next.js 15', 'Google Gemini 3', 'TypeScript'],
      githubUrl: 'https://github.com/shreyas-debug/SentinelG3',
      liveUrl: 'https://sentinel-g3-xi.vercel.app/',
      devpostUrl: 'https://devpost.com/software/sentinelg3-autonomous-self-healing-security?ref_content=user-portfolio&ref_feature=in_progress',
      featured: true,
      image: sentinelImg
    },
    {
      title: 'Fraud Detection System',
      description: 'Real-time financial fraud detection system using a high-throughput, distributed, event-driven architecture. Ingests transaction streams via Kafka, processes them using a .NET 9 microservice, evaluates risk using a Python ML engine, and pushes live alerts to a React Dashboard via SignalR.',
      technologies: ['.NET 9', 'React', 'Python', 'Kafka', 'Docker', 'SignalR'],
      githubUrl: 'https://github.com/shreyas-debug/FraudDetectionSystem',
      liveUrl: null,
      featured: false,
      image: fraudImg
    },
    {
      title: 'IssueTracker',
      description: 'Production-grade multi-tenant issue management SaaS. Built with Next.js 15, TypeScript, Prisma, PostgreSQL, and JWT auth, featuring tenant-safe issue lifecycle workflows, searchable boards, and architecture-level data isolation using a Prisma Extension for structural data isolation boundaries.',
      technologies: ['Next.js 15', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT'],
      githubUrl: 'https://github.com/shreyas-debug/issue-tracker',
      liveUrl: 'https://issue-tracker-navy-two.vercel.app/',
      featured: false,
      image: issuetrackerImg
    },
    {
      title: 'JobScore',
      description: 'Swipe-based job matching with explainable scores. Candidates swipe on curated job cards, triggering a match if the computed score clears the threshold. Features fully transparent match logic including weighted skill overlap, experience fit, and semantic similarity using local pgvector embeddings.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'Docker'],
      githubUrl: 'https://github.com/shreyas-debug/JobScore',
      liveUrl: 'https://job-score-seven.vercel.app/',
      featured: false,
      image: jobscoreImg
    },
    {
      title: 'RepoReel',
      description: 'Structured, visual changelog generator for GitHub tags. Fetches commits via REST API, parses/categorizes locally to minimize token usage, and leverages Google Gemini to output a concise AI narrative. Features include a commit heatmap and permanent shareable URLs backed by Vercel KV.',
      technologies: ['Next.js', 'TypeScript', 'Google Gemini', 'Vercel KV', 'Tailwind CSS'],
      githubUrl: 'https://github.com/shreyas-debug/RepoReel',
      liveUrl: 'https://repo-reel.vercel.app',
      featured: false,
      image: reporeelImg
    },
    {
      title: 'Web Monitor',
      description: 'Lightweight production-ready webpage change monitor that fetches and cleans page content, detects differences using hashing and word-level diffing, and generates concise AI summaries with Gemini 2.5 Flash. Includes Supabase-backed check history and Vercel-focused security and performance hardening.',
      technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'Gemini 2.5 Flash', 'Vercel'],
      githubUrl: 'https://github.com/shreyas-debug/web-monitor',
      liveUrl: 'https://web-monitor-two.vercel.app/',
      featured: false,
      image: webmonitorImg
    },
    {
      title: 'LiveBid Auction Platform',
      description: 'Full-stack real-time auction platform with WebSocket bidding. Features secure JWT authentication, SignalR for instant bid updates, automatic auction management, and PostgreSQL database with EF Core.',
      technologies: ['.NET 8', 'React', 'SignalR', 'PostgreSQL', 'JWT'],
      githubUrl: 'https://github.com/shreyas-debug/LiveBid-Auction-Platform',
      liveUrl: null,
      featured: false,
      image: livebidImg
    },
    {
      title: 'StudySync',
      description: 'Full-stack web application built at Birminghack 1.0 that connects students with compatible study partners using a cosine-similarity based matching engine, rich profiles, and a clean dashboard experience. Won the Public Choice Award.',
      technologies: ['React', 'Node.js', 'SQLite', 'ML'],
      githubUrl: 'https://github.com/BugBusters101/StudySync',
      liveUrl: 'https://study-sync-ebon-chi.vercel.app/',
      devpostUrl: 'https://devpost.com/software/studysync-enosua',
      featured: true,
      image: studysyncImg
    },
  ];

  const LinkRow = ({ project }) => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
      {project.featured && (
        <a
          href={project.devpostUrl || project.liveUrl || project.githubUrl}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '10px',
            color: 'var(--accent)', backgroundColor: 'var(--accent-muted)',
            padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase',
            letterSpacing: '0.08em', textDecoration: 'none', border: '1px solid var(--accent)'
          }}
        >
          <span style={{ fontSize: '8px' }}>&#9733;</span> Featured
        </a>
      )}
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          title="View on GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: '600',
            color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex',
            alignItems: 'center', gap: '5px', padding: '5px 12px',
            border: '1px solid var(--accent)', borderRadius: '20px',
            backgroundColor: 'var(--accent-muted)', transition: 'all 0.2s ease'
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = '#000'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--accent-muted)'; e.currentTarget.style.color = 'var(--accent)'; }}
          title="Live Demo"
        >
          Live Demo
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      )}
    </div>
  );

  return (
    <section className="project" id="projects" style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', color: 'var(--accent)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ opacity: 0.5 }}>#</span> projects
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: "'JetBrains Mono', monospace", fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px' }}>
            Things I have Built
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.7' }}>
            A collection of projects showcasing my skills in full-stack development, machine learning, and software engineering.
          </p>
        </div>

        <div className="projects-grid" style={{ marginTop: 0, gridAutoRows: '320px' }}>
          {projects.map((project, index) => {

            return (
              <div key={index} className="flip-card" style={{ perspective: '1000px' }}>
                  <div className="flip-card-inner">

                    <div className="flip-card-front" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)',
                        pointerEvents: 'none'
                      }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 20px' }}>
                        <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '17px', fontWeight: '700', color: '#fff', margin: 0 }}>
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flip-card-back" style={{
                      borderRadius: '12px', padding: '22px',
                      backgroundColor: 'var(--card-bg)',
                      border: '1px solid var(--accent)',
                      display: 'flex', flexDirection: 'column', gap: '12px',
                      overflow: 'hidden', position: 'absolute', width: '100%', height: '100%',
                      transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                      boxSizing: 'border-box'
                    }}>
                      <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                        {project.title}
                      </h3>
                      <p style={{
                        fontFamily: "'Inter', sans-serif", fontSize: '13px',
                        color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0,
                        flexGrow: 1, overflow: 'hidden',
                        display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical'
                      }}>
                        {project.description}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.technologies.map((tech, ti) => (
                          <span key={ti} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)', marginRight: '2px' }}>#</span>{tech}
                          </span>
                        ))}
                      </div>
                      <LinkRow project={project} />
                    </div>

                  </div>
                </div>
              );
          })}
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

      <style>{`
        .flip-card { cursor: pointer; }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);
          will-change: transform;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};
