import React from "react";
import "./Lunches.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderLunches, sliderSettings } from "../../utils/common";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Lunches = () => {
  const lunches = [
    { image: "/emaar.jpg", alt: "Roya Developments" },
    { image: "/jiran.jpg", alt: "Mountain View" },
    { image: "/saada.jpg", alt: "Palm Hills" },
    { image: "/newlandhp.jpg", alt: "Sodic" },
    { image: "/almarsasem.jpg", alt: "Cred Developments" },
    { image: "/towers.jpg", alt: "Misr Italia" },
    { image: "/hills.jpg", alt: "Cred Developments" },

  ];

  return (
    <section className="L-wrapper">
      <div className="paddings innerWidth L-container">
        <div className="L-head flexColStart">
          <span className="flexColStart primaryText L-title">Top Launches</span>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          navigation={true}
          {...sliderLunches}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
        >
          {lunches.map((lunche, x) => (
            <SwiperSlide key={x}>
              <div className="flexColStart L-card">
                <img src={lunche.image} alt="logos" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Lunches;
