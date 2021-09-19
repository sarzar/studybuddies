import React from 'react';
import '../App.css';
import '../Components/Navbar.css'
import { Link, NavLink } from 'react-router-dom';

function navbar() {
  return (
    
      <div className = "navbar">
          <div className = "logo"> 
      <Link to = "/">     
      <img src = "studlogo.png"></img>
      </Link > 
      </div>
     <div className = "navbar-items"> 
    <Link style={{ textDecoration: 'none', color: 'black'}} to= "/"> 
    <h1>Home</h1>
    </Link>
    <Link style={{ textDecoration: 'none', color: 'black'}} to="/connect"> 
    <h1>Connect</h1>
    </Link>
    <Link style={{ textDecoration: 'none', color: 'black' }} to= "/faq">
    <h1>FAQ</h1>
    </Link>
    <Link style={{ textDecoration: 'none', color: 'black' }} to= "/contact">
    <h1>Contact Us</h1>
    </Link>
</div>

      </div>
   
  );
}

export default navbar;