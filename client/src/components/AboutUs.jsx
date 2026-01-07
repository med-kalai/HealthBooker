import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              HealthBooker is a web application designed to simplify doctors’
              daily work. Our platform helps you manage appointments, track
              patients, and organize your schedule efficiently. We provide
              intuitive tools so you can focus on what matters most — delivering
              quality care to your patients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
