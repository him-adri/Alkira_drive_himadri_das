import React from "react";
import './style.css';

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-heading">
        <p className="heading"> NBA Teams. </p>
        <p className="name"> Made with ❤️ by Himadri Das </p>
      </div>

      <div className="personal-details">
        <ul className="social-list">
          <li>
            <a href="https://github.com/him-adri" target="_blank"><img src={require("../../Assets/github.png")} /></a>
          </li>
          <li>
          <a href="https://www.instagram.com/___himadri__/" target="_blank"><img src={require("../../Assets/instagram.png")} /></a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/himadri-das-7b3113230/" target="_blank"><img src={require("../../Assets/linkedin.png")} /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
