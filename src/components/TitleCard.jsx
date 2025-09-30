import "../style/TitleCard.css";
import { useState, useEffect } from "react";

function TitleCard() {
  const subtitles = ["EECS @ UC Berkeley", "Developer", "Researcher"];
  const [currentText, setCurrentText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY <= 3);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const fullText = subtitles[subtitleIndex];
    let typingSpeed = 150; //1 letter every 150ms

    if (isDeleting) {
      typingSpeed /= 2;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return fullText.substring(0, prev.length - 1);
        } else {
          return fullText.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 4000); // wait 4 seconds, then delete
      } else if (isDeleting && currentText.length == 0) {
        setIsDeleting(false);
        setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, subtitleIndex, subtitles]);

  return (
    <div className="title-container">
      <div className="content">
        <img src="https://media.licdn.com/dms/image/v2/D5603AQGqcT02slV8DQ/profile-displayphoto-shrink_400_400/B56ZOaPBBkGgAg-/0/1733459448152?e=1761177600&v=beta&t=Bk9d72q19fELJssKdzUmQOpD4Hr3QQaIpsiqqqUE0So" />
        <div className="title-container-text">
          <h2 className="title-container-name">
            Hi, I'm <span>Saahil</span>
          </h2>
          <h3
            className="title-container-subtitle"
            id="title-container-subtitle"
          >
            {currentText}
            <span className="cursor">_</span>
          </h3>
          <div className="title-container-buttons">
            <button id="projects">Projects</button>
            <button id="resume">Resume</button>
          </div>
        </div>
      </div>
      <div
        className={`scroll-down ${isLoaded ? "visible" : ""} ${
          showArrow ? "" : "scrolled"
        }`}
      >
        <a href="#about">
          <svg
            className="arrow-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default TitleCard;
