import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import tmntlogo from '../assets/img/tmntlogo.png';
import githubicon from '../assets/img/githubicon.png';
import linkedinicon from '../assets/img/linkedinicon.webp';
import lsuicon from '../assets/img/lsuicon.webp';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="home">
        <img src={tmntlogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className= "me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#strengths" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Strengths</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/chanhnny?tab=repositories"><img src={githubicon} alt="" /></a>
              <a href="https://www.linkedin.com/in/chanh-devin-dao-79b591270/"><img src={linkedinicon} alt="" /></a>
              <a href="https://www.lsu.edu/"><img src={lsuicon} alt="" /></a>
            </div>
            <a href="https://docs.google.com/document/d/1_FEAUiQ59jtpFAVxikdJplWvZ-7EK0E7l5nCdHwcooA/edit?usp=sharing">
            <button className="vvd" href="https://docs.google.com/document/d/1_FEAUiQ59jtpFAVxikdJplWvZ-7EK0E7l5nCdHwcooA/edit?pli=1"><span>Resume</span></button>
            </a>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}