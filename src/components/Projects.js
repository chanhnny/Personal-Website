import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import snakeProject from '../assets/img/snakeProject.png';
import workoutgeneratorProject from '../assets/img/workoutgeneratorProject.png';
import calorietrackerProject from '../assets/img/calorietrackerProject.png';
import personalwebsiteProject from '../assets/img/personalwebsiteProject.png';


export const Projects = () => {

    const projects = [
        {
          title: "ChoGath's Revenge",
          description: "Parody of the iconic snake game! Just using things from another popular game I thought would be funny.",
          imgUrl: snakeProject,
          className: "chogathProject",
        },
        {
          title: "Workout Generator",
          description: "A Java program that generates a workout plan based on the user's preferences. Perfect for the average brogrammer!",
          imgUrl: workoutgeneratorProject,
          className: "workoutProject",
        },
        {
          title: "Calorie Tracker", 
          description: "A React app that lets users easily track their calories from individual meals to total calories for the whole day.",
          imgUrl: calorietrackerProject,
          className: "calorieProject",
        },
        {
          title: "My Personal Website",
          description: "The website you're currently looking at right now! The goal of this website is to reach out to recruiters like you and prove my skills. If not, I hope you enjoyed the turtles!",
          imgUrl: personalwebsiteProject,
          className: "websiteProject",
        },
      ];

      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                    <h2>Projects</h2>
                    <p>Here are some of my personal projects<br></br>*when I don't have school projects :')*<br></br>Hover over them to see what they're about!</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <p></p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }