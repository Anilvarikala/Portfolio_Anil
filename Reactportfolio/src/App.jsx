import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Anil Varikala</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#achievements">Achievements</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <motion.section
        className="hero-section bg-primary text-light d-flex align-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Container>
          <h1 className="display-4 fw-bold">Anil Varikala</h1>
          <p className="lead">Full Stack Developer | Problem Solver | Innovator</p>
          <div className="social-links mt-3">
            <a href="https://linkedin.com/in/varikalaanil" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span> | </span>
            <a href="https://github.com/varikalaanil" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span> | </span>
            <a href="#portfolio" target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </div>
        </Container>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Technical Skills</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="skill-card text-center">
                <Card.Body>
                  <Card.Title>Languages</Card.Title>
                  <Card.Text>Java, Python, C, SQL, JavaScript</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="skill-card text-center">
                <Card.Body>
                  <Card.Title>Frameworks</Card.Title>
                  <Card.Text>React, Bootstrap, Firebase</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="skill-card text-center">
                <Card.Body>
                  <Card.Title>Tools</Card.Title>
                  <Card.Text>Git, VS Code, IntelliJ, PyCharm</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-5"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <h2 className="text-center mb-4">Experience</h2>
          <Card className="exp-card">
            <Card.Body>
              <Card.Title>Frontend Developer @ Codealpha</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">June 2024 - July 2024</Card.Subtitle>
              <ul>
                <li>Boosted user engagement by 30% with React web apps</li>
                <li>Achieved 95% cross-device compatibility</li>
                <li>Deployed applications using GitHub & Vercel</li>
              </ul>
            </Card.Body>
          </Card>
        </Container>
      </motion.section>

      {/* Projects Section */}
      <motion.section id="projects" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Featured Projects</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>Doubt AI</Card.Title>
                  <Card.Text>
                    <span className="badge bg-primary">React</span>{" "}
                    <span className="badge bg-success">Gemini API</span>{" "}
                    <span className="badge bg-info">CSS</span>
                  </Card.Text>
                  <Card.Text>AI chatbot with 98% response accuracy using Gemini API integration.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>Employee Management</Card.Title>
                  <Card.Text>
                    <span className="badge bg-primary">Firebase</span>{" "}
                    <span className="badge bg-success">CRUD</span>{" "}
                    <span className="badge bg-info">React</span>
                  </Card.Text>
                  <Card.Text>Full-stack app with real-time Firebase backend and 99.9% uptime.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Achievements Section */}
      <section id="achievements" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Achievements</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="achievement-card text-center">
                <Card.Body>
                  <Card.Title>LeetCode</Card.Title>
                  <Card.Text>50+ Days Streak | 300+ Problems Solved</Card.Text>
                  <Card.Text>Contest Rating: 1451</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="achievement-card text-center">
                <Card.Body>
                  <Card.Title>Certifications</Card.Title>
                  <Card.Text>IIT Roorkee Python (76%)</Card.Text>
                  <Card.Text>DSA Java - Apna College</Card.Text>
                  <Card.Text>HackerRank Problem Solving</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <Container>
          <h4>Coding Profiles</h4>
          <div className="coding-profiles">
            <a href="#" target="_blank" rel="noopener noreferrer">LeetCode</a> •
            <a href="#" target="_blank" rel="noopener noreferrer">CodeChef</a> •
            <a href="#" target="_blank" rel="noopener noreferrer">HackerRank</a>
          </div>
          <p className="mt-3">© 2024 Anil Varikala. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;

