import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./SocialMedia.css";
import React from "react";

const instgramURL = "https://www.instagram.com/benny_thecoolkid/";
const linkedinURL = "https://www.linkedin.com/in/benny-wu1/";
const githubURL = "https://github.com/BennyWu1210";
const mailURL = "mailto:benny.wu.new@gmail.com"
const SocialMedia = () => {
  return (
    <div className="social-container">
      <div className="social-icons">
        <FontAwesomeIcon className="social-icon" icon={faInstagram} onClick={() => window.open(instgramURL)} />
        <FontAwesomeIcon className="social-icon" icon={faLinkedin} onClick={() => window.open(linkedinURL)}/>
        <FontAwesomeIcon className="social-icon" icon={faGithub} onClick={() => window.open(githubURL)}/>
        <FontAwesomeIcon className="social-icon" icon={faEnvelope} onClick={() => window.open(mailURL)}/>
      </div>
    </div>
  );
}

export default SocialMedia;