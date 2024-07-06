import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logoo} alt="" />
          <p>
            Milano Bakes S.F.No.620/4, Thudiyalur road, panchayat office
            opposite, sarkarsamakulam, kovilpalayam, CBE-641107
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <a href="tel:80723 86064">
              <li>+91 80723 86064</li>
            </a>
            <a href="mailto:milanobakes@gmail.com">
              <li>milanobakes@gmail.com</li>
            </a>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Milano Bakes - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
