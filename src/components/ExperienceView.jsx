import "../style/ExperienceView.css";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Abbott Capital",
    duration: "Jun 2024 – Aug 2025",
    description: [
      "Developed a custom iOS property management application using Swift and Xcode, deployed to 6 employees for daily use in tracking property visits, expenses, and client interactions.",
      "Implemented data automation workflows leveraging Core Data and background processing to eliminate redundant manual entry and streamline property management operations.",
      "Integrated RESTful APIs with AppFolio, utilizing JSON parsing and URLSession to automate company reports, synchronize property records, and enhance data accuracy across platforms.",
    ],
  },
  {
    role: "Research Intern",
    company: "University of California, Santa Cruz",
    duration: "May 2024 – Jan 2025",
    description: [
      "Researched and evaluated the efficacy of commercial AI-detectors, benchmarking performance across domains and text lengths using metrics such as precision and recall.",
      "Identified systematic biases and limitations in existing detectors, such as overreliance on stylistic markers.",
      "Developed a custom AI-detection model achieving 80% accuracy on long-form text by applying machine learning algorithms (logistic regression, random forests, neural networks) and linguistic analysis techniques such as perplexity and stylometry.",
    ],
  },
  {
    role: "Code Coach, Summer Teacher",
    company: "theCoderSchool",
    duration: "Jan 2023 - Aug 2025",
    description: [
      "Tutored 40+ students in Python, Java, C#, and Scratch, tailoring lessons to diverse age groups and skill levels to build programming proficiency.",
      "Led an AI development summer camp, introducing students to machine learning, neural networks, and applied AI concepts through interactive projects.",
      "Guided student projects such as Unity (C#) games and Python applications, emphasizing debugging strategies, object-oriented programming (OOP), and problem-solving.",
    ],
  },
  {
    role: "Founder & Developer",
    company: "BikingBuds",
    duration: "2021 – Present",
    description: [
      "Designed and developed BikingBuds, a cross-platform mobile app (iOS & Android) that enhances biking safety and community connection.",
      "Scaled the app to 15,000+ users across 34 countries, tracking 4M+ miles and enabling 3,000+ rides created.",
      "Built key features including fall detection, route creation, and ride tracking, integrating safety-focused technology into a user-friendly interface.",
      "Secured adoption through 10 county newsletter features, 12 Safe Routes to School partnerships supporting 150 school bike programs, and 5 large-scale community events with 1,000+ riders each.",
    ],
  },
];

function ExperienceView() {
  return (
    <div className="experience-view">
      <h1>Experience</h1>
      <div className="experience-collection">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-item"
          >
            <div className="exp-header">
              {exp.role} – <span>{exp.company}</span>
            </div>
            <div className="exp-duration">{exp.duration}</div>
            <ul className="exp-description">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceView;
