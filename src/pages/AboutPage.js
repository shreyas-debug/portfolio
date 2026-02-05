import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/me.jpg';

// Dynamically import all images from the pictures folder
function importAll(r) {
  return r.keys().map((key) => {
    const module = r(key);
    // Handle both default export and direct export
    return module.default || module;
  });
}
const photos = importAll(require.context('../assets/pictures', false, /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/));

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section 
      style={{
        minHeight: '100vh',
        padding: '120px 0 100px',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="container" style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '0 24px' 
      }}>
        {/* Back Link */}
        <Link 
          to="/"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            color: 'var(--accent)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '40px',
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <span>←</span> back to home
        </Link>

        {/* Page Header with Profile Picture */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '48px',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              color: 'var(--accent)',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ opacity: 0.5 }}>#</span> about-me
            </p>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '0',
              lineHeight: '1.2'
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
            />
          </div>
        </div>

        {/* Main Content */}
        <div style={{ marginBottom: '60px' }}>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '28px'
          }}>
            Hello! I'm <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Shreyas Satpute</span>, 
            a passionate Software Engineer with a strong foundation in full-stack development and machine learning. 
            I recently graduated with <span style={{ color: 'var(--accent)', fontWeight: '500' }}>Distinction</span> in my <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>MSc in Computer Science</span> from 
            the <span style={{ color: 'var(--accent)', fontWeight: '500' }}>University of Birmingham</span>, and bring hands-on 
            experience from my role at LTIMindtree where I worked with major clients like Microsoft and Kellogg's.
          </p>

          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '28px'
          }}>
            My expertise spans across multiple technologies including Python, JavaScript, C#, React.js, .NET Core.
            I'm particularly passionate about creating innovative solutions that solve real-world problems, 
            as demonstrated in my award-winning <span style={{ color: 'var(--accent)', fontWeight: '500' }}>StudySync</span> project.
          </p>

          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            marginBottom: '0'
          }}>
            When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
            or capturing moments through photography. I believe in continuous learning and staying updated 
            with the latest trends in software development and artificial intelligence.
          </p>
        </div>

        {/* Photo Gallery Section */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '24px',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Through My Lens 📷
          </h2>
        </div>
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

      <div className="container" style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '0 24px' 
      }}>
        {/* Quote Block */}
        <div style={{
          position: 'relative',
          padding: '32px 36px',
          backgroundColor: 'var(--bg-secondary)',
          borderLeft: '3px solid var(--accent)',
          borderRadius: '0 12px 12px 0',
          marginBottom: '60px'
        }}>
          <p style={{
            fontSize: '18px',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            margin: 0
          }}>
            "Code is like humor. When you have to explain it, it's bad."
          </p>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            color: 'var(--text-muted)',
            marginTop: '16px',
            marginBottom: 0
          }}>
            — Cory House
          </p>
        </div>

        {/* Quick Facts */}
        <h2 style={{
          fontSize: '24px',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '24px'
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
            { label: 'Location', value: 'Birmingham, UK' },
            { label: 'Education', value: 'MSc (Distinction)' },
            { label: 'Experience', value: '2+ Years' },
            { label: 'Focus', value: 'Full-Stack & ML' }
          ].map((item, index) => (
            <div 
              key={index}
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
            </div>
          ))}
        </div>

        {/* Interests */}
        <h2 style={{
          fontSize: '24px',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '24px'
        }}>
          Interests
        </h2>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '60px'
        }}>
          {['Full-Stack Development', 'Machine Learning', 'Photography', 'Hackathons', 'Reading'].map((interest, index) => {
            const isPhotography = interest === 'Photography';
            const Component = isPhotography ? 'a' : 'span';
            const linkProps = isPhotography ? {
              href: 'https://www.instagram.com/shreyas_jpg',
              target: '_blank',
              rel: 'noopener noreferrer'
            } : {};
            
            return (
              <Component
                key={index}
                {...linkProps}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
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

      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes smoothScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
