import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="innerWidth paddings g-container">
        <div className="flexColCenter inner-container">
          <span className="orangeText">Get Started</span>
          <span className="primaryText">Create your account today</span>
          <span className="secondaryText">
            Join us and start your journey with us.
          </span>
          <button className="button">   
            <a href="youssefgadow@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
