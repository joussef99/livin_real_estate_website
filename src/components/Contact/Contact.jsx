import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="w-wrapper">
      <div className="flexCenter innerWidth paddings c-container">
        {/* left side */}
        <div className=" flexColStart  c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Get in touch with us</span>
          <span className="secondaryText">
            We are here to help you. Reach out to us for any queries or support.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} color="white" />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">01020304050</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} color="white" />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">01020304050</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} color="white" />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">01020304050</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>

              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} color="white" />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">01020304050</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rightside */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
