import { useEffect, useState } from "react";
import "odometer/themes/odometer-theme-default.css";
import "./facts.css";
import Odometer from "react-odometerjs";
const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(5);
      setProjects(102);
      setClients(2);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex__center fact__container">
      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={experience} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="labl">years of Experience</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={projects} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="labl">Completed Projects</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={clients} className="title" />
          <h3 className="title">K</h3>
        </div>
        <p className="labl">Satisfied Clients</p>
      </div>
    </div>
  );
};

export default Facts;
