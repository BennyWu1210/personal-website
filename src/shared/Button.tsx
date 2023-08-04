import React, { Children } from "react";
import { ButtonProps } from "../components/interfaces/general-interfaces";
import { motion } from 'framer-motion';

const Button: React.FC<ButtonProps> = ({height, width, color, backgroundColor, children, url}) => {
  const buttonStyles: React.CSSProperties = {
    position: "relative",
    marginTop: "30px",
    height: height,
    width: width,
    color: color,
    border: color + "1px solid",
    backgroundColor: backgroundColor,
    borderRadius: "30px",
    fontSize: "15px",
  }

  return (
    <motion.div className="button-container" 
                style={buttonStyles} 
                whileHover={{cursor: "pointer", backgroundColor: color, color: backgroundColor}}
                onClick={() => {window.open(url)}}>
      <span 
        style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "inherit"}}>
        {children}
      </span>
    </motion.div>

  );
}
export default Button;