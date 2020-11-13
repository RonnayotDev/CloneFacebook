import React,{useState} from "react";
import "./Navbar.css";

const Navbar=()=> {


  return (
    
      <nav className="navbar">
        <div className="navbar-container">
          <i class="fab fa-facebook-square"></i>

          	<div className="navbar-search">
            <input
              id="search"
              type="search"
              class="search-input"
              Placeholder="Search for people, places and things"
            />
            <span data-icon="&#xe000;" aria-hidden="true" class="search-btn">
              <input type="submit" class="searchsubmit" value="" />
            </span>
          </div>
          <ul className="nav-items">Gu Punch Magic Box</ul>
          <ul className="nav-items">Home</ul>
          <ul className="nav-items">Create</ul>

          <ul className="nav-icon">
            <i class="fas fa-user-friends"></i>
          </ul>
          <ul className="nav-icon">
            <i class="fab fa-facebook-messenger" ></i>
					
          </ul>
					
          <ul className="nav-icon">
            <i class="fas fa-bell"></i>
          </ul>
        </div>
      </nav>
    
  );
}

export default Navbar;
