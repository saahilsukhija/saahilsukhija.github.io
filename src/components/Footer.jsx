import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Saahil Sukhija. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
