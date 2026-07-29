import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";

import { SiExpress} from "react-icons/si";

import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img className="tech-icon-img" src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img className="tech-icon-img" src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img className="tech-icon-img" src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 size={45} color="#E34F26" />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt size={45} color="#1572B6" />
        <div className="tech-icons-text">CSS3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap size={45} color="#7952B3" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img className="tech-icon-img" src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img className="tech-icon-img" src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress size={45} color="#FFFFFF" />
        <div className="tech-icons-text">Express.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img className="tech-icon-img" src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img className="tech-icon-img" src={SQL} alt="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img className="tech-icon-img" src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGithub size={45} color="#FFFFFF" />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img className="tech-icon-img" src={Tailwind} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

        
      <Col xs={4} md={2} className="tech-icons">
        <FaWordpress size={45} color="#21759B" />
        <div className="tech-icons-text">WordPress</div>
      </Col>

    </Row>
  );
}

export default Techstack;