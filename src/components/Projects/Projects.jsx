import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Projects.css";
import { sliderLunches, sliderSettings } from "../../utils/common";
import data from "../../utils/slider.json";
const Projects = () => {
  return (
    <section className="p-wrapper">
      <div className="paddings innerWidth p-container">
        <div className="p-head flexColStart">
          <span className="primaryText">Top Projects</span>
        </div>
        <Swiper
          loop={true}
          freeMode={true}
          navigation={true}
          {...sliderLunches}
        >
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart p-card">
                <img src={card.image} alt="home" />

                {/* <span className="secondaryText p-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span> */}
                {/* <span className="primaryText">{card.name}</span> */}
                {/* <span
                  className="secondryText secondaryText"
                  style={{ color: "gray" }}
                >
                  {card.detail}
                </span> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Projects;

// const Sliderbutton = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="flexCenter p-buttons">
//       <button onClick={() => swiper.slidePrev()}> &lt;</button>
//       <button onClick={() => swiper.slideNext()}> &gt;</button>
//     </div>
//   );
// };
