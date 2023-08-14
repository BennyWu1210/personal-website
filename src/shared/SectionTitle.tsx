import React from "react";
import { motion } from 'framer-motion';

interface TitleProps {
  name: string
}

const titleStying: React.CSSProperties = {
  fontSize: "calc(35px + 2vw)",
  fontWeight: 700,
  margin: "auto",
  textAlign: "center",

}

const lineStyling: React.CSSProperties = {
  display: "block",
  width: "135px",
  height: "1px",
  backgroundColor: "white",

  position: "relative",
  left: "calc(50% - 62px)",
  marginTop: "20px",
}


const SectionTitle: React.FC<TitleProps> = ({ name }) => {
  return <motion.div className="title-container"
    style={{ zIndex: 100 }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 1.8, ease: [.36, .16, .45, .96]}} // cubic bezier curve
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 20 }
    }}>
      <h2 style={titleStying}>{name}</h2>
      <div style={lineStyling}></div>
  </motion.div>
}
export default SectionTitle;