import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
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
      title: "MSc, Computer Science",
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

  return (
    <section className="experience" id="experience" style={{ padding: "80px 0", position: "relative", backgroundColor: "#121212" }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ fontSize: "45px", fontWeight: "700", textAlign: "center", marginBottom: "20px", color: "#fff" }}>Experience & Education</h2>
                  
                  {/* Work Experience Section */}
                  <div style={{ marginBottom: "60px" }}>
                    <h3 style={{ 
                      fontSize: "32px", 
                      fontWeight: "600", 
                      textAlign: "center", 
                      marginBottom: "40px", 
                      color: "#fff",
                      background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}>
                      Work Experience
                    </h3>
                    
                    {experiences.map((exp, index) => (
                      <div key={index} style={{
                        background: "#151515",
                        borderRadius: "20px",
                        padding: "40px 30px",
                        marginBottom: "30px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s ease-in-out"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.borderColor = "rgba(170, 54, 124, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap" }}>
                          <div>
                            <h4 style={{ fontSize: "24px", fontWeight: "600", color: "#fff", marginBottom: "5px" }}>{exp.title}</h4>
                            <h5 style={{ fontSize: "20px", fontWeight: "500", color: "#AA367C", marginBottom: "5px" }}>{exp.company}</h5>
                            <p style={{ color: "#B8B8B8", fontSize: "16px", margin: "0" }}>{exp.location}</p>
                          </div>
                          <div style={{ 
                            background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                            padding: "8px 16px",
                            borderRadius: "20px",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#fff"
                          }}>
                            {exp.duration}
                          </div>
                        </div>
                        
                        <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                          {exp.description.map((desc, descIndex) => (
                            <li key={descIndex} style={{ 
                              color: "#B8B8B8", 
                              fontSize: "16px", 
                              lineHeight: "1.6", 
                              marginBottom: "8px" 
                            }}>
                              {desc}
                            </li>
                          ))}
                        </ul>
                        
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} style={{
                              background: "rgba(170, 54, 124, 0.2)",
                              color: "#AA367C",
                              padding: "4px 12px",
                              borderRadius: "15px",
                              fontSize: "12px",
                              fontWeight: "500",
                              border: "1px solid rgba(170, 54, 124, 0.3)"
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Education Section */}
                  <div>
                    <h3 style={{ 
                      fontSize: "32px", 
                      fontWeight: "600", 
                      textAlign: "center", 
                      marginBottom: "40px", 
                      color: "#fff",
                      background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}>
                      Education
                    </h3>
                    
                    {education.map((edu, index) => (
                      <div key={index} style={{
                        background: "#151515",
                        borderRadius: "20px",
                        padding: "40px 30px",
                        marginBottom: "30px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s ease-in-out"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.borderColor = "rgba(74, 47, 189, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap" }}>
                          <div>
                            <h4 style={{ fontSize: "24px", fontWeight: "600", color: "#fff", marginBottom: "5px" }}>{edu.title}</h4>
                            <h5 style={{ fontSize: "20px", fontWeight: "500", color: "#4A2FBD", marginBottom: "5px" }}>{edu.institution}</h5>
                            <p style={{ color: "#B8B8B8", fontSize: "16px", margin: "0" }}>{edu.location}</p>
                          </div>
                          <div style={{ 
                            background: "linear-gradient(90.21deg, #4A2FBD -5.91%, #AA367C 111.58%)",
                            padding: "8px 16px",
                            borderRadius: "20px",
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#fff"
                          }}>
                            {edu.duration}
                          </div>
                        </div>
                        
                        <p style={{ 
                          color: "#B8B8B8", 
                          fontSize: "16px", 
                          lineHeight: "1.6", 
                          margin: "0" 
                        }}>
                          {edu.description}
                        </p>
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
