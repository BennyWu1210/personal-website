import React from "react";

interface TitleProps {
  name: string
}

const titleStying: React.CSSProperties = {
  fontSize: "60px",
  fontWeight: 700, 
  margin: "auto",
  textAlign: "center"
  
}

const lineStyling: React.CSSProperties = {
  display: "block",
  width: "135px",
  height: "1px",
  backgroundColor: "white",

  position: "relative",
  left: "calc(50% - 62px)",
  marginTop: "20px"
  
}


const SectionTitle: React.FC<TitleProps> = ({name}) => {
  return <div className="title-container">
    <h2 style={titleStying}>{name}</h2>
    <div style={lineStyling}></div>
  </div>
}
export default SectionTitle;