import React from "react";
import icon1 from "../../assets/abouticon1.png";
import icon2 from "../../assets/abouticon2.png";
import icon3 from "../../assets/abouticon3.png";
import icon4 from "../../assets/abouticon4.png";
import "./grid.css";
function Grid() {
  return (
    <section class="flexing">
      <div class="grids">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>

      <div class="content">
        <div>
          <p className="font-bold">Software Development & Services</p>
          <h1>
            Your Reliable Partner for IT Services Dedicated to Your Success
          </h1>
          <span className="text">
            At Zidio, we're your trusted IT services partner, ensuring your
            success with reliable solutions tailored to your business needs.
            Count on us for robust software development, comprehensive IT
            support, and cutting-edge technology solutions that empower your
            business to thrive.
          </span>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <img src={icon1} alt="Cost Effective Icon" />
            <p>Cost Effective Solutions</p>
          </div>
          <div class="grid-item">
            <img src={icon2} alt="Expert Team Icon" />
            <p>Expert & Dedicated Team Members</p>
          </div>
          <div class="grid-item">
            <img src={icon3} alt="Support Icon" />
            <p>24/7 Free Technical Supports</p>
          </div>
          <div class="grid-item">
            <img src={icon4} alt="Satisfaction Icon" />
            <p>100% Customers Satisfaction</p>
          </div>
        </div>
        <button>ABOUT MORE</button>
      </div>
    </section>
  );
}
export default Grid;
