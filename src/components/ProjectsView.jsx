import "../style/ProjectsView.css";
import { FaGithub } from "react-icons/fa";
import { SiApple, SiGoogleplay } from "react-icons/si";

function ProjectsView() {
  return (
    <div className="projects-view">
      <h1>Projects</h1>
      <div className="projects-view-collection">
        <ProjectCard
          project={{
            name: "BikingBuds",
            description: "A social biking app with 15k+ users across 9 cities.",
            image: "/bikingbuds-logotext.png",
            github: "https://github.com/saahilsukhija/bikingbuds",
            appStore: "https://apps.apple.com/us/app/bikingbuds/id1597045542",
            playStore:
              "https://play.google.com/store/apps/details?id=com.SaahilSukhija.BikingBuds&hl=en_US",
          }}
        />
        <ProjectCard
          project={{
            name: "BikingBuds",
            description: "A social biking app with 15k+ users across 9 cities.",
            image: "/bikingbuds-logotext.png",
            github: "https://github.com/saahilsukhija/bikingbuds",
            appStore: "https://apps.apple.com/us/app/bikingbuds/id1597045542",
            playStore:
              "https://play.google.com/store/apps/details?id=com.SaahilSukhija.BikingBuds&hl=en_US",
          }}
        />
        <ProjectCard
          project={{
            name: "BikingBuds",
            description: "A social biking app with 15k+ users across 9 cities.",
            image: "/bikingbuds-logotext.png",
            github: "https://github.com/saahilsukhija/bikingbuds",
            appStore: "https://apps.apple.com/us/app/bikingbuds/id1597045542",
            playStore:
              "https://play.google.com/store/apps/details?id=com.SaahilSukhija.BikingBuds&hl=en_US",
          }}
        />
        <ProjectCard
          project={{
            name: "BikingBuds",
            description: "A social biking app with 15k+ users across 9 cities.",
            image: "/bikingbuds-logotext.png",
            github: "https://github.com/saahilsukhija/bikingbuds",
            appStore: "https://apps.apple.com/us/app/bikingbuds/id1597045542",
            playStore:
              "https://play.google.com/store/apps/details?id=com.SaahilSukhija.BikingBuds&hl=en_US",
          }}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src={project.image}
          alt={project.name}
        />
      </div>
      <div className="project-content">
        <h1 className="project-title">{project.name}</h1>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          {project.demo && (
            <button
              className="link-btn"
              onClick={() => window.open(project.demo, "_blank")}
            >
              Live Demo
            </button>
          )}
          {project.github && (
            <button
              className="link-btn github-btn"
              onClick={() => window.open(project.github, "_blank")}
            >
              <FaGithub className="github-icon" />
            </button>
          )}
          {project.appStore && (
            <button
              className="link-btn apple-btn"
              onClick={() => window.open(project.appStore, "_blank")}
            >
              <SiApple className="store-icon" />
            </button>
          )}
          {project.playStore && (
            <button
              className="link-btn google-btn"
              onClick={() => window.open(project.playStore, "_blank")}
            >
              <SiGoogleplay className="store-icon" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsView;
