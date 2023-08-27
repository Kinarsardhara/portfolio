import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kinarsardhara22@gmail.com</span>
        <div className="f-icons" style={{cursor:'pointer'}}>
        
          
         <a href="https://github.com/Kinarsardhara" target="_black"><Gitub color="white" size={"3rem"} /></a>
         <a href="https://www.linkedin.com/in/kinarsardhara222/" target="_black"> <Linkdin color="white" size={"3rem"} /></a>
          <a href="https://www.instagram.com/kinar.sardhara/" target="_black"><Insta color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
