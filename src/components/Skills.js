import { motion } from 'framer-motion';

export const Skills = () => {

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', tier: 'proficient' },
        { name: 'C#', tier: 'proficient' },
        { name: 'JavaScript', tier: 'proficient' },
        { name: 'Java', tier: 'familiar' },
        { name: 'C++', tier: 'familiar' },
      ]
    },
    {
      title: 'Backend Frameworks',
      skills: [
        { name: '.NET / C#', tier: 'proficient' },
        { name: 'FastAPI', tier: 'proficient' },
        { name: 'Flask', tier: 'proficient' },
        { name: 'Entity Framework', tier: 'proficient' },
        { name: 'Spring Boot', tier: 'familiar' },
        { name: 'Node.js', tier: 'familiar' },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', tier: 'proficient' },
        { name: 'Next.js', tier: 'proficient' },
        { name: 'TypeScript', tier: 'proficient' },
        { name: 'HTML / CSS', tier: 'proficient' },
      ]
    },
    {
      title: 'Infrastructure',
      skills: [
        { name: 'Docker', tier: 'proficient' },
        { name: 'Apache Kafka', tier: 'proficient' },
        { name: 'Git / CI/CD', tier: 'proficient' },
        { name: 'Vercel', tier: 'proficient' },
        { name: 'REST API Design', tier: 'proficient' },
        { name: 'SignalR', tier: 'familiar' },
        { name: 'Event-Driven Architecture', tier: 'familiar' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', tier: 'proficient' },
        { name: 'SQL Server', tier: 'proficient' },
        { name: 'SQLite', tier: 'proficient' },
        { name: 'MongoDB', tier: 'familiar' },
        { name: 'Redis', tier: 'familiar' },
      ]
    },
    {
      title: 'ML & AI',
      skills: [
        { name: 'LLM Engineering', tier: 'proficient' },
        { name: 'Prompt Engineering', tier: 'proficient' },
        { name: 'Google Gemini', tier: 'proficient' },
        { name: 'Multi-Agent Systems', tier: 'proficient' },
        { name: 'Scikit-learn', tier: 'familiar' },
        { name: 'Pandas / NumPy', tier: 'familiar' },
      ]
    },
  ];

  return (
    <section
      className="skill"
      id="skills"
      style={{
        padding: '100px 0',
        backgroundColor: 'transparent'
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

        {/* Proficiency Legend */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>legend:</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'var(--text-secondary)' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
            Proficient
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'var(--text-secondary)' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--text-muted)', opacity: 0.5, display: 'inline-block' }} />
            Familiar
          </span>
        </div>

        {/* Skills Grid */}
        <div className="skills-container" style={{ marginTop: 0 }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
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
                  const isProficient = skill.tier === 'proficient';
                  return (
                    <span
                      key={skillIndex}
                      style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        fontSize: '13px',
                        color: isProficient ? 'var(--text-primary)' : 'var(--text-secondary)',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        transition: 'all 0.2s ease',
                        cursor: 'default',
                        fontWeight: isProficient ? '500' : '400',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent)';
                        e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isProficient ? 'var(--text-primary)' : 'var(--text-secondary)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                      }}
                    >
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                        backgroundColor: isProficient ? 'var(--accent)' : 'var(--text-muted)',
                        opacity: isProficient ? 1 : 0.5,
                      }} />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
