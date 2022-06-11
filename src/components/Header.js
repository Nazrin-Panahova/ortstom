import React from 'react'
import {NavLink} from "react-router-dom"
function Header(){

   
     return(
         <div>
             <div className="left" >
         <h1>ORTSTOM</h1>

         </div>
         <ul className="menu">
             <li>
                 <NavLink to={'/'}>
                 Home
                 </NavLink>
                
                 </li>
             <li>
                <NavLink to={"about"}>
                    About
                    </NavLink> 
                 </li>
             <li>
                 <NavLink to={"ourTeam"}>
                 Our team
                 </NavLink>
                 
                 </li>
             <li>
                 <NavLink to={"study"}>
                 Study
                 </NavLink>
                 
                 </li>
             <li>
                 <NavLink to={"gallery"} >
                 Gallery
                 </NavLink>
                 
                 </li>
             <li>
                 <NavLink to={"contactUs"}>
                 Contact us
                 </NavLink>
                 
                 </li>

         </ul>
         </div>
         
     )
}

export default Header