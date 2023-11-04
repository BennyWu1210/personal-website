import "./Resume.css";
import SectionTitle from "../../shared/SectionTitle";
import ResumePreview from "../../assets/resume-preview.png";
import Button from "../../shared/Button";

const resumeURL = "https://drive.google.com/file/d/1wyKSH0t0tqMa5RWbU2eog7IVeEkGRKUb/view?usp=sharing"
const Resume = () => {
  return (
    <div className="resume-container" id="resume">
      <SectionTitle name="Resume" color="white"/>
      <span className="dot" id="resume-dot"></span>
      <span className="resume-description">If you want to know more about me!</span>
      <a href={resumeURL} target="_blank" rel="noreferrer">
        <div className="resume-preview">
          <img src={ResumePreview}/>
          <div className="preview-overlay">
            <Button width="230px" height="60px" color="var(--white)" backgroundColor="var(--black)" url={resumeURL}>Open PDF</Button> 
          </div>
        </div>
      </a>
    </div>
  );
}
export default Resume;
