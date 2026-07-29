import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Sakshi Deosale</span> from{" "}
            <span className="purple">Maharashtra, India</span>.
            <br />
            I recently completed my{" "}
            <span className="purple">
              B.Tech in Computer Science and Engineering
            </span>{" "}
            with a <span className="purple">CGPA of 9.25</span> from{" "}
            <span className="purple">
              Walchand Institute of Technology, Solapur
            </span>.
            <br />
            I am passionate about{" "}
            <span className="purple">
              Full-Stack Web Development, Java Development, and AI-powered
              applications
            </span>
            . I enjoy building scalable and user-friendly software solutions while
            continuously learning new technologies.
            <br />
            During my journey, I also worked with{" "}
            <span className="purple">WordPress</span>, where I designed and developed
            responsive websites, gaining hands-on experience in website customization,
            content management, and creating user-friendly web solutions.
            <br />
            <br />
            Beyond coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving DSA & LeetCode Problems 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Full-Stack & AI Projects 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and let your work speak for itself."
          </p>
        
          <footer className="blockquote-footer">Sakshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
