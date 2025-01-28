import React from "react";
import "./styles.css";
import "./mediaqueries.css";
import profile1 from "./assets/me2.jpg";
import profile2 from "./assets/anil_passphoto.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import experience from "./assets/experience.png";
import education from "./assets/education.png";
import checkmark from "./assets/checkmark.png";

function App() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("open");
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Anil</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Varikala Anil</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="profile">
        <div className="section__pic-container">
          <img src={profile1} alt="Varikala Anil" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Varikala Anil</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open("ANIL_RESUME_MODIFIED.pdf")}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="icon"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/anil-varikala-52b640254/")
              }
            />
            <img
              src={github}
              alt="GitHub"
              className="icon"
              onClick={() =>
                (window.location.href = "https://github.com/Anilvarikala")
              }
            />
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={profile2} alt="Profile" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={experience} alt="Experience" className="icon" />
                <h3>Experience</h3>
                <p>
                  2 Months Tutor(JEE)
                  <br />
                  Frontend Developer (Code Alpha)
                </p>
              </div>
              <div className="details-container">
                <img src={education} alt="Education" className="icon" />
                <h3>Education</h3>
                <p>
                  Class 12th - Shivani Jr College
                  <br />
                  B.Tech - SNIST
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello! I'm Anil, a Computer Science undergraduate passionate
                about solving real-world problems with technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Novice</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  {" "}
                  <h3>Github</h3>
                  <p>Novice</p>
                </div>
              </article>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Programming</h2>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>C</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  {" "}
                  <h3>Java</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" class="icon" />
                <div>
                  <h3>Data Structures</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Password Manager</h2>
            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/Anilvarikala/password_manager")
              }
            >
              GitHub
            </button>
            <button
              onClick={() =>
                (window.location.href =
                  "https://anilvarikala.github.io/password_manager/")
              }
            >
              Live Demo
            </button>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Weather App</h2>
            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/Anilvarikala/weather")
              }
            >
              GitHub
            </button>
            <button
              onClick={() =>
                (window.location.href =
                  "https://anilvarikala.github.io/weather/")
              }
            >
              Live Demo
            </button>
          </div>
        </div>
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <p>
              <a href="mailto:varikalaanil@gmail.com">Mail me</a>
            </p>
          </div>
          <div className="contact-info-container">
            <p>
              <a href="https://www.linkedin.com/in/anil-varikala-52b640254/">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>Copyright &#169; 2024 Varikala Anil. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
