import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {githubUrl && (
            <div className="mt-3">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm"
                style={{
                  border: '1px solid #fff',
                  color: '#fff',
                  padding: '8px 16px',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#121212';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#fff';
                }}
              >
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  )
}
