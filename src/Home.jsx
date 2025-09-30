import "./style/Home.css";
import { useState, useEffect } from "react";
import TitleCard from "./components/TitleCard";
import ExperienceCard from "./components/AboutCard";
import ProjectsView from "./components/ProjectsView";
import ExperienceView from "./components/ExperienceView";
import GetInTouchView from "./components/GetInTouchView";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <TitleCard />
      <ExperienceCard />
      <ProjectsView />
      <ExperienceView />
      <GetInTouchView />
      <Footer />
    </>
  );
}

export default Home;
