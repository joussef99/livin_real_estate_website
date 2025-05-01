import React from "react";
import Forms from "./components/Forms/Forms.jsx";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.jsx";

const ContactForm = () => {
  return (
    <div className="page-container">
      <Header />
      <Forms />
      <Footer />
    </div>
  );
};

export default ContactForm;
