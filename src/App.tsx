import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ProjectPage from "./pages/ProjectPage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // setTimeout(() => window.scrollTo(0, 0), 300);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="w-full">
      <NavBar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/contact-us" Component={ContactUsPage} />
        <Route path="/our-work" Component={ProjectsPage} />
        <Route path="/our-work/:projectId" Component={ProjectPage} />
        <Route path="/about-us" Component={AboutUsPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
