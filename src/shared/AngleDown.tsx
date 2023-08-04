import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";


const angleStyle: React.CSSProperties = {
  position: "relative",
  width: "44px",
  left: "48vw",
  top: "-50px",
  cursor: "pointer"
};

const boxStyle: React.CSSProperties = {
  position: "relative",
  top: "100px",
  height: "5px",
};

const AngleDown = () => {
  const ref = useRef<HTMLDivElement>(null);

  const navigateDown = () => {
    ref.current?.scrollIntoView();
  } 

  return (
    <>
      <div className="angle-container" style={angleStyle} onClick={navigateDown}>
        <FontAwesomeIcon icon={faAnglesDown} beatFade style={{ height: "42px", width: "42px", color: "#ebebeb", }}/>
      </div>
      <div className="angle-box" style={boxStyle} ref={ref}></div>
    </>
  );

}
export default AngleDown;
