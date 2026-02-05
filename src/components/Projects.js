import projectImg1 from "../assets/img/project-img1.jpg";
import projectImg2 from "../assets/img/project-img2.jpg";
import projectImg3 from "../assets/img/project-img3.jpg";
import projectImg4 from "../assets/img/project-img4.jpg";
import projectImg5 from "../assets/img/project-img5.jpg";
import projectImg6 from "../assets/img/project-img6.jpg";

export const Projects = () => {

  const projects = [
    {
      title: 'StudySync',
      description: 'Full-stack web application connecting students with compatible study partners. Won Public Choice Award at Birminghack 1.0. Features matching algorithm using cosine similarity.',
      technologies: ['React', 'Node.js', 'MongoDB', 'ML'],
      githubUrl: 'https://github.com/shreyas-debug/StudySync',
      liveUrl: null,
      featured: false,
      imgUrl: projectImg1
    },
    {
      title: 'PromptGuide',
      description: 'Python-based application for AI prompt management and optimization. Features intelligent prompt suggestions and performance analytics.',
      technologies: ['Python', 'AI', 'Flask'],
      githubUrl: 'https://github.com/shreyas-debug/PromptGuide',
      liveUrl: null,
      featured: false,
      imgUrl: projectImg3
    },
    {
      title: 'LiveBid Auction Platform',
      description: 'Full-stack real-time auction platform with WebSocket bidding. Features secure JWT authentication, SignalR for instant bid updates, automatic auction management, and PostgreSQL database with EF Core.',
      technologies: ['.NET 8', 'React', 'SignalR', 'PostgreSQL', 'JWT'],
      githubUrl: 'https://github.com/shreyas-debug/LiveBid-Auction-Platform',
      liveUrl: null,
      featured: false,
      imgUrl: projectImg5
    },
    {
      title: 'Fraud Detection System',
      description: 'Real-time financial fraud detection using event-driven microservices. Ingests transactions via Kafka, processes with .NET 9, evaluates risk using Python ML engine, and displays live alerts on React dashboard via SignalR.',
      technologies: ['.NET 9', 'React', 'Python', 'Kafka', 'Docker'],
      githubUrl: 'https://github.com/shreyas-debug/FraudDetectionSystem',
      liveUrl: null,
      featured: false,
      imgUrl: projectImg6
    },
    {
      title: 'PizzaHub',
      description: 'C# desktop application for pizza ordering and management system. Features user-friendly interface, order tracking, and inventory management.',
      technologies: ['C#', '.NET', 'SQL'],
      githubUrl: 'https://github.com/shreyas-debug/PizzaHub',
      liveUrl: null,
      featured: false,
      imgUrl: projectImg4
    },
    {
      title: 'Cyberattack Detector',
      description: 'Advanced ML-based cyberattack detection system with real-time SMS alerts. Combines Python ML algorithms with Arduino/GSM hardware integration.',
      technologies: ['Python', 'ML', 'Arduino', 'C++'],
      githubUrl: 'https://github.com/shreyas-debug/Cyberattack-Detector',
      liveUrl: null,
      featured: false,
      imgUrl: projectImg2
    }
  ];

  return (
    <section 
      className="project" 
      id="projects"
      style={{
        padding: '100px 0',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 24px' 
      }}>
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            color: 'var(--accent)',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ opacity: 0.5 }}>#</span> projects
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Things I've Built
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            lineHeight: '1.7'
          }}>
            A collection of projects showcasing my skills in full-stack development, 
            machine learning, and software engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {projects.map((project, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '28px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  color: 'var(--accent)',
                  backgroundColor: 'var(--accent-muted)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  zIndex: 2
                }}>
                  Featured
                </span>
              )}

              {/* Project Image */}
              <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                borderRadius: '8px',
                marginBottom: '20px',
                position: 'relative'
              }}>
                <img 
                  src={project.imgUrl} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                {/* Links */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--text-muted)',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                      title="View on GitHub"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--text-muted)',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                      title="View Live"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px',
                transition: 'color 0.2s ease'
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '20px',
                flexGrow: 1
              }}>
                {project.description}
              </p>

              {/* Technologies */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: 'auto'
              }}>
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '12px',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <span style={{ color: 'var(--accent)', marginRight: '2px' }}>#</span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div style={{
          textAlign: 'center',
          marginTop: '48px'
        }}>
          <a 
            href="https://github.com/shreyas-debug"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              fontWeight: '500',
              color: 'var(--accent)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              border: '1px solid var(--accent)',
              borderRadius: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-muted)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            View More on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
