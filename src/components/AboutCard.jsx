import "../style/AboutCard.css";
import { useState, useEffect } from "react";

function AboutCard(experience) {
  return (
    <div id="about">
      <h1>About Me</h1>
      <h3>
        I’m Saahil Sukhija, an EECS student at UC Berkeley who loves building
        things that connect people and solve real problems. From creating apps
        used by thousands to researching AI detection models, I enjoy turning
        ideas into working solutions. Outside of coding, I’m passionate about
        teaching and making tech more approachable for others.
      </h3>
      <ul>
        <li>
          <span>Languages: </span>Swift, Python, Java, JavaScript
        </li>
        <li>
          <span>Frameworks & Tools: </span>React, Pytorch, Node.js, Django
        </li>
        <li>
          <span>Specialties: </span>Full-stack development, mobile apps, AI/ML,
          cybersecurity
        </li>
        <li>
          <span>Others: </span>Git, SQL, Firebase, REST APIs
        </li>
      </ul>
    </div>
  );
}

export default AboutCard;
