import { Col } from "react-bootstrap";
import { useTheme } from '../contexts/ThemeContext';

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  const { isDarkMode } = useTheme();
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
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
                  border: isDarkMode ? '1px solid #AA367C' : '1px solid #5BA6D6',
                  color: isDarkMode ? '#AA367C' : '#5BA6D6',
                  backgroundColor: 'transparent',
                  padding: '8px 16px',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = isDarkMode ? '#AA367C' : '#5BA6D6';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = isDarkMode ? '#AA367C' : '#5BA6D6';
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
