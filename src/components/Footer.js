import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer style={{
      padding: "60px 0 50px 0",
      backgroundColor: "#121212",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)"
    }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{ width: "60px", height: "auto" }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{ marginBottom: "20px" }}>
              <a 
                href="https://www.linkedin.com/in/shreyas-satpute-5817b41b3/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: "42px",
                  height: "42px",
                  background: "rgba(217, 217, 217, 0.1)",
                  display: "inline-flex",
                  borderRadius: "50%",
                  marginRight: "6px",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: "1",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  transition: "all 0.3s ease-in-out",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "rgba(170, 54, 124, 0.8)";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <img src={navIcon1} alt="LinkedIn" style={{ width: "40%", zIndex: "1" }} />
              </a>
              <a 
                href="https://github.com/shreyas-debug" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: "42px",
                  height: "42px",
                  background: "rgba(217, 217, 217, 0.1)",
                  display: "inline-flex",
                  borderRadius: "50%",
                  marginRight: "6px",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: "1",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  transition: "all 0.3s ease-in-out",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "rgba(74, 47, 189, 0.8)";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <img src={navIcon2} alt="GitHub" style={{ width: "40%", zIndex: "1" }} />
              </a>
            </div>
            <p style={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#B8B8B8",
              letterSpacing: "0.5px",
              margin: "0"
            }}>
              © 2025 Shreyas Satpute. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
