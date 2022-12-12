import React from "react";
import VideoBg from "./Rick and Morty x Run.mp4";
import "./Presentacion.css"


const Presentacion = () => {


  return (



 <div className="main">

<video src={VideoBg} autoPlay className="video"  type="video/mp4" loop muted='true'></video>
 
  </div> 

    
   
 
  );
};

export default Presentacion;