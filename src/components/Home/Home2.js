import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <b className="purple">Sakshi Deosale</b>, a recent{" "}
              <b className="purple">B.Tech Computer Science and Engineering graduate (2026)</b>{" "}
              with a CGPA of <b className="purple">9.25</b>. I am passionate about
              building innovative software solutions and continuously learning new
              technologies.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, Python, JavaScript, SQL, React.js, Node.js, Express.js, and
                  MongoDB{" "}
                </b>
              </i>
              , with a strong foundation in Data Structures & Algorithms and Full-Stack
              Web Development.
              <br />
              <br />
              My areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Web Applications, AI-Powered Solutions, and Scalable
                  Software Systems.
                </b>
              </i>
              {" "}I enjoy solving real-world problems by building efficient,
              user-friendly, and impactful applications.
              <br />
              <br />
              Whenever possible, I love working with
              <b className="purple"> React.js </b>,{" "}
              <b className="purple">Node.js</b>,{" "}
              <b className="purple">Express.js</b>, and{" "}
              <b className="purple">MongoDB</b> while continuously improving my skills
              through projects, coding challenges, and exploring emerging technologies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
