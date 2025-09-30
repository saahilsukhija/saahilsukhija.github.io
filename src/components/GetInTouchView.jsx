import React from "react";
import "../style/GetInTouchView.css";

function GetInTouchView() {
  return (
    <div className="get-in-touch-view">
      <h1>Get In Touch</h1>
      <p>
        Interested in collaborating, learning more, or just want to say hi? 
        Drop me a message and I’ll get back to you as soon as possible.
      </p>
      <a href="mailto:saahil@example.com" className="contact-btn">
        Email Me
      </a>
      <a href="https://linkedin.com/in/saahilsukhija" className="contact-btn">
        LinkedIn
      </a>
      <a href="https://github.com/saahilsukhija" className="contact-btn">
        GitHub
      </a>
    </div>
  );
}

export default GetInTouchView;
