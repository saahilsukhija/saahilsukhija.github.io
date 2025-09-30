import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Saahil Sukhija. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/saahilsukhija" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/saahilsukhija" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:saahil@example.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
