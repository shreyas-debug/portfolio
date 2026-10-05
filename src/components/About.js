import { useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/me.jpg';
import { Skills } from './Skills';

// Dynamically import all images from the pictures folder
function importAll(r) {
  return r.keys().map((key) => {
    const module = r(key);
    // Handle both default export and direct export
    return module.default || module;
  });
}
const photos = importAll(require.context('../assets/pictures', false, /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/));

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const About = () => {
  useEffect(() => {
    // no-op: kept for parity, scroll handled by navbar
  }, []);

  return (
    <motion.section
      id="about"
      className="story-panel"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      style={{
        minHeight: '100vh',
        padding: '120px 0 100px',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="container">

        {/* Page Header with Profile Picture */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '48px',
            gap: '24px',
            flexWrap: 'wrap'
          }}
        >
          <div>
            <p className="eyebrow">#about</p>
            <h1 className="about-heading" style={{
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '0',
              lineHeight: '1.2',
              letterSpacing: '-0.03em'
            }}>
              Who I Am
            </h1>
          </div>

          {/* Profile Picture */}
          <div style={{
            flexShrink: 0,
            width: '150px',
            height: '150px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '2px solid var(--border-color)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
          }}>
            <img
              src={profileImg}
              alt="Shreyas Satpute"
              width={150}
              height={150}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={itemVariants}
          style={{ marginBottom: '60px' }}
        >
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '28px'
          }}>
            I'm a backend-leaning full-stack engineer who spent 2 years at{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>LTIMindtree</span>{' '}
            shipping production code for{' '}
            <span style={{ color: 'var(--accent)', fontWeight: '500' }}>Microsoft</span> and{' '}
            <span style={{ color: 'var(--accent)', fontWeight: '500' }}>Kellogg's</span>,
            then went deep on distributed systems and AI engineering during my{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>MSc at Birmingham</span>{' '}
            (graduated with{' '}
            <span style={{ color: 'var(--accent)', fontWeight: '500' }}>Distinction</span>).
          </p>

          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '0'
          }}>
            I care about systems that handle load, code that's maintainable at scale,
            and shipping things that actually work in production. Outside engineering,
            I shoot photos, grind hackathons, and occasionally win them.
          </p>
        </motion.div>

        {/* Photo Gallery Section */}
        <motion.div
          variants={itemVariants}
          style={{ marginBottom: '40px' }}
        >
          <h2 style={{
            fontSize: '24px',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Through My Lens 📷
          </h2>
        </motion.div>
      </div>

      {/* Full-width Photo Carousel */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          marginBottom: '60px',
          position: 'relative',
          height: '350px'
        }}
      >
        {/* Gradient overlays for smooth edges */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to right, var(--bg-primary), transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to left, var(--bg-primary), transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        {/* Scrolling container */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            width: 'max-content',
            animation: 'smoothScroll 120s linear infinite',
            willChange: 'transform'
          }}
        >
          {/* First set of images */}
          {photos.map((photo, index) => (
            <div
              key={`first-${index}`}
              style={{
                flexShrink: 0,
                height: '330px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px solid var(--border-color)',
                backgroundColor: 'var(--bg-secondary)'
              }}
            >
              <img
                src={photo}
                alt={`Photography ${index + 1}`}
                loading="lazy"
                draggable="false"
                decoding="async"
                style={{
                  height: '100%',
                  width: 'auto',
                  display: 'block'
                }}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {photos.map((photo, index) => (
            <div
              key={`second-${index}`}
              style={{
                flexShrink: 0,
                height: '330px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px solid var(--border-color)',
                backgroundColor: 'var(--bg-secondary)'
              }}
            >
              <img
                src={photo}
                alt={`Photography ${index + 1}`}
                loading="lazy"
                draggable="false"
                decoding="async"
                style={{
                  height: '100%',
                  width: 'auto',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container">

        <Skills embedded />

        {false && <>

        {/* Quick Facts */}
        <h2 style={{
          fontSize: '24px',
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '24px',
          letterSpacing: '-0.02em'
        }}>
          Quick Facts
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '60px'
        }}>
          {[
            { label: 'Location', value: 'United Kingdom' },
            { label: 'Education', value: 'MSc (Distinction)' },
            { label: 'Experience', value: '2+ Years' },
            { label: 'Focus', value: 'Backend Development' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              style={{
                padding: '24px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                color: 'var(--accent)',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {item.label}
              </p>
              <p style={{
                fontSize: '18px',
                color: 'var(--text-primary)',
                fontWeight: '500',
                margin: 0
              }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interests */}
        <h2 style={{
          fontSize: '24px',
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '24px',
          letterSpacing: '-0.02em'
        }}>
          Interests
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '60px'
        }}>
          {['Backend Engineering', 'Distributed Systems', 'AI/LLM Engineering', 'Photography', 'Hackathons'].map((interest, index) => {
            const isPhotography = interest === 'Photography';
            const Component = isPhotography ? 'a' : 'span';
            const linkProps = isPhotography ? {
              href: 'https://www.instagram.com/shreyas_jpg?igsh=bmJ5dGo1Nmp5cXVt',
              target: '_blank',
              rel: 'noopener noreferrer'
            } : {};

            return (
              <Component
                key={index}
                {...linkProps}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  cursor: isPhotography ? 'pointer' : 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                {interest}
              </Component>
            );
          })}
        </div>

        </>}

      </div>

      <style>{`
        @keyframes smoothScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </motion.section>
  );
};
