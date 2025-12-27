import Heading from "../sections/Heading";
import "./Homepage.css";
import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";
import CourseNotes from "../sections/CourseNotes";
import Resume from "../sections/Resume";
import Footer from "../sections/Footer";
import { useRef } from "react";
import AngleDown from "../../shared/AngleDown";

const Homepage = () => {
  return <div className="home-container">
    <Heading/>
    
    <AboutMe />
    <Projects />
    <CourseNotes />
    <Resume />
    <Footer />
  </div>
}
export default Homepage;