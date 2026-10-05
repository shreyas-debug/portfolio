
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
    technologies: ['Python', 'Flask', 'NLP', 'Machine Learning', 'Deep Learning', 'LLMs', 'TypeScript', 'React', 'Chrome Extension API']
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
    technologies: ['.NET', 'C#', 'Python', 'SQL', 'React.js', 'JavaScript']
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
    technologies: ['Python', 'Flask', 'React.js', 'JavaScript', 'REST APIs']
  },
  {
    type: 'education',
    title: 'B.E. Electronics & Communication',
    organization: 'Dayananda Sagar Academy of Technology and Management',
    location: 'Bangalore, India',
    duration: 'Aug 2018 - July 2022',
    description: ['Graduated First Class with Distinction. Strong foundation in electronics, communication systems, and programming.'],
    technologies: ['C++', 'Python', 'C', 'Digital Electronics', 'Microcontrollers', 'VLSI']
  }
];

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="experience story-panel" id="experience">
      <div className="container">
        <header className="editorial-header">
          <p className="eyebrow">#experience</p>
          <h2>Journey So Far</h2>
          <p>My professional experience and educational background.</p>
        </header>

        <div className="experience-accordion">
          {timelineItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={`experience-row ${isOpen ? 'open' : ''}`} key={item.title}>
                <button className="experience-trigger" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="experience-name">{item.organization}</span>
                  <span className="experience-role">{item.title}</span>
                  <span className="experience-date">{item.duration}</span>
                  <span className="experience-plus">{isOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div className="experience-details" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                      <div className="experience-details-inner">
                        <p className="experience-location">{item.location}</p>
                        <ul>
                          {item.description.map((desc, descIndex) => <li key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />)}
                        </ul>
                        <div className="experience-tech">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
