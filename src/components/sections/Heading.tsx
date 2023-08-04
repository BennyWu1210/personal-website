import "./Heading.css";

import DogGIF from "../../assets/dog.gif";
import PFP from "../../assets/benny_pfp1.png";
import { motion } from "framer-motion";
import { Properties } from "../interfaces/general-interfaces";
import AngleDown from "../../shared/AngleDown";
import SocialMedia from "../SocialMedia";



const animateProperties: Properties = {
  initial: { position: 'relative', top: -50, opacity: 0 },
  animate: { top: 0, opacity: 1 },
  transition: { delay: 1, duration: 0.75 }
}


const headingProperties: Properties = {
  initial: { position: 'relative', top: -150 },
  animate: { top: 0 },
  transition: { duration: 1.5 }
}

const Heading = () => {

  return (
    <>
    <p>TODO: Cool Circles </p>
      <div className="heading-container" id="heading">
        <div className="content-container">
          <div className="overflow-hidden">
            <motion.h2 {...headingProperties}>Hey, I'm Benny</motion.h2>
          </div>
          <motion.p {...animateProperties}>I'm a passionate learner and a change-maker (typing effect, once) </motion.p>
          <img src={DogGIF} />
        </div>

        <motion.div  {...animateProperties} className="profile-pic"><img src={PFP} /></motion.div>
        <SocialMedia />
      </div>
      <AngleDown />
    </>


  );
}
export default Heading