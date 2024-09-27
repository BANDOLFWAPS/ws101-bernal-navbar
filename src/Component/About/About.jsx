import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="about">
        <h3>About Me</h3>
        <p>
          I am Ramon Bernal, a third-year Bachelor of Science in Information Technology student at DLL. 
          I am passionate about <span className="highlight">Computer Programming</span> and love building web applications.
        </p>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
