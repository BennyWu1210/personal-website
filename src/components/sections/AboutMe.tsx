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
import OrigamiIcon from "../../assets/icons/origami.png";

import { HobbyProps } from "../interfaces/general-interfaces";

const texts = (
  <div className="about-description"><p>Welcome my friend (or stranger) 👀 </p>
    <p>I am a second-year Computer Science student at the <span>University of Waterloo</span>. where I'm diving headfirst into the exciting world of knowledge and discovery 🚀</p>
    <p>
      I’ve previously worked as a research assistant alongside Dr. Navid Esfahani, in which I was trained to conduct academic research on combinatorial analysis and coding theory. I’ve also worked as a competitive programming instructor, a hackathon organizer, and a student representative for multiple years.
    </p>
    <p>
      From this website, you will explore more about who I am. Please reach out because I’d love to talk to you 😁
    </p>
  </div>
);

const cardsInfo: HobbyProps[] = [
  { name: "Competitive Programming", icon: ProgrammingIcon, text: "Painful but weirdly enjoyable." },
  { name: "Basketball", icon: BasketballIcon, text: "Favourite sport all time. I play intramurals at Waterloo, shoot me a message if you wanna team up!" },
  { name: "Music", icon: MusicIcon, text: "My playlist is literally a blend of every genre. From Mandopop (Jay Chou fans?) to Cantopop, Kpop (Twice!), Hip hop...you name it." },
  { name: "Magic", icon: MagicIcon, text: "Die-hard Harry Potter fan. \n \"Wingardium Debugiosa\"" },
  { name: "Piano", icon: PianoIcon, text: "Nowhere near good, but sure do enjoy learning and playing random pieces." },
  { name: "Badminton", icon: BadmintonIcon, text: "Come to PAC small gym and play with me!" },
  { name: "Origami", icon: OrigamiIcon, text: "Used to be such a fun thing to do as a kid. Currently trying to pick it up again :)" },

  // for infinite scrolling
  { name: "Competitive Programming", icon: ProgrammingIcon, text: "Painful but weirdly enjoyable." },
  { name: "Basketball", icon: BasketballIcon, text: "Favourite sport all time. I play intramurals at Waterloo, shoot me a message if you wanna team up!" },
  { name: "Music", icon: MusicIcon, text: "My playlist is literally a blend of every genre. From Mandopop (Jay Chou fans?) to Cantopop, Kpop (Twice!), Hip hop...you name it." },
  { name: "Magic", icon: MagicIcon, text: "Die-hard Harry Potter fan. \n \"Wingardium Debugiosa\"" },
  { name: "Piano", icon: PianoIcon, text: "Nowhere near good, but sure do enjoy learning and playing random pieces." },
  { name: "Badminton", icon: BadmintonIcon, text: "Come to PAC small gym and play with me!" },
  { name: "Origami", icon: OrigamiIcon, text: "Used to be such a fun thing to do as a kid. Currently trying to pick it up again :)" },
];

const AboutMe = () => {
  return <div className="about-container" id="about">
    <SectionTitle name="About Me" />
    {texts}
    <div className="scrolling-wrapper">
      <div className="hobbies-container">
        <div className="hobbies-scrollable">
          {cardsInfo.map(props => <AboutCard {...props} />)}
        </div>
      </div>
    </div>
    <span className="dot" id="about-dot"></span>

  </div>
}
export default AboutMe;
