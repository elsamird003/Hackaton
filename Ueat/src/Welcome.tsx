
import React, { } from "react";
import {LoginProps } from "./types";
import "./Welcome.css"
import Ueat_logo from "./Ueat_logo.png";

const Welcome: React.FC<LoginProps> = ({ setLoggedIn }) => {
    return(
        <>
    <div className = "container">
      <h1 className="welcome">Welcome</h1>
      <img alt = "logo"src = {Ueat_logo} className = 'logo' onClick={() => setLoggedIn(true)}></img>
          
 </div> 
      </>
     );
};
export default Welcome;