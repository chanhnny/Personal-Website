import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import header from "../assets/img/strengthProgramming.gif"



export const Banner = () => {
    const toRotate = ["Growth", "Culture", "Experience"];
    const period = 4000; 
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
    useEffect(() => {
      const ticker = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % toRotate.length);
      }, period);
      return () => {
        clearInterval(ticker);
      };
    }, []);
  
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Glad to see you here!</span>
              <h1>
                {"hi I'm Devin, a student at LSU studying Computer Science. I am on the lookout for an internship whose company aligns with my goals of :"}
                <span className="animated-words-container" style={{ marginLeft: '15px' }}> 
                  {toRotate.map((word, index) => (
                    <span
                      key={index}
                      className={`animated-word ${
                        index === currentWordIndex ? "active" : ""
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                  <span className="animated-box"></span>
                </span>
              </h1>
              <p>
                GPA : 3.8
                <br />
                Graduation Date : 2026
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img className="header" src={header} alt="Header img" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  };