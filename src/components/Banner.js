import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useTheme } from '../contexts/ThemeContext';
import headerImg from '../assets/img/header-img.png';
import bannerBgDark from '../assets/img/banner-bg.png';
import bannerBgLight from '../assets/img/banner-bg-light.png';

export const Banner = () => {
    const { isDarkMode } = useTheme();
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "software developer", "web developer", "web designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)  
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); 
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section 
            className="banner" 
            id="home"
            style={{
                backgroundImage: `url(${isDarkMode ? bannerBgDark : bannerBgLight})`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >  
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <h1>
                        <span style={{ color: isDarkMode ? '#fff' : '#2C3E50' }}>
                            {`Hi! I'm Shreyas Satpute a `}
                        </span>
                        <span className="wrap" style={{ color: isDarkMode ? '#fff' : '#2C3E50' }}>
                            {text}
                        </span>
                    </h1>
                    <p style={{ color: isDarkMode ? '#B8B8B8' : '#2C3E50' }}>
                        I am passionate about web development and love creating beautiful and functional websites.
                    </p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                </Col>
            </Row>
        </Container>
        </section>
    )
}
