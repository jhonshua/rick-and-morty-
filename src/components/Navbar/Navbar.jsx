import React from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"



const Navbar = () => {
  return (
    <div className='navbar'>
     
       
       
       
<div  >


    <div className="navbar-nav fs-5">

    <div class="d-grid gap-3 col-8 mx-auto ">

            <NavLink to="/" className="nav-link">
              <button type="button" class="btn btn-primary btn-block">Characters</button>
              
            </NavLink>



        



            <NavLink to="/location" className="nav-link">
              <button type="button" class="btn btn-primary btn-block"> Location </button>
              
            </NavLink>





                <NavLink to="/episodes" className="nav-link">
              <button type="button" class="btn btn-primary btn-block"> Episode</button>
             
            </NavLink>
            </div>
</div>
        
        



          </div>
        
      
   
        
  
      
      
    </div>
  )
}

export default Navbar

