import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tanishq Website Clone"
              description="Tanishq is a online retail store which deals in both mens and womens jewellery as well as diamonds, This is a full stack project build by me and my team menbers using Node.js, MongoDB and Express.js"
              link="https://heuristic-minsky-e408f0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Resume Builder"
              description="My personal Project build with React which helps the user to create their resumes according to their needs."
              link="https://github.com/sunnyshk/Resume-Builder-App/tree/master/ResumeBuilder/resumeBuilder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Nykaa Website Clone"
              description="Nykaa is an online web based retail store which is specialized in cosmetic & beauty products for men and women. This is a collaborative project done in a team of 6 members including myself within a span of 6 days.
              "
              link="https://nykaaproject.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
