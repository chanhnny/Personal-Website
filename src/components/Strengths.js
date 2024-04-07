import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import strengthcommunication from "../assets/img/strengthcommunication.webp";
import strengthprogramming from "../assets/img/strengthprogramming.webp";
import strengthteamwork from "../assets/img/strengthteamwork.png";
import strengthdiscipline from "../assets/img/strengthdiscipline.png";
import {Container, Col, Row} from "react-bootstrap";

export const Strengths = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className = "strength" id = "strengths">
            <Container>
                <Row>
                    <Col>
                    <div className = "strength-box">
                        <h2>
                            My Strengths
                        </h2>
                        <p>What you can expect from me is an open minded, dedicated intern wanting to learn everyday on and off the job :)<br></br></p>
                        <Carousel responsive = {responsive} infinite={true} className='strength-slider'>
                            <div className = "item">
                                <img src={strengthprogramming} alt = "image"></img>
                                <h5>Technical strengths</h5>
                                <p>JavaScript<br></br>Java<br></br>React<br></br>HTML/CSS<br></br>Python<br></br>C</p>
                            </div>
                            <div className = "item">
                                <img src={strengthteamwork} alt = "image"></img>
                                <h5>Teamwork</h5>
                                <p>Collaboration<br></br>Adaptibility<br></br>Morale Booster</p>
                            </div>
                            <div className = "item">
                                <img src={strengthcommunication} alt = "image"></img>
                                <h5>Communication</h5>
                                <p>Active Listening<br></br>Concise<br></br>Feedback<br></br>Awareness</p>
                            </div>
                            <div className = "item4">
                                <img src={strengthdiscipline} alt = "image"></img>
                                <h5>Discipline</h5>
                                <p>Commitment<br></br>Organizational<br></br>Meeting Deadlines<br></br>Willingness to Learn!</p>
                            </div>
                            </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}