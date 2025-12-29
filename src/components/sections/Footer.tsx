import SocialMedia from "../SocialMedia";
import "./Footer.css";

const attributionURL = "https://docs.google.com/document/d/11ATrY8HxVvjd2o74-LrQQFLFyolv0nR1ZHsUMi63X68/edit?usp=sharing";
const Footer = () => {
  return (
    <div className="footer-container">
      <span className="footer-title">Let's Get in Touch 😁</span>
      <div className="footer-social__media">
        <SocialMedia horizontal={true}/>
      </div>
      <a href={attributionURL} target="_blank" rel="noreferrer" style={{color: "white", fontSize: "18px"}}>
        <span>Attribution List</span>
      </a>
      <div className="copyright">
        <span>Benny Wu © 2025</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 100 }}>
        <a href='https://cs.uwatering.com/#bennywu.me?nav=prev' style={{ color: 'white', textDecoration: 'none' }}>←</a>
        <a href='https://cs.uwatering.com/#bennywu.me' target='_blank' rel='noreferrer'>
          <img
            src='https://cs.uwatering.com/icon.white.svg'
            alt='CS Webring'
            style={{ width: '24px', height: 'auto', opacity: 0.8 }}
          />
        </a>
        <a href='https://cs.uwatering.com/#bennywu.me?nav=next' style={{ color: 'white', textDecoration: 'none' }}>→</a>
      </div>
      
      <span className="dot" id="footer-dot2"></span>
      <span className="dot" id="footer-dot1"></span>
    </div>
  );
}
export default Footer;
