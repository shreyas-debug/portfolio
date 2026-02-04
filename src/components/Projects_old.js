import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useTheme } from '../contexts/ThemeContext';
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "StudySync",
      description: "Full-stack web application connecting students with compatible study partners. Won Public Choice Award at Birminghack 1.0. Features matching algorithm using cosine similarity.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/shreyas-debug/StudySync",
      technologies: ["React", "Node.js", "MongoDB", "Machine Learning"],
    },
    {
      title: "Cyberattack-Detector",
      description: "Advanced ML-based cyberattack detection system with real-time SMS alerts. Combines Python ML algorithms with Arduino/GSM hardware integration programmed in C++.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/shreyas-debug/Cyberattack-Detector",
      technologies: ["Python", "Machine Learning", "Arduino", "C++"],
    },
    {
      title: "PromptGuide",
      description: "Python-based application for AI prompt management and optimization. Features intelligent prompt suggestions and performance analytics for better AI interactions.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/shreyas-debug/PromptGuide",
      technologies: ["Python", "AI/ML", "Data Analytics"],
    },
    {
      title: "PizzaHub",
      description: "C# desktop application for pizza ordering and management system. Features user-friendly interface, order tracking, and inventory management capabilities.",
      imgUrl: projImg4,
      githubUrl: "https://github.com/shreyas-debug/PizzaHub",
      technologies: ["C#", ".NET", "Desktop App"],
    },
    {
      title: "To-Do-List Chrome Extension",
      description: "JavaScript-based Chrome extension for task management. Provides seamless productivity tools with offline capabilities and cross-device synchronization.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/shreyas-debug/To-Do-List",
      technologies: ["JavaScript", "Chrome Extension", "HTML/CSS"],
    },
    {
      title: "Event-Management System",
      description: "HTML-based event management platform for organizing and tracking events. Features responsive design and comprehensive event planning tools.",
      imgUrl: projImg6,
      githubUrl: "https://github.com/shreyas-debug/Event-Management",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my portfolio of innovative projects spanning full-stack development, machine learning, and enterprise software solutions. Each project demonstrates my technical expertise and problem-solving abilities across diverse domains.</p>
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration"></img>
    </section>
  )
}
