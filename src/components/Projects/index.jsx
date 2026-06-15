import "./Project.css";
import { projects } from "../../data";
import ProjectCard from "../../ui/ProjectCard";
import { Link } from "react-router-dom"; // Import Link

const Projects = () => {
  // Slice the array to only display the first 3 projects on the home landing section
  const featuredProjects = projects.slice(0, 6);

  return (
    <section id="projects">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">My Projects</h2>
        </div>
        
        <div className="projects__container">
          {featuredProjects.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>

        {/* Button to go to the new page */}
        <div className="view-all__actions">
          <Link to="/all-projects" className="btn submit__btn">
            View All Projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;