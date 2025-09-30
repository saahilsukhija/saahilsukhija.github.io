import React from "react";
import "../style/GetInTouchView.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function GetInTouchView() {
  return (
    <div className="get-in-touch-view">
      <h1>Get In Touch</h1>
      <p>Feel free to reach out 👋</p>
      <div className="contact-buttons">
        <a
          href="mailto:saahil_sukhija@berkeley.edu"
          className="contact-btn email"
          title="Email Me"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/saahil-sukhija-94441825b/"
          className="contact-btn linkedin"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/saahilsukhija"
          className="contact-btn github"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default GetInTouchView;
