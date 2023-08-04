import Button from "../../shared/Button";
import ProjectCard from "../../shared/ProjectCard";
import SectionTitle from "../../shared/SectionTitle";

// Is there a way to do this dynamically?
import PethsAppImg from "../../assets/project-images/pethsapp.png";
import ChromeImg from "../../assets/project-images/fish-toucher.png";
import GameImg from "../../assets/project-images/game.png";
import ChatImg from "../../assets/project-images/chat-app.png";

import "./Projects.css";

const GitHubURL = "https://github.com/BennyWu1210";

const projectList = [
  {imageURL: PethsAppImg, name: "PethsApp", text: "A mobile application developed for our high school. It is a digital gateaway used by more than 1200 students, parents, and teachers.\n\nIt was developed using Flutter and Dart."},
  {imageURL: ChromeImg, name: "Article Validation Chrome Extension", text: "A chrome extension made for the Google Solution Challenge 2023. It uses GPT-3.5 to perform analysis on the information from a webpage that is being browsed, while providing extensive feedback regarding its authenticity."},
  {imageURL: GameImg, name: "Tower Defense game", text: "A 2D game project made with Java using an Object-Oriented Programming paradigm. It has 3 customizable levels and dozens of enemy types. \n\n(We once played this 5 hours straght cuz we were bored, no kidding)"},
  {imageURL: ChatImg, name: "Chat App", text: "A fun experimental project where users can register an account and post information on a thread accessible through their Google account.\n\nIt was build using React and Firebase."},
];

const Projects = () => {
  return (
    <div className="project-container" id="projects">
      <SectionTitle name="Projects"/>
      <Button width="230px" height="60px" color="var(--white)" backgroundColor="var(--black)" url={GitHubURL}>View my GitHub</Button>
      
      <p>TODO: make each card as clickable links</p>
      <div className="project-gallery">
        {projectList.map(item => <ProjectCard imageURL={item.imageURL} name={item.name} text={item.text}/>)}
      </div>
    </div>
  );
}
export default Projects;
