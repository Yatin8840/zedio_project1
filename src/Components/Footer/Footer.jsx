import React from "react";
import "./Footer.css"; 
// import zidioimg from "../src/assets/zidio.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-company-info">
          <div className="logo">
            <img src="https://zidio.in/assets/images/home-2/zidio.png" alt="Company Logo"  className="logo_img"/>
          </div><br />
          <p>
            At Zidio Development, we specialize in innovative software
            solutions. Our team is dedicated to delivering high-quality
            projects, fostering professional growth, and driving technological
            advancement.
          </p>
          <button className="discover-btn">Discover More</button>
        </div>

   
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/Team">Our Team</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

      
        <div className="footer-links">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="#">IT Solutions</a>
            </li>
            <li>
              <a href="#">Cyber Security</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Machine Learning</a>
            </li>
            <li>
              <a href="#">Cloud Services</a>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to Latest Newsletter</p>
          <form>
            <input type="email" placeholder="Enter Your E-Mail" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <br />
      <div className="footer-bottom">
        <p>© 2024 @ Zidio Development. Designed by Team ZIDIO.</p>
        <div className="social-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
