export const Skills = () => {

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C#', 'Python', 'C++', 'Java', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks',
      skills: ['.Net', 'Flask', 'FastAPI', 'Spring Boot', 'Entity Framework', 'React.js', 'Next.js', 'Node.js']
    },
    {
      title: 'Systems',
      skills: ['Distributed Systems', 'Multi-Agent Orchestration', 'REST API Design', 'Event-Driven Architecture']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'SQLite', 'SQL Server', 'MongoDB', 'Redis']
    },
    {
            title: 'ML & Data',
      skills: ['Machine Learning', 'Google Gemini', 'LLMs & Prompt Engineering', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
      title: 'Tools & Practices',
      skills: ['Docker', 'Apache Kafka', 'CI/CD', 'Git', 'Vercel', 'Agile', 'Scrum', 'OOP']
    }
  ];

  return (
    <section 
      className="skill" 
      id="skills"
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
            <span style={{ opacity: 0.5 }}>#</span> skills
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Tech Stack
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            lineHeight: '1.7'
          }}>
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '0 32px 0 32px', // Futuristic asymmetrical shape
                padding: '32px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
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
              {/* Category Title */}
              <h3 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '13px',
                fontWeight: '600',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ opacity: 0.5 }}>{'// '}</span>{category.title}
              </h3>

              {/* Skills List */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                flex: 1,
                alignContent: 'flex-start'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '13px',
                      color: 'var(--text-primary)',
                      backgroundColor: 'transparent',
                      padding: '8px 16px',
                      borderRadius: '100px', // Sleek pill shape
                      border: '1px solid var(--accent-muted)',
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--bg-primary)';
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.backgroundColor = 'var(--accent)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.borderColor = 'var(--accent-muted)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
