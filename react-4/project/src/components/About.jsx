import React from "react";
import imgAbout from "../img/Team work-rafiki.png";
import "./css/About.css";

const About = () => {
  return (
    <div className="bg-body-tertiary">
      <div className="container d-flex align-items-center">
        <div className="imgAbout">
          <img src={imgAbout} alt="About" style={{ width: "100%" }} />
        </div>
        <div className="infoAbout">
          <h1 className="text-primary mb-4"> About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            vero fuga eos quis atque nulla, qui dolor voluptatum ipsam
            aspernatur quas, unde molestiae quaerat expedita in eligendi, itaque
            sed sequi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
