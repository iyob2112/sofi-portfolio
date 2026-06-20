// pages/Home.jsx
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Videos from "../components/Videos"; // Add this line
// import Testimonials from "../components/Testimonials";
import BTS from '../components/BTS'; 
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Skills />
      <Projects /> {/* This section will now just show 3 featured projects */}
      <Videos /> {/* Inserted into your dashboard flow */}
      <BTS />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

export default Home;