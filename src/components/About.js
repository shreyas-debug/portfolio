import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTheme } from '../contexts/ThemeContext';
import resumePdf from '../assets/Resume(Shreyas_Satpute).pdf';

export const About = () => {
  const { isDarkMode } = useTheme();
  return (
    <section className="about" id="about" style={{ padding: "80px 0", position: "relative", backgroundColor: isDarkMode ? "#121212" : "#C6E2FF" }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ fontSize: "45px", fontWeight: "700", textAlign: "center", marginBottom: "20px", color: isDarkMode ? "#fff" : "#2C3E50" }}>About Me</h2>
                  
                  <Row style={{ marginTop: "50px" }}>
                    <Col md={8} style={{ margin: "0 auto" }}>
                      <div style={{
                        background: isDarkMode ? "#151515" : "#ffffff",
                        borderRadius: "20px",
                        padding: "40px 30px",
                        border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(91, 166, 214, 0.3)"}`,
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
                        <h3 style={{
                          fontSize: "32px",
                          fontWeight: "600",
                          color: isDarkMode ? "#AA367C" : "#5BA6D6",
                          marginBottom: "25px",
                          textAlign: "center"
                        }}>
                          Hello, I'm Shreyas Satpute
                        </h3>
                        
                        <p style={{
                          color: isDarkMode ? "#B8B8B8" : "#2C3E50",
                          fontSize: "18px",
                          lineHeight: "1.7",
                          marginBottom: "20px",
                          textAlign: "center"
                        }}>
                          I'm a passionate Software Engineer with a strong foundation in full-stack development and machine learning. Currently pursuing my MSc in Computer Science at the University of Birmingham, I bring hands-on experience from my role at LTIMindtree where I worked with major clients like Microsoft and Kellogg's.
                        </p>

                        <p style={{
                          color: isDarkMode ? "#B8B8B8" : "#2C3E50",
                          fontSize: "18px",
                          lineHeight: "1.7",
                          marginBottom: "20px",
                          textAlign: "center"
                        }}>
                          My expertise spans across multiple technologies including Python, JavaScript, C#, React.js, .NET Core, and cloud platforms like Microsoft Azure. I'm particularly passionate about creating innovative solutions that solve real-world problems, as demonstrated in my award-winning StudySync project and my work on cyberattack detection systems.
                        </p>

                        <p style={{
                          color: isDarkMode ? "#B8B8B8" : "#2C3E50",
                          fontSize: "18px",
                          lineHeight: "1.7",
                          marginBottom: "30px",
                          textAlign: "center"
                        }}>
                          When I'm not coding, you'll find me exploring new technologies, or participating in hackathons. In my free time, I enjoy photography and love to click pictures, capturing moments and exploring different perspectives through the lens. I believe in continuous learning and staying updated with the latest trends in software development and artificial intelligence.
                        </p>
                        
                        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                          <a 
                            href={resumePdf} 
                            download="Shreyas_Satpute_Resume.pdf"
                            style={{
                              background: isDarkMode 
                                ? "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)"
                                : "linear-gradient(90.21deg, #5BA6D6 -5.91%, #7F9CB1 111.58%)",
                              color: "#fff",
                              padding: "15px 30px",
                              borderRadius: "25px",
                              textDecoration: "none",
                              fontSize: "18px",
                              fontWeight: "600",
                              transition: "all 0.3s ease-in-out",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "10px"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-2px)";
                              e.currentTarget.style.boxShadow = isDarkMode 
                                ? "0 8px 25px rgba(170, 54, 124, 0.4)"
                                : "0 8px 25px rgba(91, 166, 214, 0.4)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          >
                            📄 Download Resume
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
