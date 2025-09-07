import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const skills = [
    "Python", "JavaScript", "C#", "React.js", ".NET Core", "Flask", 
    "Machine Learning", "Microsoft Azure", "SQL", "Express.js", "REST APIs", "Git"
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Technical expertise in full-stack development, machine learning, and cloud technologies.<br></br> Experienced in agile methodologies and object-oriented programming principles.</p>
                        <div className="skills-grid" style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "15px",
                          marginTop: "50px",
                          padding: "0 20px",
                          justifyContent: "center"
                        }}>
                          {skills.map((skill, index) => (
                            <div key={index} className="skill-pill" style={{
                              background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                              borderRadius: "25px",
                              padding: "12px 24px",
                              color: "#fff",
                              fontSize: "16px",
                              fontWeight: "500",
                              border: "none",
                              cursor: "pointer",
                              transition: "all 0.3s ease-in-out",
                              boxShadow: "0 4px 15px rgba(170, 54, 124, 0.3)"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                              e.currentTarget.style.boxShadow = "0 8px 25px rgba(170, 54, 124, 0.5)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0) scale(1)";
                              e.currentTarget.style.boxShadow = "0 4px 15px rgba(170, 54, 124, 0.3)";
                            }}>
                              {skill}
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
