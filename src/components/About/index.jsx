import React from "react";
import "./About.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About Us</h2>
          <h1 className="title">
            We are{" "}
            <span className="color__primary">Sofi Creative Advertising </span>{" "}
            Agency
          </h1>
          <p className="text__muted description">
            We are a passionate team of digital marketing experts, designers,
            and developers dedicated to helping businesses grow online. With a
            focus on creativity, strategy, and results, we work closely with our
            clients to understand their goals and deliver customized digital
            solutions that drive success. Whether you're a startup or an
            established brand, we're here to elevate your online presence and
            connect you with your ideal audience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
