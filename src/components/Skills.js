export const Skills = () => {

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C#', 'Python', 'C++', 'Java', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks',
      skills: ['.Net', 'Flask', 'FastAPI', 'Spring Boot', 'Entity Framework', 'React.js', 'Next.js']
    },
    {
      title: 'Systems',
      skills: ['Distributed Systems', 'Multi-Agent Orchestration', 'REST API Design', 'Event-Driven Architecture', 'Node.js']
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
      <div className="container">
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
        <div className="skills-container" style={{ marginTop: 0 }}>
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '24px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                height: '100%'
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
              {/* Category Title - Quiet, sentence case, sans-serif */}
              <h3 style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--text-muted)',
                marginBottom: '16px',
                margin: '0 0 16px 0'
              }}>
                {category.title}
              </h3>

              {/* Skills Pills */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                flex: 1,
                alignContent: 'flex-start'
              }}>
                {category.skills.map((skill, skillIndex) => {
                  const isPrimary = skillIndex <= 2; // Top 3 skills get primary visual weight
                  return (
                    <span 
                      key={skillIndex}
                      style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        fontSize: '13px',
                        color: isPrimary ? 'var(--text-primary)' : 'var(--text-secondary)',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        transition: 'all 0.2s ease',
                        cursor: 'default',
                        fontWeight: isPrimary ? '500' : '400'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent)';
                        e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isPrimary ? 'var(--text-primary)' : 'var(--text-secondary)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                      }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
