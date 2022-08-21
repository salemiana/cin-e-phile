import React, { Component } from "react";
// import { MenuItems } from "./MenuItems";
import logo from "../logo_1.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          CINEVIEW
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="logo..." />
          </a>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fa-solid fa-bars" : "fa-solid fa-xmark"
            }
          ></i>
        </div>
       
        <div className="btn">

        <>
          <Link to="/" className="nav-manu nav-menu-active">Home</Link>
              <Link to="/movie" className="nav-manu nav-menu-active">Movie</Link>
               <Link to="/tv" className="nav-manu nav-menu-active">TV</Link>
              <Link to="/login" className="sign-up-button">Login |</Link>
              <Link to="/signup" className="login-button">| Signup</Link>
            </>
        </div>
        {/* <div className="btn"> 
        <button className="sign-up-button" onClick={Signup}>Sign Up |</button>
        
        <button className="login-button" onClick={success}>| LogIn</button>
        </div> */}
      </nav>
    );
  }
}

export default Navbar;
