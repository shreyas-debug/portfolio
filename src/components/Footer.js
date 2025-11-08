import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p>
              © 2025 Shreyas Satpute. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
