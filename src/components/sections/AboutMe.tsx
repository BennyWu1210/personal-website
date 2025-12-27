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
import QuotationLeft from "../../assets/Quotation_Left.svg"
import QuotationRight from "../../assets/Quotation_Right.svg"

import { HobbyProps } from "../interfaces/general-interfaces";

const texts = (
  <div className="about-description">
    {/* Rendering issues on Safari */}
    {/* <object data={QuotationLeft} type="image/svg+xml" id="quote-left"></object>
    <object data={QuotationLeft} type="image/svg+xml" id="quote-left2"></object> */}
    <img src={QuotationLeft} id="quote-left"/>
    <img src={QuotationLeft} id="quote-left2"/>
    <p style={{fontSize: 24, fontWeight: "bold", color: "var(--almond"}}>Ah… welcome, traveler. </p>
    <p>I am a Computer Science student at the <span>University of Waterloo</span>, where I'm learning, building, and making friends with some of the coolest human beings out there.</p>
    <p>
      I've previously worked as a <span>Software Engineering Intern</span> in Canada and the U.S. 
      I'm deeply grateful for the opportunities, and I genuinely love the work I do. 
      Outside of that, I'm often on random side quests - most notably taking road trips around Ontario (so underrated) or helping build Hack the North.
    </p>

    <p>
      Thanks for stalking me, stranger! Don't hesitate to reach out though, I'd love to chat 🚀
    </p>
    <img src={QuotationRight} id="quote-right"/>
    <img src={QuotationRight} id="quote-right2"/>
  </div>
);

const cardsInfo: HobbyProps[] = [
  { name: "Competitive Programming", icon: ProgrammingIcon, text: "Painful but weirdly enjoyable." },
  { name: "Basketball", icon: BasketballIcon, text: "Favourite sport all time. I play intramurals at Waterloo, shoot me a message if you wanna team up!" },
  { name: "Music", icon: MusicIcon, text: "My playlist is literally a blend of every genre." },
  { name: "Magic", icon: MagicIcon, text: "Die-hard Harry Potter fan. \n \"Wingardium Debugiosa\"" },
  { name: "Piano", icon: PianoIcon, text: "Nowhere near good, but sure do enjoy learning and playing random pieces." },
  { name: "Badminton", icon: BadmintonIcon, text: "Come to PAC small gym and play with me!" },
  { name: "Origami", icon: OrigamiIcon, text: "Used to be such a fun thing to do as a kid. Currently trying to pick it up again :)" },

  // for infinite scrolling
  { name: "Competitive Programming", icon: ProgrammingIcon, text: "Painful but weirdly enjoyable." },
  { name: "Basketball", icon: BasketballIcon, text: "Favourite sport all time. I play intramurals at Waterloo, shoot me a message if you wanna team up!" },
  { name: "Music", icon: MusicIcon, text: "My playlist is literally a blend of every genre." },
  { name: "Magic", icon: MagicIcon, text: "Die-hard Harry Potter fan. \n \"Wingardium Debugiosa\"" },
  { name: "Piano", icon: PianoIcon, text: "Nowhere near good, but sure do enjoy learning and playing random pieces." },
  { name: "Badminton", icon: BadmintonIcon, text: "Come to PAC small gym and play with me!" },
  { name: "Origami", icon: OrigamiIcon, text: "Used to be such a fun thing to do as a kid. Currently trying to pick it up again :)" },
];

const AboutMe = () => {
  return <div className="about-container" id="about">
    <SectionTitle name="About Me" color="var(--white)" />
    <span className="dot" id="about-dot"></span>
    
    

    {texts}
    <div className="scrolling-wrapper">
      <div className="hobbies-container">
        <div className="hobbies-scrollable">
          {cardsInfo.map(props => <AboutCard {...props} />)}
        </div>
      </div>
    </div>
    <span className="dot" id="about-dot3"></span>

  </div>
}
export default AboutMe;
