import { ProjectProps } from "../components/interfaces/general-interfaces";
import "./ProjectCard.css";

const ProjectCard: React.FC<ProjectProps> = ({name, imageURL, text}) => {
  return (
    <div className="project__card-container">
      <div className="project__card-image"><img src={imageURL} alt={"project" + text} /></div>
      <div className="project__card-content">
        <h2>{name}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default ProjectCard;