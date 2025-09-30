import React from "react";
import "../style/ExperienceView.css";

function ExperienceView() {
  const experiences = [
    {
      role: "Software Intern",
      company: "TechCorp",
      duration: "June 2024 - Aug 2024",
      description: "Worked on a React app to improve performance and UX.",
    },
    {
      role: "Research Assistant",
      company: "UC Santa Cruz",
      duration: "Sep 2023 - Dec 2023",
      description: "Analyzed AI detector accuracy and built testing pipelines.",
    },
    {
      role: "App Developer",
      company: "BikingBuds",
      duration: "Jan 2023 - Present",
      description: "Developed and marketed a social biking app with 15k+ users.",
    },
  ];

  return (
    <div className="experience-view">
      <h1>Experience</h1>
      <div className="experience-collection">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h2 className="exp-role">{exp.role}</h2>
            <h3 className="exp-company">{exp.company}</h3>
            <p className="exp-duration">{exp.duration}</p>
            <p className="exp-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceView;
