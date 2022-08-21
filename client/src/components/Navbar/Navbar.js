import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import logo from "../logo_1.png";
import { Button } from "../Button";
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
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
        <Button>Log In</Button>
      </nav>
    );
  }
}

export default Navbar;
