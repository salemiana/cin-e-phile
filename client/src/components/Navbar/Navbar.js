import React, { Component } from "react";
// import { MenuItems } from "./MenuItems";
import logo from "../logo_1.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import Auth from '../../utils/auth';

 const Navbar = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  
  };

 
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          CINEVIEW
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="logo..." />
          </a>
        </h1>
        {/* <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fa-solid fa-bars" : "fa-solid fa-xmark"
            }
          ></i>
        </div> */}
       
        
<div className="nav-menu">
        
         
          
          {Auth.loggedIn() ? (
            <>
              <Link to="/" className="nav-links">Home</Link>
               <Link to="/movie" className="nav-links">Movie</Link>
               <Link to="/tv" className="nav-links">TV</Link>
              <a  className="btn-logout" href="/" onClick={logout}>
                Logout
              </a>
            </>   ) : (
         <>
              <div className="btn">
              <Link to="/login" className="sign-up-button">Login |</Link>
              <Link to="/signup" className="login-button">| Signup</Link>
              </div>
            </>
            )}
</div>
        
      
      </nav>
    );
  }


export default Navbar;
