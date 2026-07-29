import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wanderlust from "../../Assets/Projects/wanderlust.jpg";
import college from "../../Assets/Projects/College.jpg";
import QRimage from "../../Assets/Projects/QRProject.png";
import portfolio from "../../Assets/Projects/portfolio.jpg"


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
              imgPath={wanderlust}
              isBlog={false}
              title="WanderLust – Airbnb Clone"
              description="Wanderlust is a full-stack travel accommodation web application inspired by Airbnb that allows users to discover, explore, and manage travel property listings. The platform enables users to browse destinations, view detailed property information, create and manage listings, and share reviews and ratings through a secure and user-friendly interface. It is designed to simplify property listing management while providing an engaging experience for travelers and hosts." 
              ghLink="https://github.com/SakshiDeosale/Airbnb-Clone"
              demoLink="https://airbnb-clone-feo0.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QRimage}
              isBlog={false}
              title="QR-Based Emergency Information Sharing System"
              description="Developed a QR-Based Emergency Information Sharing System, a web application that enables users to securely store personal, medical, vehicle, insurance, and emergency contact information linked to a unique QR code. During emergencies, authorized responders can scan the QR code to instantly access critical details, helping reduce response time and improve decision-making. The system also includes secure user authentication and role-based access control for safe and efficient information management." 
              ghLink="https://github.com/SakshiDeosale/QR-CodeBased-Emergency-Project"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={college}
              isBlog={false}
              title="Academic Project Explorer"
              description="Developed Academic Project Explorer, a full-stack web application for the CSE department that serves as a centralized repository of academic projects. The platform enables students to search and explore previous projects to avoid duplication, while faculty members can securely add, update, and manage project records through role-based access, providing an efficient and organized project management system."            
              ghLink="https://github.com/SakshiDeosale/Academic-Project-Explorer-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Developed a responsive personal portfolio website using React.js to showcase my projects, skills, education, and contact information."
              ghLink="https://github.com/SakshiDeosale/SakshiDeosale-Portfolio"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
