import "./Skills.css";
import { skills } from "../../data";
import SkillCard from "../../ui/SkillCard";
const Skills = () => {
  return (
    <section id="skills">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Service We Provide </h2>
        </div>
        <div className="skill__container">
          {skills.map((list, index) => (
            <SkillCard {...list} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
