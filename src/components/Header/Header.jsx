import React, { useState, useEffect } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector(".hero");
      if (!hero) return;
      setScrolled(window.pageYOffset > hero.offsetHeight);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getMenuStyle = (open) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !open && "-100%" };
    }
  };

  return (
    <section className={`h-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/livin-copy.png" alt="logo" width={150} />
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
            <Link to="/">Home</Link>
            <Link to="/Developers">Developers</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/About">About us</Link>
            <Link to="/Careers">Careers</Link>
            <Link to="/Contact">Contact us</Link>
            <button className="buttonn">
              <a href="tel:+201234567890">REQUEST A CALL</a>
            </button>
            <button className="buttonn">
              <a
                href="https://wa.me/201501087033?text=Hi%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/whatsapp.png"
                  alt="call"
                  style={{ width: "20px", marginRight: "6px" , marginBottom:"-4px" }}
                />
                WhatsApp
              </a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
