import "./AboutCard.css"
import { HobbyProps } from "../components/interfaces/general-interfaces";


const AboutCard: React.FC<HobbyProps> = ({name, icon, text}) => {
  return <div className="about-card">
    <img className="about-icon" src={icon}/>
    <span className="about-title">{name}</span>
    <p className="about-text">{text}</p>
  </div>
}
export default AboutCard;