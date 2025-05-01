import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

const Projectspage = () => {
  return (
    <div className="page-container">
      <div>
        <Header />
      </div>
      <div>
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Projectspage;
