import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavBar/>
    <NavLink 
    to="/">Home</NavLink>
    <  NavLink 
    to="/">Movies</NavLink>
    <NavLink 
    to="/">Directors</NavLink>
    <NavLink 
    to="/">Actors</NavLink>
  </div>;
}

export default NavBar;
