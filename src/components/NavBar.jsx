import { Link } from "react-router-dom";
import "../style/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Saahil Sukhija</h1>
      </div>
      <div className="navbar-links">
        <span className="link">
          <img
            alt="GitHub"
            loading="lazy"
            src="../src/assets/github-mark.svg"
            className="gitImg"
          />
        </span>
        <span className="link">
          <img
            alt="LinkedIn"
            loading="lazy"
            src="../src/assets/linkedin.svg"
            className="linImg"
          />
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
