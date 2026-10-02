
import { motion } from 'framer-motion';

const timelineItems = [
  {
    type: 'education',
    title: 'MSc Computer Science',
    organization: 'University of Birmingham',
    location: 'Birmingham, United Kingdom',
    duration: 'Sept 2024 - Sept 2025',
    description: [
      'Graduated with Distinction. Advanced studies with a focus on distributed systems, backend architecture, and applied AI/LLM engineering.',
      'MSc Dissertation: Built PromptGuide — a multi-surface evaluation system backed by a Flask API, using deterministic NLP scoring as a filter before LLM invocation, achieving a statistically significant <strong>42.1% improvement</strong> in prompt quality scores.',
      'Student Representative: Represented the cohort in faculty meetings, drove academic improvements, and participated in cybersecurity challenges and hackathons.'
    ],
    activities: 'Computer Science Society, Ethical Hacking Society (AFNOM)',
    technologies: ['Python', 'Flask', 'NLP', 'LLMs', 'TypeScript', 'React', 'Chrome Extension API', 'VS Code API']
  },
  {
    type: 'experience',
    title: 'Software Engineer I',
    organization: 'LTIMindtree',
    location: 'Bangalore, India',
    duration: 'Sept 2022 - Sept 2024',
    description: [
      'Designed and shipped an automated SQL-to-C#/.NET migration tool for Microsoft\'s internal query processing team, eliminating 50% of manual processing time across 500+ test cases.',
      'Achieved 100% functional parity migrating 500+ legacy SQL test cases — zero regression failures in production deployment.',
      'Developed Python backend features and conducted pre-deployment validation for the Kellogg\'s account.'
    ],
    technologies: ['.NET', 'C#', 'Python', 'SQL', 'React', 'JavaScript']
  },
  {
    type: 'experience',
    title: 'Software Engineer Intern',
    organization: 'LTIMindtree',
    location: 'Bangalore, India',
    duration: 'Mar 2022 - May 2022',
    description: [
      'Built RESTful APIs and full-stack features in Python (Flask) and React.js for internal LTIMindtree training tools.'
    ],
    technologies: ['Python', 'Flask', 'React.js', 'REST APIs']
  },
  {
    type: 'education',
    title: 'B.E. Electronics & Communication',
    organization: 'Dayananda Sagar Academy of Technology and Management',
    location: 'Bangalore, India',
    duration: 'Aug 2018 - July 2022',
    description: ['Graduated First Class with Distinction. Strong foundation in electronics, communication systems, and programming.'],
    technologies: []
  }
];

export const Experience = () => {
  return (
    <section className="experience" id="experience" style={{ backgroundColor: 'var(--bg-secondary)', padding: '120px 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>

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
                  whileInView={{ scale: 1, opacity: 1, borderColor: 'var(--border-color)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
                  viewport={{ margin: "-150px 0px -150px 0px" }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ borderColor: 'var(--accent)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)' }}
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid rgba(255,255,255,0.08)',
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

                  {/* Location — grey SVG pin instead of red emoji */}
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item.location}
                  </p>

                  {/* Card Body (Bullets/Text) */}
                  {Array.isArray(item.description) ? (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex} style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '20px', position: 'relative', marginBottom: '12px' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
                          <span dangerouslySetInnerHTML={{ __html: desc }} style={{ '--accent-color': 'var(--accent)' }} />
                        </li>
                      ))}
                      {item.activities && (
                        <li style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', paddingLeft: '0', listStyle: 'none', marginTop: '4px', fontStyle: 'italic' }}>
                          Activities &amp; Societies: {item.activities}
                        </li>
                      )}
                    </ul>
                  ) : (
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: item.technologies.length > 0 ? '24px' : '0' }}>{item.description}</p>
                  )}

                  {/* Card Footer (Tags) */}
                  {item.technologies.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'var(--text-secondary)', backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '4px 10px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
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
