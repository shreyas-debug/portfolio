export const Skills = () => {

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'C++']
    },
    {
      title: 'Frameworks',
      skills: ['React.js', '.NET Core', 'Flask', 'Express.js', 'Node.js']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Microsoft Azure', 'GitHub', 'REST APIs', 'CI/CD','Docker']
    },
    {
      title: 'Databases',
      skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'SQLite','MySQL']
    },
    {
      title: 'ML & Data',
      skills: ['Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
      title: 'Tools',
      skills: ['VS Code', 'Visual Studio', 'Postman', 'Cursor', 'Git','Adobe Photoshop', 'Adobe Lightroom']
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '28px',
                transition: 'all 0.3s ease'
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
                gap: '10px'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--bg-tertiary)',
                      padding: '8px 14px',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent)';
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.backgroundColor = 'var(--accent-muted)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
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
