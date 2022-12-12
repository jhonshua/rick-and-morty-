import React from "react";
import VideoBg from "./Rick and Morty x Run.mp4";
import "./Presentacion.css"


const Presentacion = () => {


  return (



 <div className="main">

<video src={VideoBg} autoPlay="true"  muted="false" className="video"  type="video/mp4" loop></video>
 
  </div> 

    
   
 
  );
};

export default Presentacion;