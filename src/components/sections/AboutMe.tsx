import AboutCard from "../../shared/AboutCard";
import SectionTitle from "../../shared/SectionTitle";
import "./AboutMe.css";
// Icon imports
import ProgrammingIcon from "../../assets/icons/programming.png"
import BasketballIcon from "../../assets/icons/basketball.png";
import MusicIcon from "../../assets/icons/musical-note.png";
import PianoIcon from "../../assets/icons/piano.png";
import MagicIcon from "../../assets/icons/magic.png";
import BadmintonIcon from "../../assets/icons/badminton.png";
import { HobbyProps } from "../interfaces/general-interfaces";

const texts = (
  <div className="about-description"><p>Welcome my friend (or stranger) 👀 </p>
    <p>I am a second-year Computer Science student at the <span>University of Waterloo</span>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
    <p>
      Et labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
    </p>
    <p>
      Please reach out because I’d love to meet new people~
    </p>
  </div>
);

const cardsInfo: HobbyProps[] = [
  { name: "Competitive Programming", icon: ProgrammingIcon, text: "Painful but weirdly enjoyable." },
  { name: "Basketball", icon: BasketballIcon, text: "Favourite sport all time. I play intramurals at Waterloo, shoot me a message if you wanna team up!" },
  { name: "Music", icon: MusicIcon, text: "My playlist is literally a blend of every genre. From Mandopop (Jay Chou fans?) to Cantopop, Kpop (Twice!), Hip hop...you name it." },
  { name: "Magic", icon: MagicIcon, text: "Die-hard Harry Potter fan. \n \"Wingardium Debugiosa\"" },
  { name: "Piano", icon: PianoIcon, text: "Nowhere near good, but sure do enjoy learning and playing random pieces" },
  { name: "Badminton", icon: BadmintonIcon, text: "Come to PAC small gym and play with me!" },
];

const AboutMe = () => {
  return <div className="about-container" id="about">
    <p>TODO: Animation when scroll into view</p>
    <SectionTitle name="About Me" />
    {texts}
    <div className="scrolling-wrapper">
      <p>(TODO: Infinite scrolling)</p>
      <div className="hobbies-container">
        {cardsInfo.map(props => <AboutCard {...props} />)}
      </div>
    </div>
    

  </div>
}
export default AboutMe;
