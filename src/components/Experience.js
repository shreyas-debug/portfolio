export const Experience = () => {

  const timelineItems = [
    {
      type: 'education',
      title: 'MSc Computer Science',
      organization: 'University of Birmingham',
      location: 'Birmingham, United Kingdom',
      duration: 'Sept 2024 - Sept 2025',
      description: [
        'Graduated with Distinction. Advanced studies in computer science with focus on modern software development practices and emerging technologies.',
        'Course Student Representative: Represented the cohort in student-staff meetings, voiced concerns, addressed peer queries, and contributed to academic improvements.',
        'Activities & Societies: Computer Science Society, Ethical Hacking Society (AFNOM).'
      ],
      technologies: []
    },
    {
      type: 'experience',
      title: 'Software Engineer I',
      organization: 'LTIMindtree',
      location: 'Bangalore, India',
      duration: 'Sept 2022 - Sept 2024',
      description: [
        'Collaborated within Microsoft\'s internal query processing team to migrate 500+ legacy test cases from SQL to C# using .NET.',
        'Analyzed and translated existing test cases with 100% accuracy, preserving functionality and improving overall testing efficiency.',
        'Designed the frontend architecture for an automated .NET migration system using React and JavaScript.',
        'Streamlined migration workflows, eliminating manual conversion and targeting a 50% reduction in errors and processing time.'
      ],
      technologies: ['.NET', 'C#', 'SQL', 'React', 'JavaScript', 'Azure']
    },
    {
      type: 'experience',
      title: 'Software Engineer Intern',
      organization: 'LTIMindtree',
      location: 'Bangalore, India',
      duration: 'Mar 2022 - May 2022',
      description: [
        'Contributed to the development of internal web applications using ASP.NET MVC, Entity Framework, JavaScript, and Angular.',
        'Gained hands-on experience in full-stack feature development and agile project workflows during a 3-month program.'
      ],
      technologies: ['ASP.NET MVC', 'Entity Framework', 'Angular', 'JavaScript', 'C#']
    },
    {
      type: 'education',
      title: 'B.E. Electronics & Communication',
      organization: 'Dayananda Sagar Academy of Technology and Management',
      location: 'Bangalore, India',
      duration: 'Aug 2018 - July 2022',
      description: 'Graduated First Class with Distinction. Strong foundation in electronics, communication systems, and programming.',
      technologies: []
    }
  ];

  return (
    <section
      className="experience"
      id="experience"
      style={{
        padding: '100px 0',
        backgroundColor: 'var(--bg-secondary)'
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
            <span style={{ opacity: 0.5 }}>#</span> experience
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Journey So Far
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            lineHeight: '1.7'
          }}>
            My professional experience and educational background.
          </p>
        </div>

        {/* Timeline */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '2px',
            background: `linear-gradient(to bottom, var(--accent), var(--border-color))`
          }} />

          {/* Timeline Items */}
          {timelineItems.map((item, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                paddingLeft: '40px',
                paddingBottom: index === timelineItems.length - 1 ? '0' : '48px'
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '-5px',
                top: '0',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: item.type === 'experience' ? 'var(--accent)' : 'var(--text-muted)',
                border: '3px solid var(--bg-secondary)'
              }} />

              {/* Content Card */}
              <div
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '28px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.type === 'experience' ? 'var(--accent)' : 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '4px'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '15px',
                      color: item.type === 'experience' ? 'var(--accent)' : 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {item.organization}
                    </p>
                  </div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-tertiary)',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.duration}
                  </span>
                </div>

                {/* Location */}
                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  marginBottom: '16px'
                }}>
                  📍 {item.location}
                </p>

                {/* Description */}
                {Array.isArray(item.description) ? (
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 20px 0'
                  }}>
                    {item.description.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.6',
                          paddingLeft: '20px',
                          position: 'relative',
                          marginBottom: '8px'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--accent)'
                        }}>→</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: item.technologies.length > 0 ? '20px' : '0'
                  }}>
                    {item.description}
                  </p>
                )}

                {/* Technologies */}
                {item.technologies.length > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '11px',
                          color: 'var(--accent)',
                          backgroundColor: 'var(--accent-muted)',
                          padding: '4px 10px',
                          borderRadius: '4px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
