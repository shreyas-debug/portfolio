
import { motion } from 'framer-motion';

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

export const Experience = () => {
  return (
    <section className="experience" id="experience" style={{ backgroundColor: 'var(--bg-secondary)', padding: '120px 0', position: 'relative' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        
        {/* Intro Block */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', color: 'var(--accent)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ opacity: 0.5 }}>#</span> experience
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: "'JetBrains Mono', monospace", fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px' }}>
            Journey So Far
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.7' }}>
            My professional experience and educational background.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative' }}>
          
          {/* Vertical Track Line */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            bottom: 0, 
            left: '9px', // Centers perfectly under the 20px dot (20/2 - 2/2 = 9)
            width: '2px', 
            background: 'linear-gradient(to bottom, var(--accent), var(--border-color))', 
            zIndex: 0 
          }} />

          {timelineItems.map((item, index) => (
            <div key={index} style={{ position: 'relative', paddingLeft: '48px', paddingBottom: index === timelineItems.length - 1 ? '0' : '64px' }}>
              
              {/* Timeline Dot with Interaction */}
              <motion.div 
                initial={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)', boxShadow: 'none' }}
                whileInView={{ backgroundColor: 'var(--accent)', borderColor: 'var(--bg-secondary)', boxShadow: '0 0 0 6px var(--accent-muted)' }}
                viewport={{ margin: "-150px 0px -150px 0px" }}
                transition={{ duration: 0.3 }}
                style={{ 
                  position: 'absolute', 
                  top: '0', 
                  left: '0', 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  border: '4px solid', 
                  zIndex: 2, 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center' 
                }}
              >
                {/* Active Pulse Ring */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ margin: "-150px 0px -150px 0px" }}
                  style={{ position: 'absolute', width: '100%', height: '100%' }}
                >
                  <motion.div 
                    animate={{ opacity: [0, 0.8, 0], scale: [1, 2.5, 3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                    style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'var(--accent)' }}
                  />
                </motion.div>
              </motion.div>

              {/* Reveal Wrapper */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Card with Center Vignette Highlighting */}
                <motion.div
                  initial={{ scale: 0.98, opacity: 0.6, borderColor: 'var(--border-color)', boxShadow: 'none' }}
                  whileInView={{ scale: 1.02, opacity: 1, borderColor: 'var(--accent)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)' }}
                  viewport={{ margin: "-150px 0px -150px 0px" }}
                  transition={{ duration: 0.4 }}
                  style={{ 
                    backgroundColor: 'var(--card-bg)', 
                    border: '1px solid', 
                    borderRadius: '12px', 
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Card Header (Title & Duration) */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>{item.title}</h3>
                      <p style={{ fontSize: '15px', color: item.type === 'experience' ? 'var(--accent)' : 'var(--text-secondary)', margin: 0 }}>{item.organization}</p>
                    </div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--accent)', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', padding: '6px 12px', borderRadius: '4px', whiteSpace: 'nowrap', fontWeight: '500' }}>
                      {item.duration}
                    </span>
                  </div>
                  
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>📍 {item.location}</p>
                  
                  {/* Card Body (Bullets/Text) */}
                  {Array.isArray(item.description) ? (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex} style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '20px', position: 'relative', marginBottom: '12px' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>{desc}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: item.technologies.length > 0 ? '24px' : '0' }}>{item.description}</p>
                  )}
                  
                  {/* Card Footer (Tags) */}
                  {item.technologies.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: 'var(--accent)', backgroundColor: 'var(--accent-muted)', padding: '4px 10px', borderRadius: '4px' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
