import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTheme } from '../contexts/ThemeContext';

export const Experience = () => {
  const { isDarkMode } = useTheme();
  const experiences = [
    {
      title: "Software Engineer - I",
      company: "LTIMindtree",
      location: "Bangalore, India",
      duration: "Sept 2022 – Sept 2024",
      description: [
        "Collaborated on a project for Microsoft, a key client, within the internal query processing team, utilizing .NET to migrate and convert 500+ legacy test cases from SQL to C#",
        "Analyzed existing test cases to ensure 100% accuracy in translation, preserving functionality and improving overall testing efficiency",
        "Contributed to the initial development of an automated .NET feature designed to streamline the migration process, aiming to eliminate manual conversion and reduce errors for an anticipated speed increase of up to 50%",
        "Conducted sanity testing on over 100 features of a web application for Kellogg's"
      ],
      technologies: [".NET Core", "C#", "SQL", "Microsoft Azure", "Agile/Scrum"]
    },
    {
      title: "Software Engineer Intern",
      company: "LTIMindtree",
      location: "Bangalore, India", 
      duration: "Mar 2022 – May 2022",
      description: [
        "Completed a 3-month internship, gaining in-depth knowledge of the .NET framework and features for web development",
        "Contributed to a project that improved development efficiency",
        "Gained hands-on experience in the .NET framework and project workflows"
      ],
      technologies: [".NET Framework", "C#", "Web Development"]
    }
  ];

  const education = [
    {
      title: "Master of Science, Computer Science",
      institution: "University of Birmingham",
      location: "Birmingham, United Kingdom",
      duration: "Sept 2024 - Sept 2025",
      description: "Pursuing advanced studies in computer science with focus on modern software development practices and emerging technologies"
    },
    {
      title: "Bachelor of Engineering, Electronics and Communication",
      institution: "Dayananda Sagar Academy of Technology and Management",
      location: "Bangalore, India",
      duration: "Aug 2018 - July 2022",
      description: "Graduated with GPA: 8.06, with strong foundation in electronics, communication systems, and programming fundamentals"
    }
  ];

  // Combine and sort all experiences and education chronologically
  const timelineItems = [
    {
      type: "education",
      title: "Master of Science, Computer Science",
      institution: "University of Birmingham",
      location: "Birmingham, United Kingdom",
      duration: "Sept 2024 - Sept 2025",
      description: "Pursuing advanced studies in computer science with focus on modern software development practices and emerging technologies",
      year: "2024"
    },
    {
      type: "experience",
      title: "Software Engineer - I",
      company: "LTIMindtree",
      location: "Bangalore, India",
      duration: "Sept 2022 – Sept 2024",
      description: [
        "Collaborated on a project for Microsoft, a key client, within the internal query processing team, utilizing .NET to migrate and convert 500+ legacy test cases from SQL to C#",
        "Analyzed existing test cases to ensure 100% accuracy in translation, preserving functionality and improving overall testing efficiency",
        "Contributed to the initial development of an automated .NET feature designed to streamline the migration process, aiming to eliminate manual conversion and reduce errors for an anticipated speed increase of up to 50%",
        "Conducted sanity testing on over 100 features of a web application for Kellogg's"
      ],
      technologies: [".NET Core", "C#", "SQL", "Microsoft Azure", "Agile/Scrum"],
      year: "2022"
    },
    {
      type: "experience",
      title: "Software Engineer Intern",
      company: "LTIMindtree",
      location: "Bangalore, India", 
      duration: "Mar 2022 – May 2022",
      description: [
        "Completed a 3-month internship, gaining in-depth knowledge of the .NET framework and features for web development",
        "Contributed to a project that improved development efficiency",
        "Gained hands-on experience in the .NET framework and project workflows"
      ],
      technologies: [".NET Framework", "C#", "Web Development"],
      year: "2022"
    },
    {
      type: "education",
      title: "Bachelor of Engineering, Electronics and Communication",
      institution: "Dayananda Sagar Academy of Technology and Management",
      location: "Bangalore, India",
      duration: "Aug 2018 - July 2022",
      description: "Graduated with GPA: 8.06, with strong foundation in electronics, communication systems, and programming fundamentals",
      year: "2018"
    }
  ];

  return (
    <section className="experience" id="experience" style={{ padding: "80px 0", position: "relative", backgroundColor: isDarkMode ? "#121212" : "#C6E2FF" }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ fontSize: "45px", fontWeight: "700", textAlign: "center", marginBottom: "20px", color: isDarkMode ? "#fff" : "#2C3E50" }}>Experience & Education</h2>
                  
                  <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}>
                    {/* Timeline Line - Left Side (Hidden on mobile) */}
                    <div className="timeline-line" style={{
                      position: "absolute",
                      left: "80px",
                      top: "0",
                      bottom: "0",
                      width: "2px",
                      background: isDarkMode 
                        ? "linear-gradient(180deg, #AA367C 0%, #4A2FBD 100%)"
                        : "var(--timeline-line)",
                      zIndex: "1"
                    }}></div>
                    
                    {timelineItems.map((item, index) => (
                      <div key={index} className="timeline-item" style={{
                        position: "relative",
                        marginBottom: "60px",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "120px"
                      }}>
                        {/* Timeline Dot (Hidden on mobile) */}
                        <div className="timeline-dot" style={{
                          position: "absolute",
                          left: "71px",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: item.type === "experience" 
                            ? "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)"
                            : "linear-gradient(90.21deg, #4A2FBD -5.91%, #AA367C 111.58%)",
                          border: `4px solid ${isDarkMode ? "#121212" : "#ffffff"}`,
                          zIndex: "2",
                          boxShadow: isDarkMode 
                            ? "0 0 0 4px rgba(255, 255, 255, 0.1)"
                            : "0 0 0 4px rgba(44, 62, 80, 0.1)"
                        }}></div>
                        
                        {/* Content Card - Rectangle */}
                        <div className="timeline-content" style={{
                          width: "100%",
                          background: isDarkMode ? "#151515" : "#ffffff",
                          borderRadius: "0px",
                          padding: "30px",
                          border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(91, 166, 214, 0.3)"}`,
                          transition: "all 0.3s ease-in-out",
                          position: "relative"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-5px)";
                          e.currentTarget.style.borderColor = item.type === "experience" 
                            ? "rgba(170, 54, 124, 0.5)" 
                            : "rgba(74, 47, 189, 0.5)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                        }}>
                          
                          
                          {/* Content */}
                          <div style={{ marginTop: "10px" }}>
                            <h4 style={{ 
                              fontSize: "20px", 
                              fontWeight: "600", 
                              color: isDarkMode ? "#fff" : "#2C3E50", 
                              marginBottom: "8px" 
                            }}>
                              {item.title}
                            </h4>
                            
                            <h5 style={{ 
                              fontSize: "18px", 
                              fontWeight: "500", 
                              color: item.type === "experience" 
                                ? (isDarkMode ? "#AA367C" : "#5BA6D6")
                                : (isDarkMode ? "#4A2FBD" : "#7F9CB1"), 
                              marginBottom: "5px" 
                            }}>
                              {item.company || item.institution}
                            </h5>
                            
                            <p style={{ 
                              color: isDarkMode ? "#B8B8B8" : "#2C3E50", 
                              fontSize: "14px", 
                              margin: "0 0 10px 0" 
                            }}>
                              {item.location}
                            </p>
                            
                            <div style={{ 
                              background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(91, 166, 214, 0.1)",
                              padding: "8px 12px",
                              borderRadius: "0px",
                              fontSize: "12px",
                              fontWeight: "500",
                              color: isDarkMode ? "#B8B8B8" : "#2C3E50",
                              marginBottom: "15px",
                              display: "inline-block"
                            }}>
                              {item.duration}
                            </div>
                            
                            {item.type === "experience" ? (
                              <>
                                <ul style={{ marginBottom: "15px", paddingLeft: "15px" }}>
                                  {item.description.map((desc, descIndex) => (
                                    <li key={descIndex} style={{ 
                                      color: isDarkMode ? "#B8B8B8" : "#2C3E50", 
                                      fontSize: "14px", 
                                      lineHeight: "1.5", 
                                      marginBottom: "5px" 
                                    }}>
                                      {desc}
                                    </li>
                                  ))}
                                </ul>
                                
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                  {item.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} style={{
                                      background: isDarkMode ? "rgba(170, 54, 124, 0.2)" : "rgba(91, 166, 214, 0.2)",
                                      color: isDarkMode ? "#AA367C" : "#5BA6D6",
                                      padding: "3px 8px",
                                      borderRadius: "0px",
                                      fontSize: "11px",
                                      fontWeight: "500",
                                      border: isDarkMode ? "1px solid rgba(170, 54, 124, 0.3)" : "1px solid rgba(91, 166, 214, 0.3)"
                                    }}>
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <p style={{ 
                                color: isDarkMode ? "#B8B8B8" : "#2C3E50", 
                                fontSize: "14px", 
                                lineHeight: "1.5", 
                                margin: "0" 
                              }}>
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}