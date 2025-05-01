import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Hero_video from "./components/Hero_video/Hero_video.jsx";
import Districts from "./components/Districts/Districts.jsx";
import Lunches from "./components/Lunches/Lunches.jsx";
import ContactForm from "./ContactForm.jsx";
import Developerspage from "./Developerspage.jsx";
import Projectspage from "./Projectspage.jsx";
import Aboutpage from "./Aboutpage.jsx";
import Careerpage from "./Careerpage.jsx";
import Companies from "./components/companies/companies.jsx";
import About from "./components/About/About.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <Hero_video />
      <section className="body">
        <Lunches />
        <Districts />
        <Projects />
        <Companies />
        <Footer />
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Developers" element={<Developerspage />} />
        <Route path="/Projects" element={<Projectspage />} />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/careers" element={<Careerpage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
