import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
   
      <div class="sidebar">
         <NavLink to="/" exact activeClassName="active">Home</NavLink>
         <NavLink to="/campaign" exact activeClassName="active">Campaign</NavLink>
         {/* <NavLink to="/contact" exact activeClassName="active">About</NavLink>
         <NavLink to="/about" exact activeClassName="active">Contact</NavLink> */}
         

  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
   
  )
}

export default Navbar
