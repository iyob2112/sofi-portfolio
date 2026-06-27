import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./ui/Home"; // Imported from Step 1
import AllProjects from "./ui/AllProjects/AllProjects"; // Your new page
import AllVideos from "./ui/AllVideos/AllVideos"; // Your new page
import AllVideosBTS from "./ui/AllVideos BTS/AllVideosBTS"; // Your new page
import AllPhotos from "./ui/AllPhotos/AllPhotos"; // Your new page


const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* The main landing page with all your sections */}
        <Route path="/" element={<Home />} />
        
        {/* The dedicated page for your project catalog */}
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/all-videos" element={<AllVideos />} />
        <Route path="/all-videos-BTS" element={<AllVideosBTS />} />
        <Route path="/all-photos" element={<AllPhotos />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;