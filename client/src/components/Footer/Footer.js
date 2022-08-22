import React from "react";
import './Footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// const FooterItems = [
//   {
//     title: "",
//     url: "https://github.com/Ymuzhych",
//     cName: "footer-links",
//     icon: <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
//   },
//   {
//     title: "",
//     url: "https://www.facebook.com/muzhychenko.yuliia/",
//     cName: "footer-links",
//     icon: <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
//   },
//    {
//     title: "",
//     url: "https://twitter.com/",
//     cName: "footer-links",
//     icon: <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
//   },
//   {
//     title: "",
//     url: "https://www.instagram.com/yulie_rayoflight/",
//     cName: "footer-links",
//     icon: <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
//   }
// ];

class Footer extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (

      <footer className="FooterItems">
        <div>
        <a href="https://github.com/Ymuzhych">
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </a>
         <a href="https://www.facebook.com/muzhychenko.yuliia/">
          <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
         </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </a>
        <a href="https://www.instagram.com/yulie_rayoflight/">
          <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
        </a>
        <a href="https://www.youtube.com/">
          <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
        </a>
        </div>

        {/* <ul
          className={this.state.clicked ? "footer-menu active" : "footer-menu"}
        >
          {FooterItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul> */}
      </footer>
    );
  }
}

export default Footer;
